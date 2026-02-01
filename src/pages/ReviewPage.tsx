import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useQuestion } from '../hooks/useQuestions';
import { useAttempts } from '../hooks/useAttempts';
import { usePlanningStore } from '../stores/planningStore';
import { calculateCoverageScore } from '../lib/utils';
import type { ArgumentCheck, ArgumentStatus } from '../types';

export default function ReviewPage() {
  const { questionId } = useParams<{ questionId: string }>();
  const navigate = useNavigate();
  const { question, loading, error } = useQuestion(questionId || '');
  const { session, clearSession } = usePlanningStore();
  const { saveAttempt } = useAttempts();

  const [isRevealed, setIsRevealed] = useState(false);
  const [argumentsChecked, setArgumentsChecked] = useState<{
    for: ArgumentCheck[];
    against: ArgumentCheck[];
  }>({ for: [], against: [] });
  const [confidenceRating, setConfidenceRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const coverageScore = useMemo(() => {
    const allChecked = [...argumentsChecked.for, ...argumentsChecked.against];
    const included = allChecked.filter((a) => a.status === 'included').length;
    const partial = allChecked.filter((a) => a.status === 'partial').length;
    const total = question?.model_answer
      ? question.model_answer.arguments_for.length +
        question.model_answer.arguments_against.length
      : 0;
    return calculateCoverageScore(included, partial, total);
  }, [argumentsChecked, question]);

  const handleArgumentStatusChange = (
    type: 'for' | 'against',
    title: string,
    status: ArgumentStatus
  ) => {
    setArgumentsChecked((prev) => {
      const updated = { ...prev };
      const existing = updated[type].findIndex((a) => a.title === title);
      if (existing >= 0) {
        updated[type][existing].status = status;
      } else {
        updated[type].push({ title, status });
      }
      return { ...updated };
    });
  };

  const getArgumentStatus = (type: 'for' | 'against', title: string): ArgumentStatus | undefined => {
    const args = type === 'for' ? argumentsChecked.for : argumentsChecked.against;
    return args.find((a) => a.title === title)?.status;
  };

  const handleSubmit = async () => {
    if (!questionId || !session) return;

    setIsSubmitting(true);
    try {
      await saveAttempt({
        questionId,
        planContent: session.planContent,
        timeTaken: session.totalTime - session.timeRemaining,
        coverageScore,
        confidenceRating,
        argumentsChecked
      });

      await clearSession();
      navigate('/progress');
    } catch (err) {
      console.error('Failed to save attempt:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--c-bg)] text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error || !question) {
    return (
      <div className="min-h-screen bg-[var(--c-bg)] text-white flex flex-col items-center justify-center gap-4">
        <p>Question not found</p>
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-[var(--c-accent)] text-[var(--c-text-dark)] font-bold"
        >
          Back
        </button>
      </div>
    );
  }

  const modelAnswer = question.model_answer;

  return (
    <div className="min-h-screen bg-[var(--c-bg)] text-white flex flex-col">
      {/* Header */}
      <header className="p-6 flex items-center justify-between border-b border-white/10">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-bold uppercase">Back</span>
        </button>
        <div className="text-right">
          <div className="text-xs text-white/60 uppercase">Coverage</div>
          <div className="font-bold text-[var(--c-accent)]">{coverageScore}%</div>
        </div>
      </header>

      {/* Question */}
      <div className="p-6 border-b border-white/10">
        <div className="label text-white/60">{question.paper}</div>
        <p className="text-sm font-bold leading-snug mt-2">
          {question.question_text}
        </p>
      </div>

      {/* Reveal Button */}
      {!isRevealed && (
        <div className="p-6">
          <button
            onClick={() => setIsRevealed(true)}
            className="w-full py-4 bg-[var(--c-accent)] text-[var(--c-text-dark)] font-bold uppercase text-sm"
          >
            Reveal Model Answer
          </button>
        </div>
      )}

      {/* Model Answer */}
      {isRevealed && modelAnswer && (
        <div className="flex-1 overflow-y-auto">
          {/* Arguments FOR */}
          <div className="border-b border-white/10">
            <div className="px-8 py-4 bg-white/5 flex justify-between items-center">
              <span className="text-sm font-bold uppercase">Arguments For</span>
              <span className="text-xs text-white/60">{modelAnswer.arguments_for.length}</span>
            </div>
            {modelAnswer.arguments_for.map((arg, index) => (
              <ArgumentItem
                key={arg.title}
                index={index + 1}
                title={arg.title}
                explanation={arg.explanation}
                status={getArgumentStatus('for', arg.title)}
                onStatusChange={(status) => handleArgumentStatusChange('for', arg.title, status)}
              />
            ))}
          </div>

          {/* Arguments AGAINST */}
          <div className="border-b border-white/10">
            <div className="px-8 py-4 bg-white/5 flex justify-between items-center">
              <span className="text-sm font-bold uppercase">Arguments Against</span>
              <span className="text-xs text-white/60">{modelAnswer.arguments_against.length}</span>
            </div>
            {modelAnswer.arguments_against.map((arg, index) => (
              <ArgumentItem
                key={arg.title}
                index={index + 1}
                title={arg.title}
                explanation={arg.explanation}
                status={getArgumentStatus('against', arg.title)}
                onStatusChange={(status) => handleArgumentStatusChange('against', arg.title, status)}
              />
            ))}
          </div>

          {/* Confidence Rating */}
          <div className="p-6 border-b border-white/10">
            <div className="label text-white/60">Your Confidence</div>
            <div className="flex gap-2 mt-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  onClick={() => setConfidenceRating(rating)}
                  className={`w-12 h-12 font-bold text-lg transition-colors ${
                    confidenceRating >= rating
                      ? 'bg-[var(--c-accent)] text-[var(--c-text-dark)]'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {rating}
                </button>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <div className="p-6">
            <button
              onClick={handleSubmit}
              disabled={isSubmitting || confidenceRating === 0}
              className={`w-full py-4 font-bold uppercase text-sm transition-opacity ${
                confidenceRating === 0
                  ? 'bg-white/10 text-white/40 cursor-not-allowed'
                  : 'bg-[var(--c-accent)] text-[var(--c-text-dark)] hover:opacity-90'
              }`}
            >
              {isSubmitting ? 'Saving...' : 'Save & Complete'}
            </button>
          </div>
        </div>
      )}

      {isRevealed && !modelAnswer && (
        <div className="p-6 text-center text-white/60">
          No model answer available for this question.
        </div>
      )}
    </div>
  );
}

function ArgumentItem({
  index,
  title,
  explanation,
  status,
  onStatusChange
}: {
  index: number;
  title: string;
  explanation: string;
  status?: ArgumentStatus;
  onStatusChange: (status: ArgumentStatus) => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-white/10">
      <div
        className="grid cursor-pointer hover:bg-white/5 transition-colors"
        style={{ gridTemplateColumns: '48px 1fr' }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-center text-xs font-bold tabular-nums text-white/40 py-4 px-2">
          {String(index).padStart(2, '0')}
        </div>
        <div className="py-4 px-4">
          <div className="text-sm font-bold uppercase">{title}</div>
          {isExpanded && (
            <div className="text-sm text-white/70 mt-2 leading-relaxed">
              {explanation}
            </div>
          )}
        </div>
      </div>

      {/* Status Buttons */}
      <div className="grid grid-cols-3 border-t border-white/10">
        {(['included', 'partial', 'missed'] as ArgumentStatus[]).map((s) => (
          <button
            key={s}
            onClick={() => onStatusChange(s)}
            className={`py-3 px-2 text-xs uppercase font-bold transition-colors ${
              status === s
                ? s === 'included'
                  ? 'bg-green-600 text-white'
                  : s === 'partial'
                  ? 'bg-yellow-600 text-white'
                  : 'bg-red-600 text-white'
                : 'text-white/60 hover:bg-white/5'
            } ${s !== 'missed' ? 'border-r border-white/10' : ''}`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

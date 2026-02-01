import { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Shuffle } from 'lucide-react';
import { useQuestion, useQuestions } from '../hooks/useQuestions';
import { useTimer } from '../hooks/useTimer';
import { useAttempts } from '../hooks/useAttempts';
import { usePlanningStore } from '../stores/planningStore';
import { useSettingsStore } from '../stores/settingsStore';
import { formatTime, calculateCoverageScore } from '../lib/utils';
import type { ArgumentCheck, ArgumentStatus } from '../types';

export default function PlanningPage() {
  const { questionId } = useParams<{ questionId: string }>();
  const navigate = useNavigate();
  const { question, loading, error } = useQuestion(questionId || '');
  const { questions: allQuestions } = useQuestions();
  const { defaultTime24Mark, defaultTime30Mark } = useSettingsStore();
  const { session, startSession, updatePlanContent, clearSession } = usePlanningStore();
  const { saveAttempt } = useAttempts();

  const [showTimeUpModal, setShowTimeUpModal] = useState(false);
  const [hasTimerStarted, setHasTimerStarted] = useState(false);
  const [writingMode, setWritingMode] = useState<'device' | 'paper'>('device');

  // Review modal state
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [argumentsChecked, setArgumentsChecked] = useState<{
    for: ArgumentCheck[];
    against: ArgumentCheck[];
  }>({ for: [], against: [] });
  const [confidenceRating, setConfidenceRating] = useState(0);
  const [isManualRating, setIsManualRating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalTime = question?.mark_allocation === 24 ? defaultTime24Mark : defaultTime30Mark;

  // Get questions from the same section for shuffle
  const sameTopicQuestions = useMemo(() => {
    if (!question) return [];
    return allQuestions.filter(
      q => q.paper === question.paper && q.topic === question.topic && q.id !== question.id
    );
  }, [allQuestions, question]);

  const {
    timeRemaining,
    isRunning,
    start,
    pause,
    resume,
    reset,
    addTime
  } = useTimer({
    initialTime: totalTime,
    onComplete: () => {
      setShowTimeUpModal(true);
    }
  });

  useEffect(() => {
    if (question && !session) {
      startSession(question, totalTime);
    }
  }, [question, session, startSession, totalTime]);

  const handleStart = () => {
    setHasTimerStarted(true);
    start();
  };

  const handleFinishEarly = () => {
    pause();
    setShowReviewModal(true);
  };

  const handleShuffle = () => {
    if (sameTopicQuestions.length === 0) return;
    const randomIndex = Math.floor(Math.random() * sameTopicQuestions.length);
    const newQuestion = sameTopicQuestions[randomIndex];
    clearSession();
    navigate(`/planning/${newQuestion.id}`);
  };

  // Review modal functions
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

  // Auto-calculate suggested rating based on argument statuses
  const suggestedRating = useMemo(() => {
    const allChecked = [...argumentsChecked.for, ...argumentsChecked.against];
    const total = question?.model_answer
      ? question.model_answer.arguments_for.length +
        question.model_answer.arguments_against.length
      : 0;

    if (allChecked.length === 0 || total === 0) return 0;

    const included = allChecked.filter((a) => a.status === 'included').length;
    const partial = allChecked.filter((a) => a.status === 'partial').length;
    const missed = allChecked.filter((a) => a.status === 'missed').length;

    // Only calculate if all arguments have been marked
    if (allChecked.length < total) return 0;

    // All included = 5
    if (included === total) return 5;

    // Mostly included with 2-3 partials = 4
    if (missed === 0 && partial <= 3 && included > partial) return 4;

    // Mostly partials = 3
    if (missed === 0 && partial >= included) return 3;
    if (partial > included && partial > missed) return 3;

    // Some partials and some missed = 2
    if (partial > 0 && missed > 0 && included <= partial) return 2;

    // Mostly missed = 1
    if (missed >= included && missed >= partial) return 1;

    // Fallback based on ratios
    const score = (included * 2 + partial) / (total * 2);
    if (score >= 0.9) return 5;
    if (score >= 0.7) return 4;
    if (score >= 0.5) return 3;
    if (score >= 0.3) return 2;
    return 1;
  }, [argumentsChecked, question]);

  // Auto-update confidence rating when suggested rating changes (unless manually overridden)
  useEffect(() => {
    if (!isManualRating && suggestedRating > 0) {
      setConfidenceRating(suggestedRating);
    }
  }, [suggestedRating, isManualRating]);

  const handleManualRatingChange = (rating: number) => {
    setIsManualRating(true);
    setConfidenceRating(rating);
  };

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
        timeTaken: session.totalTime - timeRemaining,
        coverageScore,
        confidenceRating,
        argumentsChecked
      });

      await clearSession();
      navigate('/');
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
      <header
        style={{
          padding: '20px 24px',
          borderBottom: '3px solid var(--c-accent)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Back</span>
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {sameTopicQuestions.length > 0 && (
            <button
              onClick={handleShuffle}
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
              title="Get another question from this topic"
            >
              <Shuffle className="w-5 h-5" />
              <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Shuffle</span>
            </button>
          )}
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>
              {question.mark_allocation} Marks
            </span>
            <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--c-accent)', textTransform: 'uppercase' }}>
              Planning
            </div>
          </div>
        </div>
      </header>

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Timer Section */}
        <div
          style={{
            padding: '16px 24px',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, color: 'rgba(255,255,255,0.6)', display: 'block', marginBottom: '4px' }}>
              Time Remaining
            </span>
            <div style={{ fontSize: '32px', fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>
              {formatTime(timeRemaining)}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--c-accent)', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' }}>
            <div
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: isRunning ? 'var(--c-accent)' : 'rgba(255,255,255,0.3)',
                animation: isRunning ? 'blink 1s infinite' : 'none'
              }}
            />
            {isRunning ? 'Live' : hasTimerStarted ? 'Paused' : 'Ready'}
          </div>
        </div>

        {/* Question Section */}
        <div
          style={{
            padding: '32px 24px 48px',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, color: 'rgba(255,255,255,0.6)', display: 'block', marginBottom: '4px' }}>
            {question.paper} / {question.topic}
          </span>
          <h2
            style={{
              fontSize: 'clamp(24px, 5vw, 36px)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginTop: '12px',
              color: 'var(--c-accent)',
              textTransform: 'uppercase',
              maxWidth: '90%'
            }}
          >
            {question.question_text}
          </h2>
          <p style={{ fontSize: '14px', marginTop: '20px', color: 'rgba(255,255,255,0.7)', maxWidth: '400px', lineHeight: 1.5 }}>
            {question.difficulty} difficulty
          </p>
        </div>

        {/* Writing Mode Toggle */}
        <div
          style={{
            padding: '16px 24px',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>
            Writing Mode
          </span>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => setWritingMode('device')}
              style={{
                padding: '8px 16px',
                backgroundColor: writingMode === 'device' ? 'var(--c-accent)' : 'rgba(255,255,255,0.1)',
                color: writingMode === 'device' ? 'var(--c-text-dark)' : 'white',
                border: 'none',
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                cursor: 'pointer'
              }}
            >
              Device
            </button>
            <button
              onClick={() => setWritingMode('paper')}
              style={{
                padding: '8px 16px',
                backgroundColor: writingMode === 'paper' ? 'var(--c-accent)' : 'rgba(255,255,255,0.1)',
                color: writingMode === 'paper' ? 'var(--c-text-dark)' : 'white',
                border: 'none',
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                cursor: 'pointer'
              }}
            >
              Paper
            </button>
          </div>
        </div>

        {/* Timer Controls */}
        {!hasTimerStarted ? (
          <div style={{ padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <button
              onClick={handleStart}
              style={{
                width: '100%',
                padding: '16px 24px',
                backgroundColor: 'var(--c-accent)',
                color: 'var(--c-text-dark)',
                border: 'none',
                fontSize: '20px',
                fontWeight: 700,
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              Start Timer
              <span style={{ fontSize: '14px' }}>&#9654;</span>
            </button>
          </div>
        ) : (
          <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '12px' }}>
            {isRunning ? (
              <button
                onClick={pause}
                style={{
                  flex: 1,
                  padding: '12px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  border: 'none',
                  fontSize: '14px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  cursor: 'pointer'
                }}
              >
                Pause
              </button>
            ) : (
              <button
                onClick={resume}
                style={{
                  flex: 1,
                  padding: '12px',
                  backgroundColor: 'var(--c-accent)',
                  color: 'var(--c-text-dark)',
                  border: 'none',
                  fontSize: '14px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  cursor: 'pointer'
                }}
              >
                Resume
              </button>
            )}
            <button
              onClick={reset}
              style={{
                padding: '12px 20px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: 'white',
                border: 'none',
                fontSize: '14px',
                fontWeight: 700,
                textTransform: 'uppercase',
                cursor: 'pointer'
              }}
            >
              Reset
            </button>
            <button
              onClick={() => addTime(60)}
              style={{
                padding: '12px 20px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: 'white',
                border: 'none',
                fontSize: '14px',
                fontWeight: 700,
                textTransform: 'uppercase',
                cursor: 'pointer'
              }}
            >
              +1m
            </button>
          </div>
        )}

        {/* Planning Area - only show if device mode */}
        {writingMode === 'device' && (
          <div
            style={{
              flex: 1,
              padding: '24px',
              backgroundColor: 'rgba(0,0,0,0.2)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, color: 'rgba(255,255,255,0.6)', display: 'block', marginBottom: '12px' }}>
              Your Plan
            </span>
            <textarea
              value={session?.planContent || ''}
              onChange={(e) => updatePlanContent(e.target.value)}
              placeholder="Type your plan here..."
              style={{
                flex: 1,
                minHeight: '200px',
                width: '100%',
                padding: '20px',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'white',
                fontSize: '16px',
                lineHeight: 1.6,
                resize: 'none',
                outline: 'none',
                fontFamily: 'inherit'
              }}
            />
          </div>
        )}

        {/* Paper mode message */}
        {writingMode === 'paper' && (
          <div
            style={{
              flex: 1,
              padding: '48px 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '16px', opacity: 0.3 }}>&#9998;</div>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', maxWidth: '300px', lineHeight: 1.5 }}>
              Write your plan on paper. Press "Finish" when you're ready to review.
            </p>
          </div>
        )}
      </main>

      {/* Complete Button */}
      {hasTimerStarted && (
        <div style={{ padding: '20px 24px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <button
            onClick={handleFinishEarly}
            style={{
              width: '100%',
              padding: '16px 24px',
              backgroundColor: 'var(--c-accent)',
              color: 'var(--c-text-dark)',
              border: 'none',
              fontSize: '20px',
              fontWeight: 700,
              textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            Finish & Review
            <span style={{ fontSize: '14px' }}>&#9654;</span>
          </button>
        </div>
      )}

      {/* Time Up Modal */}
      {showTimeUpModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.8)'
        }}>
          <div style={{
            backgroundColor: 'var(--c-bg)',
            border: '3px solid var(--c-accent)',
            padding: '32px',
            margin: '24px',
            maxWidth: '400px'
          }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '16px', color: 'var(--c-accent)' }}>
              Time's Up!
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '24px', lineHeight: 1.5 }}>
              Your planning time is complete. Let's compare your plan with the model answer.
            </p>
            <button
              onClick={() => {
                setShowTimeUpModal(false);
                setShowReviewModal(true);
              }}
              style={{
                width: '100%',
                padding: '16px 24px',
                backgroundColor: 'var(--c-accent)',
                color: 'var(--c-text-dark)',
                border: 'none',
                fontSize: '18px',
                fontWeight: 700,
                textTransform: 'uppercase',
                cursor: 'pointer'
              }}
            >
              View Model Answer
            </button>
          </div>
        </div>
      )}

      {/* Review Modal */}
      {showReviewModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 50,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'var(--c-bg)'
        }}>
          {/* Review Header */}
          <header style={{
            padding: '20px 24px',
            borderBottom: '3px solid var(--c-accent)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <button
              onClick={() => setShowReviewModal(false)}
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Back</span>
            </button>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>
                Coverage
              </span>
              <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--c-accent)' }}>
                {coverageScore}%
              </div>
            </div>
          </header>

          <div style={{ flex: 1, overflowY: 'auto' }}>
            {/* Question recap */}
            <div style={{ padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, color: 'rgba(255,255,255,0.6)', display: 'block', marginBottom: '8px' }}>
                {question.paper}
              </span>
              <p style={{ fontSize: '14px', fontWeight: 700, lineHeight: 1.4 }}>
                {question.question_text}
              </p>
            </div>

            {/* Reveal Button */}
            {!isRevealed && (
              <div style={{ padding: '24px' }}>
                <button
                  onClick={() => setIsRevealed(true)}
                  style={{
                    width: '100%',
                    padding: '16px 24px',
                    backgroundColor: 'var(--c-accent)',
                    color: 'var(--c-text-dark)',
                    border: 'none',
                    fontSize: '18px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    cursor: 'pointer'
                  }}
                >
                  Reveal Model Answer
                </button>
              </div>
            )}

            {/* Model Answer */}
            {isRevealed && modelAnswer && (
              <>
                {/* Arguments FOR */}
                <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ padding: '16px 24px', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase' }}>Arguments For</span>
                    <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>{modelAnswer.arguments_for.length}</span>
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
                <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ padding: '16px 24px', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase' }}>Arguments Against</span>
                    <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>{modelAnswer.arguments_against.length}</span>
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
                <div style={{ padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>
                      Your Confidence
                    </span>
                    {suggestedRating > 0 && (
                      <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: isManualRating ? 'rgba(255,255,255,0.4)' : 'var(--c-accent)' }}>
                        {isManualRating ? 'Manual' : 'Auto'}
                      </span>
                    )}
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        onClick={() => handleManualRatingChange(rating)}
                        style={{
                          width: '48px',
                          height: '48px',
                          backgroundColor: confidenceRating >= rating ? 'var(--c-accent)' : 'rgba(255,255,255,0.1)',
                          color: confidenceRating >= rating ? 'var(--c-text-dark)' : 'white',
                          border: 'none',
                          fontSize: '18px',
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}
                      >
                        {rating}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Save Button */}
                <div style={{ padding: '24px' }}>
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting || confidenceRating === 0}
                    style={{
                      width: '100%',
                      padding: '16px 24px',
                      backgroundColor: confidenceRating === 0 ? 'rgba(255,255,255,0.1)' : 'var(--c-accent)',
                      color: confidenceRating === 0 ? 'rgba(255,255,255,0.4)' : 'var(--c-text-dark)',
                      border: 'none',
                      fontSize: '18px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      cursor: confidenceRating === 0 ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {isSubmitting ? 'Saving...' : 'Save & Complete'}
                  </button>
                </div>
              </>
            )}

            {isRevealed && !modelAnswer && (
              <div style={{ padding: '48px 24px', textAlign: 'center', color: 'rgba(255,255,255,0.6)' }}>
                No model answer available for this question.
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
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
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '48px 1fr',
          cursor: 'pointer'
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px',
          fontWeight: 700,
          color: 'rgba(255,255,255,0.4)',
          padding: '16px 8px'
        }}>
          {String(index).padStart(2, '0')}
        </div>
        <div style={{ padding: '16px' }}>
          <div style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase' }}>{title}</div>
          {isExpanded && (
            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginTop: '8px', lineHeight: 1.5 }}>
              {explanation}
            </div>
          )}
        </div>
      </div>

      {/* Status Buttons */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        {(['included', 'partial', 'missed'] as ArgumentStatus[]).map((s, i) => (
          <button
            key={s}
            onClick={() => onStatusChange(s)}
            style={{
              padding: '12px 8px',
              fontSize: '12px',
              textTransform: 'uppercase',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              backgroundColor: status === s
                ? s === 'included' ? '#16a34a' : s === 'partial' ? '#ca8a04' : '#dc2626'
                : 'transparent',
              color: status === s ? 'white' : 'rgba(255,255,255,0.6)'
            }}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

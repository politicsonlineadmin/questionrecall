import { Clock, Star, Target } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { formatTimeVerbose } from '../../lib/utils';
import type { UserAttempt, Question } from '../../types';

interface AttemptHistoryProps {
  attempts: UserAttempt[];
  questions: Question[];
}

export default function AttemptHistory({ attempts, questions }: AttemptHistoryProps) {
  const getQuestion = (questionId: string) =>
    questions.find((q) => q.id === questionId);

  if (attempts.length === 0) {
    return (
      <Card variant="bordered" padding="md">
        <h3 className="font-medium text-text-primary mb-4">Recent Attempts</h3>
        <div className="text-center py-8">
          <p className="text-text-secondary text-sm">
            No attempts yet. Start practicing to see your history!
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card variant="bordered" padding="md">
      <h3 className="font-medium text-text-primary mb-4">Recent Attempts</h3>
      <div className="space-y-3">
        {attempts.slice(0, 10).map((attempt) => {
          const question = getQuestion(attempt.question_id);
          const date = new Date(attempt.completed_at).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit'
          });

          return (
            <div
              key={attempt.id}
              className="p-3 bg-background rounded-lg border border-gray-200"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-text-primary line-clamp-2">
                    {question?.question_text || 'Question unavailable'}
                  </p>
                  {question && (
                    <div className="flex gap-2 mt-2">
                      <Badge variant="default" size="sm">
                        {question.paper}
                      </Badge>
                      <Badge variant="default" size="sm">
                        {question.topic}
                      </Badge>
                    </div>
                  )}
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-xs text-text-secondary">{date}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-3 text-sm text-text-secondary">
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{formatTimeVerbose(attempt.time_taken)}</span>
                </div>

                {attempt.coverage_score !== undefined && (
                  <div className="flex items-center gap-1">
                    <Target className="w-3.5 h-3.5" />
                    <span>{attempt.coverage_score}%</span>
                  </div>
                )}

                {attempt.confidence_rating !== undefined && (
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-warning text-warning" />
                    <span>{attempt.confidence_rating}/5</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

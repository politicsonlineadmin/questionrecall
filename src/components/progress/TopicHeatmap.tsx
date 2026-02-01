import Card from '../ui/Card';
import { cn } from '../../lib/utils';
import { PAPERS, TOPICS } from '../../types';
import type { UserAttempt, Question } from '../../types';

interface TopicHeatmapProps {
  attempts: UserAttempt[];
  questions: Question[];
}

export default function TopicHeatmap({ attempts, questions }: TopicHeatmapProps) {
  const getTopicStats = (paper: string, topic: string) => {
    const topicQuestions = questions.filter(
      (q) => q.paper === paper && q.topic === topic
    );
    const questionIds = new Set(topicQuestions.map((q) => q.id));
    const topicAttempts = attempts.filter((a) => questionIds.has(a.question_id));

    if (topicAttempts.length === 0) return null;

    const avgScore =
      topicAttempts
        .filter((a) => a.coverage_score !== undefined)
        .reduce((sum, a) => sum + (a.coverage_score || 0), 0) /
        topicAttempts.filter((a) => a.coverage_score !== undefined).length || 0;

    return {
      attempts: topicAttempts.length,
      avgScore: Math.round(avgScore)
    };
  };

  const getScoreColor = (score: number) => {
    if (score >= 70) return 'bg-success/20 text-success';
    if (score >= 40) return 'bg-warning/20 text-warning';
    return 'bg-error/20 text-error';
  };

  const hasAnyAttempts = attempts.length > 0;

  if (!hasAnyAttempts) {
    return (
      <Card variant="bordered" padding="md">
        <h3 className="font-medium text-text-primary mb-4">Topic Performance</h3>
        <div className="text-center py-8">
          <p className="text-text-secondary text-sm">
            Complete some questions to see your topic performance!
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card variant="bordered" padding="md">
      <h3 className="font-medium text-text-primary mb-4">Topic Performance</h3>
      <div className="space-y-4">
        {PAPERS.map((paper) => {
          const paperTopics = TOPICS[paper];
          const hasTopicAttempts = paperTopics.some(
            (topic) => getTopicStats(paper, topic) !== null
          );

          if (!hasTopicAttempts) return null;

          return (
            <div key={paper}>
              <h4 className="text-sm font-medium text-text-secondary mb-2">
                {paper}
              </h4>
              <div className="flex flex-wrap gap-2">
                {paperTopics.map((topic) => {
                  const stats = getTopicStats(paper, topic);
                  if (!stats) return null;

                  return (
                    <div
                      key={topic}
                      className={cn(
                        'px-3 py-1.5 rounded-lg text-sm',
                        getScoreColor(stats.avgScore)
                      )}
                    >
                      <span className="font-medium">{topic}</span>
                      <span className="ml-2 opacity-75">
                        {stats.avgScore}%
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

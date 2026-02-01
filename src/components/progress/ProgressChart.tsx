import Card from '../ui/Card';

interface ProgressChartProps {
  data: Record<string, number>;
  title?: string;
}

export default function ProgressChart({ data, title = 'Questions Completed' }: ProgressChartProps) {
  const entries = Object.entries(data).slice(-7);
  const maxValue = Math.max(...entries.map(([, v]) => v), 1);

  if (entries.length === 0) {
    return (
      <Card variant="bordered" padding="md">
        <h3 className="font-medium text-text-primary mb-4">{title}</h3>
        <div className="text-center py-8">
          <p className="text-text-secondary text-sm">
            No data yet. Complete some questions to see your progress!
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card variant="bordered" padding="md">
      <h3 className="font-medium text-text-primary mb-4">{title}</h3>
      <div className="flex items-end justify-between gap-2 h-32">
        {entries.map(([date, count]) => {
          const height = (count / maxValue) * 100;
          const shortDate = new Date(date).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short'
          });

          return (
            <div key={date} className="flex-1 flex flex-col items-center gap-1">
              <span className="text-xs text-text-secondary">{count}</span>
              <div
                className="w-full bg-primary rounded-t-sm transition-all"
                style={{ height: `${Math.max(height, 4)}%` }}
              />
              <span className="text-xs text-text-secondary truncate w-full text-center">
                {shortDate}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

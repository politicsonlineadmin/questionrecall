import { cn, formatTime } from '../../lib/utils';

interface CircularTimerProps {
  timeRemaining: number;
  totalTime: number;
  isRunning: boolean;
  size?: 'sm' | 'md' | 'lg';
  showWarning?: boolean;
}

export default function CircularTimer({
  timeRemaining,
  totalTime,
  isRunning,
  size = 'md',
  showWarning = false
}: CircularTimerProps) {
  const progress = totalTime > 0 ? (timeRemaining / totalTime) * 100 : 0;
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const sizes = {
    sm: { container: 'w-20 h-20', text: 'text-lg', stroke: 4 },
    md: { container: 'w-32 h-32', text: 'text-2xl', stroke: 6 },
    lg: { container: 'w-48 h-48', text: 'text-4xl', stroke: 8 }
  };

  const { container, text, stroke } = sizes[size];

  const getColor = () => {
    if (timeRemaining <= 0) return 'stroke-error';
    if (showWarning || progress <= 20) return 'stroke-warning';
    return 'stroke-primary';
  };

  return (
    <div className={cn('relative', container)}>
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          className="text-gray-200"
        />
        {/* Progress circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className={cn(
            'transition-all duration-1000 ease-linear',
            getColor()
          )}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className={cn(
            'font-bold tabular-nums',
            text,
            timeRemaining <= 60 && 'text-warning',
            timeRemaining <= 0 && 'text-error',
            !isRunning && timeRemaining > 0 && 'animate-pulse-slow'
          )}
        >
          {formatTime(timeRemaining)}
        </span>
        {!isRunning && timeRemaining > 0 && (
          <span className="text-xs text-text-secondary mt-1">Paused</span>
        )}
      </div>
    </div>
  );
}

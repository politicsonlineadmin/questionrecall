import { Play, Pause, RotateCcw, Plus } from 'lucide-react';
import Button from '../ui/Button';

interface TimerControlsProps {
  isRunning: boolean;
  timeRemaining: number;
  onStart: () => void;
  onPause: () => void;
  onResume: () => void;
  onReset: () => void;
  onAddTime?: (seconds: number) => void;
}

export default function TimerControls({
  isRunning,
  timeRemaining,
  onStart,
  onPause,
  onResume,
  onReset,
  onAddTime
}: TimerControlsProps) {
  const hasStarted = timeRemaining > 0;

  return (
    <div className="flex items-center justify-center gap-3">
      {!hasStarted ? (
        <Button onClick={onStart} size="lg" className="gap-2">
          <Play className="w-5 h-5" />
          Start Timer
        </Button>
      ) : (
        <>
          {isRunning ? (
            <Button onClick={onPause} variant="outline" size="lg" className="gap-2">
              <Pause className="w-5 h-5" />
              Pause
            </Button>
          ) : (
            <Button onClick={onResume} size="lg" className="gap-2">
              <Play className="w-5 h-5" />
              Resume
            </Button>
          )}

          <Button onClick={onReset} variant="ghost" size="lg" className="gap-2">
            <RotateCcw className="w-5 h-5" />
            Reset
          </Button>

          {onAddTime && (
            <Button
              onClick={() => onAddTime(60)}
              variant="ghost"
              size="lg"
              className="gap-2"
            >
              <Plus className="w-5 h-5" />
              +1 min
            </Button>
          )}
        </>
      )}
    </div>
  );
}

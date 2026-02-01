import { Monitor, PenTool } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ModeSelectorProps {
  mode: 'digital' | 'paper';
  onModeChange: (mode: 'digital' | 'paper') => void;
}

export default function ModeSelector({ mode, onModeChange }: ModeSelectorProps) {
  return (
    <div className="flex rounded-lg bg-gray-100 p-1">
      <button
        onClick={() => onModeChange('digital')}
        className={cn(
          'flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors',
          mode === 'digital'
            ? 'bg-surface text-primary shadow-sm'
            : 'text-text-secondary hover:text-text-primary'
        )}
      >
        <Monitor className="w-4 h-4" />
        Digital
      </button>
      <button
        onClick={() => onModeChange('paper')}
        className={cn(
          'flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors',
          mode === 'paper'
            ? 'bg-surface text-primary shadow-sm'
            : 'text-text-secondary hover:text-text-primary'
        )}
      >
        <PenTool className="w-4 h-4" />
        Paper
      </button>
    </div>
  );
}

import { useState } from 'react';
import { ChevronDown, ChevronUp, Check, Minus, X } from 'lucide-react';
import Card from '../ui/Card';
import { cn } from '../../lib/utils';
import type { ArgumentStatus } from '../../types';

interface ArgumentCardProps {
  title: string;
  explanation: string;
  variant?: 'for' | 'against';
  status?: ArgumentStatus;
  onStatusChange?: (status: ArgumentStatus) => void;
  showAssessment?: boolean;
}

export default function ArgumentCard({
  title,
  explanation,
  variant = 'for',
  status,
  onStatusChange,
  showAssessment = false
}: ArgumentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const borderColor = variant === 'for' ? 'border-l-success' : 'border-l-error';

  const statusButtons: { value: ArgumentStatus; icon: typeof Check; label: string; color: string }[] = [
    { value: 'included', icon: Check, label: 'Included', color: 'bg-success text-white' },
    { value: 'partial', icon: Minus, label: 'Partial', color: 'bg-warning text-white' },
    { value: 'missed', icon: X, label: 'Missed', color: 'bg-error text-white' }
  ];

  return (
    <Card variant="bordered" padding="none" className={`border-l-4 ${borderColor}`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 text-left flex items-center justify-between gap-3"
      >
        <span className="font-medium text-text-primary">{title}</span>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-text-secondary flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-text-secondary flex-shrink-0" />
        )}
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 border-t border-gray-100 pt-3">
          <p className="text-text-secondary text-sm leading-relaxed">
            {explanation}
          </p>
        </div>
      )}

      {showAssessment && onStatusChange && (
        <div className="px-4 pb-4 pt-2 border-t border-gray-100">
          <p className="text-xs text-text-secondary mb-2">
            Did you include this argument?
          </p>
          <div className="flex gap-2">
            {statusButtons.map(({ value, icon: Icon, label, color }) => (
              <button
                key={value}
                onClick={() => onStatusChange(value)}
                className={cn(
                  'flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors',
                  status === value ? color : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
                )}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}

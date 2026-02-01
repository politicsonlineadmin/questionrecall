import { Plus, X } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';

interface Argument {
  id: string;
  title: string;
}

interface ArgumentSectionProps {
  title: string;
  arguments: Argument[];
  onAdd: () => void;
  onRemove: (id: string) => void;
  onChange: (id: string, value: string) => void;
  variant?: 'for' | 'against';
}

export default function ArgumentSection({
  title,
  arguments: args,
  onAdd,
  onRemove,
  onChange,
  variant = 'for'
}: ArgumentSectionProps) {
  const borderColor = variant === 'for' ? 'border-l-success' : 'border-l-error';

  return (
    <div className={`border-l-4 ${borderColor} pl-4`}>
      <h3 className="font-medium text-text-primary mb-3">{title}</h3>

      <div className="space-y-2">
        {args.map((arg, index) => (
          <div key={arg.id} className="flex items-center gap-2">
            <span className="text-sm text-text-secondary w-6">
              {index + 1}.
            </span>
            <Input
              value={arg.title}
              onChange={(e) => onChange(arg.id, e.target.value)}
              placeholder={`Argument ${index + 1}...`}
              className="flex-1"
            />
            <button
              onClick={() => onRemove(arg.id)}
              className="p-2 text-text-secondary hover:text-error transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <Button
        variant="ghost"
        size="sm"
        onClick={onAdd}
        className="mt-2 text-text-secondary"
      >
        <Plus className="w-4 h-4 mr-1" />
        Add argument
      </Button>
    </div>
  );
}

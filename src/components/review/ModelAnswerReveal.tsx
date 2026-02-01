import { useState } from 'react';
import { Eye, EyeOff, Lightbulb, AlertCircle, Link } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import ArgumentCard from './ArgumentCard';
import type { ModelAnswer, ArgumentCheck, ArgumentStatus } from '../../types';

interface ModelAnswerRevealProps {
  modelAnswer: ModelAnswer;
  showAssessment?: boolean;
  argumentsChecked?: {
    for: ArgumentCheck[];
    against: ArgumentCheck[];
  };
  onArgumentStatusChange?: (
    type: 'for' | 'against',
    title: string,
    status: ArgumentStatus
  ) => void;
}

export default function ModelAnswerReveal({
  modelAnswer,
  showAssessment = false,
  argumentsChecked,
  onArgumentStatusChange
}: ModelAnswerRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  const getArgumentStatus = (type: 'for' | 'against', title: string): ArgumentStatus | undefined => {
    if (!argumentsChecked) return undefined;
    const args = type === 'for' ? argumentsChecked.for : argumentsChecked.against;
    return args.find((a) => a.title === title)?.status;
  };

  if (!isRevealed) {
    return (
      <Card variant="bordered" padding="lg">
        <div className="text-center py-8">
          <Eye className="w-12 h-12 text-text-secondary mx-auto mb-4" />
          <h3 className="text-lg font-medium text-text-primary mb-2">
            Ready to reveal the model answer?
          </h3>
          <p className="text-text-secondary text-sm mb-6">
            Compare your plan with the suggested arguments and examples.
          </p>
          <Button onClick={() => setIsRevealed(true)} className="gap-2">
            <Eye className="w-4 h-4" />
            Reveal Model Answer
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-text-primary">Model Answer</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsRevealed(false)}
          className="gap-2"
        >
          <EyeOff className="w-4 h-4" />
          Hide
        </Button>
      </div>

      {/* Arguments For */}
      <div>
        <h4 className="font-medium text-text-primary mb-3 flex items-center gap-2">
          <span className="w-3 h-3 bg-success rounded-full" />
          Arguments FOR
        </h4>
        <div className="space-y-3">
          {modelAnswer.arguments_for.map((arg) => (
            <ArgumentCard
              key={arg.title}
              title={arg.title}
              explanation={arg.explanation}
              variant="for"
              showAssessment={showAssessment}
              status={getArgumentStatus('for', arg.title)}
              onStatusChange={(status) =>
                onArgumentStatusChange?.('for', arg.title, status)
              }
            />
          ))}
        </div>
      </div>

      {/* Arguments Against */}
      <div>
        <h4 className="font-medium text-text-primary mb-3 flex items-center gap-2">
          <span className="w-3 h-3 bg-error rounded-full" />
          Arguments AGAINST
        </h4>
        <div className="space-y-3">
          {modelAnswer.arguments_against.map((arg) => (
            <ArgumentCard
              key={arg.title}
              title={arg.title}
              explanation={arg.explanation}
              variant="against"
              showAssessment={showAssessment}
              status={getArgumentStatus('against', arg.title)}
              onStatusChange={(status) =>
                onArgumentStatusChange?.('against', arg.title, status)
              }
            />
          ))}
        </div>
      </div>

      {/* Examples */}
      {modelAnswer.examples.length > 0 && (
        <Card variant="bordered" padding="md">
          <h4 className="font-medium text-text-primary mb-3 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-warning" />
            Key Examples
          </h4>
          <div className="space-y-3">
            {modelAnswer.examples.map((example) => (
              <div key={example.title} className="pl-4 border-l-2 border-warning">
                <p className="font-medium text-text-primary text-sm">
                  {example.title}
                </p>
                <p className="text-text-secondary text-sm">{example.context}</p>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Synoptic Links */}
      {modelAnswer.synoptic_links.length > 0 && (
        <Card variant="bordered" padding="md">
          <h4 className="font-medium text-text-primary mb-3 flex items-center gap-2">
            <Link className="w-4 h-4 text-secondary" />
            Synoptic Links
          </h4>
          <ul className="list-disc list-inside space-y-1">
            {modelAnswer.synoptic_links.map((link, index) => (
              <li key={index} className="text-text-secondary text-sm">
                {link}
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* Pitfalls */}
      {modelAnswer.pitfalls.length > 0 && (
        <Card variant="bordered" padding="md">
          <h4 className="font-medium text-text-primary mb-3 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-error" />
            Common Pitfalls
          </h4>
          <ul className="list-disc list-inside space-y-1">
            {modelAnswer.pitfalls.map((pitfall, index) => (
              <li key={index} className="text-text-secondary text-sm">
                {pitfall}
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}

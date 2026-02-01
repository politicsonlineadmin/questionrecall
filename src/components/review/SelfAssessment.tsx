import { useState } from 'react';
import { Star, MessageSquare } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { cn } from '../../lib/utils';

interface SelfAssessmentProps {
  coverageScore: number;
  onConfidenceRating: (rating: number) => void;
  onReflectionNotes: (notes: string) => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
}

export default function SelfAssessment({
  coverageScore,
  onConfidenceRating,
  onReflectionNotes,
  onSubmit,
  isSubmitting = false
}: SelfAssessmentProps) {
  const [confidence, setConfidence] = useState(0);
  const [notes, setNotes] = useState('');

  const handleConfidenceClick = (rating: number) => {
    setConfidence(rating);
    onConfidenceRating(rating);
  };

  const handleNotesChange = (value: string) => {
    setNotes(value);
    onReflectionNotes(value);
  };

  const getScoreColor = () => {
    if (coverageScore >= 70) return 'text-success';
    if (coverageScore >= 40) return 'text-warning';
    return 'text-error';
  };

  const getScoreLabel = () => {
    if (coverageScore >= 80) return 'Excellent!';
    if (coverageScore >= 60) return 'Good job!';
    if (coverageScore >= 40) return 'Getting there';
    return 'Keep practicing';
  };

  return (
    <div className="space-y-4">
      {/* Coverage Score */}
      <Card variant="elevated" padding="md">
        <div className="text-center">
          <p className="text-sm text-text-secondary mb-2">Coverage Score</p>
          <p className={cn('text-4xl font-bold', getScoreColor())}>
            {coverageScore}%
          </p>
          <p className="text-sm text-text-secondary mt-1">{getScoreLabel()}</p>
        </div>
      </Card>

      {/* Confidence Rating */}
      <Card variant="bordered" padding="md">
        <p className="text-sm font-medium text-text-primary mb-3">
          How confident do you feel about this topic?
        </p>
        <div className="flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              onClick={() => handleConfidenceClick(rating)}
              className={cn(
                'p-2 rounded-lg transition-colors',
                confidence >= rating
                  ? 'text-warning'
                  : 'text-gray-300 hover:text-gray-400'
              )}
            >
              <Star
                className={cn(
                  'w-8 h-8',
                  confidence >= rating && 'fill-warning'
                )}
              />
            </button>
          ))}
        </div>
        <p className="text-center text-sm text-text-secondary mt-2">
          {confidence === 0 && 'Rate your confidence'}
          {confidence === 1 && 'Not confident'}
          {confidence === 2 && 'Slightly confident'}
          {confidence === 3 && 'Moderately confident'}
          {confidence === 4 && 'Confident'}
          {confidence === 5 && 'Very confident'}
        </p>
      </Card>

      {/* Reflection Notes */}
      <Card variant="bordered" padding="md">
        <div className="flex items-center gap-2 mb-3">
          <MessageSquare className="w-4 h-4 text-text-secondary" />
          <p className="text-sm font-medium text-text-primary">
            Reflection Notes (optional)
          </p>
        </div>
        <textarea
          value={notes}
          onChange={(e) => handleNotesChange(e.target.value)}
          placeholder="What did you learn? What will you remember for next time?"
          className="w-full min-h-[100px] p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </Card>

      {/* Submit Button */}
      <Button
        onClick={onSubmit}
        loading={isSubmitting}
        disabled={confidence === 0}
        className="w-full"
        size="lg"
      >
        Save & Complete
      </Button>
    </div>
  );
}

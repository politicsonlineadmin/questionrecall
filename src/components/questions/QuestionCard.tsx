import { useNavigate } from 'react-router-dom';
import { Clock, Heart, BookOpen } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { getDifficultyColor, getPaperColor } from '../../lib/utils';
import type { Question } from '../../types';

interface QuestionCardProps {
  question: Question;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

export default function QuestionCard({
  question,
  isFavorite = false,
  onToggleFavorite
}: QuestionCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/planning/${question.id}`);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite?.();
  };

  return (
    <Card
      variant="bordered"
      className="cursor-pointer hover:shadow-md transition-shadow"
      onClick={handleClick}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap gap-2 mb-2">
            <Badge className={getPaperColor(question.paper)}>
              {question.paper}
            </Badge>
            <Badge className={getDifficultyColor(question.difficulty)}>
              {question.difficulty}
            </Badge>
            <Badge variant="default">
              {question.mark_allocation} marks
            </Badge>
          </div>

          <p className="text-text-primary font-medium leading-snug mb-2">
            {question.question_text}
          </p>

          <div className="flex items-center gap-4 text-sm text-text-secondary">
            <div className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              <span>{question.topic}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{question.recommended_time} min</span>
            </div>
          </div>

          {question.source_year && (
            <div className="mt-2 text-xs text-text-secondary">
              {question.source_type} - {question.source_year}
            </div>
          )}
        </div>

        {onToggleFavorite && (
          <button
            onClick={handleFavoriteClick}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorite ? 'fill-error text-error' : 'text-text-secondary'
              }`}
            />
          </button>
        )}
      </div>
    </Card>
  );
}

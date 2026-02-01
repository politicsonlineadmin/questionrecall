import { useNavigate } from 'react-router-dom';
import { Shuffle } from 'lucide-react';
import Button from '../ui/Button';
import { useRandomQuestion } from '../../hooks/useQuestions';

export default function RandomQuestionButton() {
  const navigate = useNavigate();
  const { getRandomQuestion } = useRandomQuestion();

  const handleClick = () => {
    const question = getRandomQuestion();
    if (question) {
      navigate(`/planning/${question.id}`);
    }
  };

  return (
    <Button
      variant="secondary"
      onClick={handleClick}
      className="gap-2"
    >
      <Shuffle className="w-4 h-4" />
      Random Question
    </Button>
  );
}

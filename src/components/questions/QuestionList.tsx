import { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import Spinner from '../ui/Spinner';
import { addFavorite, removeFavorite, getFavorites } from '../../lib/db';
import type { Question } from '../../types';

interface QuestionListProps {
  questions: Question[];
  loading: boolean;
  error: string | null;
  emptyMessage?: string;
}

export default function QuestionList({
  questions,
  loading,
  error,
  emptyMessage = 'No questions found'
}: QuestionListProps) {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  useEffect(() => {
    const loadFavorites = async () => {
      const favs = await getFavorites();
      setFavorites(new Set(favs));
    };
    loadFavorites();
  }, []);

  const handleToggleFavorite = async (questionId: string) => {
    const newFavorites = new Set(favorites);
    if (favorites.has(questionId)) {
      await removeFavorite(questionId);
      newFavorites.delete(questionId);
    } else {
      await addFavorite(questionId);
      newFavorites.add(questionId);
    }
    setFavorites(newFavorites);
  };

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <Spinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-error">{error}</p>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-text-secondary">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {questions.map((question) => (
        <QuestionCard
          key={question.id}
          question={question}
          isFavorite={favorites.has(question.id)}
          onToggleFavorite={() => handleToggleFavorite(question.id)}
        />
      ))}
    </div>
  );
}

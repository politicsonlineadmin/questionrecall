import { useState, useEffect, useMemo } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { cacheQuestions, getCachedQuestions, cacheModelAnswers, getCachedModelAnswer } from '../lib/db';
import { useFilterStore } from '../stores/filterStore';
import { useOffline } from './useOffline';
import type { Question, QuestionWithAnswer } from '../types';
import { seedQuestions, seedModelAnswers } from '../data/seed-questions';

interface UseQuestionsReturn {
  questions: Question[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useQuestions(): UseQuestionsReturn {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isOffline = useOffline();
  const { paper, topic, difficulty, sourceType, markAllocation } = useFilterStore();

  const fetchQuestions = async () => {
    setLoading(true);
    setError(null);

    try {
      if (isOffline || !isSupabaseConfigured()) {
        const cached = await getCachedQuestions();
        if (cached.length > 0) {
          setQuestions(cached);
        } else {
          setQuestions(seedQuestions);
          await cacheQuestions(seedQuestions);
        }
      } else {
        const { data, error: fetchError } = await supabase
          .from('questions')
          .select('*')
          .order('created_at', { ascending: false });

        if (fetchError) throw fetchError;

        if (data && data.length > 0) {
          setQuestions(data);
          await cacheQuestions(data);
        } else {
          setQuestions(seedQuestions);
          await cacheQuestions(seedQuestions);
        }
      }
    } catch (err) {
      const cached = await getCachedQuestions();
      if (cached.length > 0) {
        setQuestions(cached);
      } else {
        setQuestions(seedQuestions);
        await cacheQuestions(seedQuestions);
      }
      setError(err instanceof Error ? err.message : 'Failed to fetch questions');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [isOffline]);

  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      if (paper !== 'all' && q.paper !== paper) return false;
      if (topic !== 'all' && q.topic !== topic) return false;
      if (difficulty !== 'all' && q.difficulty !== difficulty) return false;
      if (sourceType !== 'all' && q.source_type !== sourceType) return false;
      if (markAllocation !== 'all' && q.mark_allocation !== markAllocation) return false;
      return true;
    });
  }, [questions, paper, topic, difficulty, sourceType, markAllocation]);

  return {
    questions: filteredQuestions,
    loading,
    error,
    refetch: fetchQuestions
  };
}

export function useQuestion(id: string): {
  question: QuestionWithAnswer | null;
  loading: boolean;
  error: string | null;
} {
  const [question, setQuestion] = useState<QuestionWithAnswer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isOffline = useOffline();

  useEffect(() => {
    const fetchQuestion = async () => {
      setLoading(true);
      setError(null);

      try {
        if (isOffline || !isSupabaseConfigured()) {
          const cached = await getCachedQuestions();
          const q = cached.find((q) => q.id === id) || seedQuestions.find((q) => q.id === id);
          if (q) {
            const modelAnswer = await getCachedModelAnswer(id) || seedModelAnswers.find((m) => m.question_id === id);
            setQuestion({ ...q, model_answer: modelAnswer });
          } else {
            setError('Question not found');
          }
        } else {
          const { data: questionData, error: qError } = await supabase
            .from('questions')
            .select('*')
            .eq('id', id)
            .single();

          if (qError) throw qError;

          const { data: modelData } = await supabase
            .from('model_answers')
            .select('*')
            .eq('question_id', id)
            .single();

          const q = questionData || seedQuestions.find((q) => q.id === id);
          const modelAnswer = modelData || seedModelAnswers.find((m) => m.question_id === id);

          if (q) {
            setQuestion({ ...q, model_answer: modelAnswer || undefined });
            if (modelAnswer) {
              await cacheModelAnswers([modelAnswer]);
            }
          } else {
            setError('Question not found');
          }
        }
      } catch (err) {
        const q = seedQuestions.find((q) => q.id === id);
        const modelAnswer = seedModelAnswers.find((m) => m.question_id === id);
        if (q) {
          setQuestion({ ...q, model_answer: modelAnswer });
        } else {
          setError(err instanceof Error ? err.message : 'Failed to fetch question');
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchQuestion();
    }
  }, [id, isOffline]);

  return { question, loading, error };
}

export function useRandomQuestion(): {
  getRandomQuestion: () => Question | null;
} {
  const { questions } = useQuestions();

  const getRandomQuestion = () => {
    if (questions.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  };

  return { getRandomQuestion };
}

import { useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { saveOfflineAttempt, getUnsyncedAttempts, markAttemptSynced } from '../lib/db';
import { useOffline } from './useOffline';
import type { UserAttempt, ArgumentCheck } from '../types';
import { generateId } from '../lib/utils';

interface AttemptData {
  questionId: string;
  planContent: string;
  timeTaken: number;
  coverageScore?: number;
  confidenceRating?: number;
  argumentsChecked?: {
    for: ArgumentCheck[];
    against: ArgumentCheck[];
  };
  reflectionNotes?: string;
}

interface UseAttemptsReturn {
  attempts: UserAttempt[];
  loading: boolean;
  error: string | null;
  saveAttempt: (data: AttemptData) => Promise<void>;
  syncOfflineAttempts: () => Promise<void>;
}

export function useAttempts(): UseAttemptsReturn {
  const [attempts, setAttempts] = useState<UserAttempt[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isOffline = useOffline();

  useEffect(() => {
    fetchAttempts();
  }, []);

  const fetchAttempts = async () => {
    setLoading(true);
    try {
      if (!isSupabaseConfigured()) {
        const offlineAttempts = await getUnsyncedAttempts();
        setAttempts(offlineAttempts);
      } else {
        const { data, error: fetchError } = await supabase
          .from('user_attempts')
          .select('*')
          .order('completed_at', { ascending: false });

        if (fetchError) throw fetchError;
        setAttempts(data || []);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch attempts');
    } finally {
      setLoading(false);
    }
  };

  const saveAttempt = async (data: AttemptData) => {
    const attempt: UserAttempt = {
      id: generateId(),
      user_id: 'local-user',
      question_id: data.questionId,
      plan_content: data.planContent,
      time_taken: data.timeTaken,
      coverage_score: data.coverageScore,
      confidence_rating: data.confidenceRating,
      arguments_checked: data.argumentsChecked,
      reflection_notes: data.reflectionNotes,
      completed_at: new Date().toISOString()
    };

    if (isOffline || !isSupabaseConfigured()) {
      await saveOfflineAttempt(attempt);
    } else {
      const { error: saveError } = await supabase
        .from('user_attempts')
        .insert(attempt);

      if (saveError) {
        await saveOfflineAttempt(attempt);
      }
    }

    setAttempts((prev) => [attempt, ...prev]);
  };

  const syncOfflineAttempts = async () => {
    if (isOffline || !isSupabaseConfigured()) return;

    const unsynced = await getUnsyncedAttempts();
    for (const attempt of unsynced) {
      const { error: syncError } = await supabase
        .from('user_attempts')
        .insert(attempt);

      if (!syncError) {
        await markAttemptSynced(attempt.id);
      }
    }
  };

  return {
    attempts,
    loading,
    error,
    saveAttempt,
    syncOfflineAttempts
  };
}

export function useAttemptStats() {
  const { attempts } = useAttempts();

  const totalAttempts = attempts.length;

  const averageCoverage = attempts.length > 0
    ? Math.round(
        attempts
          .filter((a) => a.coverage_score !== undefined)
          .reduce((sum, a) => sum + (a.coverage_score || 0), 0) /
          attempts.filter((a) => a.coverage_score !== undefined).length
      )
    : 0;

  const averageConfidence = attempts.length > 0
    ? (
        attempts
          .filter((a) => a.confidence_rating !== undefined)
          .reduce((sum, a) => sum + (a.confidence_rating || 0), 0) /
          attempts.filter((a) => a.confidence_rating !== undefined).length
      ).toFixed(1)
    : '0';

  const attemptsByTopic = attempts.reduce((acc, attempt) => {
    acc[attempt.question_id] = (acc[attempt.question_id] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const recentAttempts = attempts.slice(0, 10);

  const attemptsByDay = attempts.reduce((acc, attempt) => {
    const date = new Date(attempt.completed_at).toLocaleDateString();
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return {
    totalAttempts,
    averageCoverage,
    averageConfidence,
    attemptsByTopic,
    recentAttempts,
    attemptsByDay
  };
}

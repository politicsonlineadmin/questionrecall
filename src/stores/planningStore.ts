import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Question, PlanningSession } from '../types';
import { STORAGE_KEYS } from '../lib/constants';
import { saveDraft, getDraft, deleteDraft } from '../lib/db';

interface PlanningStore {
  session: PlanningSession | null;
  isReviewMode: boolean;

  startSession: (question: Question, totalTime: number) => Promise<void>;
  updatePlanContent: (content: string) => void;
  setTimerRunning: (running: boolean) => void;
  setTimeRemaining: (time: number) => void;
  endSession: () => void;
  enterReviewMode: () => void;
  exitReviewMode: () => void;
  clearSession: () => Promise<void>;
}

export const usePlanningStore = create<PlanningStore>()(
  persist(
    (set, get) => ({
      session: null,
      isReviewMode: false,

      startSession: async (question, totalTime) => {
        const existingDraft = await getDraft(question.id);
        set({
          session: {
            questionId: question.id,
            question,
            planContent: existingDraft || '',
            startTime: Date.now(),
            isTimerRunning: true,
            timeRemaining: totalTime,
            totalTime
          },
          isReviewMode: false
        });
      },

      updatePlanContent: (content) => {
        const { session } = get();
        if (session) {
          set({ session: { ...session, planContent: content } });
          saveDraft(session.questionId, content);
        }
      },

      setTimerRunning: (running) => {
        const { session } = get();
        if (session) {
          set({ session: { ...session, isTimerRunning: running } });
        }
      },

      setTimeRemaining: (time) => {
        const { session } = get();
        if (session) {
          set({ session: { ...session, timeRemaining: time } });
        }
      },

      endSession: () => {
        const { session } = get();
        if (session) {
          set({
            session: { ...session, isTimerRunning: false, timeRemaining: 0 }
          });
        }
      },

      enterReviewMode: () => {
        set({ isReviewMode: true });
      },

      exitReviewMode: () => {
        set({ isReviewMode: false });
      },

      clearSession: async () => {
        const { session } = get();
        if (session) {
          await deleteDraft(session.questionId);
        }
        set({ session: null, isReviewMode: false });
      }
    }),
    {
      name: STORAGE_KEYS.PLANNING_SESSION,
      partialize: (state) => ({ session: state.session })
    }
  )
);

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { FilterState, Paper, Difficulty, SourceType, MarkAllocation } from '../types';
import { STORAGE_KEYS } from '../lib/constants';

interface FilterStore extends FilterState {
  setPaper: (paper: Paper | 'all') => void;
  setTopic: (topic: string | 'all') => void;
  setDifficulty: (difficulty: Difficulty | 'all') => void;
  setSourceType: (sourceType: SourceType | 'all') => void;
  setMarkAllocation: (markAllocation: MarkAllocation | 'all') => void;
  resetFilters: () => void;
}

const defaultFilters: FilterState = {
  paper: 'all',
  topic: 'all',
  difficulty: 'all',
  sourceType: 'all',
  markAllocation: 'all'
};

export const useFilterStore = create<FilterStore>()(
  persist(
    (set) => ({
      ...defaultFilters,
      setPaper: (paper) => set({ paper, topic: 'all' }),
      setTopic: (topic) => set({ topic }),
      setDifficulty: (difficulty) => set({ difficulty }),
      setSourceType: (sourceType) => set({ sourceType }),
      setMarkAllocation: (markAllocation) => set({ markAllocation }),
      resetFilters: () => set(defaultFilters)
    }),
    {
      name: STORAGE_KEYS.FILTERS
    }
  )
);

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AppSettings } from '../types';
import { DEFAULT_TIMER_24_MARK, DEFAULT_TIMER_30_MARK, WARNING_TIME, STORAGE_KEYS } from '../lib/constants';

interface SettingsStore extends AppSettings {
  updateSettings: (settings: Partial<AppSettings>) => void;
  resetSettings: () => void;
}

const defaultSettings: AppSettings = {
  defaultTime24Mark: DEFAULT_TIMER_24_MARK,
  defaultTime30Mark: DEFAULT_TIMER_30_MARK,
  audioEnabled: true,
  hapticEnabled: true,
  warningTime: WARNING_TIME,
  theme: 'light'
};

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      ...defaultSettings,
      updateSettings: (newSettings) =>
        set((state) => ({ ...state, ...newSettings })),
      resetSettings: () => set(defaultSettings)
    }),
    {
      name: STORAGE_KEYS.SETTINGS
    }
  )
);

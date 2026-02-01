export const DEFAULT_TIMER_24_MARK = 5 * 60; // 5 minutes in seconds
export const DEFAULT_TIMER_30_MARK = 7 * 60; // 7 minutes in seconds
export const WARNING_TIME = 60; // 1 minute warning

export const STORAGE_KEYS = {
  SETTINGS: 'essay-planner-settings',
  PLANNING_SESSION: 'essay-planner-session',
  FILTERS: 'essay-planner-filters'
} as const;

export const ROUTES = {
  HOME: '/',
  PLANNING: '/planning/:questionId',
  REVIEW: '/review/:questionId',
  PROGRESS: '/progress',
  FAVORITES: '/favorites',
  SETTINGS: '/settings'
} as const;

export const NAV_ITEMS = [
  { path: '/', label: 'Practice', icon: 'BookOpen' },
  { path: '/progress', label: 'Progress', icon: 'BarChart2' },
  { path: '/favorites', label: 'Saved', icon: 'Heart' },
  { path: '/settings', label: 'Settings', icon: 'Settings' }
] as const;

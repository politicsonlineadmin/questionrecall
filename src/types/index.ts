export type Paper = 'UK Politics' | 'UK Government' | 'US Politics' | 'Global Politics' | 'Political Ideas';
export type MarkAllocation = 24 | 30;
export type Difficulty = 'Foundation' | 'Intermediate' | 'Advanced';
export type SourceType = 'Past Paper' | 'Predicted';
export type ArgumentStatus = 'included' | 'partial' | 'missed';

export interface Question {
  id: string;
  question_text: string;
  paper: Paper;
  topic: string;
  sub_topic?: string;
  mark_allocation: MarkAllocation;
  recommended_time: number;
  difficulty: Difficulty;
  source_type: SourceType;
  source_year?: number;
  created_at: string;
}

export interface Argument {
  title: string;
  explanation: string;
}

export interface Example {
  title: string;
  context: string;
}

export interface ModelAnswer {
  id: string;
  question_id: string;
  arguments_for: Argument[];
  arguments_against: Argument[];
  synoptic_links: string[];
  examples: Example[];
  pitfalls: string[];
}

export interface ArgumentCheck {
  title: string;
  status: ArgumentStatus;
}

export interface UserAttempt {
  id: string;
  user_id: string;
  question_id: string;
  plan_content?: string;
  time_taken: number;
  coverage_score?: number;
  confidence_rating?: number;
  arguments_checked?: {
    for: ArgumentCheck[];
    against: ArgumentCheck[];
  };
  reflection_notes?: string;
  completed_at: string;
}

export interface UserFavorite {
  user_id: string;
  question_id: string;
  created_at: string;
}

export interface QuestionWithAnswer extends Question {
  model_answer?: ModelAnswer;
}

export interface FilterState {
  paper: Paper | 'all';
  topic: string | 'all';
  difficulty: Difficulty | 'all';
  sourceType: SourceType | 'all';
  markAllocation: MarkAllocation | 'all';
}

export interface PlanningSession {
  questionId: string;
  question: Question;
  planContent: string;
  startTime: number;
  isTimerRunning: boolean;
  timeRemaining: number;
  totalTime: number;
}

export interface TimerSettings {
  defaultTime24Mark: number;
  defaultTime30Mark: number;
  audioEnabled: boolean;
  hapticEnabled: boolean;
  warningTime: number;
}

export interface AppSettings extends TimerSettings {
  theme: 'light' | 'dark' | 'system';
}

export const PAPERS: Paper[] = ['UK Politics', 'UK Government', 'US Politics', 'Global Politics', 'Political Ideas'];

export const TOPICS: Record<Paper, string[]> = {
  'UK Politics': [
    'Democracy and Participation',
    'Political Parties',
    'Electoral Systems',
    'Voting Behaviour',
    'The Media'
  ],
  'UK Government': [
    'The Constitution',
    'Parliament',
    'Prime Minister and Executive',
    'Relations Between Branches',
    'The Supreme Court'
  ],
  'US Politics': [
    'The Constitution and Federalism',
    'Congress',
    'The Presidency',
    'The Supreme Court and Civil Rights',
    'Democracy and Participation'
  ],
  'Global Politics': [
    'Sovereignty and Globalisation',
    'Global Governance',
    'Human Rights',
    'Power and World Order',
    'Conflict and Intervention',
    'Regionalism and the EU',
    'Comparative Theories'
  ],
  'Political Ideas': [
    'Liberalism',
    'Conservatism',
    'Socialism',
    'Nationalism',
    'Feminism',
    'Ecologism',
    'Multiculturalism',
    'Anarchism'
  ]
};

export const DIFFICULTIES: Difficulty[] = ['Foundation', 'Intermediate', 'Advanced'];
export const SOURCE_TYPES: SourceType[] = ['Past Paper', 'Predicted'];
export const MARK_ALLOCATIONS: MarkAllocation[] = [24, 30];

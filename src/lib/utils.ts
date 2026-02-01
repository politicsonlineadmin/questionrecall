import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export function formatTimeVerbose(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  if (mins === 0) {
    return `${secs} seconds`;
  }
  if (secs === 0) {
    return `${mins} minute${mins !== 1 ? 's' : ''}`;
  }
  return `${mins}m ${secs}s`;
}

export function calculateCoverageScore(
  includedCount: number,
  partialCount: number,
  totalCount: number
): number {
  if (totalCount === 0) return 0;
  const score = ((includedCount * 1 + partialCount * 0.5) / totalCount) * 100;
  return Math.round(score);
}

export function getRecommendedTime(markAllocation: number): number {
  return markAllocation === 24 ? 5 : 7;
}

export function getDifficultyColor(difficulty: string): string {
  switch (difficulty) {
    case 'Foundation':
      return 'bg-success/10 text-success';
    case 'Intermediate':
      return 'bg-warning/10 text-warning';
    case 'Advanced':
      return 'bg-error/10 text-error';
    default:
      return 'bg-text-secondary/10 text-text-secondary';
  }
}

export function getPaperColor(paper: string): string {
  switch (paper) {
    case 'UK Politics':
      return 'bg-primary/10 text-primary';
    case 'UK Government':
      return 'bg-secondary/10 text-secondary';
    case 'Global Politics':
      return 'bg-purple-100 text-purple-700';
    case 'Political Ideas':
      return 'bg-amber-100 text-amber-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
}

export function generateId(): string {
  return crypto.randomUUID();
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + '...';
}

export function debounce<T extends (...args: never[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, wait);
  };
}

export function playAlertSound(): void {
  const audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.frequency.value = 800;
  oscillator.type = 'sine';

  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.5);
}

export function triggerHaptic(): void {
  if ('vibrate' in navigator) {
    navigator.vibrate(200);
  }
}

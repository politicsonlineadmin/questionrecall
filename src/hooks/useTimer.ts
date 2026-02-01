import { useState, useEffect, useCallback, useRef } from 'react';
import { useSettingsStore } from '../stores/settingsStore';
import { playAlertSound, triggerHaptic } from '../lib/utils';

interface UseTimerOptions {
  initialTime: number;
  onComplete?: () => void;
  onWarning?: () => void;
}

interface UseTimerReturn {
  timeRemaining: number;
  isRunning: boolean;
  progress: number;
  start: () => void;
  pause: () => void;
  resume: () => void;
  reset: () => void;
  addTime: (seconds: number) => void;
}

export function useTimer({
  initialTime,
  onComplete,
  onWarning
}: UseTimerOptions): UseTimerReturn {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const warningFiredRef = useRef(false);
  const { audioEnabled, hapticEnabled, warningTime } = useSettingsStore();

  const progress = (timeRemaining / initialTime) * 100;

  useEffect(() => {
    let intervalId: number | undefined;

    if (isRunning && timeRemaining > 0) {
      intervalId = window.setInterval(() => {
        setTimeRemaining((prev) => {
          const newTime = prev - 1;

          if (newTime === warningTime && !warningFiredRef.current) {
            warningFiredRef.current = true;
            if (audioEnabled) playAlertSound();
            if (hapticEnabled) triggerHaptic();
            onWarning?.();
          }

          if (newTime <= 0) {
            setIsRunning(false);
            if (audioEnabled) {
              playAlertSound();
              setTimeout(playAlertSound, 300);
            }
            if (hapticEnabled) {
              triggerHaptic();
              setTimeout(triggerHaptic, 300);
            }
            onComplete?.();
            return 0;
          }

          return newTime;
        });
      }, 1000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isRunning, timeRemaining, audioEnabled, hapticEnabled, warningTime, onComplete, onWarning]);

  const start = useCallback(() => {
    warningFiredRef.current = false;
    setIsRunning(true);
  }, []);

  const pause = useCallback(() => {
    setIsRunning(false);
  }, []);

  const resume = useCallback(() => {
    setIsRunning(true);
  }, []);

  const reset = useCallback(() => {
    setTimeRemaining(initialTime);
    setIsRunning(false);
    warningFiredRef.current = false;
  }, [initialTime]);

  const addTime = useCallback((seconds: number) => {
    setTimeRemaining((prev) => prev + seconds);
  }, []);

  return {
    timeRemaining,
    isRunning,
    progress,
    start,
    pause,
    resume,
    reset,
    addTime
  };
}

import { useEffect, useRef, useState } from 'react';

const DEFAULT_TIME_LIMIT_SECONDS = 20 * 60;

const useCountdownTimer = ({ timeLimit = DEFAULT_TIME_LIMIT_SECONDS, enabled, onExpire }) => {
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const timerRef = useRef(null);
  const onExpireRef = useRef(onExpire);
  onExpireRef.current = onExpire;

  useEffect(() => {
    if (!enabled || timerRef.current) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          timerRef.current = null;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [enabled]);

  useEffect(() => {
    if (timeLeft === 0) onExpireRef.current?.();
  }, [timeLeft]);

  return timeLeft;
};

export default useCountdownTimer;

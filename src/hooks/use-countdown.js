import { useEffect, useState } from 'react';

const addLeadingZero = (number) => number.toString().padStart(2, '0');

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();
  const [mounted, setMounted] = useState(false);
  const [countDown, setCountDown] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const updateCountdown = () => {
      setCountDown(countDownDate - new Date().getTime());
    };

    // Set initial countdown immediately
    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [countDownDate, mounted]);

  // Return zeros if not mounted yet to match server rendering
  if (!mounted) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
      expired: false,
    };
  }

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // Calculate total days left
  const days = Math.max(0, Math.floor(countDown / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutes = Math.max(0, Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = Math.max(0, Math.floor((countDown % (1000 * 60)) / 1000));

  const expired = countDown <= 0;

  return {
    days: addLeadingZero(days),
    hours: addLeadingZero(hours),
    minutes: addLeadingZero(minutes),
    seconds: addLeadingZero(seconds),
    expired,
  };
};

export default useCountdown;

import { useEffect, useState } from 'react';

const addLeadingZero = (number) => number.toString().padStart(2, '0');

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  const weeks = Math.floor(countDown / (1000 * 60 * 60 * 24 * 7)) || 0;
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24)) || 0;
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) || 0;
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60)) || 0;
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000) || 0;

  const expired = weeks + days + hours + minutes + seconds <= 0;

  return {
    weeks: addLeadingZero(weeks),
    days: addLeadingZero(days),
    hours: addLeadingZero(hours),
    minutes: addLeadingZero(minutes),
    seconds: addLeadingZero(seconds),
    expired,
  };
};

export default useCountdown;

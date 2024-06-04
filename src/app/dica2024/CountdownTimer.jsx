import React from 'react';
import useCountdown from '@/hooks/use-countdown';

const CountdownTimer = () => {
  const { weeks, days, hours, minutes, seconds } = useCountdown('6/30/2024');

  return (
    <div className="mt-10 flex w-max items-center space-x-4 divide-x divide-white/10 rounded-3xl border border-white/10 bg-white/10 px-4">
      <div className="flex flex-col px-4 py-8 text-center">
        <span className="text-[5rem] font-medium leading-none tracking-tight">{weeks}</span>
        <span>Weeks</span>
      </div>
      <div className="flex flex-col px-4 py-8 text-center">
        <span className="text-[5rem] font-medium leading-none tracking-tight">{days}</span>
        <span>days</span>
      </div>
      <div className="flex flex-col px-4 py-8 text-center">
        <span className="text-[5rem] font-medium leading-none tracking-tight">{hours}</span>
        <span>hours</span>
      </div>
      <div className="flex flex-col px-4 py-8 text-center">
        <span className="text-[5rem] font-medium leading-none tracking-tight">{minutes}</span>
        <span>minutes</span>
      </div>
      <div className="flex flex-col px-4 py-8 text-center">
        <span className="text-[5rem] font-medium leading-none tracking-tight">{seconds}</span>
        <span>seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;

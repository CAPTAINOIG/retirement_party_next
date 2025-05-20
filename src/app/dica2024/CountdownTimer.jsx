import React from 'react';
import useCountdown from '@/hooks/use-countdown';

const CountdownTimer = () => {
  const { days, hours, minutes, seconds } = useCountdown('6/10/2025');

  return (
    <div className="mt-10 flex w-max items-center divide-x divide-white/10 rounded-3xl border border-white/10 bg-white/10 px-2 md:px-4">
      <div className="flex flex-col px-3 py-6 text-center md:px-6 md:py-8">
        <span className="text-3xl font-medium leading-none tracking-tight md:text-[4.5rem]">{days}</span>
        <span className="text-sm md:text-base">days</span>
      </div>
      <div className="flex flex-col px-3 py-6 text-center md:px-6 md:py-8">
        <span className="text-3xl font-medium leading-none tracking-tight md:text-[4.5rem]">{hours}</span>
        <span className="text-sm md:text-base">hours</span>
      </div>
      <div className="flex flex-col px-3 py-6 text-center md:px-6 md:py-8">
        <span className="text-3xl font-medium leading-none tracking-tight md:text-[4.5rem]">{minutes}</span>
        <span className="text-sm md:text-base">minutes</span>
      </div>
      <div className="flex flex-col px-3 py-6 text-center md:px-6 md:py-8">
        <span className="text-3xl font-medium leading-none tracking-tight md:text-[4.5rem]">{seconds}</span>
        <span className="text-sm md:text-base">seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;

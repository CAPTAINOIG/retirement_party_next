import React from 'react';
import { cn } from '@/lib/utils';

const CountryFlag = ({ code, className }) => {
  return (
    <img
      alt={code}
      className={cn('h-6 w-6 rounded-full border-0 object-cover outline-0', className)}
      src={`https://flagcdn.com/${code?.toLowerCase()}.svg`}
    />
  );
};

export default CountryFlag;

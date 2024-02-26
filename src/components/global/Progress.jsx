import React from 'react';
import { cn } from '@/lib/utils';

const Progress = ({ width = 0, className }) => {
  let color = 'bg-gray-600';

  if (width < 40) color = 'bg-red-600';
  if (width >= 40 && width <= 60) color = 'bg-yellow-600';
  if (width > 60) color = 'bg-green-600';

  return (
    <div className={cn('h-2 w-full rounded-full bg-gray-200', className)}>
      <div className={cn('h-full rounded-full bg-blue-600', color)} style={{ width: `${Math.min(width, 100)}%` }} />
    </div>
  );
};

export default Progress;

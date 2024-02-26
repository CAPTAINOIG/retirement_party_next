import React from 'react';
import { cn } from '@/lib/utils';

const Card = ({ className, children, hover = false, ...props }) => {
  return (
    <div
      className={cn('rounded-3xl border bg-white shadow transition-all duration-300', className, {
        'cursor-pointer hover:-translate-y-1 hover:scale-[1.01]': hover,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;

import React from 'react';
import { cn } from '@/lib/utils';

const Card = ({ className, children, hover = false, ...props }) => {
  return (
    <div
      className={cn('bg-white shadow border rounded-3xl transition-all duration-300', className, {
        'hover:scale-[1.01] hover:-translate-y-1 cursor-pointer': hover,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;

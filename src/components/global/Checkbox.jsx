import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { cn } from '@/lib/utils';

const Checkbox = forwardRef(({ id, children, disabled, className, ...props }, ref) => {
  return (
    <label className={cn('flex items-start', className)}>
      <input
        ref={ref}
        className={cn(
          'text-primary-400 focus:ring-primary-500 dark:focus:ring-primary-600 mt-1 h-4 w-4 rounded-md border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800',
          { 'pointer-events-none opacity-60': disabled }
        )}
        id={id}
        type="checkbox"
        {...props}
      />
      {!!children && <span className="ml-2">{children}</span>}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Checkbox;

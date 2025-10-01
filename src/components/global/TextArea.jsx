import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { cn } from '@/lib/utils';

const TextArea = forwardRef(({ label, id, error, disabled, bordered = false, ...props }, ref) => {
  return (
    <div className="flex flex-col">
      <label
        className={cn(
          'ring-primary-800 ring-opacity-60 relative w-full rounded-xl px-5 pt-5 ring-offset-[3px] transition duration-300 focus-within:ring-2',
          { 'pointer-events-none opacity-60': disabled },
          { 'border border-zinc-300 bg-transparent': bordered },
          { 'bg-slate-200': !bordered }
        )}
      >
        <textarea
          id={id}
          ref={ref}
          className="peer mt-2 w-full resize-none bg-transparent pb-2 leading-tight"
          placeholder=" "
          rows="2"
          {...props}
        />
        {!!label && (
          <span
            className={cn(
              'absolute top-1/2 left-0 inline-flex -translate-y-1/2 px-5 text-sm opacity-80 transition-all peer-not-placeholder-shown:top-4 peer-focus:top-4'
            )}
          >
            {label} {props.value}
          </span>
        )}
      </label>
      {!!error && <div className="mt-1 text-sm text-red-500">{error}</div>}
    </div>
  );
});

TextArea.displayName = 'TextArea';

TextArea.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
};

export default TextArea;

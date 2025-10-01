import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { IconChevronDown } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

const Select = forwardRef(
  ({ id, label, options, disabled, error, loading = false, bordered = false, placeholder, ...props }, ref) => {
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
          <select id={id} {...props} ref={ref} className="peer mt-2 w-full appearance-none bg-transparent pb-2">
            {loading ? (
              <option value="" disabled>
                Loading..
              </option>
            ) : (
              <>
                {!!placeholder && <option value="">{placeholder}</option>}
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </>
            )}
          </select>
          <div className="pointer-events-none absolute right-2 bottom-1.5 flex h-8 w-8 items-center justify-center rounded-md">
            <IconChevronDown size="18" />
          </div>
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
  }
);

Select.displayName = 'Select';

Select.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  error: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default Select;

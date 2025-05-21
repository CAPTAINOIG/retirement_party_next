import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

const PasswordInput = forwardRef(({ id, label, error, disabled, bordered = false, ...props }, ref) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => setVisible((v) => !v);

  return (
    <div className="flex flex-col">
      <label
        className={cn(
          'relative w-full rounded-xl px-5 pt-5 ring-primary-800 ring-opacity-60 ring-offset-[3px] transition duration-300 focus-within:ring-2',
          { 'pointer-events-none opacity-60': disabled },
          { 'border border-zinc-300 bg-transparent': bordered },
          { 'bg-slate-200': !bordered }
        )}
      >
        <input
          type={visible ? 'text' : 'password'}
          id={id}
          {...props}
          ref={ref}
          placeholder=" "
          className="peer mt-2 w-full bg-transparent pb-2"
        />
        {!!label && (
          <span
            className={cn(
              'absolute left-0 top-1/2 inline-flex -translate-y-1/2 px-5 text-sm opacity-80 transition-all peer-focus:top-4 peer-not-placeholder-shown:top-4'
            )}
          >
            {label} {props.value}
          </span>
        )}
        <button
          onClick={toggleVisible}
          type="button"
          className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-gray-900 bg-opacity-0 hover:bg-opacity-5 focus:bg-opacity-5"
        >
          {visible ? <IconEyeOff size="20" /> : <IconEye size="20" />}
        </button>
      </label>
      {!!error && <div className="mt-2 text-sm text-red-500">{error}</div>}
    </div>
  );
});

PasswordInput.displayName = 'PasswordInput';

PasswordInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
};

export default PasswordInput;

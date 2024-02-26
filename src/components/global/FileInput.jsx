import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { IconUpload } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

const FileInput = forwardRef(
  ({ label, rightIcon, id, bordered = false, error, disabled, value, onChange, ...props }, ref) => {
    const handleChange = (e) => {
      const [file] = e.target.files;
      onChange(file);
    };

    return (
      <div className="flex flex-col">
        {!!label && (
          <label htmlFor={id} className="mb-2 text-sm">
            {label}
          </label>
        )}
        <div className="relative flex">
          <label
            className={cn(
              'w-full cursor-pointer rounded-md px-4 py-2 pr-12 ring-primary-800 ring-opacity-30 ring-offset-2 transition duration-300 focus-within:ring-2',
              { 'pointer-events-none opacity-60': disabled },
              { 'border border-gray-400 bg-transparent': bordered },
              { 'bg-slate-200': !bordered }
            )}
            tabIndex="1"
          >
            <p>{value ? value.name : 'Click to select a file'}</p>
            <input
              type="file"
              onChange={handleChange}
              id={id}
              {...props}
              ref={ref}
              disabled={disabled}
              className="absolute w-[1px] opacity-0"
            />
          </label>
          <div className="pointer-events-none absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md">
            <IconUpload size="20" />
          </div>
        </div>
        {!!error && <div className="mt-1 text-sm text-red-500">{error}</div>}
      </div>
    );
  }
);

FileInput.displayName = 'FileInput';

FileInput.propTypes = {
  rightIcon: PropTypes.element,
  label: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

export default FileInput;

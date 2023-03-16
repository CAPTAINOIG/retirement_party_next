import React, { forwardRef } from 'react';
import classNames from "classnames";
import PropTypes from "prop-types";

const TextArea = forwardRef(({ label, id, error, disabled, bordered = false, ...props }, ref) => {
  return (
    <div className="flex flex-col">
      {
        !!label && <label htmlFor={ id } className="text-sm mb-2">{ label }</label>
      }
      <div className="relative">
        <textarea
          className={ classNames(
            "px-4 py-3 rounded-md w-full transition duration-300 focus:ring-2 ring-offset-2 ring-blue-800 ring-opacity-30",
            { 'opacity-60 pointer-events-none': disabled },
            { 'bg-transparent border border-gray-400': bordered },
            { 'bg-gray-100': !bordered }
          ) }
          id={ id } { ...props } ref={ ref }
        />
      </div>
      {
        !!error && <div className="text-sm text-red-500 mt-1">{ error }</div>
      }
    </div>
  );
});

TextArea.displayName = 'TextArea';

TextArea.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool
}

export default TextArea;

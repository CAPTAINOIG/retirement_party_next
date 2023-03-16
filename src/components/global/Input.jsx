import React, { forwardRef } from 'react';
import classNames from "classnames";
import PropTypes from "prop-types";

const Input = forwardRef(({ label, rightIcon, id, error, disabled, bordered = false, ...props }, ref) => {
  return (
    <div className="flex flex-col">
      <label
        className={ classNames(
          "py-2 px-5 rounded-xl w-full transition duration-300 focus-within:ring-2 ring-offset-[3px] ring-blue-800 ring-opacity-60 relative",
          { 'pr-12': !!rightIcon },
          { 'opacity-60 pointer-events-none': disabled },
          { 'bg-transparent border border-zinc-300': bordered },
          { 'bg-slate-200': !bordered }
        ) }
      >
        { !!label && <span className="text-sm mb-2 opacity-80">{ label }</span> }
        <input
          id={ id } { ...props } ref={ ref } className="py-1 w-full bg-transparent"
        />
        {
          !!rightIcon && (
            <div
              className="absolute top-1/2 -translate-y-1/2 right-2 w-8 h-8 rounded-md flex items-center justify-center"
            >
              { rightIcon }
            </div>
          )
        }
      </label>
      { !!error && <div className="text-sm text-red-500 mt-2">{ error }</div> }
    </div>
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  rightIcon: PropTypes.element,
  label: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool
}

export default Input;

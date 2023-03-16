import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

const Checkbox = ({ id, children, disabled, className, ...props }) => {
  return (
    <label className={ classNames('flex items-start', className) }>
      <input
        className={ classNames(
          "w-4 h-4 mt-1 text-blue-600 bg-gray-100 rounded-md border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",
          { 'opacity-60 pointer-events-none': disabled }
        ) }
        id={ id } type="checkbox" { ...props }
      />
      {
        !!children &&
        <span className="ml-2">
          { children }
        </span>
      }
    </label>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool
};

export default Checkbox;

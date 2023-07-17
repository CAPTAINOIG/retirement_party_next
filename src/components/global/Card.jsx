import React from 'react';
import classNames from "classnames";

const Card = ({ className, children, hover = false, ...props }) => {
  return (
    <div
      className={ classNames(
        'bg-white shadow border rounded-[1.2rem] transition-all duration-300', className,
        { 'hover:bg-slate-100 cursor-pointer': hover }
      ) } { ...props }
    >
      { children }
    </div>
  );
};

export default Card;

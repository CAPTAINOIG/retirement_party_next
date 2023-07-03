import React from 'react';
import classNames from "classnames";

const Card = ({ className, children, ...props }) => {
  return (
    <div className={ classNames('bg-white shadow shadow-slate-200 border rounded-2xl', className) } { ...props }>
      { children }
    </div>
  );
};

export default Card;

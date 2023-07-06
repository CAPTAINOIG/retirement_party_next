import React from 'react';
import classNames from "classnames";

const Card = ({ className, children, ...props }) => {
  return (
    <div className={ classNames('bg-white shadow border rounded-[1.2rem]', className) } { ...props }>
      { children }
    </div>
  );
};

export default Card;

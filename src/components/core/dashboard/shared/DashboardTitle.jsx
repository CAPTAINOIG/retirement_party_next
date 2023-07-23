import React from 'react';
import classNames from "classnames";

const DashboardTitle = ({ text, className, ...props }) => {
  return (
    <h2
      { ...props }
      className={ classNames('hidden md:block mb-10 font-semibold text-xl', className) }
    >
      { text }
    </h2>
  );
};

export default DashboardTitle;

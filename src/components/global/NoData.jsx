import React from 'react';

const NoData = ({ icon, text }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 rounded-3xl border-2 border-dashed border-zinc-300 px-8 py-16 text-center text-zinc-500 md:flex-row md:space-y-0 md:space-x-2">
      {!!icon && icon}
      <p>{text || 'No data'}</p>
    </div>
  );
};

export default NoData;

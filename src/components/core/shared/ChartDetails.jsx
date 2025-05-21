import React from 'react';

const colors = ['#fff', '#f4be37', '#109618', '#990099', '#DC3912', '#8290DC'];

const ChartDetails = ({ text }) => {
  return (
    <>
      {text?.map((text, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="h-[10px] w-[10px] rounded-full" style={{ backgroundColor: colors[i] }}></div>
          <p className="text-xs font-semibold text-slate-200">{text}</p>
        </div>
      ))}
    </>
  );
};

export default ChartDetails;

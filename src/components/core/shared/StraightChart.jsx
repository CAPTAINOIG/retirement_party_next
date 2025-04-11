'use client'
import React from 'react';

const colors = ['#a3b3ff', '#eee', '#FFB86A', '#990099', '#DC3912', '#8290DC'];

const StraightChart = ({ title, data }) => {
  const total = data.reduce((acc, i) => acc + i, 0);
  const percentages = data.map((i) => (i / total) * 100);

  return (
    <div className="space-y-1">
      <p className="text-chatsm pb-1 font-[400] text-slate-200">{title}</p>
      <div className="flex h-[7px] rounded-full">
        {percentages.map((value, i) => (
          <div
            key={i}
            className="tooltip"
            style={{
              width: `${value}%`,
              backgroundColor: colors[i],
              borderTopLeftRadius: `${i === 0 ? '3px' : ''}`,
              borderBottomLeftRadius: `${i === 0 ? '3px' : ''}`,
              borderTopRightRadius: `${i === data.length - 1 ? '3px' : ''}`,
              borderBottomRightRadius: `${i === data.length - 1 ? '3px' : ''}`,
              cursor: 'pointer',
            }}
          >
            <span className="tooltiptext">{Math.ceil(value)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StraightChart;

import React from 'react';

const InsightCard = ({ insight }) => {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={ insight.image } alt=""
        className="rounded-xl h-44 w-full object-cover"
      />
      <div className="mt-4">
        <p className="opacity-90">Feb 19, 2023</p>
        <h5 className="font-medium text-xl mt-2">{ insight.title }</h5>
        <p className="mt-4">{ insight.subtitle }</p>
      </div>
    </div>
  );
};

export default InsightCard;

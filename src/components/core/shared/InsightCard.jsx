import React from 'react';
import Link from "next/link";

const InsightCard = ({ insight }) => {
  return (
    <div>
      <Link href="/infographics/1/1">
        <img src={ insight.image } alt={ insight.title } className="rounded-xl h-60 w-full object-cover"/>
      </Link>
      <div className="mt-4">
        <p className="opacity-90">Feb 19, 2023</p>
        <Link href="/infographics/1/1">
          <h5 className="font-medium text-xl mt-2">{ insight.title }</h5>
        </Link>
        <p className="mt-4">{ insight.subtitle }</p>
      </div>
    </div>
  );
};

export default InsightCard;

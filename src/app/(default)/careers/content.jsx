'use client';
import React from 'react';
import PageHeader from '@/components/core/shared/PageHeader';
import JoinOurTeam from '@/components/core/careers/JoinOurTeam';
import OpenPositions from '@/components/core/careers/OpenPositions';

const CareersPageContent = () => {
  return (
    <>
      <div className="bg-slate-50 text-black">
        <PageHeader title="Careers at Statisense" append={<div className="h-4"></div>} />
        <div className="space-y-28 py-20 md:space-y-36 md:py-28">
          <JoinOurTeam />
          <OpenPositions />
        </div>
      </div>
    </>
  );
};

export default CareersPageContent;

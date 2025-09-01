'use client';
import React from 'react';
import JoinOurTeam from '@/components/core/careers/JoinOurTeam';
import OpenPositions from '@/components/core/careers/OpenPositions';
import AdSection from '@/components/core/home/AdSection';
import PageHeader from '@/components/core/shared/PageHeader';

const CareersPageContent = () => {
  return (
    <>
      <div className="relative w-full">
        <PageHeader title="Careers" />
        <div className="relative w-full">
          <div className="pt-16 pb-24 md:pt-28 md:pb-32">
            <JoinOurTeam />
            <div className="mt-28 md:mt-40">
              <OpenPositions />
            </div>
          </div>
          <AdSection />
        </div>
      </div>
    </>
  );
};

export default CareersPageContent;

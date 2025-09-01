'use client';
import React from 'react';
import OpenPositions from '@/components/core/careers/OpenPositions';
import AdSection from '@/components/core/home/AdSection';
import PageHeader from '@/components/core/shared/PageHeader';

const CareersPageContent = () => {
  return (
    <>
      <PageHeader title="Careers" />
      <OpenPositions />
      <AdSection />
    </>
  );
};

export default CareersPageContent;

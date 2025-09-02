'use client';

import React from 'react';
import PageHeader from '@/components/core/shared/PageHeader';
import BusinessIntelligenceSection from '@/components/core/home/BusinessIntelligenceSection';
import PredictiveIntelligenceSection from '@/components/core/home/PredictiveIntelligenceSection';
import MarketIntelligenceSection from '@/components/core/home/MarketIntelligenceSection';
import AdSection from '@/components/core/home/AdSection';

const ImmortalAiContent = () => {
  return (
    <>
      <PageHeader title="Make smart business decisions" />
      <BusinessIntelligenceSection />
      <PredictiveIntelligenceSection />
      <MarketIntelligenceSection />
      <AdSection />
    </>
  );
};

export default ImmortalAiContent;

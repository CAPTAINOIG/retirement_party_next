'use client';
import React from 'react';
import WhoWeAre from '@/components/core/about/WhoWeAre';
import WhatWeDo from '@/components/core/about/WhatWeDo';
import WhyChooseUs from '@/components/core/about/WhyChooseUs';
import FrequentlyAskedQuestions from '@/components/core/about/FrequentlyAskedQuestions';
import AdSection from '@/components/core/home/AdSection';
import PageHeader from '@/components/core/shared/PageHeader';

const AboutPageContent = () => {
  return (
    <>
      <PageHeader title="About us" />
      <div className="relative w-full">
        <div className="pt-16 pb-24 md:pt-28 md:pb-32">
          <WhoWeAre />
          <div className="mt-28 md:mt-40">
            <WhatWeDo />
          </div>
          <div className="mt-28 md:mt-40">
            <WhyChooseUs />
          </div>
        </div>
        <AdSection />
        <div className="py-24 md:py-32">
          <FrequentlyAskedQuestions />
        </div>
      </div>
    </>
  );
};

export default AboutPageContent;

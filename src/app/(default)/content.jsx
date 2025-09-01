'use client';
import React from 'react';
import Testimonials from '@/components/core/home/Testimonials';
import Hero from '@/components/core/home/Hero';
import AdSection from '@/components/core/home/AdSection';
import BigIdeas from '@/components/core/home/BigIdeas';
import BusinessIntelligenceSection from '@/components/core/home/BusinessIntelligenceSection';
import PredictiveIntelligenceSection from '@/components/core/home/PredictiveIntelligenceSection';
import MarketIntelligenceSection from '@/components/core/home/MarketIntelligenceSection';
import OpinionsSection from '@/components/core/home/OpinionsSection';

const HomePageContent = () => {
  return (
    <div>
      <Hero />
      <BigIdeas />
      <BusinessIntelligenceSection />
      <PredictiveIntelligenceSection />
      <MarketIntelligenceSection />
      <OpinionsSection />
      <Testimonials />
      <AdSection />
    </div>
  );
};

export default HomePageContent;

'use client';

import React from 'react';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import WhatYouGainSection from './components/WhatYouGainSection';
import WhoThisIsForSection from './components/WhoThisIsForSection';
import CallToActionSection from './components/CallToActionSection';

const CampusContent = () => {
  return (
    <div className="dark min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative">
        <HeroSection />
      </section>

      {/* Intro Section */}
      <section className="relative">
        <IntroSection />
      </section>

      {/* What You'll Gain Section */}
      <section className="relative">
        <WhatYouGainSection />
      </section>

      {/* Who This Is For Section */}
      <section className="relative">
        <WhoThisIsForSection />
      </section>

      {/* Call to Action Section */}
      <section className="relative">
        <CallToActionSection />
      </section>
    </div>
  );
};

export default CampusContent;

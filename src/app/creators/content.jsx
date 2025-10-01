'use client';

import React from 'react';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import WhyJoinSection from './components/WhyJoinSection';
import WhoCanJoinSection from './components/WhoCanJoinSection';
import HowItWorksSection from './components/HowItWorksSection';
import CallToActionSection from './components/CallToActionSection';
import ApplicationForm from './components/ApplicationForm';

const CreatorsGalleryContent = () => {
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

      {/* Why Join Section */}
      <section className="relative">
        <WhyJoinSection />
      </section>

      {/* Who Can Join Section */}
      <section className="relative">
        <WhoCanJoinSection />
      </section>

      {/* How It Works Section */}
      <section className="relative">
        <HowItWorksSection />
      </section>

      {/* Call to Action Section */}
      <section className="relative">
        <CallToActionSection />
      </section>

      {/* Application Form */}
      <section className="relative">
        <ApplicationForm />
      </section>
    </div>
  );
};

export default CreatorsGalleryContent;

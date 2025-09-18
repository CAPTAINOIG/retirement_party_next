'use client';

import React from 'react';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import WhyAttendSection from './components/WhyAttendSection';
import WhoShouldAttendSection from './components/WhoShouldAttendSection';
import EventDetailsSection from './components/EventDetailsSection';
import AnalystsApplicationForm from './components/AnalystsApplicationForm';

const AnalystsEventContent = () => {
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

      {/* Why Attend Section */}
      <section className="relative">
        <WhyAttendSection />
      </section>

      {/* Who Should Attend Section */}
      <section className="relative">
        <WhoShouldAttendSection />
      </section>

      {/* Event Details Section */}
      <section className="relative">
        <EventDetailsSection />
      </section>

      {/* Call to Action Section */}
      <section className="relative">
        <AnalystsApplicationForm />
      </section>
    </div>
  );
};

export default AnalystsEventContent;


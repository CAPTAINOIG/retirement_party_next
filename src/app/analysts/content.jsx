'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import WhyJoinSection from './components/WhyJoinSection';
import WhoCanJoinSection from './components/WhoCanJoinSection';
// import HowItWorksSection from './components/HowItWorksSection';
import CallToActionSection from './components/CallToActionSection';

const AnalystsGalleryContent = () => {
  useEffect(() => {
    // Track page view for analysts page specifically
    if (typeof window !== 'undefined' && window.twq) {
      window.twq('track', 'PageView');
    }
  }, []);

  return (
    <>
      {/* Twitter Pixel Script for Analysts Page */}
      <Script
        id="twitter-pixel-analysts"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
            },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
            a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
            twq('config','qa5ef');
          `,
        }}
      />

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
        {/* <section className="relative">
          <HowItWorksSection />
        </section> */}

        {/* Call to Action Section */}
        <section className="relative">
          <CallToActionSection />
        </section>
      </div>
    </>
  );
};

export default AnalystsGalleryContent;

'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import WhoCanJoinSection from './components/WhoCanJoinSection';
import CallToActionSection from './components/CallToActionSection';
import MarqueeSection from './components/MarqueeSection';
import TributeSection from './components/TributeSection';
import FAQSection from './FAQSection';
import Footer from '@/components/global/Footer';

const AnalystsContent = () => {
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
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <section id="hero" className="relative">
          <HeroSection />
        </section>

        {/* Intro Section */}
        <section id="intro" className="relative">
          <MarqueeSection />
        </section>

        {/* Why Join Section */}
        <section id="tribute" className="relative">
          <TributeSection />
        </section>

        {/* Who Can Join Section */}
        <section id="guests" className="relative">
          <WhoCanJoinSection />
        </section>

        <section id="cta" className="relative">
          <CallToActionSection />
        </section>

        <section id="faq" className="relative">
          <FAQSection />
        </section>

        <section id="footer" className="relative">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default AnalystsContent;

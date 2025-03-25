'use client';
import React from 'react';
import Hero from '@/components/core/home/Hero';
import OmniChannel from '@/components/core/home/OmniChannel';
import ConvertYourData from '@/components/core/home/ConvertYourData';
import SupportingSectors from '@/components/core/home/SupportingSectors';
import HowItWorks from '@/components/core/home/HowItWorks';
import Categories from '@/components/core/home/Categories';
import InsightsOnTheGo from '@/components/core/home/InsightsOnTheGo';
import Newsletter from '@/components/core/home/Newsletter';
import Testimonials from '@/components/core/home/Testimonials';
import BeautifulStory from '@/components/core/home/BeautifulStory';
import HowImmortalityWorks from '@/components/core/home/HowImmortalityWorks';
import Templates from '@/components/core/home/Templates';

const HomePageContent = () => {
  return (
    <>
      <div className="bg-slate-100 text-black">
      <BeautifulStory />
        {/* <Hero /> */}
        <div className="relative overflow-hidden py-28 md:py-44 md:pb-48">
          <div className="space-y-28 md:space-y-56">
            <OmniChannel />
            <Templates />
            {/* <ConvertYourData /> */}
          </div>
          <div className="absolute bottom-[-1rem] hidden w-full md:block">
            <img alt="curve" src="/images/curve-2.svg" />
          </div>
        </div>
        <div className="space-y-32 bg-white py-28 md:space-y-48 md:pb-48 md:pt-24">
          <SupportingSectors />
        </div>
        {/* <HowItWorks /> */}
        <HowImmortalityWorks />
        <div className="space-y-24 overflow-hidden bg-white py-28 md:space-y-36 md:py-32">
          <Categories />
          <InsightsOnTheGo />
        </div>
        <div className="relative overflow-hidden">
          <Newsletter />
          <div className="absolute -bottom-10 left-0 z-20 hidden w-full xl:block">
            <img alt="curve" src="/images/curve-3.svg" />
          </div>
        </div>
        <div className="relative bg-white py-28 md:py-40">
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default HomePageContent;

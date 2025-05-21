'use client';
import React from 'react';
import BigIdeas from '@/components/core/home/BigIdeas';
import SupportingSectors from '@/components/core/home/SupportingSectors';
import Categories from '@/components/core/home/Categories';
import InsightsOnTheGo from '@/components/core/home/InsightsOnTheGo';
import Newsletter from '@/components/core/home/Newsletter';
import Testimonials from '@/components/core/home/Testimonials';
import BeautifulStory from '@/components/core/home/BeautifulStory';
import HowImmortalityWorks from '@/components/core/home/HowImmortalityWorks';
import Parrots from '@/components/core/home/Parrots';
import Immortal from '@/components/core/home/Immortal';

const HomePageContent = () => {
  return (
    <>
      <div className="bg-slate-100 text-black">
        <BeautifulStory />
        <div className="relative space-y-48 overflow-hidden py-28 md:py-48">
          <BigIdeas />
          <Parrots />
        </div>
        <Immortal />
        <div className="space-y-32 bg-linear-to-r from-[#F0FDF4] to-[#EFF6FF] py-28 md:py-48">
          <SupportingSectors />
        </div>
        <HowImmortalityWorks />
        <div className="space-y-24 overflow-hidden from-[#F0FDF4] to-[#EFF6FF] py-28 md:space-y-36 md:py-48">
          <Categories />
          <InsightsOnTheGo />
        </div>
        <div className="relative overflow-hidden">
          <Newsletter />
        </div>
        <div className="relative from-[#F0FDF4] to-[#EFF6FF] py-28 md:py-48">
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default HomePageContent;

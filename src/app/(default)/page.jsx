"use client"
import React from 'react';
import Hero from "@/components/core/home/Hero";
import PlugYourData from "@/components/core/home/PlugYourData";
import Categories from "@/components/core/home/Categories";
import InsightsOnTheGo from "@/components/core/home/InsightsOnTheGo";
import HowItWorks from "@/components/core/home/HowItWorks";
import SupportingSectors from "@/components/core/home/SupportingSectors";
import Newsletter from "@/components/core/home/Newsletter";
import Testimonials from "@/components/core/home/Testimonials";
import Analytic from "@/components/core/home/Analytic";

const HomePage = () => {
  return (
    <div className="bg-slate-100">
      <Hero/>
      <div className="pt-28 md:pt-40">
       <Analytic/>
      </div>
      <div className="py-28 md:py-40 relative">
        <PlugYourData/>
        <div className="xl:block hidden absolute bottom-[-1rem] w-full">
          <img alt="curve" src="/images/curve-2.svg"/>
        </div>
      </div>
      <div className="bg-white py-28 md:py-40 xl:md:pt-[2rem] space-y-32 md:space-y-48">
        <SupportingSectors/>
      </div>
      <HowItWorks/>
      <div className="bg-white py-28 md:py-40 space-y-32 md:space-y-36 xl:mt-[-2rem] xl:pt-[6rem]">
        <Categories/>
        <InsightsOnTheGo/>
      </div>
      <Newsletter/>
      <div className="bg-white py-28 md:py-40 space-y-32 md:space-y-48">
        <Testimonials/>
      </div>
    </div>
  );
};

export default HomePage;

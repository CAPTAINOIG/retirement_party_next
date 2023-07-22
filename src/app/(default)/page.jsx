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

const HomePage = () => {
  return (
    <div className="bg-slate-100">
      <Hero/>
      <div className="py-28 md:py-40">
        <PlugYourData/>
      </div>
      <div className="bg-white py-28 md:py-40 space-y-32 md:space-y-48">
        <SupportingSectors/>
      </div>
      <HowItWorks/>
      <div className="bg-white py-28 md:py-40 space-y-32 md:space-y-36">
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

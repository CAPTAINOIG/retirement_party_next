"use client"
import React from 'react';
import Hero from "@/components/core/home/Hero";
import AiAssistant from "@/components/core/home/AiAssistant";
import Categories from "@/components/core/home/Categories";
import SocialCredit from "@/components/core/home/SocialCredit";
import Services from "@/components/core/home/Services";
import SwiperSection from "@/components/core/home/SwiperSection";
import Newsletter from "@/components/core/home/Newsletter";
import Testimonials from "@/components/core/home/Testimonials";

const HomePage = () => {
  return (
    <div className="bg-slate-100">
      <Hero/>
      <div className="py-28 md:py-40">
        <AiAssistant/>
      </div>
      <div className="bg-white py-16 md:py-40 space-y-24 md:space-y-32">
        <Categories/>
        <SocialCredit/>
      </div>
      <Services/>
      <div className="bg-white py-28 md:py-40 space-y-32 md:space-y-48">
        <SwiperSection/>
      </div>
      <Newsletter/>
      <div className="bg-white py-28 md:py-40 space-y-32 md:space-y-48">
        <Testimonials/>
      </div>
    </div>
  );
};

export default HomePage;

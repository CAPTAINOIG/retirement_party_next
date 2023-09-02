"use client"
import React from 'react';
import PageHeader from "@/components/core/shared/PageHeader";
import WhatWeDo from "@/components/core/about/WhatWeDo";
import Newsletter from "@/components/core/home/Newsletter";
import FrequentlyAskedQuestions from "@/components/core/about/FrequentlyAskedQuestions";
import WhyChooseUs from "@/components/core/about/WhyChooseUs";
import WhoWeAre from "@/components/core/about/WhoWeAre";

const AboutPage = () => {
  return (
    <div className="bg-slate-50">
      <PageHeader
        title="About us"
        append={ <div className="h-4"></div> }
      />
      <div className="pb-24 pt-16 md:pt-28 md:pb-32">
        <WhoWeAre/>
        <div className="mt-28 md:mt-40">
          <WhatWeDo/>
        </div>
        <div className="mt-28 md:mt-40">
          <WhyChooseUs/>
        </div>
      </div>
      <Newsletter sm/>
      <div className="py-24 md:py-32">
        <FrequentlyAskedQuestions/>
      </div>
    </div>
  );
};

export default AboutPage;

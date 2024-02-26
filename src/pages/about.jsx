import PageHeader from '@/components/core/shared/PageHeader';
import WhoWeAre from '@/components/core/about/WhoWeAre';
import WhatWeDo from '@/components/core/about/WhatWeDo';
import WhyChooseUs from '@/components/core/about/WhyChooseUs';
import Newsletter from '@/components/core/home/Newsletter';
import FrequentlyAskedQuestions from '@/components/core/about/FrequentlyAskedQuestions';
import React from 'react';
import DefaultLayout from '@/components/core/DefaultLayout';
import Head from 'next/head';
import DefaultHeadTags from '@/components/others/DefaultHeadTags';

const About = () => {
  return (
    <>
      <Head>
        <title>About us • Statisense</title>
        <DefaultHeadTags />
      </Head>
      <div className="bg-slate-50">
        <PageHeader title="About us" append={<div className="h-4"></div>} />
        <div className="pb-24 pt-16 md:pb-32 md:pt-28">
          <WhoWeAre />
          <div className="mt-28 md:mt-40">
            <WhatWeDo />
          </div>
          <div className="mt-28 md:mt-40">
            <WhyChooseUs />
          </div>
        </div>
        <Newsletter sm />
        <div className="py-24 md:py-32">
          <FrequentlyAskedQuestions />
        </div>
      </div>
    </>
  );
};

About.Layout = DefaultLayout;

export default About;

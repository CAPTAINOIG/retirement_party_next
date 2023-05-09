import React from 'react';
import DefaultLayout from "@/components/core/shared/DefaultLayout";
import PageHeader from "@/components/core/shared/PageHeader";
import WhatWeDo from "@/components/core/about/WhatWeDo";
import Newsletter from "@/components/core/home/Newsletter";
import FrequentlyAskedQuestions from "@/components/core/about/FrequentlyAskedQuestions";

const About = () => {
  return (
    <>
      <PageHeader title="About us" append={ <div className="h-4"></div> }/>
      <div className="">
        <div className="pb-24 pt-20 md:pt-28 md:pb-32">
          <div className="container">
            <div className="max-w-xl mx-auto text-center text-lg md:text-xl leading-relaxed">
              <p>
                StatiSense is a data consulting firm with expertise in providing data services such as Analytics,
                Research, Reporting, Measurement & Evaluation, and Training to individuals, private organizations, and
                non-governmental organizations.
              </p>
              <p>
                We are a trusted analytics company with a brilliant team of analysts. We seek to inspire through
                knowledge that empowers our clients to create actionable strategies that drive positive results.
              </p>
            </div>
          </div>
          <div className="mt-28 md:mt-40">
            <WhatWeDo/>
          </div>
        </div>
        <Newsletter/>
        <div className="py-24 md:py-32">
          <FrequentlyAskedQuestions/>
        </div>
      </div>
    </>
  );
};

About.Layout = DefaultLayout;

export default About;

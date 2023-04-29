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
      <div className="space-y-28 md:space-y-44 mt-24 lg:mt-28">
        <div className="container">
          <div className="max-w-xl mx-auto text-center text-xl leading-relaxed">
            <p>
              StatiSense is a data consulting firm with expertise in providing data services such as Analytics,
              Research, Reporting, Measurement & Evaluation, and Training to individuals, private organizations, and
              non-governmental organizations.
            </p>
            <p>
              We are a trusted analytics company with a brilliant team of analysts. We seek to inspire through
              knowledge
              that empowers our clients to create actionable strategies that drive positive results.
            </p>
          </div>
        </div>
        <WhatWeDo/>
        <Newsletter/>
        <FrequentlyAskedQuestions/>
      </div>
    </>
  );
};

About.Layout = DefaultLayout;

export default About;

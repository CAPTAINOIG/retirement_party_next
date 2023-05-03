import React from 'react';
import { IconChartInfographic, IconDatabase, IconDeviceHeartMonitor, IconUserQuestion } from "@tabler/icons-react";

const WhatWeDo = () => {
  return (
    <div id="services">
      <section aria-label="Our services" className="container">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 relative">
            <div className="sticky top-36 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
                What we do
              </h2>
              <p className="mt-2 md:mt-4 text-lg">
                Save time & money with Statisense
              </p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <ul role="list" className="grid md:grid-cols-2 gap-8">
              <li className="rounded-xl bg-slate-200/70 px-10 md:px-12 py-12 md:py-14">
                <IconDatabase className="mb-8 text-slate-300/60" size="60"/>
                <h3 className="font-semibold text-xl">
                  Evidence Based Advocacy
                </h3>
                <p className="mt-4 text-base opacity-80">
                  We provide the needed data for evidence-based home advocacy. We also help make sense of your own data
                  for reporting and improvment purposes for better decision making
                </p>
              </li>
              <li className="rounded-xl bg-slate-200/70 px-10 md:px-12 py-12 md:py-14">
                <IconChartInfographic className="mb-8 text-slate-300/60" size="60"/>
                <h3 className="font-semibold text-xl">
                  Data Analysis and Visualization
                </h3>
                <p className="mt-4 text-base opacity-80">
                  We put data in context and make it real for better understanding through developing actionable and
                  compelling infographics. This makes complex information eye-catching, shareable and easily digestible
                </p>
              </li>
              <li className="rounded-xl bg-slate-200/70 px-10 md:px-12 py-12 md:py-14">
                <IconDeviceHeartMonitor className="mb-8 text-slate-300/60" size="60"/>
                <h3 className="font-semibold text-xl">
                  Monitoring and Evaluation
                </h3>
                <p className="mt-4 text-base opacity-80">
                  We help in monitoring and evaluation of documents and looking into your data. We also help analyze
                  interventions, projects, or programs for performance evaluation to achieve the desired result
                </p>
              </li>
              <li className="rounded-xl bg-slate-200/70 px-10 md:px-12 py-12 md:py-14">
                <IconUserQuestion className="mb-8 text-slate-300/60" size="60"/>
                <h3 className="font-semibold text-xl">
                  Professional Training
                </h3>
                <p className="mt-4 text-base opacity-80">
                  We train on how to collect, document, analyze, interpret, report, present, and publish data for
                  maximum
                  impact. We train data analysts, data scientists, and also data engineers
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;

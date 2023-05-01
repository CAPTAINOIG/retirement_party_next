import React from 'react';
import { IconChartInfographic, IconDatabase, IconMap, IconPhoneCall, IconSchool } from "@tabler/icons-react";

const Services = () => {
  return (
    <div id="services" className="bg-[#11100f] text-zinc-100 py-28 sm:py-40 rounded-[1200px/.5%]">
      <section aria-label="Our services" className="container">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
            Our services
          </h2>
          <p className="mt-4 text-lg">
            Save time & money with Statisense
          </p>
        </div>
        <div className="space-y-8">
          <ul role="list" className="mt-16 grid md:grid-cols-3 gap-8">
            <li className="rounded-xl bg-slate-700/30 px-10 py-14">
              <IconSchool className="mb-8 text-primary-300/60" size="40"/>
              <h3 className="font-semibold text-xl">
                Training
              </h3>
              <p className="mt-4 text-base opacity-80">
                We train on how to collect, document, analyze, interpret, report, present, and publish data for maximum
                impact using different data tools.
              </p>
            </li>
            <li className="rounded-xl bg-slate-700/30 px-10 py-14">
              <IconMap className="mb-8 text-primary-300/60" size="40"/>
              <h3 className="font-semibold text-xl">
                Survey research
              </h3>
              <p className="mt-4 text-base opacity-80">
                We conduct both quantitative and qualitative research. Our in-house research team develop and evaluate
                questionnaires vis-à-vis research objectives and analyze questionnaires to develop actionable reports
                and communiques.
              </p>
            </li>
            <li className="rounded-xl bg-slate-700/30 px-10 py-14">
              <IconDatabase className="mb-8 text-primary-300/60" size="40"/>
              <h3 className="font-semibold text-xl">
                Evidence Based Advocacy
              </h3>
              <p className="mt-4 text-base opacity-80">
                Providing the needed data for evidence-based home advocacy is core of our services. We also help make
                sense of your own data for reporting and improvement purposes.
              </p>
            </li>
          </ul>
          <ul role="list" className="grid md:grid-cols-2 gap-8">
            <li className="rounded-xl bg-slate-700/30 px-10 py-14">
              <IconPhoneCall className="mb-8 text-primary-300/60" size="40"/>
              <h3 className="font-semibold text-xl">
                Consultancy Services
              </h3>
              <p className="mt-4 text-base opacity-80">
                We provide data consultancy services by listening to your data needs and deploying our highly trained
                professional team to deliver problem-solving solutions.
              </p>
            </li>
            <li className="rounded-xl bg-slate-700/30 px-10 py-14">
              <IconChartInfographic className="mb-8 text-primary-300/60" size="40"/>
              <h3 className="font-semibold text-xl">
                Infographics and Visualization
              </h3>
              <p className="mt-4 text-base opacity-80">
                We put data in context and make it real for better understanding through developing actionable and
                compelling Infographics. This makes complex information eye catching, shareable and easily digestible.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Services;

import React from 'react';
import { IconChartInfographic, IconDatabase, IconMessage2, IconRepeat, IconRobot } from "@tabler/icons-react";

const HowItWorks = () => {
  return (
    <div id="services" className="bg-[#11100f] text-zinc-100 py-28 sm:py-40 relative xl:pb-[22rem]">
      <div className="xl:block hidden absolute bottom-[-2rem] w-full">
        <img alt="curve" src="/images/curve-3.svg"/>
      </div>
      <section aria-label="Our services" className="container">
        <div className="flex flex-col md:items-center md:text-center">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight">
            How it works
          </h2>
          <p className="mt-4 text-lg">
            Save time & money with Statisense
          </p>
        </div>
        <div className="space-y-8">
          <ul role="list" className="mt-16 grid md:grid-cols-3 gap-8">
            <li className="rounded-3xl bg-slate-700/30 px-10 md:px-10 py-10 md:py-12">
              <IconDatabase className="animate-bounce mb-6 text-primary-300/60" size="48"/>
              <h3 className="font-medium text-lg md:text-xl flex items-center">
                Plug your data
              </h3>
              <p className="mt-2 text-base opacity-70">
                Random or from template, we have your covered
              </p>
            </li>
            <li className="rounded-3xl bg-slate-700/30 px-10 md:px-10 py-10 md:py-12 group">
              <IconRobot className="animate-bounce delay-two mb-6 text-primary-300/60" size="48"/>
              <h3 className="font-medium text-lg md:text-xl flex items-center">
                AI takes over
              </h3>
              <p className="mt-2 text-base opacity-70">
                Extract, analyze, find insight
              </p>
            </li>
            <li className="rounded-3xl bg-slate-700/30 px-10 md:px-10 py-10 md:py-12">
              <IconMessage2 className="animate-bounce delay-four mb-6 text-primary-300/60" size="48"/>
              <h3 className="font-medium text-lg md:text-xl flex items-center">
                Chat with Lens
              </h3>
              <p className="mt-2 text-base opacity-70">
                Human interactive conversation style data presentation
              </p>
            </li>
          </ul>
          <ul role="list" className="grid md:grid-cols-6 gap-8">
            <li className="md:col-start-2 md:col-span-2 rounded-3xl bg-slate-700/30 px-10 md:px-10 py-10 md:py-12">
              <IconChartInfographic className="animate-bounce delay-six mb-6 text-primary-300/60" size="48"/>
              <h3 className="font-medium text-lg md:text-xl flex items-center">
                View report
              </h3>
              <p className="mt-2 text-base opacity-70">
                We present standard report, infographics etc
              </p>
            </li>
            <li className="md:col-span-2 rounded-3xl bg-slate-700/30 px-10 md:px-10 py-10 md:py-12">
              <IconRepeat className="animate-bounce delay-eight mb-6 text-primary-300/60" size="48"/>
              <h3 className="font-medium text-lg md:text-xl flex items-center">
                Repeat
              </h3>
              <p className="mt-2 text-base opacity-70">
                We are definitely building the best data assistant in Africa
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;

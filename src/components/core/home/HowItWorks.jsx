import React from 'react';
import { IconChartInfographic, IconDatabase, IconMessage2, IconRepeat, IconRobot } from '@tabler/icons-react';

const HowItWorks = () => {
  return (
    <div id="services" className="relative bg-gray-950 py-28 text-zinc-100 sm:py-40 xl:pb-[22rem]">
      <div className="bg-grid absolute inset-0 z-10 bg-cover opacity-30" />
      <div className="absolute bottom-[-2rem] hidden w-full xl:block">
        <img alt="curve" src="/images/curve-3.svg" />
      </div>
      <section aria-label="Our services" className="container relative z-20">
        <div className="flex flex-col md:items-center md:text-center">
          <h2 className="text-4xl font-medium tracking-tight md:text-6xl">How it works</h2>
          <p className="mt-4 text-lg">Save time & money with Statisense</p>
        </div>
        <div className="space-y-8">
          <ul role="list" className="mt-16 grid gap-8 md:grid-cols-3">
            <li className="rounded-3xl bg-gray-900/70 px-10 py-10 md:px-10 md:py-12">
              <IconDatabase
                className="mb-6 animate-[updown_1s_ease-in-out_infinite_alternate] text-primary-300/30"
                size="48"
              />
              <h3 className="flex items-center text-lg font-medium md:text-xl">Plug your data</h3>
              <p className="mt-2 text-base opacity-70">
                From File (random, bespoke & template) or API. We have you covered
              </p>
            </li>
            <li className="rounded-3xl bg-gray-900/70 px-10 py-10 md:px-10 md:py-12">
              <IconRobot
                className="delay-two mb-6 animate-[updown_1.2s_ease-in-out_infinite_alternate] text-primary-300/30"
                size="48"
              />
              <h3 className="flex items-center text-lg font-medium md:text-xl">AI takes over</h3>
              <p className="mt-2 text-base opacity-70">Extract, analyze, find insight</p>
            </li>
            <li className="rounded-3xl bg-gray-900/70 px-10 py-10 md:px-10 md:py-12">
              <IconMessage2
                className="delay-four mb-6 animate-[updown_1.5s_ease-in-out_infinite_alternate] text-primary-300/30"
                size="48"
              />
              <h3 className="flex items-center text-lg font-medium md:text-xl">Chat with Bambi</h3>
              <p className="mt-2 text-base opacity-70">Human interactive conversation style data presentation</p>
            </li>
          </ul>
          <ul role="list" className="grid gap-8 md:grid-cols-6">
            <li className="rounded-3xl bg-gray-900/70 px-10 py-10 md:col-span-2 md:col-start-2 md:px-10 md:py-12">
              <IconChartInfographic
                className="delay-six mb-6 animate-[updown_1.8s_ease-in-out_infinite_alternate] text-primary-300/30"
                size="48"
              />
              <h3 className="flex items-center text-lg font-medium md:text-xl">View report</h3>
              <p className="mt-2 text-base opacity-70">We present standard report, infographics etc</p>
            </li>
            <li className="rounded-3xl bg-gray-900/70 px-10 py-10 md:col-span-2 md:px-10 md:py-12">
              <IconRepeat
                className="delay-eight mb-6 animate-[updown_2s_ease-in-out_infinite_alternate] text-primary-300/30"
                size="48"
              />
              <h3 className="flex items-center text-lg font-medium md:text-xl">Repeat</h3>
              <p className="mt-2 text-base opacity-70">We are building the generative AI for Africa's data</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;

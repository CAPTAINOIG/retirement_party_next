import React from 'react';
import {
  IconChartInfographic,
  IconDatabase,
  IconFileText,
  IconMessageChatbot,
  IconUserCheck
} from "@tabler/icons-react";

const Services = () => {
  return (
    <div id="services" className="bg-[#11100f] text-zinc-100 py-28 sm:py-40 rounded-[1200px/.5%]">
      <section aria-label="Our services" className="container">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight">
            Our products
          </h2>
          <p className="mt-4 text-lg">
            Save time & money with Statisense
          </p>
        </div>
        <div className="space-y-8">
          <ul role="list" className="mt-16 grid md:grid-cols-3 gap-8">
            <li className="rounded-2xl bg-slate-700/30 px-10 py-14">
              <IconMessageChatbot className="mb-8 text-primary-300/60" size="48"/>
              <h3 className="font-medium text-2xl">
                Sensii
              </h3>
              <p className="mt-4 text-base opacity-80">
                An advanced embedded AI assistant which provides
                insights for businesses, governments and consumers. We have also embedded
              </p>
            </li>
            <li className="rounded-2xl bg-slate-700/30 px-10 py-14">
              <IconUserCheck className="mb-8 text-primary-300/60" size="48"/>
              <h3 className="font-medium text-2xl">
                BeTrue
              </h3>
              <p className="mt-4 text-base opacity-80">
                Betrue is an eligibility platform which provides over 400
                configurable nodes, to make better customer and staff decisions
              </p>
            </li>
            <li className="rounded-2xl bg-slate-700/30 px-10 py-14">
              <IconFileText className="mb-8 text-primary-300/60" size="48"/>
              <h3 className="font-medium text-2xl">
                Statement
              </h3>
              <p className="mt-4 text-base opacity-80">
                Our elite bank statement analytics provides unseen before angles for
                cashflow evaluation for credit and banking decision.
              </p>
            </li>
          </ul>
          <ul role="list" className="grid md:grid-cols-2 gap-8">
            <li className="rounded-2xl bg-slate-700/30 px-10 py-14">
              <IconChartInfographic className="mb-8 text-primary-300/60" size="48"/>
              <h3 className="font-medium text-2xl">
                Insights
              </h3>
              <p className="mt-4 text-base opacity-80">
                We provide insights for public and private data publshed through our
                social channels in a dependable and coincise way.
              </p>
            </li>
            <li className="rounded-2xl bg-slate-700/30 px-10 py-14">
              <IconDatabase className="mb-8 text-primary-300/60" size="48"/>
              <h3 className="font-medium text-2xl">
                MineMe
              </h3>
              <p className="mt-4 text-base opacity-80">
                We sit on your data and derive insights for your to make sense of your
                customers, presented in a simplified easy to engage format
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Services;

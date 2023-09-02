import React from 'react';
import { IconArrowSharpTurnRight, IconFilePower, IconLayout2, IconReportSearch } from "@tabler/icons-react";
import Card from "@/components/global/Card";

const WhatWeDo = () => {
  return (
    <div id="services">
      <section aria-label="Our services" className="container">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 relative">
            <div className="sticky top-36 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
                What we do
              </h2>
              <p className="mt-2 md:mt-4 text-lg">
                Unveiling Financial Insights with Statisense AI
              </p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="subtle-shadow px-10 md:px-12 py-12 md:py-14">
                <IconArrowSharpTurnRight className="mb-8 text-red-600/20" size="60"/>
                <h3 className="font-semibold text-xl">
                  Harness Cutting-Edge AI
                </h3>
                <p className="mt-4 text-base opacity-80">
                  Statisense utilizes advanced AI technology to decode intricate financial reports and bank statements,
                  revealing deeper insights that traditional analysis might miss.
                </p>
              </Card>
              <Card className="subtle-shadow px-10 md:px-12 py-12 md:py-14">
                <IconReportSearch className="mb-8 text-blue-600/20" size="60"/>
                <h3 className="font-semibold text-xl">
                  Spot Trends and Anomalies
                </h3>
                <p className="mt-4 text-base opacity-80">
                  Our powerful algorithms uncover hidden trends, anomalies, and opportunities within complex financial
                  data, empowering you to make more informed decisions.
                </p>
              </Card>
              <Card className="subtle-shadow px-10 md:px-12 py-12 md:py-14">
                <IconLayout2 className="mb-8 text-cyan-600/20" size="60"/>
                <h3 className="font-semibold text-xl">
                  Simplifying Financial Complexity
                </h3>
                <p className="mt-4 text-base opacity-80">
                  Navigating the complexities of finance can be daunting. Statisense AI simplifies the process by
                  providing clear, actionable insights that help you confidently navigate the financial landscape.
                </p>
              </Card>
              <Card className="subtle-shadow px-10 md:px-12 py-12 md:py-14">
                <IconFilePower className="mb-8 text-teal-600/20" size="60"/>
                <h3 className="font-semibold text-xl">
                  Empower Your Financial Strategy
                </h3>
                <p className="mt-4 text-base opacity-80">
                  With Statisense AI, you're not just receiving data – you're gaining valuable insights that enable you
                  to navigate financial intricacies with confidence, seize opportunities, and stay ahead.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;

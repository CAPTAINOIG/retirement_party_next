import React from 'react';
import { IconAnalyze, IconBuildingBank, IconCircleDot, IconLeaf } from '@tabler/icons-react';
import Card from '@/components/global/Card';

const WhatWeDo = () => {
  return (
    <div id="services">
      <section aria-label="Our services" className="container">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="relative lg:col-span-4">
            <div className="sticky top-36 text-center lg:text-left">
              <h2 className="text-3xl font-medium tracking-tight md:text-5xl">Why choose us</h2>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="subtle-shadow px-10 py-12 md:px-12 md:py-14">
                <IconCircleDot className="mb-8 text-red-600/20" size="60" />
                <h3 className="text-xl font-semibold">Accuracy</h3>
                <p className="mt-4 opacity-80">
                  Our AI-driven analysis ensures precision and reliability, eliminating the possibility of human error.
                </p>
              </Card>
              <Card className="subtle-shadow px-10 py-12 md:px-12 md:py-14">
                <IconBuildingBank className="mb-8 text-blue-600/20" size="60" />
                <h3 className="text-xl font-semibold">Expertise</h3>
                <p className="mt-4 opacity-80">
                  Our AI multipurpose chatbot acts as a 24/7 virtual assistant, connecting you with financial experts
                  who provide real-time guidance and answers to your queries.
                </p>
              </Card>
              <Card className="subtle-shadow px-10 py-12 md:px-12 md:py-14">
                <IconLeaf className="mb-8 text-cyan-600/20" size="60" />
                <h3 className="text-xl font-semibold">Efficiency</h3>
                <p className="mt-4 opacity-80">
                  Say goodbye to time-consuming manual analysis. With our platform, you can expedite decision-making and
                  seize opportunities swiftly.
                </p>
              </Card>
              <Card className="subtle-shadow px-10 py-12 md:px-12 md:py-14">
                <IconAnalyze className="mb-8 text-teal-600/20" size="60" />
                <h3 className="text-xl font-semibold">Innovation</h3>
                <p className="mt-4 opacity-80">
                  We continually evolve our offerings, staying on the cutting edge of AI advancements to provide you
                  with the most powerful insights.
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

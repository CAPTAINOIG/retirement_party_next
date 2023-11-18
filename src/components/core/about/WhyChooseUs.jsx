import React from 'react';
import { IconAnalyze, IconBuildingBank, IconCircleDot, IconLeaf } from '@tabler/icons-react';
import Card from '@/components/global/Card';

const WhatWeDo = () => {
  return (
    <div id="services">
      <section aria-label="Our services" className="container">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 relative">
            <div className="sticky top-36 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight">Why choose us</h2>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="subtle-shadow px-10 md:px-12 py-12 md:py-14">
                <IconCircleDot className="mb-8 text-red-600/20" size="60" />
                <h3 className="font-semibold text-xl">Accuracy</h3>
                <p className="mt-4 opacity-80">
                  Our AI-driven analysis ensures precision and reliability, eliminating the possibility of human error.
                </p>
              </Card>
              <Card className="subtle-shadow px-10 md:px-12 py-12 md:py-14">
                <IconBuildingBank className="mb-8 text-blue-600/20" size="60" />
                <h3 className="font-semibold text-xl">Expertise</h3>
                <p className="mt-4 opacity-80">
                  Our AI multipurpose chatbot acts as a 24/7 virtual assistant, connecting you with financial experts
                  who provide real-time guidance and answers to your queries.
                </p>
              </Card>
              <Card className="subtle-shadow px-10 md:px-12 py-12 md:py-14">
                <IconLeaf className="mb-8 text-cyan-600/20" size="60" />
                <h3 className="font-semibold text-xl">Efficiency</h3>
                <p className="mt-4 opacity-80">
                  Say goodbye to time-consuming manual analysis. With our platform, you can expedite decision-making and
                  seize opportunities swiftly.
                </p>
              </Card>
              <Card className="subtle-shadow px-10 md:px-12 py-12 md:py-14">
                <IconAnalyze className="mb-8 text-teal-600/20" size="60" />
                <h3 className="font-semibold text-xl">Innovation</h3>
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

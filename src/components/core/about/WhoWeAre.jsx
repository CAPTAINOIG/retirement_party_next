import React from 'react';
import Card from '@/components/global/Card';

const WhoWeAre = () => {
  return (
    <section>
      <div aria-label="Our services" className="container">
        <div className="grid gap-6 md:gap-10 lg:grid-cols-12">
          <div className="relative lg:col-span-4">
            <div className="sticky top-36 text-center lg:text-left">
              <h2 className="text-3xl font-medium tracking-tight md:text-5xl">Who are we</h2>
            </div>
          </div>
          <div className="lg:col-span-8">
            <p className="px-2 text-center md:text-left">
              Statisense is a pioneering AI data company at the forefront of transforming how businesses navigate their
              financial data. With a commitment to innovation, accuracy, and unparalleled insights, we specialize in
              analyzing financial reports, bank statements, and offer an AI chatbot, all geared towards empowering you
              with the knowledge you need to make informed decisions.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <Card className="subtle-shadow p-10">
                <p>
                  <b>Our mission</b> is simple: leverage AI to make complex financial data understandable and accessible
                  for businesses of all sizes, empowering informed decisions. We're here to simplify the overwhelming
                  task of deciphering financial data.
                </p>
              </Card>
              <Card className="subtle-shadow p-10">
                <p>
                  <b>Our vision</b> is straightforward yet impactful: empower businesses with essential knowledge and
                  insights for financial success in a fast-paced world. We're dedicated to bridging the data-action gap,
                  ensuring businesses thrive and adapt.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

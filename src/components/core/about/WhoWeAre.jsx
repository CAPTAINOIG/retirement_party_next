import React from 'react';

const WhoWeAre = () => {
  return (
    <div>
      <section aria-label="Our services" className="container">
        <div className="grid lg:grid-cols-12 gap-6 md:gap-10">
          <div className="lg:col-span-4 relative">
            <div className="sticky top-36 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
                Who are we
              </h2>
            </div>
          </div>
          <div className="lg:col-span-8 text-lg">
            <p className="text-center md:text-left">
              Statisense is a pioneering AI data company at the forefront of transforming how businesses navigate their
              financial data. With a commitment to innovation, accuracy, and unparalleled insights, we specialize in
              analyzing financial reports, bank statements, and offer an AI chatbot, all geared towards empowering you
              with the knowledge you need to make informed decisions.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="border rounded-3xl p-10">
                <p>
                  <b>Our mission</b> is simple: leverage AI to make complex financial data understandable and accessible
                  for businesses of all sizes, empowering informed decisions. We're here to simplify the overwhelming
                  task of deciphering financial data.
                </p>
              </div>
              <div className="border rounded-3xl p-10">
                <p>
                  <b>Our vision</b> is straightforward yet impactful: empower businesses with essential knowledge and
                  insights for financial success in a fast-paced world. We're dedicated to bridging the data-action gap,
                  ensuring businesses thrive and adapt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;

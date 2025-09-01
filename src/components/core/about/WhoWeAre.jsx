import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Card } from '@heroui/react';

const WhoWeAre = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef}>
      <div aria-label="Our services" className="container">
        <div className="grid gap-6 md:gap-10 lg:grid-cols-12">
          <div className="relative lg:col-span-4">
            <div className="sticky top-36 text-center lg:text-left">
              <motion.h2
                className="text-3xl font-semibold tracking-tight md:text-5xl"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                Who are we
              </motion.h2>
            </div>
          </div>
          <div className="lg:col-span-8">
            <motion.p
              className="text-default-700 px-2 text-center text-lg leading-relaxed md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              Statisense is a pioneering AI data company at the forefront of transforming how businesses navigate their
              financial data. With a commitment to innovation, accuracy, and unparalleled insights, we specialize in
              analyzing financial reports, bank statements, and offer an AI chatbot, all geared towards empowering you
              with the knowledge you need to make informed decisions.
            </motion.p>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              >
                <Card className="bg-default-100 p-10" shadow="none">
                  <p className="text-default-700 text-base leading-relaxed">
                    <span className="font-semibold text-teal-600 dark:text-teal-400">Our mission</span> is simple:
                    leverage AI to make complex financial data understandable and accessible for businesses of all
                    sizes, empowering informed decisions. We're here to simplify the overwhelming task of deciphering
                    financial data.
                  </p>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              >
                <Card className="bg-default-100 p-10" shadow="none">
                  <p className="text-default-700 text-base leading-relaxed">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Our vision</span> is
                    straightforward yet impactful: empower businesses with essential knowledge and insights for
                    financial success in a fast-paced world. We're dedicated to bridging the data-action gap, ensuring
                    businesses thrive and adapt.
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

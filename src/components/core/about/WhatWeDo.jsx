import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { IconArrowSharpTurnRight, IconFilePower, IconLayout2, IconReportSearch } from '@tabler/icons-react';
import { Card } from '@heroui/react';

const services = [
  {
    icon: IconArrowSharpTurnRight,
    color: 'text-red-600/30 dark:text-red-400/40',
    title: 'Harness Cutting-Edge AI',
    description:
      'Statisense utilizes advanced AI technology to decode intricate financial reports and bank statements, revealing deeper insights that traditional analysis might miss.',
  },
  {
    icon: IconReportSearch,
    color: 'text-blue-600/30 dark:text-blue-400/40',
    title: 'Spot Trends and Anomalies',
    description:
      'Our powerful algorithms uncover hidden trends, anomalies, and opportunities within complex financial data, empowering you to make more informed decisions.',
  },
  {
    icon: IconLayout2,
    color: 'text-cyan-600/30 dark:text-cyan-400/40',
    title: 'Simplifying Financial Complexity',
    description:
      'Navigating the complexities of finance can be daunting. Statisense AI simplifies the process by providing clear, actionable insights that help you confidently navigate the financial landscape.',
  },
  {
    icon: IconFilePower,
    color: 'text-teal-600/30 dark:text-teal-400/40',
    title: 'Empower Your Financial Strategy',
    description:
      "With Statisense AI, you're not just receiving data – you're gaining valuable insights that enable you to navigate financial intricacies with confidence, seize opportunities, and stay ahead.",
  },
];

const WhatWeDo = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <div id="services" ref={sectionRef}>
      <section aria-label="Our services" className="container">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="relative lg:col-span-4">
            <div className="sticky top-36 text-center lg:text-left">
              <motion.h2
                className="text-3xl font-semibold tracking-tight md:text-5xl"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                What we do
              </motion.h2>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="grid gap-8 md:grid-cols-2">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.1, ease: 'easeOut' }}
                  >
                    <Card className="bg-default-100 h-full px-10 py-12 md:px-12 md:py-14" shadow="none">
                      <IconComponent className={`mb-8 ${service.color}`} size="60" />
                      <h3 className="text-default-900 text-xl font-semibold">{service.title}</h3>
                      <p className="text-default-700 mt-4 text-base leading-relaxed">{service.description}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;

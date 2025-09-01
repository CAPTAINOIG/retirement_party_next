import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { IconAnalyze, IconBuildingBank, IconCircleDot, IconLeaf } from '@tabler/icons-react';
import { Card } from '@heroui/react';

const reasons = [
  {
    icon: IconCircleDot,
    color: 'text-red-600/30 dark:text-red-400/40',
    title: 'Accuracy',
    description:
      'Our AI-driven analysis ensures precision and reliability, eliminating the possibility of human error.',
  },
  {
    icon: IconBuildingBank,
    color: 'text-blue-600/30 dark:text-blue-400/40',
    title: 'Expertise',
    description:
      'Our AI multipurpose chatbot acts as a 24/7 virtual assistant, connecting you with financial experts who provide real-time guidance and answers to your queries.',
  },
  {
    icon: IconLeaf,
    color: 'text-cyan-600/30 dark:text-cyan-400/40',
    title: 'Efficiency',
    description:
      'Say goodbye to time-consuming manual analysis. With our platform, you can expedite decision-making and seize opportunities swiftly.',
  },
  {
    icon: IconAnalyze,
    color: 'text-teal-600/30 dark:text-teal-400/40',
    title: 'Innovation',
    description:
      'We continually evolve our offerings, staying on the cutting edge of AI advancements to provide you with the most powerful insights.',
  },
];

const WhyChooseUs = () => {
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
                Why choose us
              </motion.h2>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="grid gap-8 md:grid-cols-2">
              {reasons.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                  >
                    <Card
                      className="bg-default-100 h-full px-10 py-12 transition-transform md:px-12 md:py-14"
                      shadow="none"
                    >
                      <IconComponent className={`mb-8 ${reason.color}`} size="60" />
                      <h3 className="text-default-900 text-xl font-semibold">{reason.title}</h3>
                      <p className="text-default-700 mt-4 leading-relaxed">{reason.description}</p>
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

export default WhyChooseUs;

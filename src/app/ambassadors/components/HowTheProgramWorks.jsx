'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const HowTheProgramWorks = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const steps = [
    {
      number: '1',
      title: ' Apply',
      description: 'Submit your application through the form.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '2',
      title: ' Selection',
      description: 'Our team reviews applications and selects student partners across universities.',
      color: 'from-purple-500 to-violet-500',
    },
    {
      number: '3',
      title: ' Onboarding',
      description: 'Selected partners receive training, resources, and partner materials.',
      color: 'from-teal-500 to-green-500',
    },
    {
      number: '4',
      title: 'Lead on Campus',
      description: 'Start building the Immortal community in your school.',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div ref={sectionRef} className="relative w-full bg-background py-20 text-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            How the Program Works
            
          </h2>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.1 * index, ease: 'easeOut' }}
                  className="relative text-left"
                >
                  {/* Step number with gradient */}
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${step.color} mb-6`}
                  >
                    <span className="text-xl font-bold text-foreground">{step.number}</span>
                  </div>

                  {/* Content */}
                  <h3 className="mb-4 text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowTheProgramWorks;

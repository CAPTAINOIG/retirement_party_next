'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      number: '1',
      title: 'Sign Up',
      description: 'Tell us about yourself and your creative style.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      number: '2',
      title: 'Get Resources',
      description: 'Receive access to our data sets, stories, and creator toolkit.',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      number: '3',
      title: 'Create & Share',
      description: 'Use your creativity to make data engaging for your audience.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '4',
      title: 'Grow With Us',
      description: 'Build visibility, network, and opportunities in the data ecosystem.',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section ref={ref} className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
          How It <span className="bg-linear-to-r from-teal-600 to-blue-800 bg-clip-text text-transparent">Works</span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          Join our creator community in four simple steps and start transforming data into engaging content
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
      >
        {steps.map((step) => {
          return (
            <motion.div key={step.number} variants={cardVariants} className="group relative h-full">
              <div className="bg-default-50/60 relative h-full rounded-2xl px-8 py-10 backdrop-blur-sm">
                {/* Step number with gradient */}
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${step.color} mb-6`}
                >
                  <span className="text-xl font-bold text-white">{step.number}</span>
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                <p className="leading-relaxed opacity-80">{step.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default HowItWorksSection;


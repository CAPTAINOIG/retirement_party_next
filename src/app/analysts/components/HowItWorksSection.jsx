'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { TbUserPlus, TbClipboardList, TbUsers, TbCoin } from 'react-icons/tb';

const HowItWorksSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const steps = [
    {
      icon: TbUserPlus,
      step: '1',
      title: 'Join our analyst community',
      description: 'Sign up and become part of our growing network of data analysts.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: TbClipboardList,
      step: '2',
      title: 'Get assigned to projects',
      description: 'Receive real-world data projects that match your skills and interests.',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: TbUsers,
      step: '3',
      title: 'Collaborate, learn, and contribute',
      description: 'Work with other analysts, share knowledge, and deliver impactful results.',
      color: 'from-teal-500 to-green-500',
    },
    {
      icon: TbCoin,
      step: '4',
      title: 'Earn compensation for your work',
      description: 'Get rewarded for your contributions and build your professional portfolio.',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div ref={sectionRef} className="dark relative w-full bg-black py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
          >
            How It Works
          </motion.h2>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.1 * index, ease: 'easeOut' }}
                  className="relative text-center"
                >
                  {/* Step Number */}
                  <div
                    className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${step.color} text-2xl font-bold text-white`}
                  >
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <IconComponent size={48} className="mx-auto text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-4 text-xl font-bold text-white">{step.title}</h3>
                  <p className="opacity-80 text-base leading-relaxed">{step.description}</p>

                  {/* Connecting Line (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-8 left-full hidden w-full lg:block">
                      <div className="h-0.5 w-full bg-gradient-to-r from-gray-600 to-gray-800"></div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;

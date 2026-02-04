'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { TbSchool, TbRocket, TbTarget, TbUsers } from 'react-icons/tb';

const WhoThisIsForSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const targetAudience = [
    {
      icon: TbSchool,
      title: 'Nigerian Students',
      description: 'Curious about data, tech, or business',
      color: 'bg-blue-600',
    },
    {
      icon: TbRocket,
      title: 'Beginners',
      description: 'With zero data background',
      color: 'bg-purple-600',
    },
    {
      icon: TbTarget,
      title: 'Career-Focused Students',
      description: 'Who want skills that actually increase employability',
      color: 'bg-orange-600',
    },
    {
      icon: TbUsers,
      title: 'Action-Oriented Learners',
      description: 'Tired of learning without clear outcomes',
      color: 'bg-teal-600',
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
            Who This Is For
          </motion.h2>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {targetAudience.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.1 * index, ease: 'easeOut' }}
                className="bg-default-50/60 group relative rounded-2xl px-8 py-10 text-center backdrop-blur-sm transition-all duration-300 hover:bg-default-100/60"
              >
                {/* Icon */}
                <div className={`inline-flex rounded-full p-4 ${audience.color} mb-6`}>
                  <IconComponent size={28} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-white">
                  {audience.title}
                </h3>
                <p className="text-base leading-relaxed opacity-80">{audience.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <p className="text-2xl font-bold leading-relaxed md:text-3xl">
            If you can think, learn, and commit —{' '}
            <span className="opacity-70">
              this program is for you.
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhoThisIsForSection;

'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { TbTrendingUp, TbUsers, TbBrandYoutube, TbCoin } from 'react-icons/tb';

const WhyJoinSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const benefits = [
    {
      icon: TbTrendingUp,
      title: 'Grow Your Audience',
      description: 'Leverage our platform to reach thousands of data enthusiasts and expand your personal brand.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: TbCoin,
      title: 'Earn Real Money',
      description:
        'Get paid for your content creation and data storytelling skills through our revenue sharing program.',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: TbUsers,
      title: 'Join a Community',
      description: 'Connect with like-minded creators and data professionals in our exclusive creator community.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: TbBrandYoutube,
      title: 'Access Premium Tools',
      description: 'Get exclusive access to advanced analytics tools and content creation resources.',
      color: 'from-teal-500 to-green-500',
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
            Why Join{' '}
            <span className="bg-linear-to-r from-teal-600 to-blue-800 bg-clip-text text-transparent">Statisense?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-default-500 mx-auto max-w-3xl text-xl leading-relaxed md:text-2xl"
          >
            Transform your passion for data into a thriving career with exclusive benefits and opportunities.
          </motion.p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.1 * index, ease: 'easeOut' }}
                className={`bg-default-50/60 group relative rounded-2xl px-10 py-8 backdrop-blur-sm`}
              >
                {/* Icon */}
                <div className={`inline-flex rounded-full bg-gradient-to-r p-3 ${benefit.color} mb-6`}>
                  <IconComponent size={24} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-4 text-2xl font-bold text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent">
                  {benefit.title}
                </h3>
                <p className="text-default-400 text-lg leading-relaxed">{benefit.description}</p>

                {/* Hover effect overlay */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${benefit.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyJoinSection;


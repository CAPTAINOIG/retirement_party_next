'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { TbBriefcase, TbUsers, TbTrendingUp, TbPresentation } from 'react-icons/tb';

const WhyJoinSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const benefits = [
    {
      icon: TbUsers,
      title: 'City Meetups',
      description: 'Connect with fellow data analysts, enthusiasts, and innovators in your city.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: TbPresentation,
      title: 'Interactive Sessions',
      description: 'Learn from industry leaders about the latest tools, trends, and techniques in data analysis and storytelling.',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: TbBriefcase,
      title: 'Hands-on Demos',
      description: 'Experience how Statisense is building the future of data visualization and decision-making in Africa.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: TbUsers,
      title: 'Networking & Collaboration',
      description: 'Build relationships that go beyond the event — with communities, organizations, and opportunities.',
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
            What to Expect
          </motion.h2>
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

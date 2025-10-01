'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { TbUsers, TbChartBar, TbSchool } from 'react-icons/tb';

const WhoCanJoinSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const eligibilityGroups = [
    {
      icon: TbUsers,
      title: 'Content Creators',
      description:
        'Influencers, YouTubers, podcasters, and social media creators looking to add data-driven insights to their content.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: TbChartBar,
      title: 'Data Enthusiasts & Storytellers',
      description:
        'Analysts, journalists, and professionals who want to share compelling data stories with broader audiences.',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: TbSchool,
      title: 'Students & Professionals',
      description:
        'Emerging creators and professionals looking to grow their personal brand through data-driven content.',
      color: 'from-teal-500 to-green-500',
    },
  ];

  return (
    <div ref={sectionRef} className="dark relative w-full bg-black py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
            >
              Who Can{' '}
              <span className="bg-linear-to-r from-teal-600 to-blue-800 bg-clip-text text-transparent">Join?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-default-500 mx-auto max-w-3xl text-xl leading-relaxed md:text-2xl"
            >
              Our program is open to creators from all backgrounds who share a passion for making data accessible and
              engaging.
            </motion.p>
          </div>

          {/* Eligibility Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {eligibilityGroups.map((group, index) => {
              const IconComponent = group.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.1 * index, ease: 'easeOut' }}
                  className={`bg-default-50/60 group relative rounded-2xl px-10 py-12 text-center backdrop-blur-sm`}
                >
                  {/* Icon */}
                  <div className={`inline-flex rounded-full bg-gradient-to-r p-4 ${group.color} mb-6`}>
                    <IconComponent size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-4 text-2xl font-bold text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent">
                    {group.title}
                  </h3>
                  <p className="text-default-400 text-lg leading-relaxed">{group.description}</p>

                  {/* Hover effect overlay */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${group.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="mt-16 text-center"
          >
            <div className="border-default-200/20 bg-default-50/5 mx-auto max-w-4xl rounded-2xl border p-8 backdrop-blur-sm">
              <p className="text-default-400 text-lg leading-relaxed md:text-xl">
                <span className="font-semibold text-white">No experience required!</span> Whether you're just starting
                out or already established, we provide the training, resources, and support you need to create
                compelling data-driven content.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhoCanJoinSection;

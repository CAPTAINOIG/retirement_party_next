'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { TbTarget, TbBriefcase, TbSchool, TbHeart } from 'react-icons/tb';

const WhoCanJoinSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const targetAudience = [
    {
      icon: TbTarget,
      title: 'Aspiring Data Analysts',
      description: 'Seeking practical experience',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: TbBriefcase,
      title: 'Professionals',
      description: 'Looking to sharpen their skills',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: TbSchool,
      title: 'Students',
      description: 'Eager to break into the data industry',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: TbHeart,
      title: 'Data Enthusiasts',
      description: "Passionate about Africa's data future",
      color: 'from-purple-500 to-pink-500',
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
            Who's This For?
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
                className={`bg-default-50/60 group relative rounded-2xl px-8 py-10 text-center backdrop-blur-sm`}
              >
                {/* Icon */}
                <div className={`inline-flex rounded-full bg-gradient-to-r p-4 ${audience.color} mb-6`}>
                  <IconComponent size={28} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent">
                  {audience.title}
                </h3>
                <p className="text-default-400 text-base leading-relaxed">{audience.description}</p>

                {/* Hover effect overlay */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${audience.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhoCanJoinSection;

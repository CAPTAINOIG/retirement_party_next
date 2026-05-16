'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { TbTarget, TbBriefcase, TbSchool, TbTrendingUp } from 'react-icons/tb';

const WhoCanJoinSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const targetAudience = [
       {
         icon: TbTarget,
      title: "Heads of Data",
      description: "CDOs, Heads of Analytics, Heads of Business Intelligence — the people who carry the dashboard and answer for the number.",
      color: 'from-orange-500 to-red-500',
    },
    {
      title: "Finance Leaders", 
      description: "CFOs, Finance Directors, Group Treasurers, FP&A leaders — the people who wait for the number and pay for the delay.",
      icon: TbBriefcase,
      color: 'from-blue-500 to-indigo-500',
    },
    {
      title: "Tech Leaders",
      description: "CTOs, CIOs, VPs of Engineering, Heads of Digital Transformation — the people who own the stack and choose what stays in it.",
      icon: TbTrendingUp,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: "Professionals & Business Owners",
      description: "Data Analysts, Founders, Entrepreneurs, Data Students, Community Members, AI Advocates. The people who love Data.",
      icon: TbSchool,
      color: 'from-purple-500 to-pink-500',
    },
  ]

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
            The Guest List
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: .8, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mx-auto max-w-3xl text-xl leading-relaxed md:text-2xl"
          >
            If your title is on this list, this Event is for you.
          </motion.p>
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
                <p className="opacity-80 text-base leading-relaxed">{audience.description}</p>

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

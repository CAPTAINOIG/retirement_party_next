'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Button, useDisclosure } from '@heroui/react';
import { TbDatabase, TbBulb, TbBriefcase, TbTrendingUp, TbChevronRight } from 'react-icons/tb';
import CampusRegistrationDrawer from './CampusRegistrationForm';

const WhatYouGainSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const benefits = [
    {
      icon: TbDatabase,
      title: 'Hands-on Data Analysis Experience',
      description:
        'Work directly with industry-relevant tools and datasets used by professionals — not classroom simulations.',
      color: 'bg-blue-600',
    },
    {
      icon: TbBulb,
      title: 'Strong Analytical & Problem-Solving Skills',
      description: 'Learn how to think in patterns, interpret trends, and solve real problems with data.',
      color: 'bg-purple-600',
    },
    {
      icon: TbBriefcase,
      title: 'Internship Opportunities',
      description:
        'Top-performing participants will be considered for internship placements with partner companies.',
      color: 'bg-orange-600',
    },
    {
      icon: TbTrendingUp,
      title: 'Full-Time Employment Pathways',
      description:
        "Exceptional participants won't just learn — they'll be recommended for full-time roles where data skills are in demand.",
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
            What You'll Gain
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
                className="bg-default-50/60 group relative rounded-2xl px-10 py-8 backdrop-blur-sm transition-all duration-300 hover:bg-default-100/60"
              >
                {/* Icon */}
                <div className={`inline-flex rounded-full p-3 ${benefit.color} mb-6`}>
                  <IconComponent size={24} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-4 text-2xl font-bold text-white">
                  {benefit.title}
                </h3>
                <p className="text-lg leading-relaxed opacity-80">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="mt-12 text-center"
        >
          <Button
            onPress={onOpen}
            size="lg"
            color="primary"
            radius="full"
            className="px-10 py-6 text-lg"
            endContent={<TbChevronRight size="20" />}
          >
            Register Your Interest
          </Button>
        </motion.div>
      </div>

      <CampusRegistrationDrawer isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default WhatYouGainSection;

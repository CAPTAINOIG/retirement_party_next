'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { FaArrowRight, FaStar, FaUsers, FaChartLine } from 'react-icons/fa';

const CallToActionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: FaUsers, value: '500+', label: 'Active Creators' },
    { icon: FaChartLine, value: '1M+', label: 'Data Points Visualized' },
    { icon: FaStar, value: '4.9', label: 'Creator Satisfaction' },
  ];

  return (
    <section ref={ref} className="mx-auto mt-24 mb-16 max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Main CTA Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-900 via-gray-900 to-black p-12 md:p-16"
      >
        {/* Background Effects */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" /> */}
        <div className="absolute top-0 left-1/4 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="mb-6 text-4xl font-bold md:text-6xl">
              Ready to{' '}
              <span className="bg-linear-to-r from-teal-600 to-blue-800 bg-clip-text text-transparent">Transform</span>{' '}
              Data?
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300 md:text-2xl">
              Turn numbers into narratives. Be part of the first wave of creators shaping data storytelling in Africa.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="mb-2 text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              as={Link}
              href="#apply"
              size="lg"
              className="rounded-full px-8 py-4 font-semibold"
              endContent={<FaArrowRight className="ml-2" />}
            >
              Join the Creators Program Today
            </Button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-sm text-gray-400"
          >
            <p>🚀 Early access • 💰 Revenue sharing • 🎯 Exclusive resources</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Secondary CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="mt-16 text-center"
      >
        <div className="rounded-3xl border border-gray-800 bg-gray-900/30 px-10 py-16 backdrop-blur-sm">
          <h3 className="mb-4 text-3xl font-semibold text-white">Have Questions?</h3>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-gray-400">
            Our team is here to help you understand how the Statisense Creators Program can accelerate your data
            storytelling journey.
          </p>
          <Button as={Link} href="/contact" variant="flat" size="lg" className="rounded-full px-8 py-4 font-semibold">
            Get in Touch
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToActionSection;


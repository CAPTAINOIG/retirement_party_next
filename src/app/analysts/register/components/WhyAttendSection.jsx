'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const WhyAttendSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <div ref={sectionRef} className="dark relative w-full bg-black py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-16 text-center text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
          >
            🚀 What to <span>Expect</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mb-12 text-center"
          >
            <p className="text-default-400 mx-auto max-w-4xl text-lg leading-relaxed md:text-xl">
              Our event is designed to give you practical knowledge, hands-on experience, and expert perspectives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="grid gap-8 md:grid-cols-3"
          >
            {/* Data Storytelling */}
            <div className="bg-default-50/60 rounded-2xl p-8 backdrop-blur-sm">
              <div className="mb-4 text-4xl">📊</div>
              <h3 className="mb-4 text-xl font-semibold text-white">Data Storytelling</h3>
              <p className="text-default-400">
                Learn how to turn raw data into compelling insights that inspire action.
              </p>
            </div>

            {/* Live Dashboard Demo */}
            <div className="bg-default-50/60 rounded-2xl p-8 backdrop-blur-sm">
              <div className="mb-4 text-4xl">📈</div>
              <h3 className="mb-4 text-xl font-semibold text-white">Live Dashboard Demo</h3>
              <p className="text-default-400">
                See analytics in real-time and discover how dashboards drive smarter decisions.
              </p>
            </div>

            {/* Panel Discussion */}
            <div className="bg-default-50/60 rounded-2xl p-8 backdrop-blur-sm">
              <div className="mb-4 text-4xl">🎤</div>
              <h3 className="mb-4 text-xl font-semibold text-white">Panel Discussion</h3>
              <p className="text-default-400">
                Hear from industry experts as they share experiences, opportunities, and challenges in the data-driven
                world.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyAttendSection;

'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const IntroSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <div ref={sectionRef} className="dark relative w-full bg-black py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
          >
            📌 Why <span>Attend?</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-default-400 space-y-6 text-lg leading-relaxed md:text-xl"
          >
            <p>
              The world runs on data, but the real power lies in transforming numbers into decisions that matter. Data
              Analyst Event 2025 brings together professionals, enthusiasts, and thought leaders to explore the future
              of analytics, storytelling, and innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;

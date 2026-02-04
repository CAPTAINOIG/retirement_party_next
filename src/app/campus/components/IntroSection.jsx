'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const IntroSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <div ref={sectionRef} className="dark relative w-full bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-12 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              What This Program Is About
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="space-y-6 text-center"
          >
            <p className="text-xl leading-relaxed opacity-80 md:text-2xl">
              The world is being rebuilt on data. Companies don't guess anymore — they analyze, predict, and decide
              with confidence.
            </p>
            <p className="text-xl leading-relaxed opacity-80 md:text-2xl">
              This program exists to ensure Nigerian students are not left behind.
            </p>
            <p className="text-xl leading-relaxed opacity-90 md:text-2xl font-semibold mt-8">
              Through Immortal AI's practical training framework, participants will learn how to:
            </p>
          </motion.div>

          {/* Key Learning Points */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {[
              'Understand and work with real-world datasets',
              'Ask the right business questions with data',
              'Turn raw numbers into insights that drive decisions',
            ].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                className="flex flex-col items-center gap-4 rounded-xl bg-default-50/60 p-6 text-center backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 text-lg font-bold text-white">
                  {index + 1}
                </div>
                <p className="text-lg leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;

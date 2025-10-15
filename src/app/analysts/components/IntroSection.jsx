'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const IntroSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <div ref={sectionRef} className="dark relative w-full bg-black py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">About the Tour</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-center space-y-6"
          >
            <p className="text-default-400 text-xl leading-relaxed md:text-2xl">
              We're taking data beyond the screens — to the streets.
            </p>
            <p className="text-default-400 text-xl leading-relaxed md:text-2xl">
              At Statisense, we believe data isn't just numbers. It's a language that connects people, drives policy, and transforms communities.
            </p>
            <p className="text-default-400 text-xl leading-relaxed md:text-2xl">
              "Data on the Road" is our continent-wide tour designed to bridge the gap between data and people — by engaging with data professionals, hosting live discussions, and showcasing how real insights shape real impact.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;

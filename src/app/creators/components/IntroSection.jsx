'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const IntroSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <div ref={sectionRef} className="dark relative w-full bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8"
          >
            Become a{' '}
            <span className="bg-linear-to-r from-teal-600 to-blue-800 bg-clip-text text-transparent">
              Data Storyteller
            </span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="space-y-6 text-lg md:text-xl text-default-400 leading-relaxed"
          >
            <p>
              The Statisense Creators Program is designed for content creators, data enthusiasts, and storytellers 
              who want to make complex data accessible and engaging for everyone.
            </p>
            
            <p>
              Whether you're building your personal brand, growing your audience, or looking to monetize your 
              expertise, our program provides the tools, resources, and community you need to succeed in the 
              data-driven content landscape.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="mt-12 p-8 rounded-2xl border border-default-200/20 bg-default-50/5 backdrop-blur-sm"
            >
              <p className="text-xl md:text-2xl font-semibold text-white mb-4">
                "Transform data into stories that matter"
              </p>
              <p className="text-default-500">
                Join creators who are already using data to build engaged communities and drive meaningful conversations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
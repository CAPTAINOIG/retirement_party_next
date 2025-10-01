'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const IntroSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <div ref={sectionRef} className="dark relative w-full bg-black py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-default-400 text-2xl leading-relaxed md:text-3xl"
          >
            We believe in building not just skills, but careers and impact. By joining, you're taking a step into a community where growth and recognition go hand in hand.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
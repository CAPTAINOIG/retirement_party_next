'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const WhoShouldAttendSection = () => {
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
            👩‍💻 Who Should <span>Attend?</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="grid gap-8 md:grid-cols-3"
          >
            {/* Data Analysts & Scientists */}
            <div className="bg-default-50/60 rounded-2xl p-8 text-center backdrop-blur-sm">
              <div className="mb-4 text-4xl">📊</div>
              <h3 className="mb-4 text-xl font-semibold text-white">Data Analysts & Scientists</h3>
              <p className="text-default-400">
                Professionals working with data who want to enhance their storytelling and visualization skills.
              </p>
            </div>

            {/* Students & Young Professionals */}
            <div className="bg-default-50/60 rounded-2xl p-8 text-center backdrop-blur-sm">
              <div className="mb-4 text-4xl">🎓</div>
              <h3 className="mb-4 text-xl font-semibold text-white">Students & Young Professionals in Tech</h3>
              <p className="text-default-400">
                Emerging talent looking to break into the data analytics field and build their careers.
              </p>
            </div>

            {/* AI & Analytics Enthusiasts */}
            <div className="bg-default-50/60 rounded-2xl p-8 text-center backdrop-blur-sm">
              <div className="mb-4 text-4xl">🤖</div>
              <h3 className="mb-4 text-xl font-semibold text-white">
                Anyone passionate about the future of AI & Analytics
              </h3>
              <p className="text-default-400">
                Curious minds who want to understand how AI and analytics are shaping the future.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhoShouldAttendSection;


'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const EventDetailsSection = () => {
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
            📅 Event <span>Details</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="grid gap-8 md:grid-cols-3"
          >
            {/* Date */}
            <div className="bg-default-50/60 rounded-2xl p-8 text-center backdrop-blur-sm">
              <div className="mb-4 text-4xl">📅</div>
              <h3 className="mb-4 text-xl font-semibold text-white">Date</h3>
              <p className="text-2xl font-bold opacity-80">7/11/2025</p>
            </div>

            {/* Time */}
            <div className="bg-default-50/60 rounded-2xl p-8 text-center backdrop-blur-sm">
              <div className="mb-4 text-4xl">⏰</div>
              <h3 className="mb-4 text-xl font-semibold text-white">Time</h3>
              <p className="text-2xl font-bold opacity-80">10:00 AM</p>
            </div>

            {/* Venue */}
            <div className="bg-default-50/60 rounded-2xl p-8 text-center backdrop-blur-sm">
              <div className="mb-4 text-4xl">📍</div>
              <h3 className="mb-4 text-xl font-semibold text-white">Venue</h3>
              <p className="text-2xl font-bold opacity-80">Ebonylife Cinemas</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsSection;

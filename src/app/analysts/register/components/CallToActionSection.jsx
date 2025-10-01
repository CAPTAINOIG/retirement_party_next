'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { TbChevronRight } from 'react-icons/tb';

const CallToActionSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <div ref={sectionRef} className="dark relative w-full bg-black py-20 text-white" id="register">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
          >
            🎟️ Register{' '}
            <span className="bg-linear-to-r from-teal-600 to-blue-800 bg-clip-text text-transparent">Now</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="space-y-8"
          >
            <p className="text-default-400 text-lg leading-relaxed md:text-xl">
              Seats are limited! Reserve your spot today and be part of a community that's shaping the future with data.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="mt-12"
            >
              <Button
                as={Link}
                href="#"
                size="lg"
                color="primary"
                radius="full"
                className="px-12 py-8 text-xl"
                endContent={<TbChevronRight size="24" />}
              >
                Register Here
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className="border-default-200/20 bg-default-50/5 mt-16 rounded-2xl border p-8 backdrop-blur-sm"
            >
              <p className="mb-4 text-xl font-semibold text-white md:text-2xl">
                "Join a community shaping the future with data"
              </p>
              <p className="text-default-500">
                Connect with like-minded professionals and discover new opportunities in the world of data analytics.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;

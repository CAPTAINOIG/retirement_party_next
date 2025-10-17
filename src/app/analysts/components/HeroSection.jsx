'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Button, useDisclosure } from '@heroui/react';
import { TbChevronRight } from 'react-icons/tb';
import AnalystsApplicationDrawer from './AnalystsApplicationDrawer';

const HeroSection = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, margin: '-100px' });
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div ref={heroRef} className="dark relative w-full bg-black text-white">
      <div className="relative z-2 container pt-32 md:block">
        <div className="relative py-12 md:pt-10 md:pb-20">
          <div className="overflow-hidden text-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mb-12"
            >
              <img src="/images/logo-icon.png" alt="Statisense logo" className="mx-auto h-12 md:h-16" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-[3.5rem] !leading-[0.9] font-bold tracking-tighter md:text-[5rem] lg:text-[6rem] xl:text-[7rem]"
            >
              <span className="bg-linear-to-r from-teal-600 to-blue-800 bg-clip-text text-transparent">Statisense</span>{' '}
              on the road <br />
              <span>Data analyst tour</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: .8, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed tracking-tight md:text-2xl"
            >
              Join the Statisense team as we hit the road to meet data analysts, storytellers, and innovators across
              Africa — bringing insights, conversations, and opportunities right to your city.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="mt-12"
            >
              <Button
                onPress={onOpen}
                size="lg"
                color="primary"
                radius="full"
                className="px-8 py-6 text-lg"
                endContent={<TbChevronRight size="20" />}
              >
                🚗 Join our tour
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <AnalystsApplicationDrawer isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default HeroSection;

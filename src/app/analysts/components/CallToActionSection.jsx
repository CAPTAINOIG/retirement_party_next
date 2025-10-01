'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Button, useDisclosure } from '@heroui/react';
import Link from 'next/link';
import { TbChevronRight } from 'react-icons/tb';
import AnalystsApplicationDrawer from './AnalystsApplicationDrawer';

const CallToActionSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div ref={sectionRef} className="dark relative w-full bg-black py-20 text-white" id="join">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
          >
            Be Part of Africa's Data Future
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-default-400 mb-12 text-xl leading-relaxed md:text-2xl"
          >
            We believe in building not just skills, but careers and impact. By joining, you're taking a step into a
            community where growth and recognition go hand in hand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
          >
            <Button
              onPress={onOpen}
              size="lg"
              color="primary"
              radius="full"
              className="px-8 py-6 text-lg"
              endContent={<TbChevronRight size="20" />}
            >
              Join the Program Today
            </Button>
          </motion.div>
        </div>
      </div>

      <AnalystsApplicationDrawer isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default CallToActionSection;


'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Button } from '@heroui/react';
import { TbChevronRight } from 'react-icons/tb';
import { useRouter } from 'next/navigation';
import { useReferralSource } from '@/hooks/useReferralSource';

const CallToActionSection = () => {
  const router = useRouter();
  const source = useReferralSource() || 'landing';

  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, margin: '-100px' });

  return (
    <div id="apply" ref={formRef} className="relative w-full bg-background py-20 text-foreground">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
            >
              Ready to Represent Immortal in Your Campus?
              
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-default-500 mx-auto max-w-3xl text-xl leading-relaxed md:text-2xl"
            >
              Join a growing network of ambitious students building the future of data and predictive intelligence.
            </motion.p>

            <motion.b
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-default-500 mx-auto max-w-3xl text-xl leading-relaxed md:text-2xl"
            >
              Apply today and become an Immortal Student Partner.
            </motion.b>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            className="mt-12 grid place-items-center gap-2"
          >
            <Button
              onPress={() => router.push(`/ambassadors/register?source=${source}`)}
              size="lg"
              color="primary"
              radius="full"
              className="px-10 py-6 text-lg"
              endContent={<TbChevronRight size="20" />}
            >
              Apply Now
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;

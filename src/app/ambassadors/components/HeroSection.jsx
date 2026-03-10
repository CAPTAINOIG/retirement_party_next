'use client';

import { Button } from '@heroui/react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { TbChevronRight } from 'react-icons/tb';
import { useRouter } from 'next/navigation';
import { useReferralSource } from '@/hooks/useReferralSource';

const HeroSection = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, margin: '-100px' });
  const router = useRouter();
  const source = useReferralSource() || 'landing';

  return (
    <div ref={heroRef} className="bg-background text-foreground relative w-full">
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
              <img src="/images/logo-icon.png" alt="Immortal AI logo" className="mx-auto h-12 md:h-16" />
            </motion.div>

            {/* Main Heading with Dynamic School Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-[3rem] !leading-[1.1] font-bold tracking-tighter md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem]"
            >
              <span>Become an </span>
              <motion.span className="bg-gradient-to-r from-teal-600 to-blue-800 bg-clip-text text-transparent">
                Immortal Student Partner
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed tracking-tight md:text-2xl"
            >
              Partner with Immortal and lead the data revolution in your campus, build valuable skills, earn rewards,
              and gain early access to the future of data, AI and predictive intelligence.
            </motion.p>

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

            {/* Secondary CTA */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed tracking-tight md:text-xl"
            >
              Learn More
            </motion.p>
          </div>
        </div>
      </div>

      {/* <CampusRegistrationDrawer isOpen={isOpen} onClose={onClose} /> */}
    </div>
  );
};

export default HeroSection;

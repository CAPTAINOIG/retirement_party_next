'use client';

import { Button, useDisclosure } from '@heroui/react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { TbChevronRight } from 'react-icons/tb';
import AnalystsApplicationDrawer from './AnalystsApplicationDrawer';
import JoinClubDrawer from './JoinClubDrawer';
import { FaLevelDownAlt } from 'react-icons/fa';

const HeroSection = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, margin: '-100px' });
  const { isOpen: isApplyOpen, onOpen: onApplyOpen, onClose: onApplyClose } = useDisclosure();
  const { isOpen: isJoinClubOpen, onOpen: onJoinClubOpen, onClose: onJoinClubClose } = useDisclosure();

   const scrollToAbout = () =>
    document.getElementById("tribute")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      ref={heroRef}
      className="dark relative w-full min-h-screen bg-black text-white overflow-hidden"
    >
       <div 
        className="opacity-30">
       <img
        src="/images/location.jpeg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)',
        }}
      />

      <div className="relative z-10 flex flex-col text-white items-center justify-center min-h-screen px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 0.75, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8 text-sm tracking-widest uppercase text-white font-light"
          style={{ letterSpacing: '0.18em' }}
        >
          The Retirement Party &nbsp;·&nbsp; Lagos &nbsp;·&nbsp; 17 July 2026
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.85, ease: 'easeOut', delay: 0.1 }}
          className="max-w-4xl font-bold leading-tight tracking-tight"
          style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}
        >
          <span className=" text-white/90">
            Pawa BI gave us a decade of dashboards.
          </span>
          <br />
          <span className="text-white">
            Immortal AI gives us{' '}
            <span
              style={{
                color: '#2dcfb3',
                textDecoration: 'underline',
                textDecorationColor: '#2dcfb3',
                textUnderlineOffset: '6px',
                textDecorationThickness: '2px',
              }}
            >
              decisions
            </span>
            .
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
          className="mx-auto mt-7 max-w-xl text-base text-white md:text-lg leading-relaxed"
        >
          This July in Lagos, we are honouring the tools that built modern business
          intelligence and welcoming the era that replaces them.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Button
            onPress={onApplyOpen}
            size="lg"
            color="primary"
            radius="full"
            className="px-8 py-6 text-lg"
            // endContent={<TbChevronRight size="20" />}
          >
            Reserve My Seat &nbsp;→
          </Button>
          <Button
            onPress={scrollToAbout}
            size="lg"
            variant="bordered"
            color="primary"
            radius="full"
            className="px-8 py-6 text-lg"
            // endContent={<FaLevelDownAlt size="20" />}
          >
            Learn More
          </Button>
        </motion.div>

        {/* Fine-print badges */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.55, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.58, ease: 'easeOut' }}
          className="mt-10 text-xs tracking-widest uppercase text-white"
          style={{ letterSpacing: '0.2em' }}
        >
          ★ &nbsp;Curated Guest List &nbsp;·&nbsp; 1,000 Seats &nbsp;·&nbsp; No Walk-ins &nbsp;★
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.45 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase text-white/50">Scroll</span>
        <div className="h-10 w-px bg-white/30" />
      </motion.div>

      <AnalystsApplicationDrawer isOpen={isApplyOpen} onClose={onApplyClose} />
      <JoinClubDrawer isOpen={isJoinClubOpen} onClose={onJoinClubClose} />
    </div>
  );
};

export default HeroSection;
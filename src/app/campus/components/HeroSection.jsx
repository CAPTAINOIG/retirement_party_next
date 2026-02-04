'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const HeroSection = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, margin: '-100px' });

  const schools = ['YABATECH', 'UNILAG', 'LASU', 'UI', 'OAU', 'FUNAAB'];
  const [currentSchoolIndex, setCurrentSchoolIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSchoolIndex((prev) => (prev + 1) % schools.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [schools.length]);

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
              <img src="/images/logo-icon.png" alt="Immortal AI logo" className="mx-auto h-12 md:h-16" />
            </motion.div>

            {/* Main Heading with Dynamic School Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-[3rem] !leading-[1.1] font-bold tracking-tighter md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem]"
            >
              <motion.span
                key={currentSchoolIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-teal-600 to-blue-800 bg-clip-text text-transparent"
              >
                {schools[currentSchoolIndex]}
              </motion.span>
              , <br />
              <span>WE ARE COMING.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed tracking-tight md:text-2xl"
            >
              To build Africa's data force through Campuses across Nigeria.
            </motion.p>

            {/* Mission Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed md:text-xl"
            >
              Immortal AI is bringing a structured, hands-on Data Analysis Training Program to all schools, designed to
              move students from curiosity to capability, and from learning to earning.
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className="mx-auto mt-8 text-2xl font-bold tracking-tight md:text-3xl"
            >
              This is not another theory-first class.
              <br />
              <span className="opacity-70">This is where real data skills are forged.</span>
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

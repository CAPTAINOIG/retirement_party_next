'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const PageHeader = ({ title, subtitle }) => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, margin: '-100px' });

  return (
    <div ref={heroRef} className="relative z-2 container pt-32 md:block">
      <div className="relative py-12">
        <div className="overflow-hidden pt-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-linear-to-r text-[4rem] !leading-none font-bold tracking-tighter md:text-[6rem] md:leading-[0.9] xl:text-[7rem]"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="mx-auto mt-6 max-w-2xl text-lg text-default-500 md:text-xl"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;

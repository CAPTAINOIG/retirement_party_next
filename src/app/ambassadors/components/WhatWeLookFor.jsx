'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const WhatWeLookFor = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, margin: '-100px' });


  const details = [' Active university students', 'Passionate about technology, data, AI, or innovation', ' Well connected within their campus community', ' Good communicators and organizers', '  Interested in leadership and career growth'];
  const [currentDetailsIndex, setCurrentDetailsIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDetailsIndex((prev) => (prev + 1) % details.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [details.length]);

  return (
    <div ref={heroRef} className="relative w-full bg-background text-foreground">
      <div className="relative z-2 container pt-32 md:block">
        <div className="relative py-12 md:pt-10 md:pb-20">
          <div className="overflow-hidden text-center">

            <motion.h2 className="mb-4 text-4xl font-bold md:text-5xl">
                 Who We Are Looking For
               </motion.h2>

             {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed tracking-tight md:text-2xl"
            >
              You don’t need to be a data expert.
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className="mx-auto mt-8 text-2xl  tracking-tight md:text-3xl"
            >
              What matters most is <b>curiosity</b>, <b>leadership</b>, and <b>initiative</b>.
            </motion.p>


             <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed tracking-tight md:text-2xl"
            >
             Ideal candidates are:
            </motion.p>

            {/* Main Heading with Dynamic Details Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-[3rem] !leading-[1.1] font-bold tracking-tighter md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem]"
            >
              <motion.span
                key={currentDetailsIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.7 }}
                className="bg-gradient-to-r from-teal-600 to-blue-800 bg-clip-text text-transparent"
              >
                {details[currentDetailsIndex]}
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed tracking-tight md:text-2xl"
            >
              Students from <b>all faculties are welcome to apply.</b>
            </motion.p>

            

            

          </div>
        </div>
      </div>

    </div>
  );
};

export default WhatWeLookFor;

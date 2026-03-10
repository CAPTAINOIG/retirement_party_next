'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const IntroSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const cards = [
    { img: "/images/img-1.jpeg", alt: "Profile 1" },
    { img: "/images/img-2.jpeg", alt: "Profile 2" },
    { img: "/images/img-3.jpeg", alt: "Profile 3" },
    { img: "/images/img-4.jpeg", alt: "Profile 4" },
  ];

  return (
    <div ref={sectionRef} className="relative w-full bg-background py-20 text-foreground min-h-[70vh]">
      <div className="container mx-auto px-4">
        {/* Card Grid Section */}
        <div className="mb-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-neutral-900 flex flex-col items-center ">
              <img src={card.img} alt={card.alt} className="w-auto h-[50vh] md:h-[70vh] object-cover mb-4" />
              
            </div>
          ))}
        </div>
        
        <div className="mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
          >
            Become an{' '}
            <span className="bg-linear-to-r from-teal-600 to-blue-800 bg-clip-text text-transparent">
              Immortal Partner
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-default-400 space-y-6 text-lg leading-relaxed md:text-xl"
          >
            <p>
              Immortal Student Partners are the official representatives of the Immortal ecosystem in universities
              across Africa. You will help introduce students to the tools shaping the future while building leadership,
              visibility, and career opportunities.
            </p>
          </motion.div>
        </div>
        </div>
    </div>
  );
};

export default IntroSection;

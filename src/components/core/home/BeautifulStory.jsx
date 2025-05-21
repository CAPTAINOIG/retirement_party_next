'use client';
import React from 'react';
import { motion } from 'motion/react';
import { useWindowSize } from 'react-use';
import BeautifulPulse from '@/components/core/shared/BeautifulPulse';
import Button from '@/components/global/Button';

const BeautifulStory = () => {
  const { width } = useWindowSize();

  let textVariant = {};
  if (width < 768) {
    textVariant = {
      hidden: { opacity: 0, x: -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: 'spring',
          stiffness: 50,
          duration: 1.5,
        },
      },
    };
  }

  return (
    <div className="relative w-full overflow-hidden bg-black">
      <div className="container relative mt-32 md:block">
        <div className="relative grid gap-20 py-12 md:grid-cols-[1fr_1fr] md:gap-0 md:py-24">
          <div className="items-center justify-center space-y-6 text-center md:items-start md:justify-start md:text-left">
            <motion.h1
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              className="bg-gradient-to-r from-green-600 to-primary bg-clip-text text-[4rem] font-bold leading-[1] tracking-tighter text-transparent md:text-[6rem] md:leading-[0.9] xl:text-[7rem]"
            >
              Tell a beautiful story with data
            </motion.h1>
            <p className="mt-8 max-w-xl text-lg tracking-tight text-slate-400">
              Immortal powers users make others see in their data in the most interesting way
            </p>
            <Button size="xl" className="bg-blue-600 text-white hover:bg-blue-700">
              Start Creating
            </Button>
          </div>
          <div>
            <BeautifulPulse />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautifulStory;

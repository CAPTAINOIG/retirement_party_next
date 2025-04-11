'use client'
import React from 'react';
import {motion} from 'motion/react';
import {useWindowSize} from 'react-use';
import BeautifulPulse from '@/components/core/shared/BeautifulPulse';
import Button from '@/components/global/Button';

const BeautifulStory = () => {
  const {width} = useWindowSize();

  let textVariant = {};
  if (width < 768) {
    textVariant = {
      hidden: {opacity: 0, x: -20},
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
    <div className="relative w-full overflow-hidden bg-black ">
      <div className="container relative mx-auto md:block pt-10">
        <div className="grid-cols-12 px-4 md:grid md:px-0 gap-y-10 space-y-10">
          <div className="relative col-span-12 grid-cols-12 md:grid gap-y-10 gap-5 space-y-20">
            <div className="col-span-6 space-y-8 pt-[70px] md:py-[160px] xl:pt-[100px] ">
              <div
                className='space-y-6 items-center justify-center text-center md:text-left md:items-start md:justify-start'>
                <motion.h1
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  className="bg-gradient-to-r from-green-600 to-primary bg-clip-text text-[4rem] font-bold leading-[1.1] tracking-tighter text-transparent md:text-[6rem] md:leading-[0.9] xl:text-[7rem] "
                >
                  Tell a beautiful story with data
                </motion.h1>
                <p className=" mt-8 max-w-xl text-lg tracking-tight text-slate-400">
                  Immortal powers users make others see in their data in the most interesting way
                </p>
                <Button size="xl" className="bg-blue-600 text-white hover:bg-blue-700">
                  Start Creating
                </Button>
              </div>
            </div>
            <div className="col-span-6">
              <BeautifulPulse/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautifulStory;

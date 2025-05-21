'use client';
import React from 'react';
import { motion } from 'motion/react';
import { useWindowSize } from 'react-use';
import BeautifulPulse from '@/components/core/shared/BeautifulPulse';
import Button from '@/components/global/Button';
import Link from 'next/link';
import { IconChevronRight } from '@tabler/icons-react';

const ACCOUNT_URL = process.env.NEXT_PUBLIC_ACCOUNT_URL;

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
      <div className="relative container mt-32 md:block">
        <div className="relative grid items-center gap-20 py-12 md:grid-cols-[1fr_1fr] md:gap-0 md:pt-10 md:pb-32">
          <div className="items-center justify-center text-center md:items-start md:justify-start md:text-left">
            <motion.h1
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              className="bg-linear-to-r from-green-600 to-blue-800 bg-clip-text text-[4rem] leading-none font-bold tracking-tighter text-transparent md:text-[6rem] md:leading-[0.9] xl:text-[7rem]"
            >
              Tell a beautiful story with data
            </motion.h1>
            <p className="mt-6 max-w-xl text-lg tracking-tight text-slate-400">
              Immortal powers users make others see in their data in the most interesting way
            </p>
            <Link href={`${ACCOUNT_URL}/register`} className="mt-12 inline-flex">
              <Button size="xl" rightIcon={<IconChevronRight size="20" />} color="white">
                Start creating
              </Button>
            </Link>
            {/* <Button size="xl" className="bg-blue-600 text-white hover:bg-blue-700 mt-8">
              Start Creating
            </Button> */}
          </div>
          <BeautifulPulse />
        </div>
      </div>
    </div>
  );
};

export default BeautifulStory;

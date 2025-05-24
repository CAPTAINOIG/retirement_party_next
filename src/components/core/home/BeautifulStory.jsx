'use client';
import React from 'react';
import { motion } from 'motion/react';
import { useWindowSize } from 'react-use';
import BeautifulPulse from '@/components/core/shared/BeautifulPulse';
import { IconChevronRight } from '@tabler/icons-react';
import JoinImmortlWaitlistModal from './JoinImmortlWaitlistModal';
import { Button, useDisclosure } from '@heroui/react';
import TextLoop from '@/components/global/TextLoop';

const BeautifulStory = () => {
  const { width } = useWindowSize();
  const { isOpen: isWaitListOpen, onOpen: onWaitListOpen, onClose: onWaitListClose } = useDisclosure();

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
    <div className="relative w-full overflow-hidden">
      <div className="relative z-2 container mt-32 md:block">
        <div className="relative grid items-center gap-20 py-12 md:grid-cols-[1fr_1fr] md:gap-0 md:pt-10 md:pb-32">
          <div>
            <motion.h1
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              className="bg-linear-to-r from-green-600 to-blue-800 bg-clip-text text-[4rem] leading-[1.1] font-bold tracking-tighter text-transparent md:text-[6rem] md:leading-[0.9] xl:text-[7.2rem]"
            >
              Find <br />
              <TextLoop interval={5}>
                <span className="bg-linear-to-r from-green-600 to-blue-800 bg-clip-text">immortality</span>
                <span className="bg-linear-to-r from-green-600 to-blue-800 bg-clip-text">5x growth</span>
                <span className="bg-linear-to-r from-green-600 to-blue-800 bg-clip-text">immortality</span>
                <span className="bg-linear-to-r from-green-600 to-blue-800 bg-clip-text">5x profit</span>
              </TextLoop>
              <br /> in your data
            </motion.h1>
            <p className="mt-6 max-w-xl text-xl tracking-tight text-slate-400">
              We help businesses aggregate and convert complex customer data into simple visual insights using AI{' '}
            </p>
            <Button
              size="lg"
              className="mt-12 bg-white px-8 text-black hover:bg-white/90"
              radius="full"
              onPress={onWaitListOpen}
              endContent={<IconChevronRight size="20" />}
            >
              Get started
            </Button>
          </div>
          <div className="hidden lg:block">
            <BeautifulPulse />
          </div>
        </div>
      </div>

      <JoinImmortlWaitlistModal isOpen={isWaitListOpen} onClose={onWaitListClose} />
    </div>
  );
};

export default BeautifulStory;

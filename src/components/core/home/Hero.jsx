'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useWindowSize } from 'react-use';
import HeroIllustration from '@/components/core/home/HeroIllustration';
import { Button, useDisclosure } from '@heroui/react';
import { TbChevronRight } from 'react-icons/tb';
import GetStartedModal from '@/components/core/shared/GetStartedModal';

const Hero = () => {
  const { width } = useWindowSize();
  const { isOpen: isGetStartedOpen, onOpen: onGetStartedOpen, onClose: onGetStartedClose } = useDisclosure();
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, margin: '-100px' });

  let textVariant = {};
  if (width < 768) {
    textVariant = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 50,
          duration: 1.5,
        },
      },
    };
  }

  return (
    <div ref={heroRef} className="dark relative w-full bg-black text-white">
      <div className="relative z-2 container pt-32 md:block">
        <div className="relative grid gap-12 py-12 md:grid-cols-[1fr_1fr] md:pt-10 md:pb-0">
          <div className="overflow-hidden pt-12 md:py-24">
            <motion.h1
              variants={textVariant}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="bg-linear-to-r text-[4rem] !leading-none font-bold tracking-tighter md:text-[6rem] md:leading-[0.9] xl:text-[7rem]"
            >
              Building{' '}
              <span className="bg-linear-to-r from-teal-600 to-blue-800 bg-clip-text text-transparent">
                data platforms
              </span>{' '}
              that power Africa
            </motion.h1>
            <motion.p
              variants={textVariant}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-default-500 mt-6 max-w-xl text-xl tracking-tight"
            >
              We are building the rails that connects intelligence to Africa's data accross multiple ecosystems
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              <Button
                size="lg"
                className="mt-12 px-8 transition-transform hover:scale-105"
                radius="full"
                onPress={onGetStartedOpen}
                color="primary"
                endContent={<TbChevronRight size="20" />}
              >
                Get started
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="bg-primary-500/10 dark:bg-primary-500/5 absolute top-0 left-0 hidden w-[113%] rounded-[2rem] p-8 lg:block">
              <HeroIllustration />
            </div>
          </motion.div>
        </div>
      </div>

      <GetStartedModal isOpen={isGetStartedOpen} onClose={onGetStartedClose} />
    </div>
  );
};

export default Hero;

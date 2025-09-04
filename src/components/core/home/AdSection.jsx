import React from 'react';
import { Button, useDisclosure } from '@heroui/react';
import GetStartedModal from '@/components/core/shared/GetStartedModal';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const AdSection = () => {
  const { isOpen: isGetStartedOpen, onOpen: onGetStartedOpen, onClose: onGetStartedClose } = useDisclosure();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div ref={sectionRef} className="relative z-10 container">
      <motion.div 
        className="bg-primary-900 dark:bg-primary-50 relative overflow-hidden rounded-3xl px-10 pt-48 pb-32 md:pt-40 md:pb-32 md:text-center"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0%, transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.05) 0%, transparent 40%), linear-gradient(120deg, #0f0e17 0%, #1a1b26 100%)',
          }}
        />
        <div className="relative z-2">
          <motion.h1 
            className="font-display mx-auto max-w-[1000px] text-[3.4rem] leading-[1.1] font-bold tracking-tight text-white sm:text-7xl md:text-[5.4rem] md:leading-none!"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            We are building data rails for analytics across Africa
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <Button
              size="lg"
              className="mt-12 bg-white text-black hover:bg-white/90 transition-transform hover:scale-105"
              radius="full"
              onPress={onGetStartedOpen}
            >
              Get started
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <GetStartedModal isOpen={isGetStartedOpen} onClose={onGetStartedClose} />
    </div>
  );
};

export default AdSection;

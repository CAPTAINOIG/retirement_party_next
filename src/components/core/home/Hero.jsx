'use client';
import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { IconChevronRight } from '@tabler/icons-react';
import { Button, useDisclosure } from '@heroui/react';
import TextLoop from '@/components/global/TextLoop';
import JoinWaitlistModal from '@/components/core/shared/JoinWaitlistModal';
import ScrollReveal from '@/components/global/ScrollReveal';
import { useTheme } from 'next-themes';

const Hero = () => {
  const { resolvedTheme: theme } = useTheme();
  const { isOpen: isWaitListOpen, onOpen: onWaitListOpen, onClose: onWaitListClose } = useDisclosure();

  const [mounted, setMounted] = React.useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="relative w-full">
      {!!mounted && (
        <div
          className="absolute inset-0 z-0"
          suppressHydrationWarning
          style={
            theme === 'dark'
              ? {
                  background: `radial-gradient(125% 125% at 50% 100%, rgba(0, 0, 0, 0) 40%, rgb(1 30 51 / 100%) 100%)`,
                }
              : {
                  background:
                    'radial-gradient(125% 125% at 50% 100%, rgba(255, 255, 255, 0) 40%, rgb(173 220 255 / 70%) 100%)',
                }
          }
        />
      )}

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 z-1">
        <motion.div
          className="absolute h-6 w-6 rotate-45 border-2 border-teal-500/40 dark:border-teal-400/40"
          style={{ top: '60%', right: '20%' }}
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-green-500/20 dark:from-cyan-400/20 dark:to-green-400/20"
          style={{ bottom: '40%', right: '10%' }}
          animate={{
            rotate: [0, 180, 360],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-2 container pt-44 md:block">
        <div className="relative py-12 md:pt-40 md:pb-10">
          <div>
            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="w-full text-[4rem] leading-[1.1] font-bold tracking-tighter md:text-[6rem] md:leading-[0.9] xl:text-[9rem]">
                Find{' '}
                <TextLoop interval={5}>
                  <span className="bg-linear-to-r from-teal-600 to-blue-800 bg-clip-text text-transparent">
                    immortality
                  </span>
                  <span className="bg-linear-to-r from-teal-600 to-blue-800 bg-clip-text text-transparent">
                    5x growth
                  </span>
                  <span className="bg-linear-to-r from-teal-600 to-blue-800 bg-clip-text text-transparent">
                    immortality
                  </span>
                  <span className="bg-linear-to-r from-teal-600 to-blue-800 bg-clip-text text-transparent">
                    5x profit
                  </span>
                </TextLoop>
                <br /> in your data
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="mt-8 max-w-xl text-xl tracking-tight opacity-90">
                We help businesses aggregate and convert complex customer data into simple visual insights using AI{' '}
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.4}>
              <Button
                size="lg"
                className="text-background bg-foreground hover:bg-foreground/90 mt-12 px-8 text-lg"
                radius="full"
                onPress={onWaitListOpen}
                endContent={<IconChevronRight size="20" />}
              >
                Get started
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <JoinWaitlistModal isOpen={isWaitListOpen} onClose={onWaitListClose} />
    </div>
  );
};

export default Hero;

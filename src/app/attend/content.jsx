'use client';
import React, { useState } from 'react';
import { useIsomorphicLayoutEffect } from 'react-use';
import { cn } from '@/lib/utils';
import Logo from '@/components/core/shared/Logo';
import { Button, useDisclosure } from '@heroui/react';
import RegisterModal from '@/app/dica2024/RegisterModal';
import { useTheme } from 'next-themes';
import CountdownTimer from '../dica2024/CountdownTimer';
import ClientOnly from '@/components/global/ClientOnly';
import Footer from '@/components/core/event/Footer';

const AttendPageContent = () => {
  const { resolvedTheme: theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const { isOpen: isRegisterModalOpen, onClose: onRegisterModalClose, onOpen: onRegisterModalOpen } = useDisclosure();

  useIsomorphicLayoutEffect(() => {
    const handleScroll = (e) => {
      const scrollTop = e.target.scrollingElement.scrollTop;
      setScrolled(scrollTop > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={cn('fixed left-0 top-0 z-10 w-full border-b border-transparent py-10 transition-all duration-300', {
          'border-default-100 bg-white py-5 shadow dark:bg-black': scrolled,
        })}
      >
        <div className="container flex items-center justify-between">
          <Logo light={!scrolled || theme === 'dark'} />
          <div className="flex items-center space-x-4 md:space-x-12">
            <Button
              size="xl"
              variant="solid"
              color="primary"
              className="h-auto px-6 py-2 text-base md:px-8 md:py-3 md:text-lg"
              radius="full"
              onPress={onRegisterModalOpen}
            >
              Book your seat
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div className="relative overflow-hidden bg-[#11100f]">
          <img
            src="/images/hero.jpg"
            alt="Hero image"
            className="top absolute left-0 z-[1] h-full w-full object-cover"
          />
          <div className="absolute inset-0 z-[2] bg-gradient-to-b from-transparent to-black/100" />
          <div className="container relative z-[3] pb-28 pt-52 md:pb-32 md:pt-60">
            <div className="text-white md:max-w-[90%]">
              <h1 className="text-[3.4rem] font-bold leading-none tracking-tight md:text-[7rem]">
                Unveiling
                <br />
                Immortality
              </h1>
              <p className="mt-8 text-lg opacity-70 md:max-w-[70%] md:text-xl">
                We are connecting intelligence to African's data, join us.
              </p>
              <ClientOnly>
                <CountdownTimer />
              </ClientOnly>
            </div>
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>

      <RegisterModal isOpen={isRegisterModalOpen} onOpenChange={onRegisterModalOpen} onClose={onRegisterModalClose} />
    </>
  );
};

export default AttendPageContent;

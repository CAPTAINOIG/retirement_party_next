import React from 'react';
import { Button, useDisclosure } from '@heroui/react';
import JoinWaitlistModal from '@/components/core/shared/JoinWaitlistModal';

const AdSection = () => {
  const { isOpen: isWaitListOpen, onOpen: onWaitListOpen, onClose: onWaitListClose } = useDisclosure();

  return (
    <div className="relative z-10 container">
      <div className="bg-primary-900 dark:bg-primary-50 relative overflow-hidden rounded-3xl pt-48 pb-32 md:pt-40 md:pb-32 md:text-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0%, transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.05) 0%, transparent 40%), linear-gradient(120deg, #0f0e17 0%, #1a1b26 100%)',
          }}
        />
        <div className="relative z-2">
          <h1 className="font-display mx-auto max-w-[1000px] text-[3.4rem] leading-[1.1] font-bold tracking-tight text-white sm:text-7xl md:text-[5.4rem] md:leading-none!">
            We are building data rails for analytics across Africa
          </h1>
          <Button
            size="lg"
            className="mt-12 bg-white text-black hover:bg-white/90"
            radius="full"
            onPress={onWaitListOpen}
          >
            Join waitlist
          </Button>
        </div>
      </div>

      <JoinWaitlistModal isOpen={isWaitListOpen} onClose={onWaitListClose} />
    </div>
  );
};

export default AdSection;

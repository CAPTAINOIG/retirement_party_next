import React from 'react';
import { Button, useDisclosure } from '@heroui/react';
import JoinImmortlWaitlistModal from './JoinImmortlWaitlistModal';

const Hero = () => {
  const { isOpen: isWaitListOpen, onOpen: onWaitListOpen, onClose: onWaitListClose } = useDisclosure();

  return (
    <div className="to-primary-950 from-primary-50/50 relative overflow-hidden bg-zinc-950 bg-linear-to-br pt-48 pb-32 md:pt-52 md:pb-32 md:text-center">
      <div className="animate-wide bg-hero absolute inset-0 min-h-screen bg-cover bg-right opacity-60"></div>
      <div className="relative z-10 container">
        <h1 className="font-display mx-auto max-w-[1000px] text-[3.4rem] leading-[1.1] font-bold tracking-tight text-slate-300 sm:text-7xl md:text-[6.8rem] md:leading-none!">
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

      <JoinImmortlWaitlistModal isOpen={isWaitListOpen} onClose={onWaitListClose} />
    </div>
  );
};

export default Hero;

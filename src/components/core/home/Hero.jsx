import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Button from '@/components/global/Button';
import { IconChevronRight } from '@tabler/icons-react';
import Link from 'next/link';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

const Hero = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Generative AI', 'Banking AI', 'Identity AI', 'Markets AI'],
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 3000,
      loop: true,
      smartBackspace: true,
    };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="to-primary-950 relative overflow-hidden bg-[#11100f] bg-gradient-to-br from-primary-900 pb-32 pt-48 md:pb-32 md:pt-52 md:text-center">
      <div className="absolute inset-0 min-h-screen animate-wide bg-hero bg-cover bg-right opacity-60"></div>
      <div className="container relative z-10">
        <h1 className="font-display mx-auto max-w-[860px] text-[3.4rem] font-bold leading-[1.1] tracking-tight text-slate-300 sm:text-7xl md:text-[6.8rem] md:!leading-[1]">
          Connecting
          <br />
          <span
            ref={el}
            className="relative whitespace-nowrap bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
          >
            Generative AI
          </span>
          <br />
          to Africa's Data
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-lg tracking-tight text-slate-400">
          Our data models help simplify business datasets into conversation, reports and infographics.
        </p>
        <Link href={`${APP_URL}/register`} className="mt-12 inline-flex">
          <Button size="xl" rightIcon={<IconChevronRight size="20" />} color="white">
            Get started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

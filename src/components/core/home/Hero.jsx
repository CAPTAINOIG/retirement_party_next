import React from 'react';
import Button from '@/components/global/Button';
import { IconChevronRight } from '@tabler/icons-react';
import Link from 'next/link';
import TextLoop from '@/components/global/TextLoop';

const ACCOUNT_URL = process.env.NEXT_PUBLIC_ACCOUNT_URL;

const Hero = () => {
  return (
    <div className="to-primary-950 relative overflow-hidden bg-[#11100f] bg-linear-to-br from-primary-50 pb-32 pt-48 md:pb-32 md:pt-52 md:text-center">
      <div className="absolute inset-0 min-h-screen animate-wide bg-hero bg-cover bg-right opacity-60"></div>
      <div className="container relative z-10">
        <h1 className="font-display mx-auto max-w-[860px] text-[3.4rem] font-bold leading-[1.1] tracking-tight text-slate-300 sm:text-7xl md:text-[6.8rem] md:leading-none!">
          Connecting
          <br />
          <TextLoop interval={5} className="text-primary-500">
            <span>Generative AI</span>
            <span>Banking AI</span>
            <span>Identity AI</span>
            <span>Markets AI</span>
          </TextLoop>
          <br />
          to Africa's Data
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-lg tracking-tight text-slate-400">
          Our data models help simplify business datasets into conversation, reports and infographics.
        </p>
        <Link href={`${ACCOUNT_URL}/register`} className="mt-12 inline-flex">
          <Button size="xl" rightIcon={<IconChevronRight size="20" />} color="white">
            Get started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

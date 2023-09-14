import React, { useEffect, useRef } from 'react';
import Typed from "typed.js";
import Button from "@/components/global/Button";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

const Hero = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Generative AI',
        'Banking AI',
        'Identity AI',
        'Markets AI',
      ],
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 3000,
      loop: true,
      smartBackspace: true,
    };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    }
  }, []);

  return (
    <div
      className="pt-48 pb-32 md:pt-44 md:pb-36 md:text-center bg-[#11100f] relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950"
    >
      <div className="absolute inset-0 bg-cover bg-right bg-hero animate-wide min-h-screen opacity-60"></div>
      <div className="container z-10 relative">
        <h1
          className="mx-auto max-w-[860px] font-display text-[3.4rem] sm:text-7xl md:text-[6.5rem] font-bold leading-[1.1] md:!leading-[1] tracking-tight text-slate-300"
        >
          Connecting
          <br/>
          <span
            ref={ el }
            className="relative bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent whitespace-nowrap"
          >
            Generative AI
          </span>
          <br/>
          to Africa's Data
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-lg tracking-tight text-slate-400">
          Our data models help simplify business datasets into conversation, reports and infographics.
        </p>
        <Link href={ "https://app.statisense.co/register" } className="inline-flex mt-12">
          <Button size="xl" rightIcon={ <IconChevronRight size="20"/> } color="white">
            Get started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

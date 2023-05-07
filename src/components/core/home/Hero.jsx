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
        'insights',
        'perception',
      ],
      typeSpeed: 50,
      backSpeed: 50,
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
      className="pt-48 pb-32 md:pt-60 md:pb-40 md:text-center bg-[#11100f] pattern-2 rounded-[0_0_1000px_1000px/5%] relative"
    >
      <div className="container">
        <h1
          className="mx-auto max-w-4xl font-display text-6xl font-bold tracking-tight text-slate-300 sm:text-7xl md:text-8xl"
        >
          We convert raw data to { ' ' }<br className="sm:hidden"/>
          <span ref={ el } className="relative font-bold text-primary-500"></span>.
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg tracking-tight text-slate-400">
          Our data services deliver insights for better business intelligence
        </p>
        <Link href="/register">
          <Button size="xl" className="mt-16" rightIcon={ <IconChevronRight size="20"/> } color="white">
            Get started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

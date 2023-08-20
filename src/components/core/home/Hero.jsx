"use client"
import React, {useEffect, useRef} from 'react';
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
        'businesses',
        'consumers',
        'governments',
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
    <div className="pt-48 pb-32 md:pt-52 md:pb-36 md:text-center bg-[#11100f] relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-hero animate-wide"></div>
      <div className="absolute animate-bounceThree top-[-0.4rem] opacity-20 w-[650px] h-[100px] right-[33%]">
        <img alt="curve" src="/images/curve.svg" />
      </div>
      <div className="container z-10 relative">
        <h1
          className="mx-auto max-w-4xl font-display text-[3.2rem] sm:text-7xl md:text-8xl font-bold !leading-[1.05] tracking-tight text-slate-300"
        >
          Ai Simplified insights for African{ ' ' }<br/>
          <span
            ref={ el }
            className="relative font-bold bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent"
          >businesses</span>.
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg tracking-tight text-slate-400">
          We use AI to simplify data and documents for businesses, consumers and governments.
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

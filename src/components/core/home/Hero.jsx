import React from 'react';
import HeroSearch from "@/components/core/home/HeroSearch.jsx";
import Typed from "typed.js";

const Hero = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        'insights',
        'perception',
      ],
      typeSpeed: 50,
      backSpeed: 50,
    };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    }
  }, []);

  return (
    <div className="pt-44 pb-32 md:pb-44 text-center md:pt-60 bg-zinc-900 pattern-2 rounded-[0_0_1000px_1000px/10%]">
      <div className="container max-w-7xl mx-auto">
        <h1
          className="mx-auto max-w-4xl font-display text-6xl font-bold tracking-tight text-slate-300 sm:text-7xl md:text-8xl"
        >
          We convert raw data to { ' ' }
          <span ref={ el } className="relative whitespace-nowrap text-blue-600"></span>.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-400">
          Our data services deliver insights for better business intelligence
        </p>
      </div>
      <HeroSearch/>
    </div>
  );
};

export default Hero;

import React from 'react';
import Button from "@/components/global/Button.jsx";
import { IconArrowRight } from "@tabler/icons-react";

const Newsletter = () => {
  return (
    <div className="mx-auto">
      <div className="bg-[#11100f] text-zinc-100 px-10 md:px-20 py-36 rounded-[1200px/1%] pattern-1">
        <div className="container flex flex-col items-center text-center">
          <h2 className="text-[2.8rem] md:text-5xl max-w-lg font-medium tracking-tight !leading-tight">
            Get weekly insights directly into your inbox
          </h2>
          <div
            className="mt-16 w-full max-w-xl flex flex-col md:flex-row items-center space-y-4 md:space-x-4 md:space-y-0"
          >
            <input
              type="text" name="query" id="query" placeholder="Enter your email address.."
              className="rounded-full w-full py-4 px-8 !outline-none bg-zinc-700/50 transition-all ring-zinc-500/10 focus:ring-4 md:w-[200%]"
            />
            <Button size="lg" color="white" block rightIcon={ <IconArrowRight/> }>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

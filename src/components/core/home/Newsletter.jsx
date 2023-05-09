import React from 'react';
import Button from "@/components/global/Button.jsx";
import { IconArrowRight } from "@tabler/icons-react";
import classNames from "classnames";

const Newsletter = ({ sm = false }) => {
  return (
    <div className="mx-auto">
      <div
        className={ classNames('bg-[#11100f] text-zinc-100 px-10 md:px-20 pattern-1', sm ? 'py-24' : 'py-40') }
      >
        <div className="container flex flex-col items-center text-center">
          <h2 className="text-[2.5rem] md:text-6xl max-w-2xl font-medium tracking-tight !leading-tight">
            Get weekly statistics directly into your inbox
          </h2>
          <div
            className="mt-10 sm:mt-16 w-full max-w-xl flex flex-col sm:flex-row items-center space-y-4 sm:space-x-4 sm:space-y-0"
          >
            <input
              type="text" name="query" id="query" placeholder="Enter your email address.."
              className="rounded-full w-full py-4 px-8 !outline-none bg-zinc-700/50 transition-all ring-zinc-500/10 focus:ring-4 sm:w-[200%]"
            />
            <Button size="lg" color="white" block rightIcon={ <IconArrowRight/> }>
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

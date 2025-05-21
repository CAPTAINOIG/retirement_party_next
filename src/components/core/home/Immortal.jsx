import React from 'react';
import {useWindowSize} from "react-use";
import {motion} from "motion/react";
import Button from "@/components/global/Button";
import ImmortalCard from "@/components/core/shared/ImmortalCard";

const Immortal = () => {
  const {width} = useWindowSize();

  let textVariant = {};
  if (width < 768) {
    textVariant = {
      hidden: {opacity: 0, x: -20},
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: 'spring',
          stiffness: 50,
          duration: 1.5,
        },
      },
    };
  }

  return (
    <div className="relative w-full overflow-hidden bg-black z-10 px-4 md:px-0">
      <div className="absolute bottom-0 right-0 z-30 hidden w-full xl:block">
        <img alt="curve" src="/images/hero-gradient-curve.svg"/>
      </div>
      <div className="relative mx-auto md:block">
        <div className="md:grid grid-cols-12 py-[70px] md:pb-[160px] md:pt-[120px] xl:pb-120 gap-8 space-y-8 md:space-y-0">
          <div className="col-span-7 md:flex gap-4 md:px-4 px-0 items-center space-y-4 md:space-y-0">
            <ImmortalCard/>
          </div>
          <div className="col-span-5 flex flex-col justify-center gap-4">
            <motion.h1
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              className="bg-linear-to-r from-green-600 to-primary bg-clip-text text-[4rem] font-bold leading-[1.1] tracking-tighter text-transparent md:text-[6rem] md:leading-[0.9] xl:text-[7rem] "
            >
              Connect from any data source
            </motion.h1>
            <p className="max-w-xl text-lg tracking-tight text-slate-400">
              Immortal powers users make others see in their data in the most interesting way
            </p>
            <div>
              <Button size="xl" className="bg-blue-600 text-white hover:bg-blue-700">
                Start Creating
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Immortal;

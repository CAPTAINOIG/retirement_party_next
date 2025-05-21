import React from 'react';
import { useWindowSize } from 'react-use';
import { motion } from 'motion/react';
import Button from '@/components/global/Button';
import ImmortalCard from '@/components/core/shared/ImmortalCard';

const Immortal = () => {
  const { width } = useWindowSize();

  let textVariant = {};
  if (width < 768) {
    textVariant = {
      hidden: { opacity: 0, x: -20 },
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
    <div className="relative z-10 w-full overflow-hidden bg-black px-4 text-white md:px-0">
      <div className="grid-cols-[3fr_2fr] items-center gap-8 space-y-8 py-48 md:grid md:space-y-0">
        <ImmortalCard />
        <div>
          <motion.h1
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            className="to-primary max-w-lg bg-linear-to-r from-green-600 bg-clip-text text-5xl font-semibold tracking-tighter text-transparent md:text-7xl"
          >
            Connect from any data source
          </motion.h1>
          <p className="mt-6 max-w-xl text-lg tracking-tight">
            Immortal powers users make others see in their data in the most interesting way
          </p>
          <Button size="xl" className="mt-8 bg-blue-600 text-white hover:bg-blue-700">
            Start Creating
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Immortal;

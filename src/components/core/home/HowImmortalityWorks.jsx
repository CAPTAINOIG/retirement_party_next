'use client';
import React from 'react';
import { FaCircle } from 'react-icons/fa6';
import { motion } from 'motion/react';
import { useWindowSize } from 'react-use';

const HowImmortalityWorks = () => {
  const { width } = useWindowSize();

  let variantOne = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
  if (width > 768) {
    variantOne = {
      hidden: { opacity: 0, x: 20, y: -20 },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 10,
        transition: {
          type: 'spring',
          stiffness: 50,
          duration: 2,
        },
      },
    };
  }

  let variantTwo = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
  if (width > 768) {
    variantTwo = {
      hidden: { opacity: 0, x: -20, y: 20 },
      visible: {
        opacity: 1,
        x: 0,
        y: 20,
        rotate: -10,
        transition: {
          type: 'spring',
          stiffness: 50,
          duration: 2,
        },
      },
    };
  }

  return (
    <div className="relative w-full overflow-hidden bg-black">
      <div className="container relative mx-auto py-[70px] md:block md:pb-[160px] md:pt-[160px]">
        <div className="grid grid-cols-12">
          <div className="relative col-span-12">
            <h2 className="bg-gradient-to-r from-green-600 to-primary bg-clip-text text-center text-[3rem] font-bold leading-[1] text-transparent md:text-[6rem]">
              How Immortality
              <br /> works with us
            </h2>
            <p className="py-8 text-center text-[18px] text-slate-500">
              Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Assumenda, nobis?
            </p>
            <div className="mx-auto max-w-4xl grid-cols-2 gap-10 space-y-8 py-10 md:grid md:space-y-0">
              <div className="md:p-10">
                <motion.div
                  variants={variantOne}
                  initial="hidden"
                  whileInView="visible"
                  className="rounded-lg bg-[#282A30] p-6"
                >
                  <FaCircle className="mx-auto text-slate-500" size="30px" />
                  <div className="mt-6 rounded bg-[#222329] p-4">
                    <p className="font-pacifico text-3xl text-slate-400">01</p>
                    <p className="font-pacifico text-lg text-slate-200">Select template</p>
                    <p className="mt-2 text-sm text-slate-400">
                      Select a template of your choice to visualize your data
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="md:md:px-10">
                <motion.div
                  variants={variantTwo}
                  initial="hidden"
                  whileInView="visible"
                  className="rounded-lg bg-[#282A30] p-6 md:mt-32"
                >
                  <FaCircle className="mx-auto text-slate-500" size="30px" />
                  <div className="mt-6 rounded bg-[#222329] p-4">
                    <p className="font-pacifico text-3xl text-slate-400">02</p>
                    <p className="font-pacifico text-lg text-slate-200">Select data source</p>
                    <p className="mt-2 text-sm text-slate-400">
                      Select a template of your choice to visualize your data
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="md:px-10">
                <motion.div
                  variants={variantOne}
                  initial="hidden"
                  whileInView="visible"
                  className="rounded-lg bg-[#282A30] p-6"
                >
                  <FaCircle className="mx-auto text-slate-500" size="30px" />
                  <div className="mt-6 rounded bg-[#222329] p-4">
                    <p className="font-pacifico text-3xl text-slate-400">03</p>
                    <p className="font-pacifico text-lg text-slate-200">Analysis mode</p>
                    <p className="mt-2 text-sm text-slate-400">
                      Select a template of your choice to visualize your data
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="md:px-10">
                <motion.div
                  variants={variantTwo}
                  initial="hidden"
                  whileInView="visible"
                  className="rounded-lg bg-[#282A30] p-6 md:mt-32"
                >
                  <FaCircle className="mx-auto text-slate-500" size="30px" />
                  <div className="mt-6 rounded bg-[#222329] p-4">
                    <p className="font-pacifico text-3xl text-slate-400">04</p>
                    <p className="font-pacifico text-lg text-slate-200">Preview data</p>
                    <p className="mt-2 text-sm text-slate-400">
                      Select a template of your choice to visualize your data
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="md:px-10">
                <motion.div
                  variants={variantOne}
                  initial="hidden"
                  whileInView="visible"
                  className="rounded-lg bg-[#282A30] p-6"
                >
                  <FaCircle className="mx-auto text-slate-500" size="30px" />
                  <div className="mt-6 rounded bg-[#222329] p-4">
                    <p className="font-pacifico text-3xl text-slate-400">05</p>
                    <p className="font-pacifico text-lg text-slate-200">Summary</p>
                    <p className="mt-2 text-sm text-slate-400">
                      Select a template of your choice to visualize your data
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="md:px-10">
                <motion.div
                  variants={variantTwo}
                  initial="hidden"
                  whileInView="visible"
                  className="rounded-lg bg-[#282A30] p-6 md:mt-32"
                >
                  <FaCircle className="mx-auto text-slate-500" size="30px" />
                  <div className="mt-6 rounded bg-[#222329] p-4">
                    <p className="font-pacifico text-3xl text-slate-400">06</p>
                    <p className="font-pacifico text-lg text-slate-200">Combinations</p>
                    <p className="mt-2 text-sm text-slate-400">
                      Select a template of your choice to visualize your data
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowImmortalityWorks;

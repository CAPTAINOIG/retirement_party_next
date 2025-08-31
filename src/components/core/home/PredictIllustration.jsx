import React from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';

import { motion } from 'motion/react';

const PredictIllustration = ({ isActive, isParentInView }) => {
  return (
    <motion.div 
      className="relative mx-auto hidden w-[320px] flex-col items-center justify-center lg:flex"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isActive && isParentInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="absolute top-20 left-0 h-[300px] w-full space-y-8">
        <motion.div 
          className="mx-auto flex w-full gap-4 px-8"
          initial={{ opacity: 0, x: -20 }}
          animate={isActive && isParentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        >
          <img className="h-[30px] w-[30px]" src="/images/face-three.png" alt="User avatar" />
          <div className="min-h-[35px] w-full rounded-2xl bg-[#282A30] px-4 py-2">
            <p className="line-clamp-2 text-sm font-extralight text-slate-400">
              Immortal AI is revolutionary! The way it processes African data is incredible
            </p>
          </div>
        </motion.div>
        <motion.div 
          className="mx-auto flex w-full gap-4 px-8"
          initial={{ opacity: 0, x: 20 }}
          animate={isActive && isParentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
        >
          <div className="min-h-[35px] w-full rounded-2xl bg-[#282A30] px-4 py-2">
            <p className="line-clamp-2 text-sm font-extralight text-slate-400">
              The AI capabilities look promising for business intelligence
            </p>
          </div>
          <img className="h-[30px] w-[30px]" src="/images/face-seven.png" alt="User avatar" />
        </motion.div>
        <motion.div 
          className="mx-auto hidden w-full gap-4 px-8 md:flex"
          initial={{ opacity: 0, x: -20 }}
          animate={isActive && isParentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
        >
          <img className="h-[30px] w-[30px]" src="/images/face-two.png" alt="User avatar" />
          <div className="min-h-[35px] w-full rounded-2xl bg-[#282A30] px-4 py-2">
            <p className="line-clamp-2 text-sm font-extralight text-slate-400">
              Can't wait to see how Immortal AI transforms data analysis in Africa
            </p>
          </div>
        </motion.div>
      </div>
      <motion.img 
        className="mx-auto w-full opacity-100 md:w-[320px]" 
        src="/images/phone.svg" 
        alt="Mobile phone mockup"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isActive && isParentInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      />
      <motion.div 
        className="z-10 mx-auto flex h-[320px] w-full flex-col rounded-3xl bg-white px-4 py-6 shadow md:w-[320px]"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive && isParentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
      >
        <div className="flex items-center gap-2 px-4">
          <img className="h-10 w-10 rounded-full bg-black p-2" src="/images/parrot-2.svg" alt="Parrots app icon" />
          <p className="text-sm font-semibold">Parrots</p>
          <p className="rounded bg-slate-200 px-2 py-1 text-[12px] text-black">App</p>
          <p className="text-sm">5:32PM</p>
        </div>
        <hr className="mt-4" />
        <div className="flex items-center gap-2 p-4">
          <p className="text-lg">Maya Abasi posted</p>
          <IoMdNotificationsOutline size="20px" />
        </div>
        <div className="mt-auto flex items-center gap-4 px-4">
          <img className="h-16 w-16 rounded" src="/images/maya.jpg" alt="Maya Abasi profile picture" />
          <div className="w-full space-y-2">
            <div className="h-[10px] w-[70%] animate-pulse rounded-full bg-slate-200" />
            <div className="h-[10px] w-[30%] animate-pulse rounded-full bg-slate-200" />
            <div className="h-[10px] w-[50%] animate-pulse rounded-full bg-slate-200" />
          </div>
        </div>
        <hr className="mt-4" />
        <div className="flex items-center gap-2 p-4">
          <div className="flex">
            <img
              className="h-[30px] w-[30px] rounded-full border border-white transition-transform duration-300 ease-in-out hover:scale-110"
              src="/images/face-seven.png"
              alt="User avatar"
            />
            <img
              className="-ml-3 h-[30px] w-[30px] rounded-full border border-white transition-transform duration-300 ease-in-out hover:scale-110"
              src="/images/face-two.png"
              alt="User avatar"
            />
            <img
              className="-ml-3 h-[30px] w-[30px] rounded-full border border-white transition-transform duration-300 ease-in-out hover:scale-110"
              src="/images/face-three.png"
              alt="User avatar"
            />
          </div>
          {/*<p className="text-md font-semibold">25 replies</p>*/}
          <p className="text-sm font-extralight text-black">Last reply 4 min ago</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PredictIllustration;

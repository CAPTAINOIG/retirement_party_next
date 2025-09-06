import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Button, useDisclosure } from '@heroui/react';
import { IMMORTAL_URL, PREDICT_URL } from '@/lib/constants';
import MarketWaitlistModal from '@/components/core/shared/MarketWaitlistModal';

const BigIdeas = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { isOpen: isGetStartedOpen, onOpen: onGetStartedOpen, onClose: onGetStartedClose } = useDisclosure();

  return (
    <div ref={sectionRef} className="dark relative w-full overflow-hidden bg-black text-white md:pt-32 md:pb-40">
      <div className="relative container mx-auto md:block">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h2
            className="mx-auto text-center text-5xl !leading-none font-bold tracking-tight md:text-[7rem]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            Unveiling
            <br />
            <span className="relative inline-block leading-[0.7]">
              <span className="absolute inset-0 bottom-0 h-[45px] rotate-[3.5deg] rounded-2xl bg-linear-to-r from-green-600 to-transparent md:h-[60px]"></span>
              <span className="relative">Immortal AI</span>
            </span>
          </motion.h2>
          <motion.p
            className="mx-auto max-w-xl py-8 text-center text-lg leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            Empowering African businesses and consumers with cutting-edge analytics, insights, and data-driven platforms
            to unlock unprecedented growth opportunities.
          </motion.p>
        </motion.div>
        <div className="relative mt-6 grid-cols-[2fr_2fr_2fr] gap-4 space-y-8 md:grid md:space-y-0">
          <motion.div
            className="relative z-20 flex flex-col rounded-2xl bg-[#FF7091] px-10 py-8"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            <div className="absolute top-0 -right-8 h-full w-12 space-y-8 py-10">
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
            </div>
            <div className="space-y-6">
              <p className="text-xl leading-[1.1] font-semibold text-white">Business Intelligence</p>
              <div className="grid grid-cols-4 items-center gap-2">
                <img className="w-[60px]" src="/images/face-two.png" alt="face" />
                <div className="col-span-3 space-y-2">
                  <div className="h-[10px] w-[85%] animate-pulse rounded-full bg-pink-300" />
                  <div className="flex w-[80%] items-center gap-2">
                    <div className="h-[10px] w-[30%] animate-pulse rounded-full bg-pink-300" />
                    <div className="h-[10px] w-[20%] animate-pulse rounded-full bg-pink-300" />
                    <div className="h-[10px] w-[50%] animate-pulse rounded-full bg-pink-300" />
                  </div>
                  <div className="h-[10px] w-[55%] animate-pulse rounded-full bg-pink-300" />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div>
                    <div className="h-[10px] w-[10px] rounded-full bg-white opacity-50" />
                  </div>
                  <p className="text-white">Structured data analysis</p>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <div className="h-[10px] w-[10px] rounded-full bg-white opacity-50" />
                  </div>
                  <p className="text-white">Unstructured data analysis</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-[10px] w-[55%] animate-pulse rounded-full bg-pink-300" />
                  <div className="h-[10px] w-[20%] animate-pulse rounded-full bg-pink-300" />
                </div>
                <div className="flex w-[90%] items-center gap-2">
                  <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-pink-300" />
                  <div className="h-[10px] w-[30%] animate-pulse rounded-full bg-pink-300" />
                  <div className="h-[10px] w-[20%] animate-pulse rounded-full bg-pink-300" />
                </div>
              </div>
            </div>
            <a href={IMMORTAL_URL} target="_blank" className="mt-auto flex">
              <Button variant="flat" radius="full" className="mt-6">
                Learn more
              </Button>
            </a>
          </motion.div>
          <motion.div
            className="relative z-10 flex flex-col rounded-2xl bg-[#FDBF12] px-10 py-8"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          >
            <div className="absolute top-0 -right-8 h-full w-12 space-y-8 py-10">
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
            </div>
            <div className="space-y-6">
              <p className="text-xl leading-[1.1] font-semibold text-white">Market intelligence</p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div>
                    <div className="h-[20px] w-[20px] animate-pulse rounded-full bg-yellow-300" />
                  </div>
                  <div className="h-[10px] w-[60%] animate-pulse rounded-full bg-yellow-300 opacity-50" />
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <div className="h-[20px] w-[20px] animate-pulse rounded-full bg-yellow-300" />
                  </div>
                  <div className="h-[10px] w-[30%] animate-pulse rounded-full bg-yellow-300" />
                  <div className="h-[10px] w-[60%] animate-pulse rounded-full bg-yellow-300" />
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <div className="h-[20px] w-[20px] animate-pulse rounded-full bg-yellow-300" />
                  </div>
                  <div className="h-[10px] w-[20%] animate-pulse rounded-full bg-yellow-300" />
                  <div className="h-[10px] w-[70%] animate-pulse rounded-full bg-yellow-300" />
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <div className="h-[20px] w-[20px] animate-pulse rounded-full border-2 border-yellow-300" />
                  </div>
                  <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-yellow-300" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div>
                      <div className="h-[10px] w-[10px] rounded-full bg-white opacity-50" />
                    </div>
                    <p className="text-white">Local markets</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <div className="h-[10px] w-[10px] rounded-full bg-white opacity-50" />
                    </div>
                    <p className="text-white">Global markets</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-auto flex">
              <Button variant="flat" radius="full" className="mt-6" onPress={onGetStartedOpen}>
                Join waitlist
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="relative flex flex-col rounded-2xl bg-[#6C56C3] p-4 px-10 py-8"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 1.0, ease: 'easeOut' }}
          >
            <div className="absolute top-0 -right-8 block h-full w-12 space-y-8 py-10 md:hidden">
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
            </div>
            <div className="space-y-6">
              <p className="text-xl leading-[1.1] font-semibold text-white">Predictive intelligence</p>
              <div className="grid grid-cols-4 items-center gap-2">
                <img className="w-[40px]" src="/images/face-three.png" alt="face" />
                <div className="col-span-3 space-y-2">
                  <div className="h-[10px] w-[65%] animate-pulse rounded-full bg-purple-300" />
                  <div className="h-[10px] w-[35%] animate-pulse rounded-full bg-purple-300" />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div>
                    <div className="h-[10px] w-[10px] rounded-full bg-white opacity-50" />
                  </div>
                  <p className="text-white">AI powered prediction exchange</p>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <div className="h-[10px] w-[10px] rounded-full bg-white opacity-50" />
                  </div>
                  <p className="text-white">Create. Trade. Profit</p>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-2">
                <img className="w-[40px]" src="/images/face-three.png" alt="face" />
                <div className="col-span-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-[10px] w-[20%] animate-pulse rounded-full bg-purple-300" />
                    <div className="h-[10px] w-[60%] animate-pulse rounded-full bg-purple-300" />
                  </div>
                  <div className="h-[10px] w-[65%] animate-pulse rounded-full bg-purple-300" />
                </div>
              </div>
            </div>
            <a href={PREDICT_URL} target="_blank" className="mt-auto flex">
              <Button variant="flat" radius="full" className="mt-6">
                Learn more
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
      <MarketWaitlistModal isOpen={isGetStartedOpen} onClose={onGetStartedClose} />
    </div>
  );
};

export default BigIdeas;

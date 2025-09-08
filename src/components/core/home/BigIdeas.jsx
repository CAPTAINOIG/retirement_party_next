import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Button, useDisclosure } from '@heroui/react';
import MarketWaitlistModal from '@/components/core/shared/MarketWaitlistModal';
import { IMMORTAL_URL, OPINIONS_URL, PREDICT_URL } from '@/lib/constants';

const BigIdeas = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const {
    isOpen: isMarketWaitlistOpen,
    onOpen: onMarketWaitlistOpen,
    onClose: onMarketWaitlistClose,
  } = useDisclosure();

  return (
    <div
      ref={sectionRef}
      className="dark relative w-full overflow-hidden bg-black pt-10 pb-20 text-white md:pt-32 md:pb-40"
    >
      <div className="relative container mx-auto md:block">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-16"
        >
          <motion.h2
            className="mx-auto max-w-5xl text-center text-5xl !leading-[0.9] font-semibold tracking-tight md:text-8xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <span className="bg-linear-to-r from-teal-600 to-blue-800 bg-clip-text font-bold text-transparent">
              Immortal AI
            </span>
            <br />
            <span className="text-default-600 text-5xl italic md:text-[5.4rem]">Africa's OS for data intelligence</span>
          </motion.h2>
        </motion.div>
        <div className="relative mt-6 grid gap-6 md:grid-cols-3">
          {/* First Row */}
          <motion.div
            className="relative flex flex-col rounded-2xl bg-[#FF7091] px-8 py-6"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Business Intelligence (BI)</h3>
              <p className="text-white/90">Creates insights business data</p>
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
            </div>
            <a href={IMMORTAL_URL} target="_blank" className="mt-auto flex">
              <Button variant="flat" radius="full" className="mt-6">
                Learn more
              </Button>
            </a>
          </motion.div>

          <motion.div
            className="relative flex flex-col rounded-2xl bg-[#6C56C3] px-8 py-6"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Predict (PI)</h3>
              <p className="text-white/90">Models prediction analytics</p>
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
                  <p className="text-base text-white">AI powered prediction exchange</p>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <div className="h-[10px] w-[10px] rounded-full bg-white opacity-50" />
                  </div>
                  <p className="text-base text-white">Create. Trade. Profit</p>
                </div>
              </div>
            </div>
            <a href={PREDICT_URL} target="_blank" className="mt-auto flex">
              <Button variant="flat" radius="full" className="mt-6">
                Learn more
              </Button>
            </a>
          </motion.div>

          <motion.div
            className="relative flex flex-col rounded-2xl bg-[#FDBF12] px-8 py-6"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Markets (MI)</h3>
              <p className="text-white/90">Models market insights via AI agents</p>
              <div className="space-y-3">
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
                  <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-yellow-300" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div>
                      <div className="h-[10px] w-[10px] rounded-full bg-white opacity-50" />
                    </div>
                    <p className="text-base text-white">Local markets</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <div className="h-[10px] w-[10px] rounded-full bg-white opacity-50" />
                    </div>
                    <p className="text-base text-white">Global markets</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-auto flex">
              <Button variant="flat" radius="full" className="mt-6" onPress={onMarketWaitlistOpen}>
                Join waitlist
              </Button>
            </div>
          </motion.div>

          {/* Second Row */}
          <motion.div
            className="relative flex flex-col rounded-2xl bg-[#10B981] px-8 py-6"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Opinion</h3>
              <p className="text-white/90">Validates global opinions using AI.</p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-[10px] w-[70%] animate-pulse rounded-full bg-green-300" />
                  <div className="h-[10px] w-[20%] animate-pulse rounded-full bg-green-300" />
                </div>
                <div className="flex w-[90%] items-center gap-2">
                  <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-green-300" />
                  <div className="h-[10px] w-[30%] animate-pulse rounded-full bg-green-300" />
                  <div className="h-[10px] w-[20%] animate-pulse rounded-full bg-green-300" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div>
                      <div className="h-[10px] w-[10px] rounded-full bg-white opacity-50" />
                    </div>
                    <p className="text-base text-white">Global sentiment analysis</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <div className="h-[10px] w-[10px] rounded-full bg-white opacity-50" />
                    </div>
                    <p className="text-base text-white">Real-time validation</p>
                  </div>
                </div>
              </div>
            </div>
            <a href={OPINIONS_URL} target="_blank" className="mt-auto flex">
              <Button variant="flat" radius="full" className="mt-6">
                Learn more
              </Button>
            </a>
          </motion.div>

          <motion.div
            className="relative flex flex-col rounded-2xl bg-[#F59E0B] px-8 py-6"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 1.0, ease: 'easeOut' }}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Identity</h3>
              <p className="text-white/90">Data insights from ID imaging.</p>
              <div className="grid grid-cols-4 items-center gap-2">
                <img className="w-[50px]" src="/images/face-seven.png" alt="face" />
                <div className="col-span-3 space-y-2">
                  <div className="h-[10px] w-[75%] animate-pulse rounded-full bg-orange-300" />
                  <div className="flex w-[85%] items-center gap-2">
                    <div className="h-[10px] w-[25%] animate-pulse rounded-full bg-orange-300" />
                    <div className="h-[10px] w-[35%] animate-pulse rounded-full bg-orange-300" />
                    <div className="h-[10px] w-[25%] animate-pulse rounded-full bg-orange-300" />
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div>
                    <div className="h-[10px] w-[10px] rounded-full bg-white opacity-50" />
                  </div>
                  <p className="text-base text-white">Document verification</p>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <div className="h-[10px] w-[10px] rounded-full bg-white opacity-50" />
                  </div>
                  <p className="text-base text-white">Biometric analysis</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative flex flex-col rounded-2xl bg-[#8B5CF6] px-8 py-6"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">More.</h3>
              <p className="text-white/90">We are building more rails for analytics</p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-[15px] w-[15px] animate-pulse rounded-full bg-violet-300" />
                  <div className="h-[10px] w-[50%] animate-pulse rounded-full bg-violet-300" />
                  <div className="h-[15px] w-[15px] animate-pulse rounded-full bg-violet-300" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-[10px] w-[60%] animate-pulse rounded-full bg-violet-300" />
                  <div className="h-[10px] w-[25%] animate-pulse rounded-full bg-violet-300" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div>
                      <div className="h-[10px] w-[10px] rounded-full bg-white opacity-50" />
                    </div>
                    <p className="text-base text-white">Coming soon...</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <div className="h-[10px] w-[10px] rounded-full bg-white opacity-50" />
                    </div>
                    <p className="text-base text-white">Stay tuned</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <MarketWaitlistModal isOpen={isMarketWaitlistOpen} onClose={onMarketWaitlistClose} />
    </div>
  );
};

export default BigIdeas;

'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Button, useDisclosure } from '@heroui/react';
import { TbChevronRight, TbCalendar, TbMapPin } from 'react-icons/tb';
import AnalystsApplicationDrawer from './AnalystsApplicationDrawer';

const CallToActionSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div ref={sectionRef} className="dark relative w-full bg-black py-20 text-white" id="join">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
          >
            Happening Soon, <br />
            Data Analysts Connect
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mb-12 space-y-6"
          >
            {/* Event Details Card */}
            <div className="border-default-200/20 bg-default-50/5 mx-auto max-w-2xl rounded-2xl border p-6 backdrop-blur-sm md:p-8">
              <div className="grid place-items-center gap-6 md:grid-cols-2 md:place-items-start">
                <div className="flex flex-col items-center gap-3 md:flex-row">
                  <div className="bg-primary/20 flex h-12 w-12 items-center justify-center rounded-full">
                    <TbCalendar className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Date</p>
                    <p className="text-xl font-semibold text-white md:text-2xl">November 6th</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 md:flex-row">
                  <div className="bg-primary/20 flex h-12 w-12 items-center justify-center rounded-full">
                    <TbMapPin className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Location</p>
                    <p className="text-xl font-semibold text-white md:text-2xl">Ebonylife Cinemas</p>
                    <p className="text-sm opacity-80">Victoria Island</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed opacity-80 md:text-xl">
              Exclusive event for registered Statisense on the Road - Data Analysts Tour members. To attend this
              exclusive event, join our tour.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
          >
            <Button
              onPress={onOpen}
              size="lg"
              color="primary"
              radius="full"
              className="px-8 py-6 text-lg"
              endContent={<TbChevronRight size="20" />}
            >
              Join Our Tour
            </Button>
          </motion.div>
        </div>
      </div>

      <AnalystsApplicationDrawer isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default CallToActionSection;

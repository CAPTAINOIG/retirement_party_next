'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Button, useDisclosure } from '@heroui/react';
import { TbRocket, TbTrendingUp, TbTarget, TbChevronRight } from 'react-icons/tb';
import CampusRegistrationDrawer from './CampusRegistrationForm';

const CallToActionSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const opportunities = [
    {
      icon: TbRocket,
      text: 'Learn what the market actually needs',
      color: 'bg-blue-600',
    },
    {
      icon: TbTrendingUp,
      text: 'Build skills that compound over time',
      color: 'bg-purple-600',
    },
    {
      icon: TbTarget,
      text: 'Position yourself for real opportunities',
      color: 'bg-teal-600',
    },
  ];

  return (
    <div ref={sectionRef} className="dark relative w-full bg-black py-20 text-white">
      <div className="container mx-auto px-4">
        {/* Powered By Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">Powered by Immortal AI</h2>
          <div className="mx-auto max-w-3xl space-y-4">
            <p className="text-xl leading-relaxed opacity-80 md:text-2xl">
              Immortal AI is building the next generation of data thinkers across Africa.
            </p>
            <p className="text-xl leading-relaxed opacity-90 md:text-2xl font-semibold">
              Our mission is simple:
            </p>
            <p className="text-2xl leading-relaxed md:text-3xl font-bold">
              Make data skills accessible, practical, and career-defining.
            </p>
            <p className="text-xl leading-relaxed opacity-80 md:text-2xl mt-6">
              We don't just train. We build capacity, confidence, and credibility.
            </p>
          </div>
        </motion.div>

        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mx-auto max-w-5xl"
        >
          <div className="rounded-3xl bg-default-50/60 p-12 backdrop-blur-sm md:p-16">
            <h2 className="mb-8 text-center text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              The future is coming to you
            </h2>

            <p className="mb-12 text-center text-xl leading-relaxed opacity-90 md:text-2xl">
              This is your chance to:
            </p>

            {/* Opportunities List */}
            <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {opportunities.map((opportunity, index) => {
                const IconComponent = opportunity.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                    className="flex flex-col items-center gap-4 rounded-xl bg-black/30 p-6 text-center"
                  >
                    <div className={`flex-shrink-0 rounded-full p-3 ${opportunity.color}`}>
                      <IconComponent size={28} className="text-white" />
                    </div>
                    <p className="text-lg font-semibold">{opportunity.text}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Registration CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
              className="text-center"
            >
              <h3 className="mb-4 text-3xl font-bold md:text-4xl">Stay Ready</h3>
              <p className="mb-8 text-lg leading-relaxed opacity-90 md:text-xl">
                Register your interest and we'll contact you with program details
              </p>
              <Button
                onPress={onOpen}
                size="lg"
                color="primary"
                radius="full"
                className="px-12 py-6 text-lg font-semibold"
                endContent={<TbChevronRight size="24" />}
              >
                Register Now
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <CampusRegistrationDrawer isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default CallToActionSection;

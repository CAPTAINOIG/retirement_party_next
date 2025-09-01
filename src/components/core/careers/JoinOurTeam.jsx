import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const JoinOurTeam = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef}>
      <div aria-label="Join our team" className="container">
        <div className="grid gap-6 md:gap-10 lg:grid-cols-12">
          <div className="relative lg:col-span-4">
            <div className="sticky top-36 text-center lg:text-left">
              <motion.h2
                className="text-3xl font-semibold tracking-tight md:text-5xl"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                Join our team
              </motion.h2>
            </div>
          </div>
          <div className="lg:col-span-8">
            <motion.p
              className="text-default-700 px-2 text-center text-lg leading-relaxed md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              Are you ready to be a part of a groundbreaking AI data company that's reshaping the landscape of data
              analysis across diverse industries? At Statisense, we're on a mission to revolutionize how businesses
              navigate and harness the power of data. We're looking for talented individuals who share our passion for
              innovation, accuracy, and delivering unparalleled insights to join our team.
            </motion.p>
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              <div className="grid grid-cols-2 gap-0 overflow-hidden rounded-3xl">
                <img
                  src="https://picsum.photos/400/400"
                  alt="Office environment"
                  className="h-[120px] w-full object-cover md:h-[200px]"
                />
                <img
                  src="https://picsum.photos/400/401"
                  alt="Team collaboration"
                  className="h-[120px] w-full object-cover md:h-[200px]"
                />
                <img
                  src="https://picsum.photos/400/402"
                  alt="Innovation workspace"
                  className="h-[120px] w-full object-cover md:h-[200px]"
                />
                <img
                  src="https://picsum.photos/400/403"
                  alt="Team meeting"
                  className="h-[120px] w-full object-cover md:h-[200px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinOurTeam;

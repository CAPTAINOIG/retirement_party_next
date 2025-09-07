import { Button, Chip } from '@heroui/react';
import { motion, useInView, useScroll } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { TbChevronRight } from 'react-icons/tb';
import { PREDICT_URL } from '@/lib/constants';

const sections = [
  {
    id: 'market-predictions',
    title: (
      <>
        AI-powered{' '}
        <span className="bg-linear-to-r from-teal-600 to-blue-800 bg-clip-text text-transparent">
          prediction marketplace
        </span>
      </>
    ),
    description: `PI is a data expression that creates an extensive and diverse dataset to create predictive outcomes that users can trade on`,
    image: '/images/predict-mockup.png',
    alt: 'Predict mockup',
  },
  {
    id: 'stock-trading',
    title: (
      <>
        Stocks{' '}
        <span className="bg-linear-to-r from-teal-600 to-blue-800 bg-clip-text text-transparent">
          prediction trading
        </span>{' '}
        simplified
      </>
    ),
    description: `PI transforms end-of-day stock trading outcomes into a prediction exchange`,
    image: '/images/predict-mockup-stock.png',
    alt: 'Stock trading predictions mockup',
  },
];

// Desktop Component - maintains current layout
const DesktopPredictiveIntelligenceSection = () => {
  const sectionRef = useRef(null);
  const rightSectionRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: rightSectionRef,
    offset: ['start center', 'end center'],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const sectionIndex = Math.floor(latest * sections.length);
      const clampedIndex = Math.min(sectionIndex, sections.length - 1);
      setActiveSection(clampedIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.div
      ref={sectionRef}
      className="dark relative min-h-[200vh] overflow-clip bg-black py-20 text-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container grid h-full grid-cols-2 gap-0">
        {/* Sticky Left Section */}
        <div className="sticky top-0 flex h-screen items-center">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
          >
            {/* Fixed Predictive Intelligence Chip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: 'easeOut',
              }}
            >
              <Chip variant="flat" size="lg" className="mb-6 h-auto px-4 py-2 text-2xl">
                Immortal PI
              </Chip>
            </motion.div>

            {/* Dynamic h2 and paragraph based on active section */}
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <h2 className="text-8xl !leading-[0.9] font-semibold">{sections[activeSection].title}</h2>
              <p className="mt-4 text-xl">{sections[activeSection].description}</p>
            </motion.div>

            {/* Fixed Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: 0.6,
                ease: 'easeOut',
              }}
            >
              <a href={PREDICT_URL} target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button
                  endContent={<TbChevronRight size="20" />}
                  size="lg"
                  variant="solid"
                  color="primary"
                  radius="full"
                  className="mt-8 transition-transform hover:scale-105"
                >
                  Get started
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scrolling Right Section */}
        <div ref={rightSectionRef} className="flex flex-col">
          {sections.map((section, index) => (
            <div key={section.id} className="flex h-screen items-center">
              <div className="relative w-full">
                <div className="flex w-full justify-center">
                  <motion.img
                    src={section.image}
                    alt={section.alt}
                    className="w-[400px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      activeSection === index && isInView ? { opacity: 1, scale: 1 } : { opacity: 0.3, scale: 0.9 }
                    }
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Mobile Component - restructured for mobile usability
const MobilePredictiveIntelligenceSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={sectionRef}
      className="dark bg-black py-20 text-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container space-y-16">
        {/* Header Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: 'easeOut',
            }}
          >
            <Chip variant="flat" size="lg" className="h-auto px-4 py-2">
              Immortal PI
            </Chip>
          </motion.div>
        </motion.div>

        {/* Individual Sections */}
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
              duration: 0.6,
              delay: 0.2 + index * 0.1,
              ease: 'easeOut',
            }}
          >
            {/* Section Image */}
            <div className="flex justify-center">
              <motion.img
                src={section.image}
                alt={section.alt}
                className="w-[300px] sm:w-[400px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>

            {/* Section Content */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl !leading-[0.9] font-semibold px-4">
                {section.title}
              </h2>
              <p className="text-lg sm:text-xl px-4 max-w-2xl mx-auto">
                {section.description}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.6,
            delay: 0.6,
            ease: 'easeOut',
          }}
        >
          <a href={PREDICT_URL} target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button
              endContent={<TbChevronRight size="20" />}
              size="lg"
              variant="solid"
              color="primary"
              radius="full"
              className="transition-transform hover:scale-105"
            >
              Get started
            </Button>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Main Component with responsive rendering
const PredictiveIntelligenceSection = () => {
  return (
    <div>
      {/* Desktop Component - hidden on mobile */}
      <div className="hidden lg:block">
        <DesktopPredictiveIntelligenceSection />
      </div>
      
      {/* Mobile Component - hidden on desktop */}
      <div className="block lg:hidden">
        <MobilePredictiveIntelligenceSection />
      </div>
    </div>
  );
};

export default PredictiveIntelligenceSection;

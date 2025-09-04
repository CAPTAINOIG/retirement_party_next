import { Button, Chip } from '@heroui/react';
import { motion, useInView, useScroll } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { TbChevronRight } from 'react-icons/tb';
import { PREDICT_URL } from '@/lib/constants';

const sections = [
  {
    id: 'market-predictions',
    title: 'AI-powered prediction marketplace',
    description: `PI is a data expression that creates an extensive and diverse dataset to create predictive outcomes that users can trade on`,
    image: '/images/predict-mockup.png',
    alt: 'Predict mockup',
  },
  {
    id: 'stock-trading',
    title: 'Stocks prediction trading simplified',
    description: `PI transforms end-of-day stock trading outcomes into a prediction exchange`,
    image: '/images/predict-mockup-stock.png',
    alt: 'Stock trading predictions mockup',
  },
];

const PredictiveIntelligenceSection = () => {
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
    <div>
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
    </div>
  );
};

export default PredictiveIntelligenceSection;

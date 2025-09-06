import { Button, Chip } from '@heroui/react';
import { motion, useInView, useScroll } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { TbChevronRight } from 'react-icons/tb';
import { IMMORTAL_URL } from '@/lib/constants';
import StructuredDataIllustration from '@/components/core/home/StructuredDataIllustration';
import UnstructuredDataIllustration from '@/components/core/home/UnstructuredDataIllustration';
import UseCasesIllustration from '@/components/core/home/UseCasesIllustration';

const sections = [
  {
    id: 'structured',
    title: 'Bringing intelligence to business data',
    description:
      'Immortal BI aggregates and convert complex business data from any source nto simple visual insights using AI',
    component: StructuredDataIllustration,
  },
  {
    id: 'unstructured',
    title: 'Generate insights from embedded sources',
    description: 'We are connected to 500+ data sources, bringing insights from wherever your data is.',
    component: UnstructuredDataIllustration,
  },
  {
    id: 'usecases',
    title: 'Apply across multiple use cases',
    description:
      'Deploy business intelligence across finance, markets, HR, payments, and operations. Comprehensive insights tailored to your specific industry needs.',
    component: UseCasesIllustration,
  },
];

// Desktop Component - maintains current layout
const DesktopBusinessIntelligenceSection = () => {
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
      className="relative min-h-[300vh] overflow-clip py-20"
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
            {/* Fixed Business Intelligence Chip */}
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
                Immortal BI
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
              <a href={IMMORTAL_URL} target="_blank" rel="noopener noreferrer" className="inline-block">
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
          {sections.map((section, index) => {
            const Component = section.component;
            return (
              <div key={section.id} className="flex h-screen items-center">
                <div className="relative w-full">
                  <div className="flex w-full justify-center">
                    <Component isActive={activeSection === index} isParentInView={isInView} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

// Mobile Component - restructured for mobile usability
const MobileBusinessIntelligenceSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={sectionRef}
      className="py-20"
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
              Immortal BI
            </Chip>
          </motion.div>
        </motion.div>

        {/* Individual Sections */}
        {sections.map((section, index) => {
          const Component = section.component;
          return (
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
              {/* Section Illustration */}
              <div className="flex justify-center">
                <Component isActive={true} isParentInView={isInView} />
              </div>
              {/* Section Content */}
              <div className="space-y-4 text-center">
                <h2 className="px-4 text-4xl !leading-[0.9] font-semibold sm:text-5xl">{section.title}</h2>
                <p className="mx-auto max-w-2xl px-4 text-lg sm:text-xl">{section.description}</p>
              </div>
            </motion.div>
          );
        })}

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
          <a href={IMMORTAL_URL} target="_blank" rel="noopener noreferrer" className="inline-block">
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
const BusinessIntelligenceSection = () => {
  return (
    <div>
      {/* Desktop Component - hidden on mobile */}
      <div className="hidden lg:block">
        <DesktopBusinessIntelligenceSection />
      </div>

      {/* Mobile Component - hidden on desktop */}
      <div className="block lg:hidden">
        <MobileBusinessIntelligenceSection />
      </div>
    </div>
  );
};

export default BusinessIntelligenceSection;

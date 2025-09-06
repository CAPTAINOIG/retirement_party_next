import { Button, Chip, useDisclosure } from '@heroui/react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { TbChevronRight } from 'react-icons/tb';
import { OPINIONS_URL } from '@/lib/constants';
import OpinionsIllustration from '@/components/core/home/OpinionsIllustration';
import Link from 'next/link';

// Define sections data
const sections = [
  {
    id: 'context',
    title: 'Providing data context to public opinions',
    description: 'Our opinions platform uses AI to provide data context to comments of public figures globally',
    component: OpinionsIllustration,
  },
  // Add more sections as needed
];

// Desktop Component - maintains current layout
const DesktopOpinionsSection = () => {
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
      className="dark relative w-full overflow-hidden bg-black text-white"
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
            {/* Fixed Opinions Chip */}
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
                Opinions
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
              <Button
                endContent={<TbChevronRight size="20" />}
                size="lg"
                variant="solid"
                color="primary"
                radius="full"
                className="mt-8 transition-transform hover:scale-105"
                href={OPINIONS_URL}
                as={Link}
                target="_blank"
              >
                Get started
              </Button>
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
const MobileOpinionsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={sectionRef}
      className="overflow-hidden py-20"
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
            <Chip variant="flat" size="lg" className="h-auto px-3 py-1">
              Opinions
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
              <div className="flex items-center justify-center">
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
          <Button
            endContent={<TbChevronRight size="20" />}
            size="lg"
            variant="solid"
            color="primary"
            radius="full"
            className="transition-transform hover:scale-105"
            href={OPINIONS_URL}
            as={Link}
            target="_blank"
          >
            Get started
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Main Component with responsive rendering
const OpinionsSection = () => {
  return (
    <div>
      {/* Desktop Component - hidden on mobile */}
      <div className="hidden lg:block">
        <DesktopOpinionsSection />
      </div>

      {/* Mobile Component - hidden on desktop */}
      <div className="block lg:hidden">
        <MobileOpinionsSection />
      </div>
    </div>
  );
};

export default OpinionsSection;

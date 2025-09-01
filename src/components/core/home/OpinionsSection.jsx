import { Button } from '@heroui/react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { TbChevronRight } from 'react-icons/tb';
import { OPINIONS_URL } from '@/lib/constants';
import OpinionsIllustration from '@/components/core/home/OpinionsIllustration';

const OpinionsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 20%'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20]);

  return (
    <motion.div
      ref={sectionRef}
      className="dark relative flex min-h-screen items-center overflow-clip bg-black text-white md:py-40"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container grid h-full grid-cols-2 items-center gap-20">
        <motion.div
          style={{ opacity, y }}
          className="max-w-xl"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: 'easeOut',
          }}
        >
          <motion.h2
            className="text-8xl !leading-[0.9] font-semibold"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: 'easeOut',
            }}
          >
            AI-curated insights at your fingertips
          </motion.h2>
          <motion.p
            className="mt-4 text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.6,
              delay: 0.7,
              ease: 'easeOut',
            }}
          >
            Stay ahead with intelligent news summaries, data visualizations, and market reports that distill complex
            information into clear, actionable insights for better decision-making.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.6,
              delay: 0.9,
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
            >
              Get started
            </Button>
          </motion.div>
        </motion.div>
        <div className="relative">
          <div className="flex w-full justify-center">
            <OpinionsIllustration isActive={isInView} isParentInView={isInView} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OpinionsSection;

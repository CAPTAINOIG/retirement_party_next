import { Button, Chip } from '@heroui/react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';
import { TbChevronRight } from 'react-icons/tb';
import { PREDICT_URL } from '@/lib/constants';
import PredictIllustration from '@/components/core/home/PredictIllustration';

const PredictiveIntelligenceSection = () => {
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
      className="relative flex min-h-screen items-center overflow-clip"
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
            delay: 0.1,
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
            <Chip variant="flat" size="lg" className="mb-6">
              Predictive Intelligence
            </Chip>
          </motion.div>
          <motion.h2
            className="text-8xl !leading-[0.9] font-semibold"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: 'easeOut',
            }}
          >
            Predicting the future of Africa
          </motion.h2>
          <motion.p
            className="mt-4 text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: 'easeOut',
            }}
          >
            Harness advanced predictive models to anticipate market movements and economic shifts across the continent,
            empowering strategic decision-making.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.6,
              delay: 0.7,
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
              href={PREDICT_URL}
            >
              Get started
            </Button>
          </motion.div>
        </motion.div>
        <div className="relative">
          <div className="flex w-full justify-center">
            {/* <PredictIllustration isActive={isInView} isParentInView={isInView} /> */}
            <img src="/images/predict-mockup.png" alt="Predict mockup" className="w-[400px]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PredictiveIntelligenceSection;

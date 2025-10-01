import { Button, useDisclosure } from '@heroui/react';
import { motion, useMotionValueEvent, useScroll, useTransform, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import React from 'react';
import { TbChevronRight } from 'react-icons/tb';
import { IMMORTAL_URL, OPINIONS_URL, PREDICT_URL } from '@/lib/constants';
import MarketWaitlistModal from '@/components/core/shared/MarketWaitlistModal';
import BiIllustration from '@/components/core/home/BiIllustration';
import PredictIllustration from '@/components/core/home/PredictIllustration';
import MarketIllustration from '@/components/core/home/MarketIllustration';
import OpinionsIllustration from '@/components/core/home/OpinionsIllustration';

const ImmortalProducts = () => {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const { isOpen: isGetStartedOpen, onOpen: onGetStartedOpen, onClose: onGetStartedClose } = useDisclosure();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const sections = [
    {
      name: 'Business intelligence',
      title: `Uncover insights from business data`,
      body: `Our AI infrastructure seamlessly aggregates and analyzes data across Africa's diverse markets, transforming fragmented information into actionable business intelligence.`,
      illustration: BiIllustration,
      link: IMMORTAL_URL,
    },
    {
      name: 'Predictive intelligence',
      title: `Predicting the future of Africa`,
      body: `Harness advanced predictive models to anticipate market movements and economic shifts across the continent, empowering strategic decision-making.`,
      illustration: PredictIllustration,
      link: PREDICT_URL,
    },
    {
      name: 'Market intelligence',
      title: `Navigate African markets with precision`,
      body: `Access comprehensive market analysis powered by AI to identify opportunities, assess risks, and make informed investment decisions across emerging African economies.`,
      illustration: MarketIllustration,
      link: null,
      isModal: true,
    },
    {
      name: 'Opinions',
      title: `AI-curated insights at your fingertips`,
      body: `Stay ahead with intelligent news summaries, data visualizations, and market reports that distill complex information into clear, actionable insights for better decision-making.`,
      illustration: OpinionsIllustration,
      link: OPINIONS_URL,
    },
  ];

  const last = useRef(0);
  const n = sections.length;
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const goingDown = v > last.current;
    const goingUp = v < last.current;
    last.current = v;
    setActive((prev) => {
      if (goingDown && v >= (prev + 1) / n) return Math.min(prev + 1, n - 1);
      if (goingUp && v <= prev / n - 1e-6) return Math.max(prev - 1, 0);
      return prev;
    });
  });

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={containerRef}
      className="relative flex items-center overflow-clip"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container grid h-full grid-cols-2 gap-20">
        <div ref={ref}>
          {sections.map((s, idx) => (
            <Section
              key={idx}
              title={s.title}
              body={s.body}
              link={s.link}
              index={idx}
              isParentInView={isInView}
              isModal={s.isModal}
              onGetStartedOpen={onGetStartedOpen}
            />
          ))}
        </div>
        <div className="relative">
          <div className="sticky top-10 h-screen">
            <div className="absolute top-1/2 flex w-[100%] origin-left -translate-y-1/2">
              {React.createElement(sections[active].illustration, {
                isActive: true,
                isParentInView: isInView,
              })}
            </div>
          </div>
        </div>
      </div>
      <MarketWaitlistModal isOpen={isGetStartedOpen} onClose={onGetStartedClose} />
    </motion.div>
  );
};

export default ImmortalProducts;

const Section = ({ title, body, link, index, isParentInView, isModal, onGetStartedOpen }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  const { scrollYProgress: p } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 20%'],
  });
  const opacity = useTransform(p, [0, 0.5, 1], [1, 1, 0]);
  const y = useTransform(p, [0, 0.5, 1], [20, 0, -20]);

  return (
    <div ref={sectionRef} className="flex h-screen items-center">
      <motion.div
        style={{ opacity, y }}
        className="max-w-xl"
        initial={{ opacity: 0, y: 60 }}
        animate={isInView && isParentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{
          duration: 0.8,
          delay: index * 0.1,
          ease: 'easeOut',
        }}
      >
        <motion.h2
          className="text-8xl !leading-[0.9] font-semibold"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView && isParentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1 + 0.2,
            ease: 'easeOut',
          }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="mt-4 text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView && isParentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1 + 0.4,
            ease: 'easeOut',
          }}
        >
          {body}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView && isParentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1 + 0.6,
            ease: 'easeOut',
          }}
        >
          <Button
            endContent={<TbChevronRight size="20" />}
            size="lg"
            variant="solid"
            color="primary"
            radius="full"
            className="mt-8"
            href={isModal ? undefined : link}
            onPress={isModal ? onGetStartedOpen : undefined}
          >
            {isModal ? 'Join waitlist' : 'Get started'}
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

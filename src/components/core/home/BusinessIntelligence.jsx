import { Button } from '@heroui/react';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { TbChevronRight } from 'react-icons/tb';

const BusinessIntelligence = () => {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const sections = [
    {
      name: 'Business intelligence',
      title: `Wherever hidden your data is, we will find it`,
      body: `With Immortal AI, we are building the rails to aggregate Africa's data, wherever they are.`,
      image: '/images/bi.png',
    },
    {
      name: 'Predictive intelligence',
      title: `Predicting the future of Africa`,
      body: `We are connecting intelligence to African's data, join us.`,
      image: '/images/pi.png',
    },
    {
      name: 'Market intelligence',
      title: `Providing AI context to Africa's markets`,
      body: `We are connecting intelligence to African's data, join us.`,
      image: '/images/mi.png',
    },
    {
      name: 'Parrots',
      title: `Empower your decisions with AI-Curated insights`,
      body: `Discover a curated world of data-driven insights, AI-powered news summaries, and compelling infographics that help you stay informed and make better decisions.`,
      image: '/images/parrots.png',
    },
  ];

  // Standard behavior: progress 0 at container start, 1 at end; update when a section fully leaves
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

  return (
    <div className="relative flex items-center overflow-clip">
      <div className="container grid h-full grid-cols-2 gap-20">
        <div ref={ref}>
          {sections.map((s, idx) => (
            <Section key={idx} title={s.title} body={s.body} />
          ))}
        </div>
        <div className="relative">
          <div className="sticky top-10 h-screen">
            <motion.img
              key={active}
              src={sections[active].image}
              alt="Business intelligence dashboard"
              initial={{ opacity: 0, scale: 0.98, filter: 'blur(2px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.02, filter: 'blur(2px)' }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="border-default-50/70 absolute top-1/2 flex w-[140%] origin-left -translate-y-1/2 scale-200 rounded-2xl border-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessIntelligence;

// Lightweight section component with local scroll-driven reveal and CTA
const Section = ({ title, body }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress: p } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 20%'],
  });
  const opacity = useTransform(p, [0, 0.5, 1], [1, 1, 0]);
  const y = useTransform(p, [0, 0.5, 1], [20, 0, -20]);

  return (
    <div ref={sectionRef} className="flex h-screen items-center">
      <motion.div style={{ opacity, y }} className="max-w-xl">
        <h2 className="text-8xl !leading-[0.9] font-semibold">{title}</h2>
        <p className="mt-4 text-xl">{body}</p>
        <Button
          endContent={<TbChevronRight size="20" />}
          size="lg"
          variant="solid"
          color="primary"
          radius="full"
          className="mt-8"
        >
          Get started
        </Button>
      </motion.div>
    </div>
  );
};

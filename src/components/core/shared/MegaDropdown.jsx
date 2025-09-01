import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { TbArrowRight, TbChevronDown } from 'react-icons/tb';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import { IMMORTAL_URL, MARKET_URL, OPINIONS_URL, PREDICT_URL } from '@/lib/constants';

const items = [
  {
    name: 'Business intelligence',
    title: `Uncover insights from business data`,
    subtitle: `Advanced AI infrastructure for seamless data aggregation across Africa`,
    body: `Our AI infrastructure seamlessly aggregates and analyzes data across Africa's diverse markets, transforming fragmented information into actionable business intelligence.`,
    features: [
      'Real-time data aggregation across multiple sources',
      'Advanced analytics and pattern recognition',
      'Automated reporting and dashboard creation',
      'Cross-market data correlation and insights',
    ],
    href: IMMORTAL_URL,
    slug: 'business-intelligence',
    image: '/images/bi.png',
  },
  {
    name: 'Predictive intelligence',
    title: `Predicting the future of Africa`,
    subtitle: `Transform data into actionable predictions for strategic decisions`,
    body: `Harness advanced predictive models to anticipate market movements and economic shifts across the continent, empowering strategic decision-making.`,
    features: [
      'Advanced machine learning forecasting models',
      'Economic trend prediction and analysis',
      'Risk assessment and scenario planning',
      'Market movement anticipation tools',
    ],
    href: PREDICT_URL,
    slug: 'predictive-intelligence',
    image: '/images/pi.png',
  },
  {
    name: 'Market intelligence',
    title: `Navigate African markets with precision`,
    subtitle: `Comprehensive market analysis for informed investment decisions`,
    body: `Access comprehensive market analysis powered by AI to identify opportunities, assess risks, and make informed investment decisions across emerging African economies.`,
    features: [
      'Comprehensive market analysis and trends',
      'Investment opportunity identification',
      'Risk assessment and mitigation strategies',
      'Competitive landscape analysis',
    ],
    href: MARKET_URL,
    slug: 'market-intelligence',
    image: '/images/mi.png',
  },
  {
    name: 'Opinions',
    title: `AI-curated insights at your fingertips`,
    subtitle: `Thought leadership and expert commentary on market trends`,
    body: `Stay ahead with intelligent news summaries, data visualizations, and market reports that distill complex information into clear, actionable insights for better decision-making.`,
    features: [
      'AI-curated news summaries and analysis',
      'Interactive data visualizations',
      'Expert market commentary and insights',
      'Personalized content recommendations',
    ],
    href: OPINIONS_URL,
    slug: 'opinions',
    image: '/images/opinions.png',
  },
];

const MegaDropdown = ({ label, align = 'center' }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onClickAway = (e) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClickAway);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClickAway);
    };
  }, []);

  const hasItems = Array.isArray(items) && items.length > 0;

  return (
    <div
      ref={wrapperRef}
      className="relative flex h-full items-center"
      onMouseEnter={() => hasItems && setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={cn(
          'group hover:bg-foreground/5 inline-flex h-8 items-center rounded-full px-4 text-base leading-none transition-colors'
        )}
        aria-haspopup="true"
        aria-expanded={open}
        onFocus={() => hasItems && setOpen(true)}
      >
        <span className="align-middle">{label}</span>
        <motion.span
          className="ml-1 inline-flex h-4 w-4 items-center justify-center"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <TbChevronDown className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && hasItems && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className={cn(
              'absolute top-full z-[60] mt-3 w-[800px] max-w-[95vw] origin-top',
              align === 'center'
                ? 'left-1/2 -translate-x-1/2'
                : align === 'right'
                  ? 'right-0 origin-top-right'
                  : 'left-0 origin-top-left'
            )}
          >
            <div className="dark:bg-default-50 border-default-100 bg-default-100 rounded-3xl border dark:border-0">
              <div className="grid grid-cols-2 items-start gap-6 p-6">
                <div className="grid grid-cols-1 gap-3">
                  {items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      className={cn('relative min-w-0 cursor-pointer rounded-2xl px-5 py-4', {
                        'text-white': idx === active,
                      })}
                      onMouseEnter={() => setActive(idx)}
                      animate={{ scale: idx === active ? 1.02 : 1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    >
                      {idx === active && (
                        <motion.span
                          layoutId="megaItemActiveBg"
                          className="absolute inset-0 rounded-2xl bg-gray-800"
                          transition={{ type: 'spring', stiffness: 500, damping: 40, mass: 0.6 }}
                        />
                      )}
                      <div className="relative z-10">
                        <p className="text-base leading-none font-semibold">{item.name}</p>
                        <p className="mt-2 text-sm leading-tight">{item.subtitle}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="relative">
                  <AnimatePresence mode="wait">
                    <HighlightCard key={items[active]?.name || active} item={items[active]} />
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const HighlightCard = ({ item }) => {
  if (!item) return null;
  return (
    <motion.div
      className="bg-default-200/40 dark:bg-default-100/40 relative overflow-hidden rounded-2xl px-6 py-4"
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {item.image && <img src={item.image} alt={item.name} className="h-full w-full rounded-2xl object-contain" />}
      <div className="relative z-10 h-full w-full">
        <div className="rounded-xl px-2 pt-4">
          <h3 className="max-w-[300px] text-2xl font-semibold">{item.title}</h3>
          {item.body && <p className="mt-2 text-base leading-tight opacity-90">{item.body}</p>}
          <div className="mt-4">
            <Link
              href={item.href || '#'}
              target={item.href?.startsWith('http') ? '_blank' : undefined}
              className="bg-default-200 hover:bg-default-300 mt-1 inline-flex items-center gap-1 rounded-full px-4 py-1.5 font-medium transition-colors"
            >
              Learn more <TbArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" />
    </motion.div>
  );
};

export default MegaDropdown;

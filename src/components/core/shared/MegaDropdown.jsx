import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { TbChevronDown, TbArrowRight } from 'react-icons/tb';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const items = [
  {
    name: 'Business intelligence',
    title: `Uncover hidden insights from your data wherever it resides`,
    subtitle: `Advanced AI infrastructure for seamless data aggregation across Africa`,
    body: `Leverage our advanced AI infrastructure to seamlessly aggregate and analyze data across Africa's diverse markets and ecosystems.`,
    image: '/images/bi.png',
    href: 'https://app.immortal.statisense.co',
    slug: 'business-intelligence',
  },
  {
    name: 'Predictive intelligence',
    title: `Forecast Africa's economic future with precision`,
    subtitle: `Transform data into actionable predictions for strategic decisions`,
    body: `Transform raw African data into actionable predictions that drive strategic decision-making and unlock market opportunities.`,
    image: '/images/pi.png',
    href: 'https://predict.statisense.co',
    slug: 'predictive-intelligence',
  },
  {
    name: 'Market intelligence',
    title: `Navigate Africa's markets with AI-powered insights`,
    subtitle: `Comprehensive market analysis for informed investment decisions`,
    body: `Access comprehensive market analysis and trends to make informed investment and business decisions across African markets.`,
    image: '/images/mi.png',
    href: 'https://dev.market.statisense.co',
    slug: 'market-intelligence',
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
              'absolute top-full z-[60] mt-3 w-[800px] max-w-[90vw] origin-top',
              align === 'center'
                ? 'left-1/2 -translate-x-1/2'
                : align === 'right'
                  ? 'right-0 origin-top-right'
                  : 'left-0 origin-top-left'
            )}
          >
            <div className="bg-default-50 rounded-3xl shadow">
              <div className="grid grid-cols-2 items-start gap-6 p-6">
                <div className="grid grid-cols-1 gap-3">
                  {items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      className={cn('relative min-w-0 cursor-pointer rounded-2xl px-5 py-4')}
                      onMouseEnter={() => setActive(idx)}
                      animate={{ scale: idx === active ? 1.02 : 1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    >
                      {idx === active && (
                        <motion.span
                          layoutId="megaItemActiveBg"
                          className="bg-default-100 absolute inset-0 rounded-2xl"
                          transition={{ type: 'spring', stiffness: 500, damping: 40, mass: 0.6 }}
                        />
                      )}
                      <div className="relative z-10">
                        <p className="text-foreground text-base leading-none font-semibold">{item.name}</p>
                        <p className="text-foreground/70 mt-2 text-sm leading-tight">{item.subtitle}</p>
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
      className="relative overflow-hidden rounded-2xl"
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {item.image && <img src={item.image} alt={item.name} className="h-full w-full rounded-2xl object-contain" />}
      <div className="relative z-10 h-full w-full">
        <div className="rounded-xl px-2 pt-4">
          <h3 className="text-xl font-semibold">{item.name}</h3>
          {item.body && <p className="mt-1 text-sm opacity-90">{item.body}</p>}
          <div className="mt-4">
            <Link
              href={item.href || '#'}
              target={item.href?.startsWith('http') ? '_blank' : undefined}
              className="bg-default-100/50 hover:bg-default-100 mt-1 inline-flex items-center gap-1 rounded-full px-4 py-1.5 text-sm font-medium"
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

import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useIsomorphicLayoutEffect } from 'react-use';
import { IMMORTAL_URL, OPINIONS_URL, PREDICT_URL } from '@/lib/constants';

const MobileNav = ({ isOpen, onClose }) => {
  useIsomorphicLayoutEffect(() => {
    if (isOpen) document.scrollingElement.style.overflowY = 'hidden';
    else document.scrollingElement.style.overflowY = 'initial';
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-zinc-900/80"
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-accent text-accent-foreground fixed inset-x-0 top-24 z-50 mt-4 flex origin-top flex-col space-y-2 rounded-3xl px-4 py-6 text-lg tracking-tight shadow-xl"
          >
            {[
              {
                href: IMMORTAL_URL,
                label: 'Business Intelligence',
              },
              {
                href: PREDICT_URL,
                label: 'Predictive Intelligence',
              },
              {
                href: '#',
                label: 'Market Intelligence',
                isWaitlist: true,
              },
              {
                href: OPINIONS_URL,
                label: 'Opinions',
              },
              {
                href: '/analysts',
                label: 'Analysts',
              },
            ].map((item, index) => (
              <Link
                key={index}
                onClick={onClose}
                href={item.href}
                target={item.isWaitlist ? undefined : '_blank'}
                className="hover:bg-default-900/5 block w-full rounded-xl px-4 py-3"
              >
                {item.label}
                {item.isWaitlist && <span className="ml-2 text-sm opacity-60">(Coming Soon)</span>}
              </Link>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;

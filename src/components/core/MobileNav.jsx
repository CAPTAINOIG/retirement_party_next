import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useIsomorphicLayoutEffect } from 'react-use';
import { IMMORTAL_URL, PARROTS_URL } from '@/lib/constants';

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
            className="fixed inset-x-0 top-24 z-50 mt-4 flex origin-top flex-col space-y-2 rounded-3xl bg-white px-4 py-6 text-lg tracking-tight shadow-xl dark:bg-gray-800"
          >
            <Link
              onClick={onClose}
              href={IMMORTAL_URL}
              target="_blank"
              className="block w-full rounded-xl px-4 py-3 hover:bg-zinc-200"
            >
              Immortal AI
            </Link>
            <Link
              onClick={onClose}
              href={PARROTS_URL}
              target="_blank"
              className="block w-full rounded-xl px-4 py-3 hover:bg-zinc-200"
            >
              Parrots
            </Link>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;

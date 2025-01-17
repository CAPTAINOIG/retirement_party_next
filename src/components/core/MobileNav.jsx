import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useIsomorphicLayoutEffect } from 'react-use';
import NavProductsDropdown from '@/components/core/NavProductsDropdown';

const ACCOUNT_URL = process.env.NEXT_PUBLIC_ACCOUNT_URL;
const SNAPSHOTS_URL = process.env.NEXT_PUBLIC_SNAPSHOTS_URL;

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
            <div className="group relative block w-full cursor-default rounded-xl px-4 py-3 hover:bg-zinc-200 dark:hover:bg-white/10">
              For business
              <NavProductsDropdown />
            </div>
            <Link
              onClick={onClose}
              href={'https://market.statisense.co'}
              target="_blank"
              className="block w-full rounded-xl px-4 py-3 hover:bg-zinc-200"
            >
              Market
            </Link>
            <Link
              onClick={onClose}
              href={SNAPSHOTS_URL}
              className="block w-full rounded-xl px-4 py-3 hover:bg-zinc-200"
            >
              Snapshots
            </Link>
            <Link onClick={onClose} href={'/about'} className="block w-full rounded-xl px-4 py-3 hover:bg-zinc-200">
              About us
            </Link>
            <div>
              <hr className="mx-2 my-2 border-zinc-300/40 dark:border-zinc-300/10" />
            </div>
            <Link
              onClick={onClose}
              href={`${ACCOUNT_URL}/login`}
              className="block w-full rounded-xl px-4 py-3 hover:bg-zinc-200"
            >
              Sign in
            </Link>
            <Link
              onClick={onClose}
              href={`${ACCOUNT_URL}/register`}
              className="block w-full rounded-xl px-4 py-3 hover:bg-zinc-200"
            >
              Sign up
            </Link>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;

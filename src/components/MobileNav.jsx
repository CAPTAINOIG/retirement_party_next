import React from 'react';
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const MobileNav = ({ isOpen, onClose, onChat }) => {
  return (
    <AnimatePresence>
      {
        isOpen && (
          <>
            <motion.div
              initial={ { opacity: 0 } }
              animate={ { opacity: 1 } }
              exit={ { opacity: 0 } }
              onClick={ onClose }
              className="fixed inset-0 bg-zinc-900/80 z-50"
              aria-hidden="true"
            />
            <motion.div
              initial={ { opacity: 0, y: 20 } }
              animate={ { opacity: 1, y: 0 } }
              exit={ { opacity: 0, y: 20 } }
              className="fixed inset-x-0 top-24 mt-4 flex origin-top flex-col rounded-3xl bg-white px-4 py-6 text-lg tracking-tight shadow-xl z-50 space-y-2"
            >
              <Link
                onClick={ onClose } href={ "/about" }
                className="block w-full px-4 py-3 rounded-xl hover:bg-zinc-200"
              >
                About us
              </Link>
              <Link
                onClick={ onClose } href={ "/infographics" }
                className="block w-full px-4 py-3 rounded-xl hover:bg-zinc-200"
              >
                Insights
              </Link>
              <button
                onClick={ () => {
                  onClose();
                  onChat();
                } }
                className="block w-full px-4 py-3 rounded-xl hover:bg-zinc-200"
              >
                Bambi
              </button>
              <div>
                <hr className="mx-2 my-2 border-zinc-300/40"/>
              </div>
              <Link
                onClick={ onClose } href={ "https://app.statisense.co/login" }
                className="block w-full px-4 py-3 rounded-xl hover:bg-zinc-200"
              >
                Sign in
              </Link>
              <Link
                onClick={ onClose } href={ "https://app.statisense.co/register" }
                className="block w-full px-4 py-3 rounded-xl hover:bg-zinc-200"
              >
                Sign up
              </Link>
            </motion.div>
          </>
        )
      }
    </AnimatePresence>
  );
};

export default MobileNav;

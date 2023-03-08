import React, { useState } from 'react';
import Link from "next/link";
import { IconMenu } from "@tabler/icons-react";
import { useIsomorphicLayoutEffect } from "react-use";
import classNames from "classnames";
import Button from "@/components/global/Button.jsx";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  useIsomorphicLayoutEffect(() => {
    if (isMobileNavVisible) document.scrollingElement.style.overflowY = 'hidden';
    else document.scrollingElement.style.overflowY = 'initial';
  }, [isMobileNavVisible]);

  useIsomorphicLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollingElement.scrollTop;
    setScrolled(scrollTop > 50);
  };

  return (
    <>
      <header className={ classNames(
        'py-10 fixed top-0 inset-x-0 z-50 transition-all',
        { 'bg-white/90 backdrop-blur-lg text-neutral-900 shadow py-8': scrolled },
        { 'text-neutral-100': !scrolled },
      ) }>
        <div className="container mx-auto">
          <nav className="relative z-50 flex justify-between">
            <div className="flex items-center md:gap-x-12 flex-1">
              <Link href="/" className="text-xl uppercase w-48">
                Logo
              </Link>
              <div className="hidden md:flex md:space-x-3 mx-auto">
                <Link
                  href="/about"
                  className="inline-block rounded-full py-1 px-4"
                >
                  About us
                </Link>
                <Link
                  href="/#services"
                  className="inline-block rounded-full py-1 px-4"
                >
                  Our services
                </Link>
                <Link
                  className="inline-block rounded-full py-1 px-4"
                  href="/infographics"
                >
                  Infographics
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-x-5 md:gap-x-4">
              <div className="hidden md:block space-x-3">
                <Link href="/login">
                  <Button variant="text" color={ scrolled ? "black" : "white" }>Sign in</Button>
                </Link>
                <Link href="/register">
                  <Button>Get started</Button>
                </Link>
              </div>
              <div className="-mr-1 md:hidden">
                <button
                  onClick={ () => setIsMobileNavVisible(true) }
                  className="relative z-10 flex h-8 w-8 items-center justify-center [&amp;:not(:focus-visible)]:focus:outline-none"
                  aria-label="Toggle Navigation" type="button" aria-expanded="false"
                >
                  <IconMenu/>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {
          isMobileNavVisible && (
            <>
              <motion.div
                initial={ { opacity: 0 } }
                animate={ { opacity: 1 } }
                exit={ { opacity: 0 } }
                onClick={ () => setIsMobileNavVisible(false) }
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
                  onClick={ () => setIsMobileNavVisible(false) } href="/about"
                  className="block w-full px-4 py-3 rounded-xl hover:bg-zinc-200"
                >
                  About us
                </Link>
                <Link
                  onClick={ () => setIsMobileNavVisible(false) } href="/#services"
                  className="block w-full px-4 py-3 rounded-xl hover:bg-zinc-200"
                >
                  Our services
                </Link>
                <Link
                  onClick={ () => setIsMobileNavVisible(false) } href="/infographics"
                  className="block w-full px-4 py-3 rounded-xl hover:bg-zinc-200"
                >
                  Infographics
                </Link>
                <div>
                  <hr className="mx-2 my-2 border-zinc-300/40"/>
                </div>
                <Link
                  onClick={ () => setIsMobileNavVisible(false) } href="/login"
                  className="block w-full px-4 py-3 rounded-xl hover:bg-zinc-200"
                >
                  Sign in
                </Link>
                <Link
                  onClick={ () => setIsMobileNavVisible(false) } href="/login"
                  className="block w-full px-4 py-3 rounded-xl hover:bg-zinc-200"
                >
                  Sign up
                </Link>
              </motion.div>
            </>
          )
        }
      </AnimatePresence>
    </>
  );
};

export default Navbar;

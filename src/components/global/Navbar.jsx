import React, { createElement, useState } from 'react';
import Link from "next/link";
import {
  IconBuildingBank,
  IconCashBanknote,
  IconFiles,
  IconIdBadge,
  IconLayout2,
  IconLogout,
  IconMenu,
  IconShoppingBag
} from "@tabler/icons-react";
import { useIsomorphicLayoutEffect } from "react-use";
import classNames from "classnames";
import Button from "@/components/global/Button.jsx";
import { AnimatePresence, motion } from "framer-motion";
import { useAuth } from "@/hooks/use-auth.js";
import SimpleDropdown from "@/components/global/SimpleDropdown.jsx";
import { useRouter } from "next/navigation";
import Hover from "@/components/global/Hover.jsx";
import Logo from "@/components/core/shared/Logo";
import TestRun from "@/components/core/shared/TestRun";

const items = [
  {
    name: 'Banking AI',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    icon: IconBuildingBank,
    bg: 'bg-teal-500',
  },
  {
    name: 'Markets AI',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    icon: IconShoppingBag,
    bg: 'bg-sky-500',
  },
  {
    name: 'Identity AI',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    icon: IconIdBadge,
    bg: 'bg-red-500',
  },
  {
    name: 'Accounting AI',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    icon: IconCashBanknote,
    bg: 'bg-orange-500',
  },
  {
    name: 'Documents AI',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    icon: IconFiles,
    bg: 'bg-cyan-500',
  },
];

const Navbar = () => {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  useIsomorphicLayoutEffect(() => {
    if (isMobileNavVisible) document.scrollingElement.style.overflowY = 'hidden';
    else document.scrollingElement.style.overflowY = 'initial';
  }, [isMobileNavVisible]);

  useIsomorphicLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollingElement.scrollTop;
    setScrolled(scrollTop > 50);
  };

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  return (
    <>
      <header className={ classNames(
        'fixed top-0 inset-x-0 z-50 h-32 transition-all',
        { 'bg-white/90 backdrop-blur-lg text-neutral-900 shadow !h-24': scrolled },
        { 'text-neutral-100': !scrolled },
      ) }>
        <div className="container h-full">
          <nav className="relative z-50 flex justify-between h-full">
            <div className="flex items-center md:gap-x-12 flex-1 h-full">
              <Link href={ "/" } className="text-[1.6rem] flex items-center">
                <Logo className="mr-3" light={ !scrolled }/>
              </Link>
              <div className="hidden lg:flex md:space-x-3 ml-auto h-full">
                <Hover className="h-full inline-flex items-center">
                  {
                    hovered => (
                      <div className="relative h-full flex items-center">
                        <div className="inline-flex items-center rounded-full py-1 px-4">
                          For businesses
                        </div>
                        <AnimatePresence mode="wait">
                          {
                            hovered && (
                              <motion.div
                                initial={ { opacity: 0, y: 20, x: '-50%', } }
                                animate={ { opacity: 1, y: 0 } }
                                exit={ { opacity: 0, y: 20 } }
                                className={ classNames(
                                  'rounded-3xl bg-white shadow-md z-50 border text-gray-800 absolute top-full -mt-2 left-1/2 -translate-x-1/2 right-0 w-[600px]',
                                ) }
                              >
                                <div className="space-y-2 p-6">
                                  <div className="grid grid-cols-2 gap-2">
                                    {
                                      items.map(item => (
                                        <Link
                                          key={ item.name }
                                          href={ `https://app.statisense.co/` }
                                          className="rounded-2xl flex items-center hover:bg-gray-200/40 p-4 transition-all cursor-pointer"
                                        >
                                          <div className="mr-4">
                                            <div
                                              className={ classNames('w-10 h-10 rounded-full flex items-center justify-center text-white', item.bg) }
                                            >
                                              { createElement(item.icon) }
                                            </div>
                                          </div>
                                          <div>
                                            <h4 className="font-medium">{ item.name }</h4>
                                            <p className="text-sm opacity-80 leading-tight mt-1">
                                              { item.description }
                                            </p>
                                          </div>
                                        </Link>
                                      ))
                                    }
                                  </div>
                                </div>
                              </motion.div>
                            )
                          }
                        </AnimatePresence>
                      </div>
                    )
                  }
                </Hover>
                <Link
                  href={ "/infographics" }
                  className="inline-flex items-center rounded-full py-1 px-4"
                >
                  Insights
                </Link>
                <button
                  onClick={ () => setIsChatbotOpen(true) }
                  className="inline-flex items-center rounded-full py-1 px-4"
                >
                  Bambi &reg;
                </button>
              </div>
            </div>
            <div className="flex items-center justify-end gap-x-5 md:gap-x-4 ml-6">
              <div className="hidden lg:block space-x-4">
                {
                  !user ? (
                    <>
                      <Link href={ "https://app.statisense.co/login" }>
                        <Button variant="subtle" color={ scrolled ? "black" : "white" }>Sign in</Button>
                      </Link>
                      {
                        scrolled && (
                          <Link href={ "https://app.statisense.co/register" }>
                            <Button>Get started</Button>
                          </Link>
                        )
                      }
                    </>
                  ) : (
                    <div className="flex items-center space-x-4">
                      <SimpleDropdown
                        trigger={
                          <div
                            className={ classNames(
                              'flex items-center space-x-4 hover:bg-gray-200/5 rounded-full pl-3 pr-4 py-2 transition-all',
                              { 'hover:!bg-gray-200/50': scrolled }
                            ) }
                          >
                            <img
                              src={ `https://ui-avatars.com/api/?name=${ user.firstName } ${ user.lastName }` }
                              className="w-8 h-8 rounded-full" alt={ `${ user.firstName } ${ user.lastName }` }
                            />
                            <div>{ user.firstName } { user.lastName }</div>
                          </div>
                        }
                        items={ [
                          {
                            text: 'Dashboard',
                            icon: <IconLayout2 size="18"/>,
                            onClick: () => router.push('/dashboard')
                          },
                          { text: 'Logout', icon: <IconLogout size="18"/>, onClick: handleLogout }
                        ] }
                      />
                    </div>
                  )
                }
              </div>
              <div className="-mr-1 lg:hidden">
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
                  onClick={ () => setIsMobileNavVisible(false) } href={ "/about" }
                  className="block w-full px-4 py-3 rounded-xl hover:bg-zinc-200"
                >
                  About us
                </Link>
                <Link
                  onClick={ () => setIsMobileNavVisible(false) } href={ "/infographics" }
                  className="block w-full px-4 py-3 rounded-xl hover:bg-zinc-200"
                >
                  Insights
                </Link>
                <Link
                  onClick={ () => {
                    setIsMobileNavVisible(false);
                    setIsChatbotOpen(true);
                  } } href={ "/infographics" }
                  className="block w-full px-4 py-3 rounded-xl hover:bg-zinc-200"
                >
                  Bambi
                </Link>
                <div>
                  <hr className="mx-2 my-2 border-zinc-300/40"/>
                </div>
                <Link
                  onClick={ () => setIsMobileNavVisible(false) } href={ "https://app.statisense.co/login" }
                  className="block w-full px-4 py-3 rounded-xl hover:bg-zinc-200"
                >
                  Sign in
                </Link>
                <Link
                  onClick={ () => setIsMobileNavVisible(false) } href={ "https://app.statisense.co/register" }
                  className="block w-full px-4 py-3 rounded-xl hover:bg-zinc-200"
                >
                  Sign up
                </Link>
              </motion.div>
            </>
          )
        }
      </AnimatePresence>

      <TestRun
        isOpen={ isChatbotOpen }
        onClose={ () => setIsChatbotOpen(false) }
      />
    </>
  );
};

export default Navbar;

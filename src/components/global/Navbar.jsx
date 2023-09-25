import React, { useState } from 'react';
import Link from "next/link";
import { IconLayout2, IconLogout, IconMenu } from "@tabler/icons-react";
import { useIsomorphicLayoutEffect } from "react-use";
import classNames from "classnames";
import Button from "@/components/global/Button.jsx";
import { useAuth } from "@/hooks/use-auth.js";
import SimpleDropdown from "@/components/global/SimpleDropdown.jsx";
import { useRouter } from "next/navigation";
import Logo from "@/components/core/shared/Logo";
import TestRun from "@/components/core/shared/TestRun";
import NavProductsDropdown from "@/components/core/NavProductsDropdown";
import MobileNav from "@/components/MobileNav";

const Navbar = () => {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const handleScroll = (e) => {
      const scrollTop = e.target.scrollingElement.scrollTop;
      setScrolled(scrollTop > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
                <div className="relative h-full flex items-center group">
                  <div className="inline-flex items-center rounded-full py-1 px-4 cursor-default">
                    For businesses
                  </div>
                  <NavProductsDropdown/>
                </div>
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

      <MobileNav
        isOpen={ isMobileNavVisible }
        onChat={ () => setIsChatbotOpen(true) }
        onClose={ () => setIsMobileNavVisible(false) }
      />
      <TestRun
        isOpen={ isChatbotOpen }
        onClose={ () => setIsChatbotOpen(false) }
      />
    </>
  );
};

export default Navbar;

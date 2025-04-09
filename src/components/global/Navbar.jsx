import React, { useState } from 'react';
import Link from 'next/link';
import { IconMenu } from '@tabler/icons-react';
import { useIsomorphicLayoutEffect } from 'react-use';
import Button from '@/components/global/Button.jsx';
import { useAuth } from '@/hooks/use-auth.js';
import Logo from '@/components/core/shared/Logo';
import NavProductsDropdown from '@/components/core/NavProductsDropdown';
import MobileNav from '@/components/core/MobileNav';
import { cn } from '@/lib/utils';
import UserDropdown from '@/components/core/shared/UserDropdown';

const ACCOUNT_URL = process.env.NEXT_PUBLIC_ACCOUNT_URL;
const SNAPSHOTS_URL = process.env.NEXT_PUBLIC_SNAPSHOTS_URL;
const MARKET_URL = process.env.NEXT_PUBLIC_MARKET_URL;

// Temporary flag to control Snapshots visibility
const SHOW_SNAPSHOTS = false;

const Navbar = () => {
  const { resolved, authenticated } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const handleScroll = (e) => {
      const scrollTop = e.target.scrollingElement.scrollTop;
      setScrolled(scrollTop > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 h-32 transition-all',
          { '!h-24 bg-white/90 text-black shadow backdrop-blur-lg': scrolled },
          { 'text-slate-100': !scrolled }
        )}
      >
        <div className="container h-full">
          <nav className="relative z-50 flex h-full justify-between">
            <div className="flex h-full flex-1 items-center md:gap-x-12">
              <Link href={'/'}>
                <Logo light={!scrolled} />
              </Link>
              <div className="ml-auto hidden h-full md:space-x-3 lg:flex">
                <div className="group relative flex h-full items-center">
                  <div className="inline-flex cursor-default items-center rounded-full px-4 py-1">For businesses</div>
                  <NavProductsDropdown />
                </div>
                <Link href={MARKET_URL} className="inline-flex items-center rounded-full px-4 py-1">
                  Markets
                </Link>
                {SHOW_SNAPSHOTS && (
                  <Link href={SNAPSHOTS_URL} className="inline-flex items-center rounded-full px-4 py-1">
                    Snapshots
                  </Link>
                )}
              </div>
            </div>
            <div className="ml-6 flex items-center justify-end gap-x-5 md:gap-x-4">
              <div className="hidden space-x-4 lg:block">
                {!resolved ? (
                  <div
                    className={cn('h-[32px] w-[100px] animate-pulse rounded-3xl bg-slate-100/10', {
                      'bg-slate-900/10': scrolled,
                    })}
                  />
                ) : (
                  <>
                    {!authenticated ? (
                      <>
                        <Link href={`${ACCOUNT_URL}/login`}>
                          <Button variant="subtle" color={scrolled ? 'black' : 'white'}>
                            Sign in
                          </Button>
                        </Link>
                        <Link href={`${ACCOUNT_URL}/register`}>
                          <Button>Get started</Button>
                        </Link>
                      </>
                    ) : (
                      <div className="flex items-center space-x-4">
                        <UserDropdown />
                      </div>
                    )}
                  </>
                )}
              </div>
              <div className="-mr-1 lg:hidden">
                <button
                  onClick={() => setIsMobileNavVisible(true)}
                  className="[&amp;:not(:focus-visible)]:focus:outline-none relative z-10 flex h-8 w-8 items-center justify-center"
                  aria-label="Toggle Navigation"
                  type="button"
                  aria-expanded="false"
                >
                  <IconMenu />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <MobileNav isOpen={isMobileNavVisible} onClose={() => setIsMobileNavVisible(false)} />
    </>
  );
};

export default Navbar;

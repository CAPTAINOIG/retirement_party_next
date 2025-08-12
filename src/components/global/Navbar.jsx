import React, { useState } from 'react';
import Link from 'next/link';
import { IconMenu } from '@tabler/icons-react';
import { useIsomorphicLayoutEffect } from 'react-use';
import { useAuth } from '@/hooks/use-auth.js';
import Logo from '@/components/core/shared/Logo';
import MobileNav from '@/components/core/MobileNav';
import { cn } from '@/lib/utils';
import UserDropdown from '@/components/core/shared/UserDropdown';
import { Button, useDisclosure } from '@heroui/react';
import { IMMORTAL_URL, PARROTS_URL } from '@/lib/constants';
import JoinWaitlistModal from '@/components/core/shared/JoinWaitlistModal';

const Navbar = () => {
  const { resolved, authenticated } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const { isOpen: isWaitListOpen, onOpen: onWaitListOpen, onClose: onWaitListClose } = useDisclosure();

  useIsomorphicLayoutEffect(() => {
    const handleScroll = (e) => {
      const scrollTop = e.target.scrollingElement.scrollTop;
      setScrolled(scrollTop > 50);
    };
    // Set initial scroll state
    setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'absolute inset-x-0 top-0 z-50 h-32 transition-all',
          { 'h-24! bg-white/90 text-black shadow backdrop-blur-lg': scrolled },
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
                <Link href={IMMORTAL_URL} target="_blank" className="inline-flex items-center rounded-full px-4 py-1">
                  Immortal AI
                </Link>
                <Link href={PARROTS_URL} target="_blank" className="inline-flex items-center rounded-full px-4 py-1">
                  Parrots
                </Link>
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
                        <Button variant="flat" radius="full" className="px-4 text-base" onPress={onWaitListOpen}>
                          Sign in
                        </Button>
                        <Button
                          variant="solid"
                          color="primary"
                          radius="full"
                          className="px-4 text-base"
                          onPress={onWaitListOpen}
                        >
                          Get started
                        </Button>
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
      <JoinWaitlistModal isOpen={isWaitListOpen} onClose={onWaitListClose} />
    </>
  );
};

export default Navbar;

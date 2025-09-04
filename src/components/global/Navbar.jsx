import React, { useState } from 'react';
import Link from 'next/link';
import { IconMenu } from '@tabler/icons-react';
import { useAuth } from '@/hooks/use-auth.js';
import Logo from '@/components/core/shared/Logo';
import MobileNav from '@/components/core/MobileNav';
import { cn } from '@/lib/utils';
import UserDropdown from '@/components/core/shared/UserDropdown';
import { Button, useDisclosure } from '@heroui/react';
import GetStartedModal from '@/components/core/shared/GetStartedModal';
import ThemeToggle from '@/components/core/shared/ThemeToggle';
import MegaDropdown from '@/components/core/shared/MegaDropdown';

const Navbar = () => {
  const { resolved, authenticated } = useAuth();
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const { isOpen: isGetStartedOpen, onOpen: onGetStartedOpen, onClose: onGetStartedClose } = useDisclosure();

  return (
    <>
      <header className={cn('dark absolute inset-x-0 top-0 z-50 flex h-32 items-center text-white')}>
        <div className={cn('container h-[72px] transition-all')}>
          <nav className="relative z-50 flex h-full justify-between">
            <div className="flex h-full flex-1 items-center md:gap-x-12">
              <Link href={'/'}>
                <Logo light />
              </Link>
              <div className="ml-auto hidden h-full md:space-x-3 lg:flex">
                <MegaDropdown label="Immortal" />
              </div>
            </div>
            <div className="ml-6 flex items-center justify-end gap-x-5 md:gap-x-4">
              <div className="hidden items-center space-x-4 lg:flex">
                {!resolved ? (
                  <div className={cn('h-[32px] w-[100px] animate-pulse rounded-3xl bg-slate-100/10')} />
                ) : (
                  <>
                    {!authenticated ? (
                      <>
                        <Button variant="flat" radius="full" className="px-4 text-base" onPress={onGetStartedOpen}>
                          Sign in
                        </Button>
                        <Button
                          variant="solid"
                          color="primary"
                          radius="full"
                          className="px-4 text-base"
                          onPress={onGetStartedOpen}
                        >
                          Get started
                        </Button>
                        <ThemeToggle />
                      </>
                    ) : (
                      <div className="flex items-center space-x-4">
                        <UserDropdown />
                        <ThemeToggle />
                      </div>
                    )}
                  </>
                )}
              </div>
              <div className="-mr-1 lg:hidden">
                <button
                  onClick={() => setIsMobileNavVisible(true)}
                  className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
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
      <GetStartedModal isOpen={isGetStartedOpen} onClose={onGetStartedClose} />
    </>
  );
};

export default Navbar;

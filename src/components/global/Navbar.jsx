import React from 'react';
import Logo from "@/components/core/shared/Logo.jsx";
import Link from "next/link";
import { IconMenu } from "@tabler/icons-react";

const Navbar = () => {
  return (
    <header className="py-10 absolute top-0 inset-x-0">
      <div className="container mx-auto">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12 flex-1">
            <Link href="/">
              <Logo/>
            </Link>
            <div className="hidden md:flex md:space-x-3 mx-auto">
              <Link
                href="/about"
                className="inline-block rounded-full py-1 px-4 text-slate-300"
              >
                About us
              </Link>
              <Link
                href="/#services"
                className="inline-block rounded-full py-1 px-4 text-slate-300"
              >
                Our services
              </Link>
              <Link
                className="inline-block rounded-full py-1 px-4 text-slate-300"
                href="/infographics"
              >
                Infographics
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-4">
            <div className="hidden md:block space-x-4">
              <Link
                href="/login"
                className="inline-block rounded-full py-1 px-4 text-slate-300"
              >
                Sign in
              </Link>
              <Link
                href="/register"
                className="group inline-flex items-center justify-center rounded-full py-2 px-5 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
              >
                Create a free account
              </Link>
            </div>
            <div className="-mr-1 md:hidden">
              <div data-headlessui-state="">
                <button
                  className="relative z-10 flex h-8 w-8 items-center justify-center [&amp;:not(:focus-visible)]:focus:outline-none text-white"
                  aria-label="Toggle Navigation" type="button" aria-expanded="false" data-headlessui-state=""
                  id="headlessui-popover-button-:r0:"
                >
                  <IconMenu/>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

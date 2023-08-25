import Link from "next/link";
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from "@tabler/icons-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#11100f] text-zinc-200 py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-10 pt-10 pb-32">
            <div>
              <p className="text-base font-medium">Products</p>
              <div className="flex flex-col mt-6 space-y-4">
                <Link href={ '/infographics' } className="opacity-70 hover:text-primary-300">
                  Insights
                </Link>
                <Link href={ '/dashboard/statement' } className="opacity-70 hover:text-primary-300">
                  Statement
                </Link>
                <Link href={ '/dashboard/financial-report' } className="opacity-70 hover:text-primary-300">
                  More
                </Link>
              </div>
            </div>
            <div>
              <p className="text-base font-medium">Company</p>
              <div className="flex flex-col mt-6 space-y-4">
                <Link href={ '/about' } className="opacity-70 hover:text-primary-300">
                  About us
                </Link>
                <Link href={ "/careers" } className="opacity-70 hover:text-primary-300">
                  Careers
                </Link>
              </div>
            </div>
            <div>
              <p className="text-base font-medium">Help</p>
              <div className="flex flex-col mt-6 space-y-4">
                <Link href={ '/about#footer' } className="opacity-70 hover:text-primary-300">
                  FAQs
                </Link>
                <Link href={ '/contact' } className="opacity-70 hover:text-primary-300">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 items-start sm:items-center sm:space-x-8">
              <div>&copy; Statisense, 2023 All rights reserved</div>
              <Link href={ "/terms" } className="hover:text-primary-400">Terms & Conditions</Link>
              <Link href={ "/policy" } className="hover:text-primary-400">Privacy Policy</Link>
            </div>
            <div className="flex items-center space-x-6 mt-8 md:mt-0">
              <a
                href="https://facebook.com/statisense" target="_blank" className="text-xl hover:text-blue-600"
                rel="noreferrer"
              >
                <IconBrandFacebook/>
              </a>
              <a
                href="https://twitter.com/statisense" target="_blank" className="text-xl hover:text-blue-400"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" width="20px" height="20px" fill="currentColor"
                     className="text-whit hover:text-blue-400">
                  <g>
                    <path
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </g>
                </svg>
              </a>
              <a
                href="/" target="_blank" className="text-xl hover:text-red-600"
                rel="noreferrer"
              >
                <IconBrandInstagram/>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

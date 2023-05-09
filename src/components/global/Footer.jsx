import Link from "next/link";
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from "@tabler/icons-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#11100f] text-zinc-200 py-20 rounded-[1200px_1200px_0_0/1%]">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-10 pt-10 pb-32">
            <div>
              <p className="text-base font-medium">Products</p>
              <div className="flex flex-col mt-6 space-y-4">
                <Link href="/infographics" className="opacity-70 hover:text-primary-300">
                  Infographics
                </Link>
                <Link href="/credibility" className="opacity-70 hover:text-primary-300">
                  Credibility
                </Link>
                <Link href="/analysis" className="opacity-70 hover:text-primary-300">
                  Analysis
                </Link>
              </div>
            </div>
            <div>
              <p className="text-base font-medium">The Company</p>
              <div className="flex flex-col mt-6 space-y-4">
                <Link href="/about" className="opacity-70 hover:text-primary-300">
                  About us
                </Link>
                <Link href="/careers" className="opacity-70 hover:text-primary-300">
                  Careers
                </Link>
              </div>
            </div>
            <div>
              <p className="text-base font-medium">Help</p>
              <div className="flex flex-col mt-6 space-y-4">
                <Link href="/faq" className="opacity-70 hover:text-primary-300">
                  FAQs
                </Link>
                <Link href="/help" className="opacity-70 hover:text-primary-300">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 items-start sm:items-center sm:space-x-8">
              <div>&copy; Statisense, 2023 All rights reserved</div>
              <Link href="/terms" className="hover:text-primary-400">Terms & Conditions</Link>
              <Link href="/policy" className="hover:text-primary-400">Privacy Policy</Link>
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
                <IconBrandTwitter/>
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

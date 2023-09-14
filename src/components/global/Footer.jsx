import Link from "next/link";
import { IconBrandFacebook, IconBrandInstagram, IconBrandX } from "@tabler/icons-react";
import React from "react";
import Logo from "@/components/core/shared/Logo";
import products from "@/lib/products";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#11100f] text-zinc-200 py-20 bg-gradient-to-br from-gray-900 to-gray-950">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-20 lg:gap-10 pt-10 pb-32">
            <div className="md:col-span-2">
              <Logo light/>
              <p className="mt-8 max-w-xs opacity-70 leading-7">
                Statisense is the leading datatech company helping simplify data and documents for businesses, consumers
                and governments.
              </p>
            </div>
            <div>
              <h6 className="font-medium">Products</h6>
              <div className="flex flex-col mt-6 space-y-4">
                {
                  products.filter(p => p.categories.includes('featured')).map(p => (
                    <Link
                      key={ p.slug } href={ `https://app.statisense.co${ p.dashboardLink }` }
                      className="opacity-70 hover:text-primary-300"
                    >
                      { p.name }
                    </Link>
                  ))
                }
              </div>
            </div>
            <div>
              <h6 className="font-medium">Company</h6>
              <div className="flex flex-col mt-6 space-y-4">
                <Link href={ '/about' } className="opacity-70 hover:text-primary-300">
                  About us
                </Link>
                <Link href={ "/careers" } className="opacity-70 hover:text-primary-300">
                  Careers
                </Link>
                <Link href={ "/terms" } className="opacity-70 hover:text-primary-300">
                  Privacy & Terms
                </Link>
              </div>
            </div>
            <div>
              <h6 className="font-medium">Support</h6>
              <div className="flex flex-col mt-6 space-y-4">
                <Link href={ '/about#faq' } className="opacity-70 hover:text-primary-300">
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
              <div>Copyright &copy; { (new Date()).getFullYear() } Statisense</div>
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
                <IconBrandX/>
              </a>
              <a
                href="https://www.instagram.com/statisense/" target="_blank" className="text-xl hover:text-red-600"
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

import Link from 'next/link';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandX,
  IconClock,
  IconMail,
} from '@tabler/icons-react';
import React from 'react';
import Logo from '@/components/core/shared/Logo';
import products from '@/lib/products';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

const Footer = () => {
  return (
    <>
      <footer className="bg-[#11100f] bg-gradient-to-br from-gray-900 to-gray-950 py-20 text-zinc-200">
        <div className="container">
          <div className="grid gap-20 pb-20 pt-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">
            <div className="md:col-span-2">
              <Logo light />
              <div className="mt-8 grid grid-cols-1 gap-3">
                <div className="flex items-center space-x-3">
                  <div>
                    <IconMail size="20" />
                  </div>
                  <a href="mailto:info@statisense.com.ng" target="_blank" className="flex font-medium">
                    info@statisense.com.ng
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div>
                    <IconBrandWhatsapp size="20" />
                  </div>
                  <a href="https://wa.me/+2349055550090" target="_blank" className="flex font-medium">
                    +2349055550090
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div>
                    <IconClock size="20" />
                  </div>
                  <div className="flex font-medium">Mon-Fri 8:am-6:pm</div>
                </div>
              </div>
            </div>
            <div>
              <h6 className="font-medium">Products</h6>
              <div className="mt-6 flex flex-col space-y-4">
                {products
                  .filter((p) => p.categories.includes('featured'))
                  .map((p) => (
                    <Link key={p.slug} href={`${APP_URL}${p.dashboardLink}`} className="hover:text-primary-300">
                      {p.name}
                    </Link>
                  ))}
              </div>
            </div>
            <div>
              <h6 className="font-medium">Company</h6>
              <div className="mt-6 flex flex-col space-y-4">
                <Link href={'/about'} className="hover:text-primary-300">
                  About us
                </Link>
                <Link href={'/careers'} className="hover:text-primary-300">
                  Careers
                </Link>
                <Link href={'/terms'} className="hover:text-primary-300">
                  Privacy & Terms
                </Link>
              </div>
            </div>
            <div>
              <h6 className="font-medium">Support</h6>
              <div className="mt-6 flex flex-col space-y-4">
                <Link href={'/about#faq'} className="hover:text-primary-300">
                  FAQs
                </Link>
                <Link href={'/contact'} className="hover:text-primary-300">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <p>
              THE STATISENSE CONSULT LIMITED (Statisense) is building Africa's most powerful AI for Data platform,
              revolutionizing how businesses, consumers, and governments use data to drive growth and scale. Statisense
              is achieving this by breaking down complex and overwhelming datasets into AI powered portable insights,
              simple enough for every African.
            </p>
          </div>

          <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
            <div className="flex flex-col items-start space-y-4 sm:flex-row sm:items-center sm:space-x-8 sm:space-y-0">
              <div>Copyright &copy; {new Date().getFullYear()} Statisense</div>
            </div>
            <div className="mt-8 flex items-center space-x-6 md:mt-0">
              <a
                href="https://facebook.com/statisense"
                target="_blank"
                className="text-xl hover:text-blue-600"
                rel="noreferrer"
              >
                <IconBrandFacebook />
              </a>
              <a
                href="https://twitter.com/statisense"
                target="_blank"
                className="text-xl hover:text-blue-400"
                rel="noreferrer"
              >
                <IconBrandX />
              </a>
              <a
                href="https://www.instagram.com/statisense/"
                target="_blank"
                className="text-xl hover:text-red-600"
                rel="noreferrer"
              >
                <IconBrandInstagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

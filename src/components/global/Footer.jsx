import Link from 'next/link';
import { IconBrandFacebook, IconBrandInstagram, IconBrandX, IconMail } from '@tabler/icons-react';
import React from 'react';
import Logo from '@/components/core/shared/Logo';
import { useTheme } from 'next-themes';
import { useDisclosure } from '@heroui/react';
import { IMMORTAL_URL, OPINIONS_URL, PREDICT_URL } from '@/lib/constants';
import MarketWaitlistModal from '@/components/core/shared/MarketWaitlistModal';

const products = [
  {
    name: 'Business intelligence',
    slug: 'business-intelligence',
    link: IMMORTAL_URL,
  },
  {
    name: 'Predictive intelligence',
    slug: 'predictive-intelligence',
    link: PREDICT_URL,
  },
  {
    name: 'Market intelligence',
    slug: 'market-intelligence',
    link: null,
    isModal: true,
  },
  {
    name: 'Opinions',
    slug: 'opinions',
    link: OPINIONS_URL,
  },
];

const Footer = () => {
  const { resolvedTheme: theme } = useTheme();
  const { isOpen: isGetStartedOpen, onOpen: onGetStartedOpen, onClose: onGetStartedClose } = useDisclosure();

  return (
    <footer className="py-20">
      <div className="container">
        <div className="grid gap-20 pt-10 pb-20 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-10">
          <div>
            <Logo light={theme === 'dark'} />
            <div className="mt-8 grid grid-cols-1 gap-3">
              <div className="flex items-center space-x-3">
                <div>
                  <IconMail size="20" />
                </div>
                <a href="mailto:info@statisense.co" target="_blank" className="flex font-medium">
                  info@statisense.co
                </a>
              </div>
            </div>
          </div>
          <div>
            <h6 className="font-bold">Products</h6>
            <div className="mt-6 flex flex-col space-y-4">
              {products.map((p) => (
                p.isModal ? (
                  <button
                    key={p.slug}
                    onClick={onGetStartedOpen}
                    className="text-left hover:text-primary-700"
                  >
                    {p.name}
                  </button>
                ) : (
                  <Link key={p.slug} href={p.link} className="hover:text-primary-700">
                    {p.name}
                  </Link>
                )
              ))}
            </div>
          </div>
          <div>
            <h6 className="font-bold">Company</h6>
            <div className="mt-6 flex flex-col space-y-4">
              <Link href={'/about'} className="hover:text-primary-700">
                About us
              </Link>
              <Link href={'/careers'} className="hover:text-primary-700">
                Careers
              </Link>
              <Link href={'/terms'} className="hover:text-primary-700">
                Privacy & Terms
              </Link>
            </div>
          </div>
          <div>
            <h6 className="font-bold">Support</h6>
            <div className="mt-6 flex flex-col space-y-4">
              <Link href="/about#faq" className="hover:text-primary-700" scroll>
                FAQs
              </Link>
              <Link href={'/contact'} className="hover:text-primary-700">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <p>
            Statisense is building Africa's most powerful AI for Data platform, revolutionizing how businesses,
            consumers, and governments use data to drive growth and scale. Statisense is achieving this by breaking down
            complex and overwhelming datasets into AI powered portable insights, simple enough for every African.
          </p>
        </div>

        <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
          <div className="flex flex-col items-start space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-8">
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
      <MarketWaitlistModal isOpen={isGetStartedOpen} onClose={onGetStartedClose} />
    </footer>
  );
};

export default Footer;

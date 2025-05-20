import Link from 'next/link';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandX,
  IconCalendar,
  IconClock,
  IconMail,
  IconMapPin,
  IconPhoneCall,
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
          <div className="grid grid-cols-1 gap-20 pb-20 pt-10 md:grid-cols-3 lg:gap-10">
            <div>
              <h6 className="mb-6 font-medium">Details</h6>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-3">
                  <div>
                    <IconCalendar size="20" />
                  </div>
                  <div className="flex font-medium">Tuesday, 10th June, 2025</div>
                </div>
                <div className="flex items-center space-x-3">
                  <div>
                    <IconClock size="20" />
                  </div>
                  <div className="flex font-medium">9:00 am</div>
                </div>
              </div>
            </div>
            <div>
              <h6 className="mb-6 font-medium">RSVP</h6>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-3">
                  <div>
                    <IconPhoneCall size="20" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <a href="https://wa.me/+23408035962344" target="_blank" className="flex font-medium">
                      +23408035962344
                    </a>
                    <a href="https://wa.me/+23409034657515" target="_blank" className="flex font-medium">
                      +23409034657515
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div>
                    <IconMail size="20" />
                  </div>
                  <a href="mailto:events@statisense.com.ng" target="_blank" className="flex font-medium">
                    events@statisense.com.ng
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h6 className="mb-6 font-medium">Location</h6>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-3">
                  <div>
                    <IconMapPin size="20" />
                  </div>
                  <p>FOUR POINTS BY SHERATON V.I LAGOS</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <Logo light />
            <p className="mt-8 max-w-lg">
              Statisense is building Africa's most powerful AI for Data platform, revolutionizing how businesses,
              consumers, and governments use data to drive growth and scale.
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

import React from 'react';
import Button from '@/components/global/Button';
import { IconArrowRight } from '@tabler/icons-react';
import ChatSimulation from '@/components/core/home/ChatSimulation';
import Link from 'next/link';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

const ConvertYourData = () => {
  return (
    <>
      <div className="container xl:pb-[15rem]">
        <div className="grid items-center gap-10 md:grid-cols-11 md:gap-16">
          <div className="md:col-span-5">
            <ChatSimulation />
          </div>
          <div className="md:col-span-6">
            <div className="relative max-w-lg">
              <h2 className="text-4xl font-medium leading-tight md:text-6xl md:leading-[1.1]">
                Convert your data into conversations &<span className="text-primary-400"> infographics.</span>
              </h2>
              <p className="mt-6 text-base md:text-lg">
                Support your teams with conversation ready insight of your customers and business data.
              </p>
              <Link href={APP_URL}>
                <Button className="mt-12" rightIcon={<IconArrowRight />} size="lg">
                  Get started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConvertYourData;

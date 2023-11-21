import React, { useState } from 'react';
import Button from '@/components/global/Button';
import { IconArrowRight } from '@tabler/icons-react';
import AskBambi from '@/components/core/shared/AskBambi';
import ChatSimulation from '@/components/core/home/ChatSimulation';
import Link from 'next/link';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

const ConvertYourData = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <div className="container xl:pb-[15rem]">
        <div className="grid md:grid-cols-11 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5">
            <ChatSimulation />
          </div>
          <div className="md:col-span-6">
            <div className="relative max-w-lg">
              <h2 className="text-4xl md:text-6xl font-medium leading-tight md:leading-[1.1]">
                Convert your data into conversations &<span className="text-primary-600"> infographics.</span>
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

      <AskBambi isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default ConvertYourData;

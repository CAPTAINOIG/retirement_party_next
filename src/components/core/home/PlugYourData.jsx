"use client"
import React, {useState} from 'react';
import Button from "@/components/global/Button";
import {IconArrowRight} from "@tabler/icons-react";
import TestRun from "@/components/core/shared/TestRun";
import ChatSimulation from "@/components/core/home/ChatSimulation";

const PlugYourData = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <div className="container xl:pb-[15rem]">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          <ChatSimulation/>
          <div className="relative mt-12 max-w-lg mx-auto">
            <h2 className="text-4xl md:text-6xl font-medium leading-tight md:leading-[1.1]">
              Convert your data
              into conversations
              &<span className="text-primary-600"> infographics.</span>
            </h2>
            <p className="mt-6 text-base md:text-lg">
              Support your teams with conversation
              ready insight of your customers and business data.
            </p>
            <Button
              onClick={() => setIsChatOpen(true)}
              color="black" className="mt-12" rightIcon={<IconArrowRight/>} size="lg"
            >
              Get started
            </Button>
          </div>
        </div>
      </div>

      <TestRun
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </>
  );
};

export default PlugYourData;

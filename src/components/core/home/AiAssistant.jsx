import React, { useState } from 'react';
import Button from "@/components/global/Button";
import { IconArrowRight } from "@tabler/icons-react";
import Chat from "@/components/core/shared/Chat";
import ClientOnly from "@/components/global/ClientOnly";

const AiAssistant = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div className="flex justify-center">
            <img
              src="/images/chat.svg" alt="" className="w-full md:w-10/12 chat-illustration"
            />
          </div>
          <div className="relative mt-12 max-w-lg mx-auto">
            <h2 className="text-4xl md:text-6xl font-medium leading-tight md:leading-[1.1]">
              Chat with <span className="text-cyan-600">Sensiii®</span>. Africa's leading data AI assistant.
            </h2>
            <p className="mt-6 text-base md:text-lg">
              We are building Africa's most robust AI platform for business and government insights.
            </p>
            <Button
              onClick={ () => setIsChatOpen(true) } color="black" className="mt-12" rightIcon={ <IconArrowRight/> }
              size="lg"
            >
              Chat sensiii
            </Button>
          </div>
        </div>
      </div>

      <ClientOnly>
        <Chat
          isOpen={ isChatOpen }
          onClose={ () => setIsChatOpen(false) }
        />
      </ClientOnly>
    </>
  );
};

export default AiAssistant;

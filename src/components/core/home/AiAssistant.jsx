"use client"
import React, { useState } from 'react';
import Button from "@/components/global/Button";
import { IconArrowRight } from "@tabler/icons-react";
import Chat from "@/components/core/shared/Chat";
import ClientOnly from "@/components/global/ClientOnly";
import ChatIllustrations from "@/components/svgs/ChatIllustrations";
import Link from "next/link";

const AiAssistant = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div className="flex justify-center">
            <ChatIllustrations class="md:w-10/12"/>
          </div>
          <div className="relative mt-12 max-w-lg mx-auto">
            <h2 className="text-4xl md:text-6xl font-medium leading-tight md:leading-[1.1]">
              Plug your data,<br/>
              docs and dumps,<br/>
              Chat with <span className="text-primary-600">Lens</span>.
            </h2>
            <p className="mt-6 text-base md:text-lg">
              We are building Africa's most robust data assistant.
            </p>
            <Link href={ '/register' }>
              <Button color="black" className="mt-12" rightIcon={ <IconArrowRight/> } size="lg">
                Get started
              </Button>
            </Link>
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

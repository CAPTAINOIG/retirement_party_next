import React, { useState } from 'react';
import Card from "@/components/global/Card";
import { IconChevronRight, IconFileTextAi, IconMessageChatbot } from "@tabler/icons-react";
import Chat from "@/components/core/shared/Chat";
import Drawer from "@/components/global/Drawer";
import UploadDocument from "@/components/core/shared/UploadDocument";

const TestRun = ({ isOpen, onClose }) => {
  const [view, setView] = useState('options');

  return (
    <Drawer isOpen={ isOpen } onClose={ onClose } padding={ false }>
      {
        view === 'options' && (
          <>
            <div className="bg-gray-900 rounded-b-lg pattern-5 px-10 md:px-14 pt-14 md:pt-32 pb-40">
              <h2 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
                Hi there, I'm Bambi 👋🏽<br/>How can I help you?
              </h2>
              <p className="mt-6 text-white">
                I am an analytic and generative AI data assistant to
                help you make sense of every dataset

              </p>
            </div>
            <div className="px-10 md:px-16 -mt-14 pb-12 space-y-4 relative z-[2]">
              <Card
                hover onClick={ () => setView('chat') } className="px-7 py-5 flex items-center"
              >
                <IconMessageChatbot size="32" className="text-blue-600"/>
                <div className="flex-1 px-4">
                  <p>Chat with Me</p>
                  <p className="text-[.94rem] mt-1 opacity-70 leading-snug">
                    Ask questions about macro economic data.
                  </p>
                </div>
                <IconChevronRight className="opacity-70"/>
              </Card>
              <Card
                hover onClick={ () => setView('document') } className="px-7 py-5 flex items-center"
              >
                <IconFileTextAi size="32" className="text-orange-600"/>
                <div className="flex-1 px-4">
                  <p>Analyze docs</p>
                  <p className="text-[.94rem] mt-1 opacity-70 leading-snug">
                    Analyze and chat with your documents.
                  </p>
                </div>
                <IconChevronRight className="opacity-70"/>
              </Card>
            </div>
          </>
        )
      }
      {
        view === 'chat' && (
          <Chat
            onBack={ () => setView('options') }
          />
        )
      }
      {
        view === 'document' && (
          <UploadDocument
            onBack={ () => setView('options') }
          />
        )
      }
    </Drawer>
  );
};

export default TestRun;

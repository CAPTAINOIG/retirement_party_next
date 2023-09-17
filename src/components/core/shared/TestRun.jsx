import React, { useState } from 'react';
import Card from "@/components/global/Card";
import { IconChevronLeft, IconChevronRight, IconFileTextAi, IconMessageChatbot } from "@tabler/icons-react";
import Drawer from "@/components/global/Drawer";
import UploadDocument from "@/components/core/shared/UploadDocument";
import Button from "@/components/global/Button";
import Chat from "@/components/core/shared/Chat";

const isChatEnabled = false;

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
          <>
            {
              !isChatEnabled ? (
                <div className="h-full flex flex-col overflow-hidden">
                  <div className="border-b">
                    <div className="max-w-xl mx-auto flex items-center px-10 py-6">
                      <Button
                        onClick={ () => setView('options') }
                        leftIcon={ <IconChevronLeft size="20"/> } size="sm" variant="text"
                        color="black" rounded
                      >
                        Back
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center my-auto">
                    <div className="w-24 h-24 rounded-full bg-primary-600 grid place-items-center">
                      <IconMessageChatbot size="52" className="text-white"/>
                    </div>
                    <div className="flex-1 flex flex-col mt-10">
                      <h5 className="font-semibold text-xl">Chat with Bambi</h5>
                      <p className="mt-2 max-w-[300px]">
                        Our AI data assistant Bambi is readily available to provide you with any macro economic data.
                      </p>
                    </div>
                    <div className="px-2.5 py-1 rounded-full text-xs bg-red-500 text-white w-max mt-8">
                      Coming soon
                    </div>
                  </div>
                </div>
              ) : (
                <Chat
                  onBack={ () => setView('options') }
                />
              )
            }
          </>
        )
      }
      {
        view === 'document' && (
          <>
            {
              !isChatEnabled ? (
                <div className="h-full flex flex-col overflow-hidden">
                  <div className="border-b">
                    <div className="max-w-xl mx-auto flex items-center px-10 py-6">
                      <Button
                        onClick={ () => setView('options') }
                        leftIcon={ <IconChevronLeft size="20"/> } size="sm" variant="text"
                        color="black" rounded
                      >
                        Back
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center my-auto">
                    <div className="w-24 h-24 rounded-full bg-primary-600 grid place-items-center">
                      <IconFileTextAi size="52" className="text-white"/>
                    </div>
                    <div className="flex-1 flex flex-col mt-10">
                      <h5 className="font-semibold text-xl">Analyze any custom document</h5>
                      <p className="mt-2 max-w-[300px]">
                        Interact with your documents through conversations using our AI chatbot Bambi
                      </p>
                    </div>
                    <div className="px-2.5 py-1 rounded-full text-xs bg-red-500 text-white w-max mt-8">
                      Coming soon
                    </div>
                  </div>
                </div>
              ) : (
                <UploadDocument
                  onBack={ () => setView('options') }
                />
              )
            }
          </>
        )
      }
    </Drawer>
  );
};

export default TestRun;

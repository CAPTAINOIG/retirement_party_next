import React, { useCallback, useRef, useState } from 'react';
import { useIsomorphicLayoutEffect, useUnmount } from "react-use";
import { io } from "socket.io-client";
import { IconChevronLeft, IconChevronRight, IconRobot, IconSend, IconUser } from "@tabler/icons-react";
import Drawer from "@/components/global/Drawer";
import IconButton from "@/components/global/IconButton";

const Chat = ({ isOpen, onClose }) => {
  const socket = useRef(null);
  const [value, setValue] = useState('');
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [waiting, setWaiting] = useState(false);
  const scrollEl = useRef(null);

  const handleConnected = useCallback(() => {
    setConnected(true);
  }, []);

  const handleDisconnect = useCallback(() => {
    setConnected(false);
    setMessages([]);
    setValue('');
    setWaiting(false);
  }, []);

  const handleMessage = useCallback((args) => {
    setMessages(args.messages);
    if (args.messages.at(-1).role === 'assistant') setWaiting(false);
  }, []);

  const start = () => {
    socket.current = io(process.env.NEXT_PUBLIC_BASE_URL, { query: { type: 'public' } });
    socket.current.on('connect', handleConnected);
    socket.current.on('disconnect', handleDisconnect);
    socket.current.on('message', handleMessage);
  };

  const send = () => {
    if (!value.length) return;
    socket.current.emit('message', { text: value })
    setValue('');
    setWaiting(true);
  };

  const stop = () => socket.current?.disconnect();

  useUnmount(() => stop());

  useIsomorphicLayoutEffect(() => {
    if (!scrollEl.current) return;
    scrollEl.current.scrollTo(0, scrollEl.current.scrollHeight);
  }, [messages]);

  return (
    <>
      <Drawer isOpen={ isOpen } onClose={ onClose } padding={ false }>
        {
          !connected ? (
            <>
              <div className="bg-blue-900 px-16 pt-32 pb-36">
                <h2 className="text-4xl font-semibold text-white leading-snug">
                  Hi there 👋🏽<br/>How can we help you?
                </h2>
                <p className="mt-6 text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius iure quaerat sunt voluptate. Aspernatur
                  at, cum debitis delectus dolore eius eos ipsum iure molestiae nulla officia optio sequi similique.
                  Beatae.
                </p>
              </div>
              <div className="px-16 -mt-8 space-y-4">
                <div
                  onClick={ start }
                  className="px-7 py-5 bg-white shadow-md rounded-2xl flex justify-between items-center hover:bg-indigo-50 cursor-pointer"
                >
                  Chat with Sensii
                  <IconChevronRight/>
                </div>
              </div>
            </>
          ) : (
            <div className="h-full flex flex-col overflow-hidden">
              <div className="border-b">
                <div className="max-w-xl mx-auto flex items-center px-10 py-6">
                  <IconButton
                    onClick={ stop } icon={ <IconChevronLeft size="20"/> } size="sm" variant="text" color="black"
                    className="mr-3" rounded
                  />
                  <div
                    className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-full">
                    <IconRobot size="18"/>
                  </div>
                  <p className="ml-2">Bot</p>
                </div>
              </div>
              <div className="flex-1 flex flex-col overflow-y-auto" ref={ scrollEl }>
                {
                  !!messages.length && (
                    <div className="w-full max-w-xl mx-auto flex flex-col px-10 py-6 space-y-6">
                      {
                        messages.filter(m => m.role.match(/^assistant|user$/i)).map((message, i) => (
                          <div key={ i }>
                            {
                              message.role === 'assistant' && (
                                <div className="flex">
                                  <div>
                                    <div
                                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full"
                                    >
                                      <IconRobot size="18"/>
                                    </div>
                                  </div>
                                  <p className="ml-4 mt-1" dangerouslySetInnerHTML={ { __html: message.content } }/>
                                </div>
                              )
                            }
                            {
                              message.role === 'user' && (
                                <div className="flex">
                                  <div>
                                    <div
                                      className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full"
                                    >
                                      <IconUser size="18"/>
                                    </div>
                                  </div>
                                  <p className="ml-4 mt-1" dangerouslySetInnerHTML={ { __html: message.content } }/>
                                </div>
                              )
                            }
                          </div>
                        ))
                      }
                    </div>
                  )
                }
                {
                  waiting && (
                    <div className="w-full max-w-xl mx-auto flex items-start px-10 py-4">
                      <div className="border border-gray-300 rounded-xl px-4 py-1.5">
                        Generating response...
                      </div>
                    </div>
                  )
                }
                {
                  !messages.length && !waiting && (
                    <p className="m-auto opacity-50 py-10">What type of data are you looking for?</p>
                  )
                }
              </div>
              <div className="w-full max-w-xl mx-auto px-10 py-4 flex space-x-2 items-center">
                <input
                  value={ value } onChange={ e => setValue(e.target.value) }
                  onKeyUp={ e => {
                    if (e.key.toLowerCase() === 'enter') send();
                  } }
                  type="text" className="bg-slate-200 w-full py-3 px-10 rounded-full"
                  placeholder="Type your message here.."
                />
                <div><IconButton onClick={ send } icon={ <IconSend size="20"/> } rounded/></div>
              </div>
            </div>
          )
        }
      </Drawer>
    </>
  );
};

export default Chat;

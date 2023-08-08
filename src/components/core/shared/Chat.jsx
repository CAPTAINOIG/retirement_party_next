import React, { useCallback, useRef, useState } from 'react';
import { useIsomorphicLayoutEffect, useMount, useUnmount } from "react-use";
import { io } from "socket.io-client";
import { IconChevronLeft, IconRobot, IconSend, IconSparkles, IconUser } from "@tabler/icons-react";
import IconButton from "@/components/global/IconButton";
import Loader from "@/components/global/Loader";

const Chat = ({ onBack }) => {
  const socket = useRef(null);
  const [value, setValue] = useState('');
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [waiting, setWaiting] = useState(false);
  const scrollEl = useRef(null);

  const start = () => {
    socket.current = io(process.env.NEXT_PUBLIC_BASE_URL, { query: { type: 'public' } });
    socket.current.on('connect', () => handleConnected());
    socket.current.on('disconnect', handleDisconnect);
    socket.current.on('message', handleMessage);
  };

  const stop = () => socket.current?.disconnect();

  const send = useCallback((m = '') => {
    if (!m.length) return;
    socket.current.emit('message', { text: m })
    setValue('');
    setWaiting(true);
  }, []);

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

  useMount(() => start())

  useUnmount(() => stop());

  useIsomorphicLayoutEffect(() => {
    if (!scrollEl.current) return;
    scrollEl.current.scrollTo(0, scrollEl.current.scrollHeight);
  }, [messages]);

  return (
    <>
      {
        !connected ? (
          <div className="h-full flex flex-col items-center justify-center">
            <Loader/>
            <p className="mt-5">Connecting..</p>
          </div>
        ) : (
          <div className="h-full flex flex-col overflow-hidden">
            <div className="border-b">
              <div className="max-w-xl mx-auto flex items-center px-10 py-6">
                <IconButton
                  onClick={ onBack } icon={ <IconChevronLeft size="20"/> } size="sm" variant="text" color="black"
                  className="mr-3" rounded
                />
                <div
                  className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-full">
                  <IconRobot size="18"/>
                </div>
                <p className="ml-2">Lens</p>
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
                                <p
                                  className="ml-4 mt-1 whitespace-pre-wrap"
                                  dangerouslySetInnerHTML={ { __html: message.content } }
                                />
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
                  <div className="px-10 py-8">
                    <h4 className="mb-6 px-2 font-medium">Most asked questions</h4>
                    <div className="space-y-3">
                      {
                        [
                          'Tell me about the current president of Nigeria',
                          'Tell me about the current president of Ghana',
                        ].map(m => (
                          <div
                            onClick={ () => send(m) } key={ m }
                            className="border rounded-3xl px-6 py-4 flex items-center hover:bg-slate-100 cursor-pointer"
                          >
                            <IconSparkles className="mr-2 text-slate-600"/>
                            { m }
                          </div>
                        ))
                      }
                    </div>
                  </div>
                )
              }
            </div>
            <div className="w-full max-w-xl mx-auto px-10 py-4 flex space-x-2 items-center">
              <input
                value={ value } onChange={ e => setValue(e.target.value) }
                onKeyUp={ e => {
                  if (e.key.toLowerCase() === 'enter') send(value);
                } }
                type="text" className="bg-slate-100 w-full py-3 px-10 rounded-full"
                placeholder="Ask me anything.."
              />
              <div>
                <IconButton
                  onClick={ () => send(value) } icon={ <IconSend size="20"/> } rounded
                />
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

export default Chat;

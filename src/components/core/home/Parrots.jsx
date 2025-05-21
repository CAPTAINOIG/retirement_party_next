'use client'
import React, {useEffect, useRef} from 'react';
import Button from "@/components/global/Button";
import {IoMdNotificationsOutline} from "react-icons/io";
import Typed from "typed.js";

const Parrots = () => {
  const el = useRef(null);
  const ed = useRef(null);
  const edy = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "We need to do more as a community",
        "Not everything should be on the Government",
        "I look forward to your next post"
      ],

      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 1000,
      loop: true,
      showCursor:false
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const typed = new Typed(edy.current, {
      strings: [
        "You are always saying rubbish, except this time",
        "But even though I don't agree, the stats don't lie",
        "I am not sure about this last one",
      ],

      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 3000,
      loop: true,
      showCursor:false
    });

    return () => {
      typed.destroy();
    };
  }, []);
  useEffect(() => {
    const typed = new Typed(ed.current, {
      strings: [
        "You are not as smart as you look in your profile picture",
        "Whenever I read your posts, I feel like my IQ reduced",
        "How can you claim that this is not a tribalistic agenda"
      ],

      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 5000,
      loop: true,
      showCursor:false
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="container relative mx-auto md:block">
        <div className="md:grid grid-cols-12">
          <div className="relative col-span-6 space-y-6 pb-24">
            <div className="flex flex-col justify-center h-full space-y-6">
              <h1 className="text-4xl font-medium leading-tight md:text-6xl md:leading-[1.1]">
                Start the conversation, <br/>Be a parrot
              </h1>
              <p className="mt-8 max-w-xl text-lg tracking-tight text-slate-400">
                Immortal powers users make others see in their data in the most interesting way
              </p>
              <div>
                <Button size="xl" className="bg-blue-600 text-white hover:bg-blue-700">
                  Start writing
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <div className="flex flex-col w-full items-center justify-center relative">
              <div className="absolute top-24 left-0 w-full h-[300px] space-y-8">
                <div className="flex gap-4 md:w-[70%] w-full mx-auto px-8">
                  <img className="w-[30px] h-[30px]" src="/images/face-three.png"/>
                  <div className="w-full min-h-[35px] bg-[#282A30] rounded p-2">
                    <p ref={el} className="text-sm font-extralight text-slate-400">This is an amazing read</p>
                  </div>
                </div>
                <div className="flex gap-4 md:w-[70%] w-full mx-auto px-8">
                  <div className="w-full min-h-[35px] bg-[#282A30] rounded p-2">
                    <p ref={edy} className="text-sm font-extralight text-slate-400">Still reading</p>
                  </div>
                  <img className="w-[30px] h-[30px]" src="/images/face-seven.png"/>
                </div>
                <div className="md:flex hidden gap-4 md:w-[70%] w-full mx-auto px-8">
                  <img className="w-[30px] h-[30px]" src="/images/face-two.png"/>
                  <div className="w-full min-h-[35px] bg-[#282A30] rounded p-2">
                    <p ref={ed} className="text-sm font-extralight text-slate-400">
                      Hmmmn, I am not sure about this one
                    </p>
                  </div>
                </div>
              </div>
              <img className="md:w-[70%] w-full mx-auto opacity-100" src="/images/phone.svg"/>
              <div className="min-h-[200px] bg-white shadow rounded-lg md:w-[70%] w-full mx-auto py-4">
                <div className="px-4 flex gap-2 items-center">
                  <img className="w-10 h-10 rounded-full p-2 bg-black" src="/images/parrot-2.svg"/>
                  <p className="text-sm font-semibold">Parrots</p>
                  <p className="text-[12px] bg-slate-200 px-2 py-1 rounded text-black">App</p>
                  <p className="text-sm">5:32PM</p>
                </div>
                <hr className="mt-4"/>
                <div className="p-4 flex items-center gap-2">
                  <p className="text-lg">Maya Abasi posted</p>
                  <IoMdNotificationsOutline size="20px"/>
                </div>
                <div className="px-4 flex items-center gap-4">
                  <img className="h-16 w-16 rounded" src="/images/maya.jpg"/>
                  <div className="w-full space-y-2">
                    <div className="bg-slate-200 animate-pulse h-[10px] w-[70%] rounded-full"/>
                    <div className="bg-slate-200 animate-pulse h-[10px] w-[30%] rounded-full"/>
                    <div className="bg-slate-200 animate-pulse h-[10px] w-[50%] rounded-full"/>
                  </div>
                </div>
                <hr className="mt-4"/>
                <div className="p-4 gap-2 flex items-center">
                  <div className="flex">
                    <img
                      className="w-[30px] h-[30px] rounded-full border border-white hover:scale-110 ease-in-out transition-transform duration-300"
                      src="/images/face-seven.png"/>
                    <img
                      className="w-[30px] h-[30px] rounded-full border border-white -ml-3 hover:scale-110 ease-in-out transition-transform duration-300"
                      src="/images/face-two.png"/>
                    <img
                      className="w-[30px] h-[30px] rounded-full border border-white -ml-3 hover:scale-110 ease-in-out transition-transform duration-300"
                      src="/images/face-three.png"/>
                  </div>
                  <p className="text-md font-semibold">25 replies</p>
                  <p className="text-sm font-extralight text-black">Last reply 4 min ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parrots;

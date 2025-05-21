'use client';
import React, { useEffect, useRef } from 'react';
import Button from '@/components/global/Button';
import { IoMdNotificationsOutline } from 'react-icons/io';
import Typed from 'typed.js';

const Parrots = () => {
  const el = useRef(null);
  const ed = useRef(null);
  const edy = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'We need to do more as a community',
        'Not everything should be on the Government',
        'I look forward to your next post',
      ],

      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 1000,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const typed = new Typed(edy.current, {
      strings: [
        'You are always saying rubbish, except this time',
        "But even though I don't agree, the stats don't lie",
        'I am not sure about this last one',
      ],

      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 3000,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  useEffect(() => {
    const typed = new Typed(ed.current, {
      strings: [
        'You are not as smart as you look in your profile picture',
        'Whenever I read your posts, I feel like my IQ reduced',
        'How can you claim that this is not a tribalistic agenda',
      ],

      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 5000,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative container mx-auto md:block">
        <div className="grid grid-cols-[1fr_1fr] items-center">
          <div className="relative">
            <h1 className="text-4xl font-semibold md:text-7xl">
              Start the conversation, <br /> Be a parrot
            </h1>
            <p className="mt-6 max-w-xl text-lg tracking-tight">
              Immortal powers users make others see in their data in the most interesting way
            </p>
            <Button size="xl" color="primary" className="mt-8">
              Start writing
            </Button>
          </div>
          <div className="relative flex w-full flex-col items-center justify-center">
            <div className="absolute top-24 left-0 h-[300px] w-full space-y-8">
              <div className="mx-auto flex w-full gap-4 px-8 md:w-[70%]">
                <img className="h-[30px] w-[30px]" src="/images/face-three.png" />
                <div className="min-h-[35px] w-full rounded bg-[#282A30] p-2">
                  <p ref={el} className="text-sm font-extralight text-slate-400">
                    This is an amazing read
                  </p>
                </div>
              </div>
              <div className="mx-auto flex w-full gap-4 px-8 md:w-[70%]">
                <div className="min-h-[35px] w-full rounded bg-[#282A30] p-2">
                  <p ref={edy} className="text-sm font-extralight text-slate-400">
                    Still reading
                  </p>
                </div>
                <img className="h-[30px] w-[30px]" src="/images/face-seven.png" />
              </div>
              <div className="mx-auto hidden w-full gap-4 px-8 md:flex md:w-[70%]">
                <img className="h-[30px] w-[30px]" src="/images/face-two.png" />
                <div className="min-h-[35px] w-full rounded bg-[#282A30] p-2">
                  <p ref={ed} className="text-sm font-extralight text-slate-400">
                    Hmmmn, I am not sure about this one
                  </p>
                </div>
              </div>
            </div>
            <img className="mx-auto w-full opacity-100 md:w-[70%]" src="/images/phone.svg" />
            <div className="mx-auto min-h-[200px] w-full rounded-lg bg-white py-4 shadow md:w-[70%]">
              <div className="flex items-center gap-2 px-4">
                <img className="h-10 w-10 rounded-full bg-black p-2" src="/images/parrot-2.svg" />
                <p className="text-sm font-semibold">Parrots</p>
                <p className="rounded bg-slate-200 px-2 py-1 text-[12px] text-black">App</p>
                <p className="text-sm">5:32PM</p>
              </div>
              <hr className="mt-4" />
              <div className="flex items-center gap-2 p-4">
                <p className="text-lg">Maya Abasi posted</p>
                <IoMdNotificationsOutline size="20px" />
              </div>
              <div className="flex items-center gap-4 px-4">
                <img className="h-16 w-16 rounded" src="/images/maya.jpg" />
                <div className="w-full space-y-2">
                  <div className="h-[10px] w-[70%] animate-pulse rounded-full bg-slate-200" />
                  <div className="h-[10px] w-[30%] animate-pulse rounded-full bg-slate-200" />
                  <div className="h-[10px] w-[50%] animate-pulse rounded-full bg-slate-200" />
                </div>
              </div>
              <hr className="mt-4" />
              <div className="flex items-center gap-2 p-4">
                <div className="flex">
                  <img
                    className="h-[30px] w-[30px] rounded-full border border-white transition-transform duration-300 ease-in-out hover:scale-110"
                    src="/images/face-seven.png"
                  />
                  <img
                    className="-ml-3 h-[30px] w-[30px] rounded-full border border-white transition-transform duration-300 ease-in-out hover:scale-110"
                    src="/images/face-two.png"
                  />
                  <img
                    className="-ml-3 h-[30px] w-[30px] rounded-full border border-white transition-transform duration-300 ease-in-out hover:scale-110"
                    src="/images/face-three.png"
                  />
                </div>
                <p className="text-md font-semibold">25 replies</p>
                <p className="text-sm font-extralight text-black">Last reply 4 min ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parrots;

'use client';
import React from 'react';
import BigIdeas from '@/components/core/home/BigIdeas';
import Newsletter from '@/components/core/home/Newsletter';
import Testimonials from '@/components/core/home/Testimonials';
import BeautifulStory from '@/components/core/home/BeautifulStory';
import Immortal from '@/components/core/home/Immortal';
import CountdownTimer from '../dica2024/CountdownTimer';
import { IoMdNotificationsOutline } from 'react-icons/io';
import Hero from '@/components/core/home/Hero';

const HomePageContent = () => {
  return (
    <div className="bg-slate-100 text-black">
      <div className="to-primary-950 from-primary-50/30 bg-black bg-linear-to-br">
        <BeautifulStory />
        <div className="relative overflow-hidden">
          <div className="relative z-3 container grid grid-cols-[1fr_1fr] items-center gap-10 pt-28 pb-28 md:pt-32 md:pb-32">
            <div className="text-white">
              <h1 className="text-[3.4rem] leading-none font-bold tracking-tight md:text-[7rem]">
                Unveiling
                <br />
                Immortal AI
              </h1>
              <p className="mt-4 text-lg opacity-70 md:max-w-[70%] md:text-xl">
                We are connecting intelligence to African's data, join us.
              </p>
              <CountdownTimer date="6/30/2025" className="mt-10" />
            </div>
            <div className="relative hidden w-full flex-col items-center justify-center lg:flex">
              <div className="absolute top-24 left-0 h-[300px] w-full space-y-8">
                <div className="mx-auto flex w-full gap-4 px-8 md:w-[70%]">
                  <img className="h-[30px] w-[30px]" src="/images/face-three.png" alt="User avatar" />
                  <div className="min-h-[35px] w-full rounded-2xl bg-[#282A30] px-4 py-2">
                    <p className="text-sm font-extralight text-slate-400">
                      Immortal AI is revolutionary! The way it processes African data is incredible
                    </p>
                  </div>
                </div>
                <div className="mx-auto flex w-full gap-4 px-8 md:w-[70%]">
                  <div className="min-h-[35px] w-full rounded-2xl bg-[#282A30] px-4 py-2">
                    <p className="text-sm font-extralight text-slate-400">
                      The AI capabilities look promising for business intelligence
                    </p>
                  </div>
                  <img className="h-[30px] w-[30px]" src="/images/face-seven.png" alt="User avatar" />
                </div>
                <div className="mx-auto hidden w-full gap-4 px-8 md:flex md:w-[70%]">
                  <img className="h-[30px] w-[30px]" src="/images/face-two.png" alt="User avatar" />
                  <div className="min-h-[35px] w-full rounded-2xl bg-[#282A30] px-4 py-2">
                    <p className="text-sm font-extralight text-slate-400">
                      Can't wait to see how Immortal AI transforms data analysis in Africa
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="mx-auto w-full opacity-100 md:w-[70%]"
                src="/images/phone.svg"
                alt="Mobile phone mockup"
              />
              <div className="mx-auto min-h-[200px] w-full rounded-3xl bg-white px-4 py-6 shadow md:w-[70%]">
                <div className="flex items-center gap-2 px-4">
                  <img
                    className="h-10 w-10 rounded-full bg-black p-2"
                    src="/images/parrot-2.svg"
                    alt="Parrots app icon"
                  />
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
                  <img className="h-16 w-16 rounded" src="/images/maya.jpg" alt="Maya Abasi profile picture" />
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
                      alt="User avatar"
                    />
                    <img
                      className="-ml-3 h-[30px] w-[30px] rounded-full border border-white transition-transform duration-300 ease-in-out hover:scale-110"
                      src="/images/face-two.png"
                      alt="User avatar"
                    />
                    <img
                      className="-ml-3 h-[30px] w-[30px] rounded-full border border-white transition-transform duration-300 ease-in-out hover:scale-110"
                      src="/images/face-three.png"
                      alt="User avatar"
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
      <div className="relative space-y-48 overflow-hidden py-28 md:py-48">
        <BigIdeas />
        <Immortal />
      </div>
      <Hero />
      <div className="relative from-[#F0FDF4] to-[#EFF6FF] py-28 md:py-48">
        <Testimonials />
      </div>
      <div className="relative overflow-hidden">
        <Newsletter />
      </div>
    </div>
  );
};

export default HomePageContent;


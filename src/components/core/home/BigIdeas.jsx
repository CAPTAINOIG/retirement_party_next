import React from 'react';
import CountUpOnScroll from '@/components/core/shared/CountUpOnScroll';
import { FaPlus } from 'react-icons/fa';
import Button from '@/components/global/Button';

const ACCOUNT_URL = process.env.NEXT_PUBLIC_ACCOUNT_URL;

const BigIdeas = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative container mx-auto md:block">
        <div>
          <h2 className="text-center text-4xl font-semibold tracking-tight md:text-7xl">
            Work on big ideas, <br className="hidden md:block" /> without the{' '}
            <span className="relative inline-block leading-[0.7]">
              <span className="to-primary absolute inset-0 bottom-0 h-[45px] rotate-[3.5deg] rounded-2xl bg-linear-to-r from-green-600 md:h-[60px]"></span>
              <span className="relative px-1 text-slate-200">busywork.</span>
            </span>
          </h2>
          <p className="mx-auto max-w-sm py-8 text-center text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, nobis?
          </p>
        </div>
        <div className="relative grid-cols-[2fr_2fr_2fr] gap-4 space-y-8 md:grid md:space-y-0">
          <div className="relative z-20 rounded-2xl bg-[#FF7091] px-6 py-8">
            <div className="absolute top-0 -right-8 h-full w-12 space-y-8 py-10">
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
            </div>
            <div className="space-y-6">
              <p className="text-xl leading-[1.1] text-white">Ongoing project</p>
              <div className="grid grid-cols-4 items-center gap-2">
                <img className="w-[60px]" src="/images/face-two.png" alt="face" />
                <div className="col-span-3 space-y-2">
                  <div className="h-[10px] w-[85%] animate-pulse rounded-full bg-pink-300" />
                  <div className="flex w-[80%] items-center gap-2">
                    <div className="h-[10px] w-[30%] animate-pulse rounded-full bg-pink-300" />
                    <div className="h-[10px] w-[20%] animate-pulse rounded-full bg-pink-300" />
                    <div className="h-[10px] w-[50%] animate-pulse rounded-full bg-pink-300" />
                  </div>
                  <div className="h-[10px] w-[55%] animate-pulse rounded-full bg-pink-300" />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div>
                    <div className="h-[10px] w-[10px] rounded-full bg-white opacity-50" />
                  </div>
                  <p className="text-white">New brand</p>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <div className="h-[10px] w-[10px] rounded-full bg-white opacity-50" />
                  </div>
                  <p className="text-white">Product road map</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-[10px] w-[55%] animate-pulse rounded-full bg-pink-300" />
                  <div className="h-[10px] w-[20%] animate-pulse rounded-full bg-pink-300" />
                </div>
                <div className="flex w-[90%] items-center gap-2">
                  <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-pink-300" />
                  <div className="h-[10px] w-[30%] animate-pulse rounded-full bg-pink-300" />
                  <div className="h-[10px] w-[20%] animate-pulse rounded-full bg-pink-300" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-10 rounded-2xl bg-[#FDBF12] px-6 py-8">
            <div className="absolute top-0 -right-8 h-full w-12 space-y-8 py-10">
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
            </div>
            <div className="space-y-6">
              <p className="text-xl leading-[1.1] text-white">Daily Activity</p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div>
                    <div className="h-[20px] w-[20px] animate-pulse rounded-full bg-yellow-300" />
                  </div>
                  <div className="h-[10px] w-[60%] animate-pulse rounded-full bg-yellow-300 opacity-50" />
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <div className="h-[20px] w-[20px] animate-pulse rounded-full bg-yellow-300" />
                  </div>
                  <div className="h-[10px] w-[30%] animate-pulse rounded-full bg-yellow-300" />
                  <div className="h-[10px] w-[60%] animate-pulse rounded-full bg-yellow-300" />
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <div className="h-[20px] w-[20px] animate-pulse rounded-full bg-yellow-300" />
                  </div>
                  <div className="h-[10px] w-[20%] animate-pulse rounded-full bg-yellow-300" />
                  <div className="h-[10px] w-[70%] animate-pulse rounded-full bg-yellow-300" />
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <div className="h-[20px] w-[20px] animate-pulse rounded-full border-2 border-yellow-300" />
                  </div>
                  <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-yellow-300" />
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <div className="h-[20px] w-[20px] animate-pulse rounded-full border-2 border-yellow-300" />
                  </div>
                  <div className="h-[10px] w-[20%] animate-pulse rounded-full bg-yellow-300" />
                  <div className="h-[10px] w-[60%] animate-pulse rounded-full bg-yellow-300" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl bg-[#6C56C3] p-4 px-6 py-8">
            <div className="absolute top-0 -right-8 block h-full w-12 space-y-8 py-10 md:hidden">
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
            </div>
            <div className="space-y-6">
              <p className="text-xl leading-[1.1] text-white">Live conversation</p>
              <div className="grid grid-cols-4 items-center gap-2">
                <img className="w-[40px]" src="/images/face-three.png" alt="face" />
                <div className="col-span-3 space-y-2">
                  <div className="h-[10px] w-[65%] animate-pulse rounded-full bg-purple-300" />
                  <div className="h-[10px] w-[35%] animate-pulse rounded-full bg-purple-300" />
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex w-4/5 flex-col items-end gap-2">
                  <div className="h-[10px] w-3/4 animate-pulse rounded-full bg-purple-300"></div>
                  <div className="h-[10px] w-1/2 animate-pulse rounded-full bg-purple-300"></div>
                </div>
                <img src="/images/face-two.png" alt="emoji" className="ml-2 h-10 w-10 rounded-full" />
              </div>
              <div className="grid grid-cols-4 items-center gap-2">
                <img className="w-[40px]" src="/images/face-three.png" alt="face" />
                <div className="col-span-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-[10px] w-[20%] animate-pulse rounded-full bg-purple-300" />
                    <div className="h-[10px] w-[60%] animate-pulse rounded-full bg-purple-300" />
                  </div>
                  <div className="h-[10px] w-[65%] animate-pulse rounded-full bg-purple-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 pt-8 md:grid-cols-4">
          <div className="mx-auto md:text-center">
            <div className="flex items-center text-[2.5rem] font-bold text-black md:justify-center">
              <CountUpOnScroll start={0} duration={5} end={100} />K
              <span>
                <FaPlus size="30px" />
              </span>
            </div>
            <p className="text-[18px] text-black">Templates</p>
          </div>
          <div className="mx-auto md:text-center">
            <div className="flex items-center text-[2.5rem] font-bold text-black md:justify-center">
              <CountUpOnScroll start={0} duration={5} end={100} />
              <span>
                <FaPlus size="30px" />
              </span>
            </div>
            <p className="text-[18px] text-black">Data converted</p>
          </div>
          <div className="mx-auto md:text-center">
            <div className="flex items-center text-[2.5rem] font-bold text-black md:justify-center">
              <CountUpOnScroll start={0} duration={5} end={5} />
            </div>
            <p className="text-[18px] text-black">Ecosystems</p>
          </div>
          <div className="mx-auto md:text-center">
            <div className="flex items-center text-[2.5rem] font-bold text-black md:justify-center">
              <CountUpOnScroll start={0} duration={5} end={100} />K
              <span>
                <FaPlus size="30px" />
              </span>
            </div>
            <p className="text-[18px] text-black">Applications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigIdeas;

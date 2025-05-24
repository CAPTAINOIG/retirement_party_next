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
            We are connecting
            <br className="hidden md:block" />
            <span className="relative inline-block leading-[0.7]">
              <span className="to-primary absolute inset-0 bottom-0 h-[45px] rotate-[3.5deg] rounded-2xl bg-linear-to-r from-green-600 md:h-[60px]"></span>
              <span className="relative px-1 text-slate-200">intelligence</span>
            </span>{' '}
            to Africa's data
          </h2>
          <p className="mx-auto max-w-xl py-8 text-center text-lg leading-tight">
            Empowering African businesses with cutting-edge analytics, insights, and data-driven solutions to unlock
            unprecedented growth opportunities.
          </p>
        </div>
        <div className="relative grid-cols-[2fr_2fr_2fr] gap-4 space-y-8 md:grid md:space-y-0">
          <div className="relative z-20 rounded-2xl bg-[#FF7091] px-10 py-8">
            <div className="absolute top-0 -right-8 h-full w-12 space-y-8 py-10">
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
            </div>
            <div className="space-y-6">
              <p className="text-xl leading-[1.1] font-semibold text-white">Business Intelligence</p>
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
                  <p className="text-white">Structured data analysis</p>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <div className="h-[10px] w-[10px] rounded-full bg-white opacity-50" />
                  </div>
                  <p className="text-white">Unstructured data analysis</p>
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
          <div className="relative z-10 rounded-2xl bg-[#FDBF12] px-10 py-8">
            <div className="absolute top-0 -right-8 h-full w-12 space-y-8 py-10">
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
            </div>
            <div className="space-y-6">
              <p className="text-xl leading-[1.1] font-semibold text-white">Financial markets</p>
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
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div>
                      <div className="h-[10px] w-[10px] rounded-full bg-white opacity-50" />
                    </div>
                    <p className="text-white">Local markets</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <div className="h-[10px] w-[10px] rounded-full bg-white opacity-50" />
                    </div>
                    <p className="text-white">Global markets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl bg-[#6C56C3] p-4 px-10 py-8">
            <div className="absolute top-0 -right-8 block h-full w-12 space-y-8 py-10 md:hidden">
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
              <div className="h-[10px] w-full rounded-full bg-[#F1F5F9]" />
            </div>
            <div className="space-y-6">
              <p className="text-xl leading-[1.1] font-semibold text-white">Gaming</p>
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
      </div>
    </div>
  );
};

export default BigIdeas;

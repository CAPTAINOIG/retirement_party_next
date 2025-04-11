import React from 'react';
import CountUpOnScroll from "@/components/core/shared/CountUpOnScroll";
import {FaPlus} from "react-icons/fa";
import Button from "@/components/global/Button";

const ACCOUNT_URL = process.env.NEXT_PUBLIC_ACCOUNT_URL;

const BigIdeas = () => {


  return (
    <div className="relative w-full overflow-hidden">
      <div className="container relative mx-auto md:block">
        <div className="grid grid-cols-12 pb-[70px] md:pb-[160px] xl:pb-[19rem]">
          <div className="relative col-span-12 space-y-6">
            <div>
              <h2 className="text-4xl font-medium text-center leading-tight md:text-6xl md:leading-[1.1]">
                Work on big ideas, <br className="hidden md:block"/>without the{" "}
                <span className="relative inline-block leading-[0.7]">
              <span
                className="absolute inset-0 md:h-[60px] h-[45px] rotate-[3.5deg] rounded bottom-0 h-2 bg-gradient-to-r from-green-600 to-primary"></span>
              <span className="px-1 relative text-slate-200">busywork.</span>
              </span>
              </h2>
              <p className="py-8 max-w-xl text-lg tracking-tight text-center text-slate-800 mx-auto">
                Lorem ipsum dolor sit amet, consectetur <br/> adipisicing elit. Assumenda, nobis?
              </p>
            </div>
            <div className="mx-auto max-w-5xl grid-cols-9 gap-4 space-y-8 md:grid md:space-y-0 relative">
              <div className="rounded-2xl col-span-4 bg-[#FF7091] px-6 py-8 relative z-20">
                <div className="absolute top-0 -right-8 w-12 h-full py-10 space-y-8">
                  <div className="bg-[#F1F5F9] h-[10px] w-full rounded-full"/>
                  <div className="bg-[#F1F5F9] h-[10px] w-full rounded-full"/>
                  <div className="bg-[#F1F5F9] h-[10px] w-full rounded-full"/>
                  <div className="bg-[#F1F5F9] h-[10px] w-full rounded-full"/>
                  <div className="bg-[#F1F5F9] h-[10px] w-full rounded-full"/>
                  <div className="bg-[#F1F5F9] h-[10px] w-full rounded-full"/>
                </div>
                <div className="space-y-6">
                  <p className="text-white text-xl leading-[1.1]">Ongoing project</p>
                  <div className="grid grid-cols-4 gap-2 items-center">
                    <img className="w-[60px]" src="/images/face-two.png"/>
                    <div className="col-span-3 space-y-2">
                      <div className="bg-pink-300 animate-pulse h-[10px] w-[85%] rounded-full"/>
                      <div className="flex gap-2 items-center w-[80%]">
                        <div className="bg-pink-300 animate-pulse h-[10px] w-[30%] rounded-full"/>
                        <div className="bg-pink-300 animate-pulse h-[10px] w-[20%] rounded-full"/>
                        <div className="bg-pink-300 animate-pulse h-[10px] w-[50%] rounded-full"/>
                      </div>
                      <div className="bg-pink-300 animate-pulse h-[10px] w-[55%] rounded-full"/>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div>
                        <div className="h-[10px] w-[10px] rounded-full bg-white opacity-50"/>
                      </div>
                      <p className="text-white">New brand</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div>
                        <div className="h-[10px] w-[10px] rounded-full bg-white opacity-50"/>
                      </div>
                      <p className="text-white">Product road map</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex gap-2 items-center">
                      <div className="bg-pink-300 animate-pulse h-[10px] w-[55%] rounded-full"/>
                      <div className="bg-pink-300 animate-pulse h-[10px] w-[20%] rounded-full"/>
                    </div>
                    <div className="flex gap-2 items-center w-[90%]">
                      <div className="bg-pink-300 animate-pulse h-[10px] w-[40%] rounded-full"/>
                      <div className="bg-pink-300 animate-pulse h-[10px] w-[30%] rounded-full"/>
                      <div className="bg-pink-300 animate-pulse h-[10px] w-[20%] rounded-full"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-[#FDBF12] col-span-2 px-6 py-8 relative z-10">
                <div className="absolute top-0 -right-8 w-12 h-full py-10 space-y-8">
                  <div className="bg-[#F1F5F9] h-[10px] w-full rounded-full"/>
                  <div className="bg-[#F1F5F9] h-[10px] w-full rounded-full"/>
                  <div className="bg-[#F1F5F9] h-[10px] w-full rounded-full"/>
                  <div className="bg-[#F1F5F9] h-[10px] w-full rounded-full"/>
                  <div className="bg-[#F1F5F9] h-[10px] w-full rounded-full"/>
                  <div className="bg-[#F1F5F9] h-[10px] w-full rounded-full"/>
                </div>
               <div className="space-y-6">
                 <p className="text-white text-xl leading-[1.1]">Daily Activity</p>
                 <div className="space-y-4">
                   <div className="flex gap-2 items-center">
                     <div>
                       <div className="h-[20px] w-[20px] rounded-full bg-yellow-300 animate-pulse"/>
                     </div>
                     <div className="bg-yellow-300 opacity-50 animate-pulse h-[10px] w-[60%] rounded-full"/>
                   </div>
                   <div className="flex gap-2 items-center">
                     <div>
                       <div className="h-[20px] w-[20px] rounded-full bg-yellow-300 animate-pulse"/>
                     </div>
                     <div className="bg-yellow-300 animate-pulse h-[10px] w-[30%] rounded-full"/>
                     <div className="bg-yellow-300 animate-pulse h-[10px] w-[60%] rounded-full"/>
                   </div>
                   <div className="flex gap-2 items-center">
                     <div>
                       <div className="h-[20px] w-[20px] rounded-full bg-yellow-300 animate-pulse"/>
                     </div>
                     <div className="bg-yellow-300 animate-pulse h-[10px] w-[20%] rounded-full"/>
                     <div className="bg-yellow-300 animate-pulse h-[10px] w-[70%] rounded-full"/>
                   </div>
                   <div className="flex gap-2 items-center">
                     <div>
                       <div className="h-[20px] w-[20px] rounded-full border-2 border-yellow-300 animate-pulse"/>
                     </div>
                     <div className="bg-yellow-300 animate-pulse h-[10px] w-[40%] rounded-full"/>
                   </div>
                   <div className="flex gap-2 items-center">
                     <div>
                       <div className="h-[20px] w-[20px] rounded-full border-2 border-yellow-300 animate-pulse"/>
                     </div>
                     <div className="bg-yellow-300 animate-pulse h-[10px] w-[20%] rounded-full"/>
                     <div className="bg-yellow-300 animate-pulse h-[10px] w-[60%] rounded-full"/>
                   </div>
                 </div>
               </div>
              </div>
              <div className="rounded-2xl bg-[#6C56C3] col-span-3 p-4 px-6 py-8 relative">
                <div className="md:hidden block absolute top-0 -right-8 w-12 h-full py-10 space-y-8">
                  <div className="bg-[#F1F5F9] h-[10px] w-full rounded-full"/>
                  <div className="bg-[#F1F5F9] h-[10px] w-full rounded-full"/>
                  <div className="bg-[#F1F5F9] h-[10px] w-full rounded-full"/>
                  <div className="bg-[#F1F5F9] h-[10px] w-full rounded-full"/>
                  <div className="bg-[#F1F5F9] h-[10px] w-full rounded-full"/>
                  <div className="bg-[#F1F5F9] h-[10px] w-full rounded-full"/>
                </div>
               <div className="space-y-6">
                <p className="text-white text-xl leading-[1.1]">Live conversation</p>
                <div className="grid grid-cols-4 gap-2 items-center">
                  <img className="w-[40px]" src="/images/face-three.png"/>
                  <div className="col-span-3 space-y-2">
                    <div className="bg-purple-300 animate-pulse h-[10px] w-[65%] rounded-full"/>
                    <div className="bg-purple-300 animate-pulse h-[10px] w-[35%] rounded-full"/>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex flex-col items-end gap-2 w-4/5">
                    <div className="h-[10px] bg-purple-300 animate-pulse rounded-full w-3/4 animate-pulse"></div>
                    <div className="h-[10px] bg-purple-300 animate-pulse rounded-full w-1/2 animate-pulse"></div>
                  </div>
                  <img
                    src="/images/face-two.png"
                    alt="emoji"
                    className="w-10 h-10 rounded-full ml-2"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2 items-center">
                  <img className="w-[40px]" src="/images/face-three.png"/>
                  <div className="col-span-3 space-y-2">
                    <div className="flex gap-2 items-center">
                      <div className="bg-purple-300 animate-pulse h-[10px] w-[20%] rounded-full"/>
                      <div className="bg-purple-300 animate-pulse h-[10px] w-[60%] rounded-full"/>
                    </div>
                    <div className="bg-purple-300 animate-pulse h-[10px] w-[65%] rounded-full"/>
                  </div>
                </div>
               </div>
              </div>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-8 max-w-5xl mx-auto pt-8">
              <div className="md:text-center mx-auto">
                <div className="text-[2.5rem] font-bold text-black flex items-center md:justify-center">
                  <CountUpOnScroll start={0} duration={5} end={100}/>K
                  <span>
                    <FaPlus size="30px"/>
                  </span>
                </div>
                <p className="text-[18px] text-black">Templates</p>
              </div>
              <div className="md:text-center mx-auto">
                <div className="text-[2.5rem] font-bold text-black flex items-center md:justify-center">
                  <CountUpOnScroll start={0} duration={5} end={100}/>
                  <span>
                   <FaPlus size="30px"/>
                  </span>
                </div>
                <p className="text-[18px] text-black">Data converted</p>
              </div>
              <div className="md:text-center mx-auto">
                <div className="text-[2.5rem] font-bold text-black flex items-center md:justify-center">
                  <CountUpOnScroll start={0} duration={5} end={5}/>
                </div>
                <p className="text-black text-[18px]">Ecosystems</p>
              </div>
              <div className="md:text-center mx-auto">
                <div className="text-[2.5rem] font-bold text-black flex items-center md:justify-center">
                  <CountUpOnScroll start={0} duration={5} end={100}/>K
                  <span>
                   <FaPlus size="30px"/>
                  </span>
                </div>
                <p className="text-black text-[18px]">Applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigIdeas;

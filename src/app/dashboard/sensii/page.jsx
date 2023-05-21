"use client"
import React from 'react';
import ServicesSwitcher from "@/components/core/shared/ServicesSwitcher";
import UserDropdown from "@/components/core/shared/UserDropdown";
import { IconMessagePlus, IconUserPlus } from "@tabler/icons-react";

const SensiiPage = () => {
  return (
    <div className="bg-slate-50 h-screen w-full grid grid-cols-[0_1fr] md:grid-cols-[300px_1fr] overflow-y-hidden">
      <div className="h-screen border-r border-zinc-200 flex flex-col py-8">
        <div className="flex-1 overflow-y-auto px-8 md:px-10">
          <button className="flex items-center px-4 py-3 rounded-2xl border w-full hover:bg-zinc-100">
            <span className="mr-4"><IconMessagePlus/></span>
            New chat
          </button>
        </div>
        <div className="flex flex-col space-y-2 mt-auto px-8 md:px-6">
          <button className="flex items-center px-4 py-3 rounded-2xl hover:bg-zinc-100">
            <span className="mr-4"><IconUserPlus/></span>
            Upgrade to plus
          </button>
        </div>
      </div>
      <div className="h-screen overflow-y-auto flex flex-col relative">
        <div className="sticky top-0 inset-x-0 bg-gradient-to-b from-white/90 from-60% z-50">
          <div className="w-full max-w-5xl mx-auto pt-6 pb-10 space-x-4 flex items-center justify-end">
            <UserDropdown/>
            <ServicesSwitcher/>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-full max-w-5xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolorum.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensiiPage;

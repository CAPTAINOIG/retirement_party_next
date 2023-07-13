import React from 'react';
import { IconChartBar } from "@tabler/icons-react";
import Link from "next/link";

const AuthLayout = ({ children }) => {
  return (
    <div
      className="w-full min-h-screen md:min-h-0 md:h-screen flex flex-col md:grid md:grid-cols-12 md:overflow-hidden bg-slate-100/70"
    >
      <div className="md:col-span-4">
        <div className="bg-[#11161b] text-white px-8 py-12 md:p-16 overflow-hidden pattern-1 h-full flex flex-col">
          <Link href="/" className="text-[1.6rem] flex items-center mb-10 md:mb-16">
            <IconChartBar size="32" className="mr-3"/>
            Stati<b className="ml-[1px]">sense.</b>
          </Link>
          <p className="text-xl md:text-[1.6rem] text-slate-300 max-w-[260px] !leading-snug">
            Get insights to make better business decisions
          </p>
        </div>
      </div>
      <div className="md:col-span-8 flex-1 flex flex-col overflow-y-auto">
        <div className="container my-auto">
          { children }
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

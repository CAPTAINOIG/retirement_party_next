import React from 'react';
import { IconChartBar } from "@tabler/icons-react";
import Link from "next/link";

const AuthLayout = ({ children }) => {
  return (
    <div className="w-full md:h-screen grid grid-cols-12 md:overflow-hidden bg-slate-100">
      <div className="col-span-4">
        <div className="bg-[#11161b] text-white p-16 overflow-hidden pattern-4 h-full">
          <Link href="/" className="text-[1.6rem] flex items-center">
            <IconChartBar size="32" className="mr-3"/>
            Stati<b className="ml-[1px]">sense.</b>
          </Link>
          <p className="mt-8 opacity-75 max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="col-span-8 flex flex-col overflow-y-auto">
        <div className="my-auto">
          { children }
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

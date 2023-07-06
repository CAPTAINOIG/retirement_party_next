"use client"
import React from 'react';
import requireAuth from "@/guards/require-auth";
import Link from "next/link";
import { IconChartBar, IconHome2, IconWallet } from "@tabler/icons-react";
import UserDropdown from "@/components/core/shared/UserDropdown";

const DashboardLayout = ({ children }) => {
  return (
    <div className="bg-slate-100/70 min-h-screen">
      <div className="py-7 bg-[#11161b] text-white">
        <div className="container !max-w-5xl">
          <div className="flex items-center">
            <Link href="/" className="text-[1.4rem] flex items-center">
              <IconChartBar size="28" className="mr-3"/>
              Stati<b className="ml-[1px]">sense.</b>
            </Link>
            <div className="flex items-center space-x-5 md:space-x-10 ml-auto">
              <div className="hidden md:flex items-center space-x-10">
                <Link href={ "/dashboard" } className="flex items-center">
                  Home
                </Link>
                <Link href={ "/dashboard/wallet" } className="flex items-center">
                  Wallet
                </Link>
              </div>
              <div className="md:hidden flex items-center space-x-5">
                <Link href={ "/dashboard" } className="flex items-center">
                  <IconHome2 size="20"/>
                </Link>
                <Link href={ "/dashboard/wallet" } className="flex items-center">
                  <IconWallet size="20"/>
                </Link>
              </div>
              <UserDropdown/>
            </div>
          </div>
        </div>
      </div>
      { children }
    </div>
  );
};

export default requireAuth(DashboardLayout);

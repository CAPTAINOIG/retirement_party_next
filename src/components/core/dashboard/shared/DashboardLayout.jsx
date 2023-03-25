import React from 'react';
import classNames from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";
import { IconChartArcs3, IconHome2 } from "@tabler/icons-react";

const DashboardLayout = ({ children }) => {
  const router = useRouter();

  return (
    <div className="bg-white h-screen w-full grid grid-cols-[0_1fr] md:grid-cols-[300px_1fr] overflow-hidden">
      <div className="h-screen border-r border-zinc-200 overflow-y-auto">
        <div className="p-8 md:p-10">
          <Link href="/">
            <div className="px-7">Logo.</div>
          </Link>
          <div className="flex flex-col mt-12 space-y-2">
            {
              [
                { name: 'Overview', href: '/dashboard', icon: <IconHome2 size="18"/> },
                { name: 'Insights', href: '/dashboard/insights', icon: <IconChartArcs3 size="18"/> },
              ].map(item => (
                <Link
                  key={ item.href } href={ item.href }
                  className={ classNames(
                    'flex items-center px-7 py-3 rounded-2xl',
                    { 'bg-zinc-100 font-semibold': router.asPath === item.href },
                    { 'hover:bg-zinc-50': router.asPath !== item.href }
                  ) }
                >
                  <div className="mr-4">{ item.icon }</div>
                  { item.name }
                </Link>
              ))
            }
          </div>
        </div>
      </div>
      <div className="h-screen overflow-y-auto p-10 md:py-10 md:px-20">
        { children }
      </div>
    </div>
  );
};

export default DashboardLayout;

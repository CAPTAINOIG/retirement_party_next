import React from 'react';
import classNames from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";
import { IconChartArcs3, IconHome2, IconLogout } from "@tabler/icons-react";
import SimpleDropdown from "@/components/global/SimpleDropdown.jsx";
import { useAuth } from "@/hooks/use-auth.js";

const DashboardLayout = ({ children }) => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="bg-white h-screen w-full grid grid-cols-[0_1fr] md:grid-cols-[300px_1fr] overflow-y-hidden">
      <div className="h-screen border-r border-zinc-200 flex flex-col">
        <div className="p-8 md:p-10">
          <Link href="/">
            <div className="px-7">Logo.</div>
          </Link>
        </div>
        <div className="flex-1 overflow-y-auto px-8 md:px-10">
          <div className="flex flex-col space-y-2">
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
        <div className="mt-auto py-4 px-6 md:px-6">
          <SimpleDropdown
            direction="right-bottom"
            trigger={
              <div
                className={ classNames(
                  'flex items-center space-x-4 hover:!bg-gray-200/50 rounded-2xl px-5 py-4 transition-all w-full',
                ) }
              >
                <img
                  src={ `https://ui-avatars.com/api/?name=${ user.first_name } ${ user.last_name }` }
                  className="w-8 h-8 rounded-full" alt={ `${ user.first_name } ${ user.last_name }` }
                />
                <div className="text-left">
                  <div className="leading-none">{ user.first_name } { user.last_name }</div>
                  <div className="text-sm opacity-75 leading-none mt-1">{ user.email }</div>
                </div>
              </div>
            }
            items={ [
              { text: 'Logout', icon: <IconLogout size="18"/>, onClick: handleLogout }
            ] }
          />
        </div>
      </div>
      <div className="h-screen overflow-y-auto p-10 md:py-10 md:px-20">
        { children }
      </div>
    </div>
  );
};

export default DashboardLayout;

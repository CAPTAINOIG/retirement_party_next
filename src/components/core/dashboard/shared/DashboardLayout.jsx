import React from 'react';
import classNames from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";
import { IconFileText, IconHome2, IconLogout, IconMessageChatbot } from "@tabler/icons-react";
import SimpleDropdown from "@/components/global/SimpleDropdown.jsx";
import { useAuth } from "@/hooks/use-auth.js";
import ServicesSwitcher from "@/components/core/shared/ServicesSwitcher";

const DashboardLayout = ({ children }) => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    window.location.reload();
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
                { name: 'Overview', href: '/dashboard', icon: <IconHome2 size="20"/> },
                { name: 'Statement', href: '/dashboard/statement', icon: <IconFileText size="20"/> },
                { name: 'Senseii', href: '/dashboard/chat', icon: <IconMessageChatbot size="20"/> },
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
        </div>
      </div>
      <div className="h-screen overflow-y-auto flex flex-col relative">
        <div className="sticky top-0 inset-x-0 bg-gradient-to-b from-white/90 from-60% z-50">
          <div className="w-full max-w-5xl mx-auto pt-6 pb-10 space-x-4 flex items-center justify-end">
            <SimpleDropdown
              trigger={
                <img
                  src={ `https://ui-avatars.com/api/?name=${ user.firstName } ${ user.lastName }` }
                  className="w-8 h-8 rounded-full" alt={ `${ user.firstName } ${ user.lastName }` }
                />
              }
              items={ [
                { text: 'Logout', icon: <IconLogout size="18"/>, onClick: handleLogout }
              ] }
            />
            <ServicesSwitcher/>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-full max-w-5xl mx-auto">
            { children }
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

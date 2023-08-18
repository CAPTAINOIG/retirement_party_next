import React from 'react';
import SimpleDropdown from "@/components/global/SimpleDropdown";
import { IconChevronDown, IconLogout, IconUserCog } from "@tabler/icons-react";
import { useAuth } from "@/hooks/use-auth";
import classNames from "classnames";

const UserDropdown = ({ className }) => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  return (
    <SimpleDropdown
      trigger={
        <div className={ classNames('flex items-center', className) }>
          <img
            src={ `https://ui-avatars.com/api/?name=${ user.firstName } ${ user.lastName }` }
            className="w-8 h-8 rounded-full" alt={ `${ user.firstName } ${ user.lastName }` }
          />
          <p className="ml-2 hidden md:block">{ user.firstName }</p>
          <IconChevronDown size="18" className="ml-3"/>
        </div>
      }
      items={ [
        {
          text: 'Account settings',
          icon: <IconUserCog size="18"/>,
          onClick: () => {
            location.href = 'https://app.statisense.co/account';
          }
        },
        { text: 'Logout', icon: <IconLogout size="18"/>, onClick: handleLogout },
      ] }
    />
  );
};

export default UserDropdown;

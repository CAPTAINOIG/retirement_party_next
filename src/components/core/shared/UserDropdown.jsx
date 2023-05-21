import React from 'react';
import SimpleDropdown from "@/components/global/SimpleDropdown";
import { IconLogout } from "@tabler/icons-react";
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
        <img
          src={ `https://ui-avatars.com/api/?name=${ user.firstName } ${ user.lastName }` }
          className={ classNames('w-8 h-8 rounded-full', className) }
          alt={ `${ user.firstName } ${ user.lastName }` }
        />
      }
      items={ [
        { text: 'Logout', icon: <IconLogout size="18"/>, onClick: handleLogout }
      ] }
    />
  );
};

export default UserDropdown;

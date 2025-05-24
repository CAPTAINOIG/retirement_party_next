import React from 'react';
import { useAuth } from '@/hooks/use-auth';
import { cn, getImageLink } from '@/lib/utils';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User } from '@heroui/react';
import { TbLogout, TbUser } from 'react-icons/tb';
import { ACCOUNT_URL } from '@/lib/constants';

const UserDropdown = () => {
  const { user, logout } = useAuth();

  return (
    <Dropdown className="w-full" classNames={{ content: 'shadow border border-default-100 w-[260px]' }}>
      <DropdownTrigger className="w-full">
        <User
          className={cn('transition-transform')}
          description={`@${user.username}`}
          name={`${user.firstName} ${user.lastName}`}
          avatarProps={{ radius: 'full', size: 'sm', src: getImageLink(user.image) }}
          classNames={{
            name: 'text-base leading-none font-medium',
            description: 'text-sm leading-none mt-1.5',
            base: 'gap-4 cursor-pointer',
          }}
        />
      </DropdownTrigger>
      <DropdownMenu
        aria-label="User Actions"
        variant="flat"
        onAction={(key) => {
          if (key === 'settings') window.open(`${ACCOUNT_URL}`, '_blank');
          if (key === 'logout') logout();
        }}
      >
        <DropdownItem
          key="dashboard"
          startContent={<TbUser size="20" />}
          classNames={{
            title: 'text-base',
            description: 'text-sm',
            base: 'rounded-xl px-4 py-2',
          }}
        >
          Dashboard
        </DropdownItem>
        <DropdownItem
          key="logout"
          color="danger"
          startContent={<TbLogout size="20" />}
          classNames={{
            title: 'text-base',
            description: 'text-sm',
            base: 'rounded-xl px-4 py-2',
          }}
        >
          <span className="text-base">Log Out</span>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserDropdown;

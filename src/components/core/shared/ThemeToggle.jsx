import React from 'react';
import { useTheme } from 'next-themes';
import { IconSun, IconMoon, IconDeviceDesktop } from '@tabler/icons-react';
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const themeOptions = [
    {
      key: 'light',
      label: 'Light',
      icon: <IconSun size="20" />,
    },
    {
      key: 'dark',
      label: 'Dark',
      icon: <IconMoon size="20" />,
    },
    {
      key: 'system',
      label: 'System',
      icon: <IconDeviceDesktop size="20" />,
    },
  ];

  const getCurrentIcon = () => {
    switch (theme) {
      case 'light':
        return <IconSun size="20" />;
      case 'dark':
        return <IconMoon size="20" />;
      case 'system':
        return <IconDeviceDesktop size="20" />;
      default:
        return <IconDeviceDesktop size="20" />;
    }
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="flat" radius="full" isIconOnly className="h-10 w-10 min-w-10" aria-label="Toggle theme">
          {getCurrentIcon()}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Theme selection"
        selectedKeys={[theme]}
        selectionMode="single"
        onSelectionChange={(keys) => {
          const selectedTheme = Array.from(keys)[0];
          setTheme(selectedTheme);
        }}
      >
        {themeOptions.map((option) => (
          <DropdownItem key={option.key} startContent={option.icon}>
            {option.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default ThemeToggle;

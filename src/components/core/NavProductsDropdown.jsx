import React, { createElement } from 'react';
import Link from 'next/link';
import { IconBuildingBank, IconCashBanknote, IconFiles, IconIdBadge, IconLayout2 } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

const items = [
  {
    name: 'For banking',
    description: 'Optimize financial decision-making with strategic insights for banking.',
    icon: IconBuildingBank,
    bg: 'bg-teal-500',
  },
  {
    name: 'For documents',
    description: 'Unlock versatile document analysis for informed, data-driven decisions.',
    icon: IconFiles,
    bg: 'bg-cyan-500',
  },
  {
    name: 'For identity',
    description: 'Strengthening identity verification with advanced data.',
    icon: IconIdBadge,
    bg: 'bg-red-500',
  },
  {
    name: 'For accounting',
    description: 'Streamlining financial management through data.',
    icon: IconCashBanknote,
    bg: 'bg-orange-500',
  },
];

const NavProductsDropdown = () => {
  return (
    <div
      className={cn(
        'absolute left-0 right-0 top-full z-50 -mt-2 w-full rounded-3xl border bg-white text-gray-800 shadow-md md:w-[600px] md:-translate-x-1/2',
        'pointer-events-none translate-y-10 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100'
      )}
    >
      <div className="space-y-2 px-6 py-6">
        <div className="grid gap-2 md:grid-cols-2">
          {items.map((item) => (
            <Link
              key={item.name}
              href={APP_URL}
              className="flex cursor-pointer items-center rounded-2xl px-6 py-4 transition-all hover:bg-gray-200/40"
            >
              <div className="mr-4">
                <div className={cn('flex h-10 w-10 items-center justify-center rounded-full text-white', item.bg)}>
                  {createElement(item.icon)}
                </div>
              </div>
              <div>
                <h4 className="font-medium">{item.name}</h4>
                <p className="mt-1 text-sm leading-tight opacity-80">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href={APP_URL}
          className="flex cursor-pointer items-center rounded-2xl px-6 py-4 transition-all hover:bg-gray-200/40"
        >
          <div className="mr-4">
            <div className={cn('flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-800')}>
              <IconLayout2 />
            </div>
          </div>
          <h4 className="font-medium">Explore business products</h4>
        </Link>
      </div>
    </div>
  );
};

export default NavProductsDropdown;

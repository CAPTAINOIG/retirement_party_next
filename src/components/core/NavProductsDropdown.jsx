import React, { createElement } from 'react';
import classNames from "classnames";
import Link from "next/link";
import { IconBuildingBank, IconCashBanknote, IconFiles, IconIdBadge, IconLayout2 } from "@tabler/icons-react";

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
      className={ classNames(
        'rounded-3xl bg-white shadow-md z-50 border text-gray-800 absolute top-full -mt-2 left-0 md:-translate-x-1/2 right-0 w-full md:w-[600px]',
        'transition-all duration-300 translate-y-10 opacity-0 pointer-events-none group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto'
      ) }
    >
      <div className="space-y-2 px-6 py-6">
        <div className="grid md:grid-cols-2 gap-2">
          {
            items.map(item => (
              <Link
                key={ item.name }
                href={ APP_URL }
                className="rounded-2xl flex items-center hover:bg-gray-200/40 py-4 px-6 transition-all cursor-pointer"
              >
                <div className="mr-4">
                  <div
                    className={ classNames('w-10 h-10 rounded-full flex items-center justify-center text-white', item.bg) }
                  >
                    { createElement(item.icon) }
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">{ item.name }</h4>
                  <p className="text-sm opacity-80 leading-tight mt-1">
                    { item.description }
                  </p>
                </div>
              </Link>
            ))
          }
        </div>
        <Link
          href={ APP_URL }
          className="rounded-2xl flex items-center hover:bg-gray-200/40 py-4 px-6 transition-all cursor-pointer"
        >
          <div className="mr-4">
            <div
              className={ classNames('w-10 h-10 rounded-full flex items-center justify-center text-slate-800 bg-slate-200') }
            >
              <IconLayout2/>
            </div>
          </div>
          <h4 className="font-medium">Explore business products</h4>
        </Link>
      </div>
    </div>
  );
};

export default NavProductsDropdown;

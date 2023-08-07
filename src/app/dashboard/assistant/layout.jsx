"use client"
import React, { createElement } from 'react';
import { IconLayout2, IconMessages } from "@tabler/icons-react";
import products from "@/lib/products";
import classNames from "classnames";
import AppDashboardLayout from "@/components/core/dashboard/shared/AppDashboardLayout";

const links = [
  { name: 'Overview', href: '/dashboard/assistant', icon: <IconLayout2 size="20"/> },
  { name: 'Conversations', href: '/dashboard/assistant/conversations', icon: <IconMessages size="20"/> },
];

const product = products.find(p => p.slug === 'assistant');

const Logo = ({ className }) => (
  <div className={ className }>
    <div className="text-[1.05rem] font-medium flex items-center">
      <div
        className={ classNames("w-10 h-10 rounded-full mr-3 flex items-center justify-center", product.backgroundColor) }
      >
        { createElement(product.icon, { size: 22, className: `text-white` }) }
      </div>
      { product.name }
    </div>
  </div>
);

const ChatLayout = ({ children }) => {
  return (
    <AppDashboardLayout logo={ Logo } links={ links }>
      { children }
    </AppDashboardLayout>
  );
};

export default ChatLayout;

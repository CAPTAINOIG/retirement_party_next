"use client"
import React, { createElement } from 'react';
import requireAuth from "@/guards/require-auth";
import { useAuth } from "@/hooks/use-auth";
import products from "@/lib/products";
import classNames from "classnames";
import Link from "next/link";
import UserDropdown from "@/components/core/shared/UserDropdown";

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="container !max-w-4xl mx-auto py-16 min-h-screen flex flex-col">
      <div className="my-auto">
        <div className="mb-20 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-medium">
              Welcome { user.firstName } 👋🏽
            </h1>
            <p className="text-[1.05rem] mt-2">Select a product below to continue</p>
          </div>
          <UserDropdown className="!w-10 !h-10"/>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {
            products.map(product => (
              <Link href={ product.dashboardLink } key={ product.name }>
                <div
                  className="rounded-3xl hover:bg-gray-100 p-4 py-10 transition-all cursor-pointer border px-8 flex items-center"
                >
                  <div>
                    <div
                      className={ classNames('w-[80px] h-[80px] rounded-full flex items-center justify-center bg-opacity-10', product.textColor) }
                    >
                      { createElement(product.icon, { size: 48 }) }
                    </div>
                  </div>
                  <div className="ml-6">
                    <h4 className="font-medium text-lg">{ product.name }</h4>
                    <p className="text-sm opacity-80 leading-tight mt-1">
                      { product.description }
                    </p>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default requireAuth(DashboardPage);

"use client"
import React, { createElement } from 'react';
import requireAuth from "@/guards/require-auth";
import { useAuth } from "@/hooks/use-auth";
import products from "@/lib/products";
import classNames from "classnames";
import Link from "next/link";
import Button from "@/components/global/Button";
import { IconLogout } from "@tabler/icons-react";

const DashboardPage = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  return (
    <>
      <div className="container !max-w-4xl mx-auto py-16 min-h-screen flex flex-col">
        <div className="my-auto">
          <div className="mb-16 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-medium">
                Welcome { user.firstName } 👋🏽
              </h1>
              <p className="text-[1.05rem] mt-2">Select a product below to continue</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {
              products.map(product => (
                <Link href={ product.dashboardLink } key={ product.name } className="h-full">
                  <div
                    className="rounded-3xl bg-slate-200/40 hover:bg-slate-200/60 p-12 py-10 transition-all cursor-pointer h-full flex items-center"
                  >
                    <div>
                      <div
                        className={ classNames('w-16 h-16 rounded-3xl flex items-center justify-center text-white', product.backgroundColor) }>
                        { createElement(product.icon, { size: 36 }) }
                      </div>
                    </div>
                    <div className="ml-6">
                      <h4 className="font-medium text-lg">{ product.name }</h4>
                      <p className="leading-tight mt-1">
                        { product.description }
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
          <Button
            onClick={ handleLogout } variant="outlined" leftIcon={ <IconLogout size="20"/> } className="mt-14"
          >
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default requireAuth(DashboardPage);

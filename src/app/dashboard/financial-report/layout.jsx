"use client"
import React, { createElement, useState } from 'react';
import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";
import { IconBooks, IconLayout, IconSettings2 } from "@tabler/icons-react";
import ServicesSwitcher from "@/components/core/shared/AppSwitcherMobile";
import UserDropdown from "@/components/core/shared/UserDropdown";
import requireAuthBusiness from "@/guards/require-auth-business";
import { useCreateStatementSettings, useGetStatementSettings } from "@/api/statement";
import { useGetUserBusiness } from "@/api/business";
import products from "@/lib/products";
import Loader from "@/components/global/Loader";
import Button from "@/components/global/Button";
import Checkbox from "@/components/global/Checkbox";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";

const links = [
  { name: 'Overview', href: '/dashboard/financial-report', icon: <IconLayout size="20"/> },
  { name: 'Reports', href: '/dashboard/financial-report/reports', icon: <IconBooks size="20"/> },
  { name: 'Settings', href: '/dashboard/financial-report/settings', icon: <IconSettings2 size="20"/> },
];

const product = products.find(p => p.slug === 'financial-report');

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

const FinancialReportLayout = ({ children }) => {
  const toast = useToast();
  const qc = useQueryClient();
  const pathname = usePathname();
  const [accepted, setAccepted] = useState(false);
  const { data: business } = useGetUserBusiness();
  const { data: { settings } = {}, isLoading: isSettingsLoading, isFetching } = useGetStatementSettings(business._id);
  const { mutateAsync: createSettings, isLoading: isCreateSettingsLoading } = useCreateStatementSettings(business._id);

  const start = async () => {
    if (!accepted) toast.error('Kindly accept terms and conditions before proceeding');
    try {
      await createSettings(null);
      await qc.invalidateQueries(['statement', 'settings']);
    } catch (e) {
      toast.error(e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <>
      {
        isSettingsLoading ? (
          <div className="h-screen w-full flex flex-col justify-center items-center text-center">
            <Loader/>
            <p className="mt-6">Fetching configurations..</p>
          </div>
        ) : (
          <>
            {
              settings ? (
                <div className="h-screen w-full grid grid-cols-[0_1fr] md:grid-cols-[300px_1fr] overflow-y-hidden">
                  <div className="h-screen border-r border-slate-200 flex flex-col overflow-hidden">
                    <div className="p-8 md:p-10 mb-4 hidden md:block">
                      <Link href={ "/dashboard" }>
                        <Logo className="px-5"/>
                      </Link>
                    </div>
                    <div className="flex-1 overflow-y-auto px-8 md:px-10">
                      <div className="flex flex-col space-y-2">
                        {
                          links.map(item => (
                            <Link
                              key={ item.href } href={ item.href }
                              className={ classNames(
                                'flex items-center px-7 py-3 rounded-2xl',
                                pathname === item.href ? `bg-slate-100 font-bold` : 'hover:bg-slate-100 opacity-90'
                              ) }
                            >
                              <div className="mr-4">{ item.icon }</div>
                              { item.name }
                            </Link>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                  <div className="h-screen overflow-y-auto flex flex-col relative bg-slate-100/70">
                    <div className="sticky top-0 inset-x-0 bg-gradient-to-b from-slate-100/70 z-50">
                      <div className="container !max-w-5xl pt-6 pb-10 space-x-4 flex items-center md:justify-end">
                        <Logo className="md:hidden mr-auto"/>
                        <ServicesSwitcher/>
                        <UserDropdown/>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="container h-full !max-w-5xl flex flex-col mb-32 mb:pb-10">
                        { children }
                      </div>
                    </div>
                    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow border-t">
                      <div className="grid grid-cols-3 w-full">
                        {
                          links.map(item => (
                            <Link
                              key={ item.href } href={ item.href }
                              className="flex flex-col justify-center items-center text-center px-2 py-3"
                            >
                              <div
                                className={ classNames(
                                  'rounded-2xl mb-1 px-4 py-1',
                                  pathname === item.href ? `bg-slate-200` : 'opacity-90'
                                ) }
                              >
                                { item.icon }
                              </div>
                              { item.name }
                            </Link>
                          ))
                        }
                      </div>

                    </div>
                  </div>
                </div>
              ) : (
                <div className="max-w-[600px] mx-auto py-12">
                  <div className="flex items-center">
                    <div
                      className={ classNames('w-16 h-16 rounded-3xl flex items-center justify-center text-white', product.backgroundColor) }
                    >
                      { createElement(product.icon, { size: 36 }) }
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-lg">{ product.name } by Statisense</p>
                      <p>{ product.description }</p>
                    </div>
                  </div>
                  <div className="border border-gray-300 rounded-3xl p-12 mt-10">
                    <h2 className="mb-6 font-medium">
                      Kindly accept the terms and conditions before proceeding
                    </h2>
                    <div className="space-y-4">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus accusantium alias amet
                        consequatur et illum inventore modi nostrum nulla quia rem, repellat repellendus sapiente sequi
                        suscipit vel voluptatem! Ad asperiores cupiditate dolorum ducimus eius eligendi, est harum
                        impedit
                        iste maiores modi odit, officia, pariatur quae ullam vel voluptatum? Accusantium eum
                        exercitationem modi non odit quas, reprehenderit? Animi dolor ducimus ea molestias
                        necessitatibus
                        pariatur quas repellendus? Et illo iusto modi nostrum. Corporis dicta distinctio illum
                        laboriosam
                        libero natus quidem voluptatum.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus accusantium alias amet
                        consequatur et illum inventore modi nostrum nulla quia rem, repellat repellendus sapiente sequi
                        suscipit vel voluptatem! Ad asperiores cupiditate dolorum ducimus eius eligendi, est harum
                        impedit
                        iste maiores modi odit, officia, pariatur quae ullam vel voluptatum? Accusantium eum
                        exercitationem modi non odit quas, reprehenderit? Animi dolor ducimus ea molestias
                        necessitatibus
                        pariatur quas repellendus? Et illo iusto modi nostrum. Corporis dicta distinctio illum
                        laboriosam
                        libero natus quidem voluptatum.
                      </p>
                    </div>
                    <div className="mt-10">
                      <Checkbox
                        value={ accepted } onChange={ e => setAccepted(e.target.checked) }
                        disabled={ isCreateSettingsLoading || isFetching }
                      >
                        I agree to the terms and conditions
                      </Checkbox>
                      <Button
                        onClick={ start } className="mt-6"
                        loading={ isCreateSettingsLoading || isFetching }
                      >
                        Go to statement
                      </Button>
                    </div>
                  </div>
                </div>
              )
            }
          </>
        )
      }
    </>
  );
};

export default requireAuthBusiness(FinancialReportLayout);

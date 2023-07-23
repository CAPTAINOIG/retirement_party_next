"use client"
import React, { createElement, useState } from 'react';
import classNames from "classnames";
import { IconBooks, IconLayout } from "@tabler/icons-react";
import requireAuthBusiness from "@/guards/require-auth-business";
import { useCreateStatementSettings, useGetStatementSettings } from "@/api/statement";
import { useGetUserBusiness } from "@/api/business";
import products from "@/lib/products";
import Loader from "@/components/global/Loader";
import Button from "@/components/global/Button";
import Checkbox from "@/components/global/Checkbox";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import AppDashboardLayout from "@/components/core/dashboard/shared/AppDashboardLayout";
import DashboardContent from "@/components/core/dashboard/shared/DashboardContent";

const links = [
  { name: 'Overview', href: '/dashboard/custom-report', icon: <IconLayout size="20"/> },
  { name: 'Reports', href: '/dashboard/custom-report/reports', icon: <IconBooks size="20"/> },
];

const product = products.find(p => p.slug === 'custom-report');

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

const CustomReportLayout = ({ children }) => {
  const toast = useToast();
  const qc = useQueryClient();
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
            <p className="mt-6">Just a moment..</p>
          </div>
        ) : (
          <>
            {
              settings ? (
                <>
                  <AppDashboardLayout logo={ Logo } links={ links }>
                    <DashboardContent>
                      { children }
                    </DashboardContent>
                  </AppDashboardLayout>
                </>
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
                        Continue
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

export default requireAuthBusiness(CustomReportLayout);

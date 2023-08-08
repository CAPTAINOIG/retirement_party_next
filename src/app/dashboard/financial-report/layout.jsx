"use client"
import React, { createElement, useState } from 'react';
import classNames from "classnames";
import { IconBooks, IconLayout, IconSettings2 } from "@tabler/icons-react";
import requireAuthBusiness from "@/guards/require-auth-business";
import { useGetUserBusiness } from "@/api/business";
import products from "@/lib/products";
import Loader from "@/components/global/Loader";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import AppDashboardLayout from "@/components/core/dashboard/shared/AppDashboardLayout";
import ProductOnboarding from "@/components/core/dashboard/shared/ProductOnboarding";
import DashboardContent from "@/components/core/dashboard/shared/DashboardContent";
import { useCreateFinancialReportSettings, useGetFinancialReportSettings } from "@/api/financial-report";

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
  const [isFetching, setIsFetching] = useState(false);
  const { data: business } = useGetUserBusiness();
  const { data: { settings } = {}, isLoading: isSettingsLoading, } = useGetFinancialReportSettings(business._id);
  const {
    mutateAsync: createSettings, isLoading: isCreateSettingsLoading
  } = useCreateFinancialReportSettings(business._id);

  const start = async () => {
    try {
      await createSettings(null);
      setIsFetching(true)
      await qc.invalidateQueries(['financial-report', 'settings']);
      setIsFetching(false)
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
                <AppDashboardLayout logo={ Logo } links={ links }>
                  <DashboardContent>
                    { children }
                  </DashboardContent>
                </AppDashboardLayout>
              ) : (
                <ProductOnboarding
                  product={ product }
                  isLoading={ isCreateSettingsLoading || isFetching }
                  handleSubmit={ start }
                />
              )
            }
          </>
        )
      }
    </>
  );
};

export default requireAuthBusiness(FinancialReportLayout);

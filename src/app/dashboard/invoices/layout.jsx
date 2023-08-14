"use client"
import React, { createElement, useState } from 'react';
import { IconFileInvoice, IconLayout, IconReceipt } from "@tabler/icons-react";
import products from "@/lib/products";
import classNames from "classnames";
import DashboardContent from "@/components/core/dashboard/shared/DashboardContent";
import AppDashboardLayout from "@/components/core/dashboard/shared/AppDashboardLayout";
import requireAuthBusiness from "@/guards/require-auth-business";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useGetUserBusiness } from "@/api/business";
import { useCreateInvoicesSettings, useGetInvoicesSettings } from "@/api/invoice";
import Loader from "@/components/global/Loader";
import ProductOnboarding from "@/components/core/dashboard/shared/ProductOnboarding";

const links = [
  { name: 'Overview', href: '/dashboard/invoices', icon: <IconLayout size="20"/> },
  { name: 'Receipts', href: '/dashboard/invoices/receipts', icon: <IconReceipt size="20"/> },
  { name: 'Invoices', href: '/dashboard/invoices/invoices', icon: <IconFileInvoice size="20"/> },
];

const product = products.find(p => p.slug === 'invoices');

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

const InvoicesLayout = ({ children }) => {
  const toast = useToast();
  const qc = useQueryClient();
  const [isFetching, setIsFetching] = useState(false);
  const { data: business } = useGetUserBusiness();
  const { data: { settings } = {}, isLoading: isSettingsLoading, } = useGetInvoicesSettings(business._id);
  const { mutateAsync: createSettings, isLoading: isCreateSettingsLoading } = useCreateInvoicesSettings(business._id);

  const start = async () => {
    try {
      await createSettings(null);
      setIsFetching(true)
      await qc.invalidateQueries(['invoices', 'settings']);
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

export default requireAuthBusiness(InvoicesLayout);

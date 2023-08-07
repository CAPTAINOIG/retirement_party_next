"use client"
import React from 'react';
import { useGetUserBusiness } from "@/api/business";
import { IconCircleCheckFilled, IconCircleXFilled, IconHourglass } from "@tabler/icons-react";
import CreateBusiness from "@/components/core/dashboard/overview/CreateBusiness";
import requireAuth from "@/guards/require-auth";
import Button from "@/components/global/Button";
import Link from "next/link";
import Loader from "@/components/global/Loader";
import AuthLayout from "@/components/core/shared/AuthLayout";

const BusinessPage = () => {
  const { data: business, isLoading } = useGetUserBusiness();

  return (
    <AuthLayout>
      {
        isLoading ? (
          <div className="flex flex-col items-center justify-center my-auto">
            <Loader/>
            <p className='mt-5'>One moment, please..</p>
          </div>
        ) : (
          <div className="container py-20">
            <div className="w-full max-w-xl mx-auto rounded-xl">
              {
                business ? (
                  <>
                    {
                      business.status === 'pending' && (
                        <div className="rounded-xl flex flex-col items-center justify-center text-center">
                          <IconHourglass size="80" className="text-orange-600"/>
                          <h6 className="text-xl mt-10 font-semibold max-w-xs">
                            Business information submitted
                          </h6>
                          <p className="max-w-md mt-3">
                            Your business information has been submitted and is under review, click the button below to
                            continue to your dashboard.
                          </p>
                          <Link href={ "/dashboard" }>
                            <Button variant="outlined" className="mt-10">Continue</Button>
                          </Link>
                        </div>
                      )
                    }
                    {
                      business.status === 'unverified' && (
                        <div className="rounded-xl flex flex-col items-center justify-center text-center">
                          <IconCircleXFilled size="80" className="text-red-600"/>
                          <h6 className="text-xl mt-10 font-semibold max-w-xs">
                            Business verification failed
                          </h6>
                          <p className="max-w-md mt-3">
                            We could not verify your business information, click the button below to continue to your
                            dashboard and complete your business information
                          </p>
                          <Link href={ "/dashboard" }>
                            <Button variant="outlined" className="mt-10">Continue</Button>
                          </Link>
                        </div>
                      )
                    }
                    {
                      business.status === 'verified' && (
                        <div className="rounded-xl px-10 py-24 flex flex-col items-center justify-center text-center">
                          <IconCircleCheckFilled size="80" className="text-green-600"/>
                          <h6 className="text-xl mt-10 font-semibold max-w-xs">
                            Business verification successful
                          </h6>
                          <p className="max-w-md mt-3">
                            Your business information has been successfully verified, click the button below to continue
                            to
                            your dashboard
                          </p>
                          <Link href={ "/dashboard" }>
                            <Button variant="outlined" className="mt-10">Continue</Button>
                          </Link>
                        </div>
                      )
                    }
                  </>
                ) : (
                  <CreateBusiness/>
                )
              }
            </div>
          </div>
        )
      }
    </AuthLayout>
  );
};

export default requireAuth(BusinessPage);

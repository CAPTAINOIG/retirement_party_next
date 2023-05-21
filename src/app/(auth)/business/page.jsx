"use client"
import React from 'react';
import { useGetUserBusinesses } from "@/api/business";
import { IconCircleCheckFilled, IconCircleXFilled, IconHourglass } from "@tabler/icons-react";
import CreateBusiness from "@/components/core/dashboard/overview/CreateBusiness";
import requireAuth from "@/guards/require-auth";
import Loader from "@/components/global/Loader";
import Button from "@/components/global/Button";
import Link from "next/link";

const BusinessPage = () => {
  const { data, isLoading } = useGetUserBusinesses();

  const business = data?.businesses?.[0];

  return (
    <>
      <div className="container">
        <div className="w-full max-w-xl mx-auto rounded-xl">
          {
            isLoading ? (
              <div className="h-full flex justify-center items-center">
                <Loader/>
              </div>
            ) : (
              <>
                {
                  business ? (
                    <>
                      {
                        business.status === 'pending' && (
                          <div
                            className="rounded-xl flex flex-col items-center justify-center text-center"
                          >
                            <IconHourglass size="80" className="text-orange-600"/>
                            <h6 className="text-xl mt-10 font-semibold max-w-xs">
                              We are verifying your business
                            </h6>
                            <p className="max-w-md mt-3">
                              We are currently verifying your business information, you'll be notified via email when
                              review is completed
                            </p>
                          </div>
                        )
                      }
                      {
                        business.status === 'unverified' && (
                          <div
                            className="rounded-xl flex flex-col items-center justify-center text-center"
                          >
                            <IconCircleXFilled size="80" className="text-red-600"/>
                            <h6 className="text-xl mt-10 font-semibold max-w-xs">
                              Business verification failed
                            </h6>
                            <p className="max-w-md mt-3">
                              We could not verify your business information, please click the button below update your
                              business information and try again
                            </p>
                            <Button variant="outlined" className="mt-10" disabled>Continue</Button>
                          </div>
                        )
                      }
                      {
                        business.status === 'verified' && (
                          <div
                            className="rounded-xl px-10 py-24 flex flex-col items-center justify-center text-center"
                          >
                            <IconCircleCheckFilled size="80" className="text-green-600"/>
                            <h6 className="text-xl mt-10 font-semibold max-w-xs">
                              Business verification successful
                            </h6>
                            <p className="max-w-md mt-3">
                              You business information has been successfully verified, click the button below to continue
                            </p>
                            <Link href="/dashboard">
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
              </>
            )
          }
        </div>
      </div>
    </>
  );
};

export default requireAuth(BusinessPage);

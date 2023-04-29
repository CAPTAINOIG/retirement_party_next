import React from 'react';
import requireAuth from "@/guards/require-auth.js";
import DashboardLayout from "@/components/core/dashboard/shared/DashboardLayout.jsx";
import DashboardTitle from "@/components/core/dashboard/shared/DashboardTitle.jsx";
import CreateBusiness from "@/components/core/dashboard/overview/CreateBusiness.jsx";
import { IconBriefcase, IconCheck, IconCircleCheckFilled, IconHourglass } from "@tabler/icons-react";
import { useAuth } from "@/hooks/use-auth.js";
import { useGetUserBusinesses } from "@/api/business.js";

const Overview = () => {
  const { user } = useAuth();
  const { data, isLoading } = useGetUserBusinesses();

  const business = data?.businesses?.[0];

  return (
    <>
      <DashboardTitle text={ `Hi ${ user.firstName }` }></DashboardTitle>

      <div className="grid md:grid-cols-12 gap-16 md:gap-10">
        <div className="md:col-span-4">
          <ol className="relative text-gray-500 border-l border-gray-200">
            <li className="mb-10 ml-8">
              <div
                className="absolute flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full -left-4 ring-4 ring-white"
              >
                <IconCheck size="18"/>
              </div>
              <h3 className="font-medium leading-tight">Account verification</h3>
              <p className="text-sm mt-1">Verify your identity by providing your national id</p>
            </li>
            <li className="mb-10 ml-8">
              <div
                className="absolute flex items-center justify-center w-8 h-8 bg-orange-500 text-white rounded-full -left-4 ring-4 ring-white"
              >
                <IconBriefcase size="18"/>
              </div>
              <h3 className="font-medium leading-tight">Setup your business</h3>
              <p className="text-sm mt-1">Provide details about your business</p>
            </li>
          </ol>
        </div>
        <div className="md:col-span-8">
          {
            isLoading ? (
              <div className="bg-gray-100 rounded-xl w-full h-[300px]"></div>
            ) : (
              <>
                {
                  business ? (
                    <>
                      {
                        business.status === 'pending' && (
                          <div
                            className="border border-gray-300 rounded-xl px-10 py-24 flex flex-col items-center justify-center text-center"
                          >
                            <IconHourglass size="72" className="text-orange-600"/>
                            <h6 className="text-lg mt-8 font-semibold max-w-sl">Business verification pending</h6>
                            <p className="max-w-sm mt-2">
                              We are currently verifying your business information, you'll be notified via email when
                              review is completed
                            </p>
                          </div>
                        )
                      }
                      {
                        business.status === 'verified' && (
                          <div
                            className="border border-gray-300 rounded-xl px-10 py-24 flex flex-col items-center justify-center text-center"
                          >
                            <IconCircleCheckFilled size="72" className="text-green-600"/>
                            <h6 className="text-lg mt-8 font-semibold max-w-sl">Business verification successful</h6>
                            <p className="max-w-sm mt-2">
                              You business information has been successfully verified
                            </p>
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

Overview.Layout = DashboardLayout;

export default requireAuth(Overview);

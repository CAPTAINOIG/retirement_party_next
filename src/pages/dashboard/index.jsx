import React from 'react';
import requireAuth from "@/guards/require-auth.js";
import DashboardLayout from "@/components/core/dashboard/shared/DashboardLayout.jsx";
import DashboardTitle from "@/components/core/dashboard/shared/DashboardTitle.jsx";
import CreateBusiness from "@/components/core/dashboard/overview/CreateBusiness.jsx";
import { IconBriefcase, IconCheck } from "@tabler/icons-react";
import { useAuth } from "@/hooks/use-auth.js";
import DashboardTitle from "@/components/core/dashboard/shared/DashboardTitle.jsx";

const Overview = () => {
  const { user } = useAuth();

  return (
    <>
      <DashboardTitle text={ `Hi ${ user.first_name }` }></DashboardTitle>

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
            <li className="ml-8">
              <div
                className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white"
              >
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="currentColor"
                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd">
                  </path>
                </svg>
              </div>
              <h3 className="font-medium leading-tight">Confirmation</h3>
              <p className="text-sm">Step details here</p>
            </li>
          </ol>
        </div>
        <div className="md:col-span-8">
          <CreateBusiness/>
        </div>
      </div>
    </>
  );
};

Overview.Layout = DashboardLayout;

export default requireAuth(Overview);

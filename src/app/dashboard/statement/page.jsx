"use client"
import React from 'react';
import { IconAngle, IconCash, IconFileText, IconPlus } from "@tabler/icons-react";
import dynamic from "next/dynamic";
import { useGetStatementOverview } from "@/api/statement";
import { useGetUserBusiness } from "@/api/business";
import RecentAnalysis from "@/components/core/dashboard/statement/RecentAnalysis";

const StatementChart = dynamic(() => import("../../../components/core/dashboard/statement/StatementChart"));

const StatementOverviewPage = () => {
  const { data: business, isLoading: isBusinessLoading } = useGetUserBusiness();
  const { data = {}, isLoading: isOverviewLoading } = useGetStatementOverview(business._id)

  return (
    <div className="space-y-6 text-sm">
      {
        (isBusinessLoading || isOverviewLoading) ? (
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-gray-100 rounded-2xl min-h-[120px]"></div>
            <div className="bg-gray-100 rounded-2xl min-h-[120px]"></div>
            <div className="bg-gray-100 rounded-2xl min-h-[120px]"></div>
            <div className="bg-gray-100 rounded-2xl min-h-[120px]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-6">
            <div className="border border-gray-300 rounded-2xl px-6 py-4">
              <div className="flex items-center mb-1">
                <IconFileText size="18" className="mr-2"/>
                <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden">Statements analyzed</p>
              </div>
              <div className="text-3xl font-semibold">
                { data.totalStatements }
              </div>
            </div>
            <div className="border border-gray-300 rounded-2xl px-6 py-4">
              <div className="flex items-center mb-1">
                <IconCash size="18" className="mr-2"/>
                <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden">Plan</p>
              </div>
              <div className="text-3xl font-semibold">
                Basic
              </div>
            </div>
            <div className="border border-gray-300 rounded-2xl px-6 py-4">
              <div className="flex items-center mb-1">
                <IconAngle size="18" className="mr-2"/>
                <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden">Something here</p>
              </div>
              <div className="text-3xl font-semibold">
                0
              </div>
            </div>
            <div
              className="border border-gray-300 rounded-2xl px-6 py-4 flex flex-col items-center justify-center hover:bg-gray-100 cursor-pointer"
            >
              <div className="text-3xl font-semibold">
                <IconPlus/>
              </div>
              <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden mt-1">New analysis</p>
            </div>
          </div>
        )
      }
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-5">
          <RecentAnalysis/>
        </div>
        <div className="col-span-7 flex flex-col">
          <StatementChart/>
        </div>
      </div>
    </div>
  );
};

export default StatementOverviewPage;

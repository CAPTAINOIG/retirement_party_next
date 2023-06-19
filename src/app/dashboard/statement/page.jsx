"use client"
import React from 'react';
import dynamic from "next/dynamic";
import { useGetStatementOverview } from "@/api/statement";
import { useGetUserBusiness } from "@/api/business";
import RecentAnalysis from "@/components/core/dashboard/statement/RecentAnalysis";
import StatementStats from "@/components/core/dashboard/statement/StatementStats";

const StatementChart = dynamic(() => import("../../../components/core/dashboard/statement/StatementChart"));

const StatementOverviewPage = () => {
  const { data: business, isLoading: isBusinessLoading } = useGetUserBusiness();
  const { isLoading: isOverviewLoading } = useGetStatementOverview(business._id)

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
          <StatementStats/>
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

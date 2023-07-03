"use client"
import React from 'react';
import dynamic from "next/dynamic";
import RecentAnalysis from "@/components/core/dashboard/statement/RecentAnalysis";
import StatementStats from "@/components/core/dashboard/statement/StatementStats";

const StatementChart = dynamic(() => import("../../../components/core/dashboard/statement/StatementChart"));

const StatementOverviewPage = () => {
  return (
    <div className="space-y-6">
      <StatementStats/>
      <div className="grid md:grid-cols-12 gap-6">
        <div className="md:col-span-5">
          <RecentAnalysis/>
        </div>
        <div className="md:col-span-7 flex flex-col h-[340px]">
          <StatementChart/>
        </div>
      </div>
    </div>
  );
};

export default StatementOverviewPage;

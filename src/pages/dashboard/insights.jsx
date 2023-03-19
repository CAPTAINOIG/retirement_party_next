import React from 'react';
import DashboardLayout from "@/components/core/dashboard/shared/DashboardLayout.jsx";
import DashboardTitle from "@/components/core/dashboard/shared/DashboardTitle.jsx";
import { IconFileText, IconUserCheck } from "@tabler/icons-react";
import requireAuth from "@/guards/require-auth.js";

const Insights = () => {
  return (
    <>
      <DashboardTitle text="Insights"/>
      <div className="grid grid-cols-4 gap-8">
        <div className="p-8 rounded-2xl bg-gray-100 hover:bg-gray-200/70 cursor-pointer">
          <IconFileText size="36" className="text-orange-700"/>
          <h3 className="font-normal mt-4">Bank statement</h3>
          <p className="text-sm opacity-60 mt-1">Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
        <div className="p-8 rounded-2xl bg-gray-100 hover:bg-gray-200/70 cursor-pointer">
          <IconUserCheck size="36" className="text-blue-700"/>
          <h3 className="font-normal mt-4">Credibility</h3>
          <p className="text-sm opacity-60 mt-1">Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
      </div>
    </>
  );
};

Insights.Layout = DashboardLayout;

export default requireAuth(Insights);

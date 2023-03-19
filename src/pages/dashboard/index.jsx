import React from 'react';
import requireAuth from "@/guards/require-auth.js";
import DashboardLayout from "@/components/core/dashboard/shared/DashboardLayout.jsx";
import { useAuth } from "@/hooks/use-auth.js";
import DashboardTitle from "@/components/core/dashboard/shared/DashboardTitle.jsx";

const Overview = () => {
  const { user } = useAuth();

  return (
    <>
      <DashboardTitle text={ `Hi ${ user.first_name }` }></DashboardTitle>
    </>
  );
};

Overview.Layout = DashboardLayout;

export default requireAuth(Overview);

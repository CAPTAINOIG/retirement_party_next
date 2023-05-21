"use client"
import React from 'react';
import requireAuth from "@/guards/require-auth";

const DashboardLayout = ({ children }) => {
  return (
    <>{ children }</>
  );
};

export default requireAuth(DashboardLayout);

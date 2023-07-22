"use client"
import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      { children }
    </div>
  );
};

export default AuthLayout;

import React from 'react';
import { AuthProvider } from "@/hooks/use-auth";
import { ToastProvider } from "@/hooks/use-toast";
import QueryProvider from "@/components/QueryProvider";
import './global.scss';
import 'swiper/css/bundle';
import ResizeScreenHeight from "@/components/ResizeScreenHeight";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
    <head>
      <title>Statisense</title>
      <meta name="description" content="Statisense"/>
      <link rel="icon" href="./favicon.ico"/>
      <link href="https://api.fontshare.com/v2/css?f[]=plus-jakarta-sans@1,2&display=swap" rel="stylesheet"/>
    </head>
    <body>
    <QueryProvider>
      <AuthProvider>
        <ToastProvider>
          { children }
          <ResizeScreenHeight/>
        </ToastProvider>
      </AuthProvider>
    </QueryProvider>
    </body>
    </html>
  );
};

export default RootLayout;

import React, { useCallback } from 'react';
import { AuthProvider } from "@/hooks/use-auth";
import { ToastProvider } from "@/hooks/use-toast";
import QueryProvider from "@/components/QueryProvider";
import { useIsomorphicLayoutEffect } from "react-use";
import './global.scss';
import 'swiper/css/bundle';

const RootLayout = ({ children }) => {
  const handleResize = useCallback(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${ vh }px`);
  }, []);

  useIsomorphicLayoutEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <html lang="en">
    <head>
      <title>Statisense</title>
      <meta name="description" content="Statisense"/>
      <link rel="icon" href="./favicon.ico"/>
      <link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap" rel="stylesheet"/>
    </head>
    <body>
    <QueryProvider>
      <AuthProvider>
        <ToastProvider>
          { children }
        </ToastProvider>
      </AuthProvider>
    </QueryProvider>
    </body>
    </html>
  );
};

export default RootLayout;

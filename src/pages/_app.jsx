import React, { useCallback } from "react";
import Router from "next/router";
import { useIsomorphicLayoutEffect } from "react-use";
import NProgress from "nprogress";
import "../assets/styles/global.scss";
import '../assets/styles/nprogress.scss';
import 'swiper/css/bundle';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastProvider } from "@/hooks/use-toast.jsx";
import { AuthProvider } from "@/hooks/use-auth.js";

NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => NProgress.start());

Router.events.on("routeChangeComplete", () => NProgress.done());

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 2
    }
  }
});

function MyApp({ Component, pageProps }) {
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
    <>
      <QueryClientProvider client={ queryClient }>
        <AuthProvider>
          <ToastProvider>
            <title>Statisense</title>
            {
              Component.Layout ? (
                <Component.Layout>
                  <Component { ...pageProps } />
                </Component.Layout>
              ) : (
                <Component { ...pageProps } />
              )
            }
          </ToastProvider>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;

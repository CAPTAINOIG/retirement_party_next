import React from 'react';
import { AuthProvider } from '@/hooks/use-auth';
import 'tailwindcss/tailwind.css';
import '@/assets/styles/global.scss';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import '@/assets/styles/nprogress.scss';
import { useIsomorphicLayoutEffect } from 'react-use';
import QueryProvider from '@/components/QueryProvider';
import { ToastProvider } from '@/hooks/use-toast';
import Head from 'next/head';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());

Router.events.on('routeChangeComplete', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const handleResize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useIsomorphicLayoutEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <QueryProvider>
        <AuthProvider>
          <ToastProvider>
            {Component.Layout ? (
              <Component.Layout>
                <Component {...pageProps} />
              </Component.Layout>
            ) : (
              <Component {...pageProps} />
            )}
          </ToastProvider>
        </AuthProvider>
      </QueryProvider>
    </>
  );
}

export default MyApp;

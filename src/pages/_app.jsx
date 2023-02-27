import React, { useCallback } from "react";
import Router from "next/router";
import { useIsomorphicLayoutEffect } from "react-use";
import NProgress from "nprogress";
import "../assets/styles/global.scss";
import '../assets/styles/nprogress.scss';
import 'swiper/css/bundle';

NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => NProgress.start());

Router.events.on("routeChangeComplete", () => NProgress.done());

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
    <div>
      {
        Component.Layout ? (
          <Component.Layout>
            <Component { ...pageProps } />
          </Component.Layout>
        ) : (
          <Component { ...pageProps } />
        )
      }
    </div>
  );
}

export default MyApp;

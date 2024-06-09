/* eslint-disable react/display-name */
import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import Loader from '@/components/global/Loader.jsx';

// eslint-disable-next-line react/display-name
const requireAuth =
  (Component, props) =>
  ({ children }) => {
    const pathname = usePathname();
    const { authenticated, resolved, user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (resolved && !authenticated) {
        router.replace(`/login?from=${pathname}`);
      } else if (resolved && authenticated && user && !user.verification?.email) {
        router.push(`/verification?from=${pathname}`);
      }
    }, [resolved, authenticated, user, router, pathname]);

    if (resolved && authenticated && user?.verification?.email) return <Component {...props}>{children}</Component>;

    return (
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <Loader />
        <p className="mt-5">Loading..</p>
      </div>
    );
  };

export default requireAuth;

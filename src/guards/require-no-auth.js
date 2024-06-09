/* eslint-disable react/display-name */
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth.js';
import Loader from '../components/global/Loader.jsx';

// eslint-disable-next-line react/display-name
const requireNoAuth =
  (Component, props) =>
  ({ children }) => {
    const { authenticated, resolved, user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (resolved && authenticated && user) {
        if (user.verification?.email) router.replace(router.query?.from ?? '/dashboard');
        else router.push('/verification');
      }
    }, [resolved, authenticated, user, router]);

    if (resolved && !authenticated) {
      return <Component {...props}>{children}</Component>;
    }

    return (
      <div className="my-auto flex w-full flex-col items-center justify-center">
        <Loader />
        <p className="mt-5">Loading..</p>
      </div>
    );
  };

export default requireNoAuth;

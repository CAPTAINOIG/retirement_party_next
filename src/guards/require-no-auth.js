import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/use-auth.js";
import Loader from "../components/global/Loader.jsx";

// eslint-disable-next-line react/display-name
const requireNoAuth = (Component, props) => () => {
  const { authenticated, resolved, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (resolved && authenticated && user) {
      if (user.email_verified) router.replace(router.query?.from ?? '/dashboard');
      else router.push('/verification');
    }
  }, [resolved, authenticated, user, router]);

  if (resolved && !authenticated) {
    return (
      Component.Layout ? (
        <Component.Layout>
          <Component { ...props }/>
        </Component.Layout>
      ) : <Component/>
    );
  }
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Loader/>
    </div>
  )
};

export default requireNoAuth;

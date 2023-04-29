import React, { useEffect } from "react";
import { useAuth } from "@/hooks/use-auth.js";
import { useRouter } from "next/router";

// eslint-disable-next-line react/display-name
export const requireAuthUnverified = (Component, props) => () => {
  const router = useRouter();
  const { authenticated, resolved, user } = useAuth();

  useEffect(() => {
    if (resolved && !authenticated) router.replace(`/login`);
    if (resolved && authenticated && user && user.emailVerified) {
      router.replace(router.query?.from ?? '/dashboard');
    }
  }, [resolved, authenticated, user, router]);

  if (resolved && authenticated && !user.emailVerified) {
    return (
      Component.Layout ? (
        <Component.Layout>
          <Component { ...props }/>
        </Component.Layout>
      ) : <Component { ...props }/>
    );
  } else {
    return <></>
  }
};

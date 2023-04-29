import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/use-auth";
import Loader from "@/components/global/Loader.jsx";

// eslint-disable-next-line react/display-name
const requireAuth = (Component, props) => () => {
  const { authenticated, resolved, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (resolved && !authenticated) {
      router.replace(`/login?from=${ router.asPath }`);
    }
    if (resolved && authenticated && user && !user.emailVerified) {
      router.push(`/verification?from=${ router.asPath }`);
    }
  }, [resolved, authenticated, user, router]);

  if (resolved && authenticated && user?.emailVerified) return (
    Component.Layout ? (
      <Component.Layout>
        <Component { ...props }/>
      </Component.Layout>
    ) : <Component/>
  )
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Loader/>
    </div>
  )
};

export default requireAuth;

import React, { useEffect } from "react";
import { useAuth } from "@/hooks/use-auth.js";
import { useRouter, useSearchParams } from "next/navigation";

// eslint-disable-next-line react/display-name
export const requireAuthUnverified = (Component, props) => ({ children }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { authenticated, resolved, user } = useAuth();

  useEffect(() => {
    if (resolved && !authenticated) router.replace(`/login`);
    if (resolved && authenticated && user && user.emailVerified) {
      router.replace(searchParams.get('from') ?? '/dashboard');
    }
  }, [resolved, authenticated, user, router, searchParams]);

  if (resolved && authenticated && !user.emailVerified) {
    return (
      <Component { ...props }>
        { children }
      </Component>
    );
  } else {
    return <></>
  }
};

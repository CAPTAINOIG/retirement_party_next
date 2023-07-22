import React, { useEffect } from "react";
import { useAuth } from "@/hooks/use-auth.js";
import { useRouter, useSearchParams } from "next/navigation";
import Loader from "@/components/global/Loader";

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
  }

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <Loader/>
      <p className="mt-5">Loading..</p>
    </div>
  )
};

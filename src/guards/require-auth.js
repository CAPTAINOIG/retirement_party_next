import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import Loader from "@/components/global/Loader.jsx";

// eslint-disable-next-line react/display-name
const requireAuth = (Component, props) => ({ children }) => {
  const pathname = usePathname();
  const { authenticated, resolved, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (resolved && !authenticated) {
      router.replace(`/login?from=${ pathname }`);
    }
    else if (resolved && authenticated && user && !user.emailVerified) {
      router.push(`/verification?from=${ pathname }`);
    }
  }, [resolved, authenticated, user, router, pathname]);

  if (resolved && authenticated && user?.emailVerified) return (
    <Component { ...props }>
      { children }
    </Component>
  )

  return (
    <div className="h-full w-full flex justify-center items-center">
      <Loader/>
    </div>
  )
};

export default requireAuth;

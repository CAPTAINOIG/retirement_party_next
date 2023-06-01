import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import Loader from "@/components/global/Loader.jsx";
import { useGetUserBusiness } from "@/api/business";

// eslint-disable-next-line react/display-name
const requireAuthBusiness = (Component, props) => ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { authenticated, resolved, user } = useAuth();
  const { data: business, isLoading: isBusinessLoading } = useGetUserBusiness({ enabled: authenticated });

  useEffect(() => {
    if (resolved && !authenticated) {
      router.replace(`/login?from=${ pathname }`);
    }
    if (resolved && authenticated && user) {
      if (!user.emailVerified) router.replace(`/verification?from=${ pathname }`);
      else if (!isBusinessLoading && !business) router.replace(`/business`);
    }
  }, [resolved, authenticated, user, router, pathname, business, isBusinessLoading]);

  if (resolved && authenticated && user?.emailVerified && !!business) return (
    <Component { ...props }>
      { children }
    </Component>
  )

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Loader/>
    </div>
  )
};

export default requireAuthBusiness;

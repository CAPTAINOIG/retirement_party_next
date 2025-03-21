import { createContext, useContext, useEffect, useState } from 'react';
import { useGetProfile } from '@/api/auth.js';
import { useMount } from 'react-use';
import { getCrossSubdomainCookie, setCrossSubdomainCookie } from '@/lib/utils';

const ACCOUNT_URL = process.env.NEXT_PUBLIC_ACCOUNT_URL;

const authContext = createContext({
  user: null,
  updateUser: () => {},
  authenticate: () => {},
  reloadUser: () => {},
  resolved: false,
  authenticated: false,
  logout: () => {},
  error: null,
});

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

export function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [resolved, setResolved] = useState(false);
  const { refetch, data, error } = useGetProfile();

  useEffect(() => {
    if (!!data) {
      const { user } = data.data;
      authenticate({ user });
    }
  }, [data]);

  const authenticate = (data) => {
    setUser(data.user);
    setAuthenticated(true);
    setResolved(true);
    if (data.token) setCrossSubdomainCookie('token', data.token);
  };

  const logout = () => {
    sessionStorage.clear();
    window.location.href = `${ACCOUNT_URL}/logout?from=${location.origin}`;
  };

  const updateUser = (user) => {
    setUser((old) => ({ ...old, ...user }));
  };

  const reloadUser = async () => {
    await refetch();
  };

  useMount(() => {
    const token = getCrossSubdomainCookie('token');
    if (!token) return setResolved(true);
    if (!resolved && !authenticated) reloadUser();
  });

  return {
    user,
    updateUser,
    reloadUser,
    authenticate,
    resolved,
    authenticated,
    logout,
    error,
  };
}

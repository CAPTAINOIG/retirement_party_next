import { useQuery } from "@tanstack/react-query";
import http from "@/lib/http.js";

export const useGetProfile = ({ onSuccess, onError }) => {
  return useQuery(['profile'], () => {
    return http.get('/auth/profile');
  }, { onSuccess, onError, enabled: false, retry: false });
};

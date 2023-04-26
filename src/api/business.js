import { useMutation, useQuery } from "@tanstack/react-query";
import http from "@/lib/http.js";

export const useGetUserBusinesses = () => {
  return useQuery(['business'], async () => {
    const res = await http.get('/business');
    return res.data;
  });
};

export const useCreateBusinessMutation = () => {
  return useMutation((body) => {
    return http.post('/business', body);
  });
};

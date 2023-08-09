import { useMutation, useQuery } from "@tanstack/react-query";
import http from "@/lib/http";

export const useGetCustomReportSettings = (business) => {
  return useQuery(['custom-report', 'settings'], async () => {
    const res = await http.get(`/custom-report/${ business }/settings`);
    return res.data;
  }, { enabled: !!business, retry: false });
}

export const useCreateCustomReportSettings = (business) => {
  return useMutation((body = {}) => {
    return http.post(`/custom-report/${ business }/settings`, body);
  });
}

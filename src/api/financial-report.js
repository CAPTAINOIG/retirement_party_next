import { useMutation, useQuery } from "@tanstack/react-query";
import http from "@/lib/http";

export const useGetFinancialReportSettings = (business) => {
  return useQuery(['financial-report', 'settings'], async () => {
    const res = await http.get(`/financial-report/${ business }/settings`);
    return res.data;
  }, { enabled: !!business, retry: false });
};

export const useCreateFinancialReportSettings = (business) => {
  return useMutation((body = {}) => {
    return http.post(`/financial-report/${ business }/settings`, body);
  });
};

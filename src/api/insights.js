import { useQuery } from '@tanstack/react-query';
import http from '../lib/http.js';

export const useGetCategoriesQuery = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await http.get('/categories');
      return res.data;
    },
  });
};

export const useGetAssessment = (enabled = true) => {
  return useQuery({
    queryKey: ['assessment'],
    queryFn: async () => {
      const res = await http.get('/ambassadors/assessment/questions/random');
      return res.data;
    },
    enabled,
  });
};

export const useVerifyAmbassador = (hash, enabled = true) => {
  return useQuery({
    queryKey: ['ambassador-verify', hash],
    queryFn: async () => {
      const res = await http.get(`/ambassadors/${hash}/verify`);
      return res.data;
    },
    enabled: enabled && Boolean(hash),
    retry: 0,
  });
};

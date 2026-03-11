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

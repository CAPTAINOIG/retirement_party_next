import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import http from "../lib/http.js";

export const useGetInfographics = ({ category, search, enabled = true } = {}) => {
  return useQuery({
    queryKey: ['infographics', category, search],
    queryFn: async () => {
      const res = await http.get('/infographic', {
        params: { category, search }
      });
      return res.data;
    },
    enabled
  });
};

export const useGetCategoryInfographics = (category) => {
  return useInfiniteQuery({
    queryKey: ['infographics', 'category', category],
    queryFn: async ({ pageParam: page = 1 }) => {
      const res = await http.get('/infographic', {
        params: { category, page, limit: 20 }
      });
      return res.data;
    },
    enabled: !!category,
    getNextPageParam: (lastPage) => lastPage.next,
  });
};

export const useSearchInfographics = (search) => {
  return useInfiniteQuery({
    queryKey: ['infographics', 'search', search],
    queryFn: async ({ pageParam: page = 1 }) => {
      const res = await http.get('/infographic', {
        params: { search, page, limit: 20 }
      });
      return res.data;
    },
    enabled: !!search,
    getNextPageParam: (lastPage) => lastPage.next,
  });
};

export const useGetCategoriesQuery = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await http.get('/category');
      return res.data;
    }
  });
};

export const useAddViewMutation = () => {
  return useMutation({
    mutationFn: ({ id }) => {
      return http.patch(`/infographic/${ id }/view`);
    }
  });
};

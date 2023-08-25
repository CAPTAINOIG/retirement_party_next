import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import http from "../lib/http.js";

export const useGetTrendingInfographics = () => {
  return useQuery(['infographics', 'trending'], async () => {
    const res = await http.get('/infographic/trending');
    return res.data;
  });
};

export const useGetInfographics = ({ category, search, enabled = true } = {}) => {
  return useQuery(['infographics', category, search], async () => {
    const res = await http.get('/infographic', {
      params: { category, search }
    });
    return res.data;
  }, { enabled });
};

export const useGetCategoryInfographics = (category) => {
  return useInfiniteQuery(['infographics', 'category', category], async ({ pageParam: page = 1 }) => {
    const res = await http.get('/infographic', {
      params: { category, page, limit: 20 }
    });
    return res.data;
  }, {
    enabled: !!category,
    getNextPageParam: (lastPage) => lastPage.next,
  });
};

export const useSearchInfographics = (search) => {
  return useInfiniteQuery(['infographics', 'search', search], async ({ pageParam: page = 1 }) => {
    const res = await http.get('/infographic', {
      params: { search, page, limit: 20 }
    });
    return res.data;
  }, {
    enabled: !!search,
    getNextPageParam: (lastPage) => lastPage.next,
  });
};

export const useGetInfographicQuery = (slug) => {
  return useQuery(['infographics', slug], async () => {
    const res = await http.get(`/infographic/${ slug }`);
    return res.data;
  }, { enabled: !!slug });
};

export const useGetCategoriesQuery = () => {
  return useQuery(['categories'], async () => {
    const res = await http.get('/category');
    return res.data;
  });
};

export const useGetCategoryQuery = (slug) => {
  return useQuery(['categories', slug], async () => {
    const res = await http.get(`/category/${ slug }`);
    return res.data;
  }, { enabled: !!slug });
};

export const useAddViewMutation = () => {
  return useMutation(({ id }) => {
    return http.patch(`/infographic/${ id }/view`);
  });
};

import { useMutation, useQuery } from "@tanstack/react-query";
import http from "../lib/http.js";

export const useGetInfographicsQuery = ({ category, search, enabled = true } = {}) => {
  return useQuery(['infographics', category, search], async () => {
    const res = await http.get('/infographic', {
      params: { category, search }
    });
    return res.data
  }, { enabled });
};

export const useGetInfographicQuery = (slug) => {
  return useQuery(['infographics', slug], async () => {
    const res = await http.get(`/infographic/${ slug }`);
    return res.data
  }, { enabled: !!slug });
};

export const useGetCategoriesQuery = () => {
  return useQuery(['categories'], async () => {
    const res = await http.get('/category');
    return res.data
  });
};

export const useGetCategoryQuery = (slug) => {
  return useQuery(['categories', slug], async () => {
    const res = await http.get(`/category/${ slug }`);
    return res.data
  }, { enabled: !!slug });
};

export const useAddViewMutation = () => {
  return useMutation(({ id }) => {
    return http.patch(`/infographic/${ id }/view`)
  });
};

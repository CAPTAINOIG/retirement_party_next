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

export const useGetInfographicQuery = (id) => {
  return useQuery(['infographics', id], async () => {
    const res = await http.get(`/infographic/${ id }`);
    return res.data
  }, { enabled: !!id });
};

export const useGetCategoriesQuery = () => {
  return useQuery(['categories'], async () => {
    const res = await http.get('/category');
    return res.data
  });
};

export const useGetCategoryQuery = (id) => {
  return useQuery(['categories', id], async () => {
    const res = await http.get(`/category/${ id }`);
    return res.data
  }, { enabled: !!id });
};

export const useAddViewMutation = () => {
  return useMutation(({ id }) => {
    return http.patch(`/infographic/${ id }/view`)
  });
};

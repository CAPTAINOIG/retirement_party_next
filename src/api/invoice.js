import { useMutation, useQuery } from "@tanstack/react-query";
import http from "@/lib/http";

export const useGetInvoicesSettings = (business) => {
  return useQuery(['invoices', 'settings'], async () => {
    const res = await http.get(`/invoice/${ business }/settings`);
    return res.data;
  }, { enabled: !!business, retry: false });
}

export const useCreateInvoicesSettings = (business) => {
  return useMutation((body = {}) => {
    return http.post(`/invoice/${ business }/settings`, body);
  });
}

export const useCreateInvoice = (business) => {
  return useMutation((fd) => {
    return http.post(`/invoice/${ business }`, fd)
  });
};

export const useGetInvoices = (business) => {
  return useQuery(['invoices'], async () => {
    const res = await http.get(`/invoice/${ business }`)
    return res.data
  });
};

export const useGetInvoice = (business, id) => {
  return useQuery(['invoices', id], async () => {
    const res = await http.get(`/invoice/${ business }/${ id }`)
    return res.data
  }, { enabled: !!business && !!id });
};

export const useUpdateInvoice = (business, id) => {
  return useMutation((data) => {
    return http.patch(`/invoice/${ business }/${ id }`, data);
  });
};

export const useDeleteInvoice = (business, id) => {
  return useMutation(() => {
    return http.delete(`/invoice/${ business }/${ id }`);
  });
};

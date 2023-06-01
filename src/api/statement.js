import { useMutation, useQuery } from "@tanstack/react-query";
import http from "@/lib/http";
import axios from "axios";

export const useAnalyzeStatement = () => {
  return useMutation((fd) => {
    return http.post('https://lendnode.creditclan.com/bs/api/extraction/upload/single', fd)
  });
};

export const useCreateStatement = () => {
  return useMutation((body) => {
    return http.post('/statement', body)
  });
};

export const useGetStatements = (business) => {
  return useQuery(['statements'], async () => {
    const res = await http.get(`/statement/${ business }`);
    return res.data;
  }, { enabled: !!business });
};

export const useGetTransactionDetails = (id) => {
  return useQuery(['statement', id], async () => {
    const res = await axios.get(`https://view.bankstatement.ai/index.php/data_analysis/getdata/${ id }`)
    return res.data;
  }, { enabled: !!id });
};

export const useGetStatementOverview = (business) => {
  return useQuery(['statement', 'overview'], async () => {
    const res = await http.get(`/statement/${ business }/overview`);
    return res.data;
  }, { enabled: !!business });
};

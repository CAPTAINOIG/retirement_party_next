import axios from 'axios';
import { getCrossSubdomainCookie } from '@/lib/utils';
import { API_URL } from '@/lib/constants';

const http = axios.create({
  baseURL: API_URL,

});

http.interceptors.request.use((config) => {
  const { intercept = true } = config;
  if (!intercept) return config;
  const token = getCrossSubdomainCookie('token');
  if (token) config.headers.authorization = `Bearer ${token}`;
  return config;
});

export default http;

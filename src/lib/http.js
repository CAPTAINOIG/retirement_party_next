import axios from 'axios';
import { getCrossSubdomainCookie } from '@/lib/utils';
import { API_URL } from '@/lib/constants';

// Debug logging for API URL
if (typeof window !== 'undefined') {
  console.log('API_URL:', API_URL);
  console.log('NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL);
}

const http = axios.create({
  baseURL: API_URL,
});

http.interceptors.request.use((config) => {
  const { intercept = true } = config;
  if (!intercept) return config;
  const token = getCrossSubdomainCookie('token');
  if (token) config.headers.authorization = `Bearer ${token}`;
  
  // Debug logging for requests
  if (typeof window !== 'undefined') {
    console.log('Making request to:', config.baseURL + config.url);
  }
  
  return config;
});

export default http;

import axios from "axios";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL
});

http.interceptors.request.use((config) => {
  const { intercept = true } = config;
  if (!intercept) return config;
  const token = localStorage.getItem('token');
  if (token) config.headers.authorization = `Bearer ${ token }`;
  return config;
});

export default http;

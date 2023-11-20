import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getImageLink = (path) => {
  const bucket = process.env.NEXT_PUBLIC_S3_BUCKET_NAME;
  return `https://${bucket}.s3.amazonaws.com/${path}`;
};

export const cn = (...inputs) => twMerge(clsx(inputs));

export const setCrossSubdomainCookie = (name, value, days) => {
  const expires = days ? `; expires=${new Date(new Date().getTime() + days * 24 * 60 * 60 * 1000).toUTCString()}` : '';
  const secure = location.protocol === 'https:' ? '; Secure' : '';
  const sameSite = '; SameSite=None';
  const domain = window.location.hostname.includes('statisense.co') ? '; domain=statisense.co' : '';
  document.cookie = `${name}=${value}${expires}; path=/${secure}${sameSite}${domain}`;
};

export const getCrossSubdomainCookie = (name) => {
  const nameEQ = name + '=';
  const cookies = document.cookie.split(';').map((cookie) => cookie.trim());
  const foundCookie = cookies.find((cookie) => cookie.startsWith(nameEQ));
  return foundCookie ? foundCookie.substring(nameEQ.length, foundCookie.length) : null;
};

export const clearCookie = (name) => {
  const domain = window.location.hostname.includes('statisense.co') ? '; domain=statisense.co' : '';
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${domain}`;
};

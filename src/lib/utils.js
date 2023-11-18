import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getImageLink = (path) => {
  const bucket = process.env.NEXT_PUBLIC_S3_BUCKET_NAME;
  return `https://${bucket}.s3.amazonaws.com/${path}`;
};

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

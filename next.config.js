/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only enable static export for Netlify, not Vercel
  ...(process.env.NETLIFY && {
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
  }),
  // Reduce bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Image optimization for Vercel
  ...(!process.env.NETLIFY && {
    images: {
      formats: ['image/webp', 'image/avif'],
    },
  }),
  // Build settings
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;

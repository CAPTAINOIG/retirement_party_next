/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Netlify
  ...(process.env.NETLIFY && {
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
  }),
  // Image optimization for Vercel
  ...(!process.env.NETLIFY && {
    images: {
      formats: ['image/webp', 'image/avif'],
    },
  }),
  // Reduce bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Transpile packages that might cause issues
  transpilePackages: ['@heroui/react', '@heroui/theme'],
  // Build settings
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;

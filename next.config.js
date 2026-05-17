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
  // Webpack configuration to handle HeroUI dependencies
  webpack: (config, { isServer }) => {
    // Handle HeroUI theme dependency resolution issues
    config.resolve.alias = {
      ...config.resolve.alias,
      'tailwindcss/plugin.js': require.resolve('tailwindcss/plugin'),
      'tailwindcss/plugin': require.resolve('tailwindcss/plugin'),
    };
    
    // Fallback for missing modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };

    // Ignore HeroUI theme module resolution issues in production builds
    if (!isServer && process.env.NETLIFY) {
      config.externals = config.externals || [];
      config.externals.push({
        'tailwindcss/plugin.js': 'tailwindcss/plugin',
      });
    }

    return config;
  },
  // Build settings
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;

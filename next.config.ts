import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "/**",
      },
    ],
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  pwa: {
    dest: 'public',
    register: true, 
    skipWaiting: true, 
  },


  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },

};

export default nextConfig;

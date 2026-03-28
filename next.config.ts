import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        // Har qanday /nom -> https://nom.vercel.app ga yo'naltiriladi
        source: '/:slug((?!_next|api|assets|favicon.ico).*)',
        destination: 'https://:slug.vercel.app',
      },
      {
        // Ichki assetlar (rasm, js, css) uchun yo'naltirish
        source: '/:slug((?!_next|api|assets|favicon.ico).*)/:path*',
        destination: 'https://:slug.vercel.app/:path*',
      },
    ];
  },
};

export default nextConfig;

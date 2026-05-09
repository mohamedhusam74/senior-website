import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages
  output: 'export',

  // Enable React strict mode for production quality
  reactStrictMode: true,

  // Compress output
  compress: true,

  // Static export doesn't support next/image optimization, use unoptimized
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
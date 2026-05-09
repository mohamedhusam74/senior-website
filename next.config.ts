import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for production quality
  reactStrictMode: true,

  // Allow PDF and other static assets from /public
  async headers() {
    return [
      {
        source: "/:path*.pdf",
        headers: [
          { key: "Content-Type", value: "application/pdf" },
          { key: "Content-Disposition", value: "inline" },
        ],
      },
    ];
  },

  // Compress output
  compress: true,

  // Production image optimization
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

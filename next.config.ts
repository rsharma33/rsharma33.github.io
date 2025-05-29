import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // This is crucial for static export
  images: {
    unoptimized: true, // Disable default image optimization for static export
  },
  assetPrefix: isProd ? "/rsharma33.github.io/" : "",
  basePath: isProd ? "/rsharma33.github.io" : "",
};

export default nextConfig;

import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // This is crucial for static export
  images: {
    unoptimized: true, // Disable default image optimization for static export
  },
  assetPrefix: isProd ? "/raajeshsharma.github.io/" : "",
  basePath: isProd ? "/raajeshsharma.github.io" : "",
};

export default nextConfig;

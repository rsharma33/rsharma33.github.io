import type { NextConfig } from "next";

// `next build` always forces NODE_ENV=production, including for the Docker
// image, so basePath can't key off NODE_ENV — only the GitHub Pages export
// needs the repo-path prefix.
const isGhPagesExport = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // This is crucial for static export
  images: {
    unoptimized: true, // Disable default image optimization for static export
  },
  assetPrefix: isGhPagesExport ? "/raajeshsharma.github.io/" : "",
  basePath: isGhPagesExport ? "/raajeshsharma.github.io" : "",
};

export default nextConfig;

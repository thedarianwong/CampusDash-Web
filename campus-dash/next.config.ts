import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // For static site generation
  distDir: 'build',  // Specify build directory
  images: {
    unoptimized: true, // Required for static export
  },
  // Ensure trailing slashes are handled consistently
  trailingSlash: true,
};

module.exports = nextConfig

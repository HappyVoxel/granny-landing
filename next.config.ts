import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the landing is served by nginx in a container, the same
  // shape as the other HappyVoxel sites. No server runtime.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;

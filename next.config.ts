import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep Turbopack in Next 16
  turbopack: {},
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;

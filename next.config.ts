import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: false, // 🚫 disable Turbopack (CRITICAL for Termux)
  },

  devIndicators: false,

  webpack(config) {
    // reduce memory usage on Android
    config.cache = false;
    return config;
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mahakalivedichealingshelter.com",
      },
      {
        protocol: "https",
        hostname: "www.mahakalivedichealingshelter.com",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["api.aq-fes.com", "example.com", "localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.aq-fes.com",
        port: "",
        pathname: "/products-api/resources/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "**",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
  assetPrefix: "/BusinessApp",
  trailingSlash: true,
};

export default nextConfig;

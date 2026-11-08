import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // STATIC_EXPORT=1 exports the whole site to out/.
  // The default stays standalone because the Dockerfile copies .next/standalone.
  output: process.env.STATIC_EXPORT === "1" ? "export" : "standalone",
  reactStrictMode: true,
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    useTypeScriptCli: true,
  },
  cacheComponents: true,
  reactCompiler: true,
};

export default nextConfig;

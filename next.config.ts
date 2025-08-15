import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(gltf|glb|obj|mtl|fbx|dae)$/,
      type: 'asset/resource',
    });
    
    return config;
  },
};

export default nextConfig;

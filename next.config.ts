import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import type { NextConfig } from "next";

const withSvgr = (config: NextConfig): NextConfig => ({
  ...config,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
});

// Vanilla Extract 플러그인
const withVanillaExtract = (config: NextConfig): NextConfig =>
  createVanillaExtractPlugin()(config);

const plugins = [withSvgr, withVanillaExtract];

const baseConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.lettie.me",
        pathname: "**",
      },
    ],
  },
};

const finalConfig = plugins.reduce((acc, plugin) => plugin(acc), baseConfig);

export default finalConfig;

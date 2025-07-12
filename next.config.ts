import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import type { NextConfig } from "next";
import withSvgr from "next-plugin-svgr";

// Vanilla Extract 플러그인
const withVanillaExtract = (config: NextConfig): NextConfig =>
  createVanillaExtractPlugin()(config);

// Svgr 플러그인
const withCustomSvgr = (config: NextConfig): NextConfig =>
  withSvgr({
    ...config,
    svgrOptions: {
      dimensions: false,
      icon: true,
    },
  });

const plugins = [withVanillaExtract, withCustomSvgr];

const baseConfig: NextConfig = {
  reactStrictMode: true,
};

const finalConfig = plugins.reduce((acc, plugin) => plugin(acc), baseConfig);

export default finalConfig;

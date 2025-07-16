import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import type { NextConfig } from "next";

// Vanilla Extract 플러그인
const withVanillaExtract = (config: NextConfig): NextConfig =>
  createVanillaExtractPlugin()(config);

const plugins = [withVanillaExtract];

const baseConfig: NextConfig = {
  reactStrictMode: true,
};

const finalConfig = plugins.reduce((acc, plugin) => plugin(acc), baseConfig);

export default finalConfig;

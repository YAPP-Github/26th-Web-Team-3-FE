import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../shared/**/*.mdx",
    "../shared/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: ["@storybook/addon-onboarding", "@storybook/addon-docs"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    const { VanillaExtractPlugin } = await import(
      "@vanilla-extract/webpack-plugin"
    );

    config.plugins?.push(new VanillaExtractPlugin());

    return config;
  },
};
export default config;

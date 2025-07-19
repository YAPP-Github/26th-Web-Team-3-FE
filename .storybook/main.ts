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
  staticDirs: [
    "../public",
    {
      from: "../node_modules/pretendard/dist/web/static/woff2",
      to: "/fonts",
    },
  ],
  webpackFinal: async (config) => {
    const { VanillaExtractPlugin } = await import(
      "@vanilla-extract/webpack-plugin"
    );
    config.plugins?.push(new VanillaExtractPlugin());

    const rules = config.module?.rules || [];
    const fileLoaderRule = rules.find(
      (rule) =>
        rule &&
        typeof rule === "object" &&
        "test" in rule &&
        rule.test?.toString().includes("svg"),
    );

    if (fileLoaderRule && typeof fileLoaderRule === "object") {
      fileLoaderRule.exclude = /\.svg$/;
    }

    config.module?.rules?.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default config;

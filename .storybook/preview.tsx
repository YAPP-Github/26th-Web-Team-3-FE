import type { Preview } from "@storybook/nextjs";

// Global styles import
import "@/shared/styles/base/global.css";
import "@/shared/styles/base/reset.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

import type { Preview } from "@storybook/nextjs";
import { themeClass } from "../shared/styles/base/theme.css";

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
  decorators: [
    (Story) => (
      <div className={themeClass}>
        <Story />
      </div>
    ),
  ],
};

export default preview;

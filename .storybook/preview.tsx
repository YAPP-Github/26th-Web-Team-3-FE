import type { Preview } from "@storybook/nextjs";
import "../.storybook/fonts.css";
import { themeClass, themeVars } from "../shared/styles/base/theme.css";

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
      <div
        className={themeClass}
        style={{
          fontFamily: "Pretendard",
          backgroundColor: themeVars.color.black["90_bg"],
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;

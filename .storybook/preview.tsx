import type { Preview } from "@storybook/nextjs";
import { OverlayProvider } from "overlay-kit";
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
      <OverlayProvider>
        <div
          className={themeClass}
          style={{
            fontFamily: "Pretendard",
            backgroundColor: themeVars.color.black["90_bg"],
          }}
        >
          <Story />
        </div>
      </OverlayProvider>
    ),
  ],
};

export default preview;

import { themeVars } from "@/shared/styles/base/theme.css";
import type { Meta, StoryObj } from "@storybook/nextjs";
import HamburgerMenuButton from "./hamburger-menu-button";

const meta: Meta<typeof HamburgerMenuButton> = {
  title: "UI/HamburgerMenuButton",
  component: HamburgerMenuButton,
  tags: ["autodocs"],
  argTypes: {
    isMenuOpen: {
      control: "boolean",
      description: "메뉴가 열려있는지 여부",
    },
    onClick: { action: "clicked" },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: themeVars.color.black["90_bg"],
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof HamburgerMenuButton>;

export const Closed: Story = {
  args: {
    isMenuOpen: false,
  },
};

export const Open: Story = {
  args: {
    isMenuOpen: true,
  },
};

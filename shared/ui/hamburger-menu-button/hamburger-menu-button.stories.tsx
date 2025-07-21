import { themeVars } from "@/shared/styles/base/theme.css";
import type { Meta, StoryObj } from "@storybook/nextjs";
import HamburgerMenuButton from ".";

const meta: Meta<typeof HamburgerMenuButton> = {
  title: "UI/HamburgerMenuButton",
  component: HamburgerMenuButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "햄버거 메뉴 버튼이 클릭되면 세 개의 가로선이 X 아이콘으로 회전하는 애니메이션 효과를 보여줍니다.\n\n",
      },
    },
  },
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

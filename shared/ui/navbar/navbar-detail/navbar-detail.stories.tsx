import type { StoryObj } from "@storybook/nextjs";
import NavbarDetail from "./index";

const meta = {
  title: "UI/NavbarDetail",
  component: NavbarDetail,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

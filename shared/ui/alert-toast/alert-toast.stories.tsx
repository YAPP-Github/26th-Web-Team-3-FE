import type { Meta, StoryObj } from "@storybook/nextjs";
import AlertToast from "./index";

const meta: Meta<typeof AlertToast> = {
  title: "UI/AlertToast",
  component: AlertToast,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "AlertToast 컴포넌트입니다.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "800px", height: "200px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AlertToast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <AlertToast />
    </div>
  ),
};

export const Success: Meta<typeof AlertToast> = {
  render: () => (
    <div>
      <AlertToast />
    </div>
  ),
};

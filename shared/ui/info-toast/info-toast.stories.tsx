import type { Meta, StoryObj } from "@storybook/nextjs";
import InfoToast from "./index";

const meta: Meta<typeof InfoToast> = {
  title: "UI/InfoToast",
  component: InfoToast,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "타임캡슐 상세페이지 진입 시 타임캡슐 상태를 알려주는 InfoToast 컴포넌트입니다.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "800px",
          height: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof InfoToast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OpenedTimeCapsule: Story = {
  args: {
    status: "OPENED",
  },
  render: () => (
    <div>
      <InfoToast status="OPENED" />
    </div>
  ),
};

export const ClosedTimeCapsule: Story = {
  args: {
    status: "WAITING_OPEN",
  },
  render: () => (
    <div>
      <InfoToast status="WAITING_OPEN" />
    </div>
  ),
};

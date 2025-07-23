import type { Meta, StoryObj } from "@storybook/nextjs";
import InfoToast from "./index";

const meta: Meta<typeof InfoToast> = {
  title: "UI/StateInfoToast",
  component: InfoToast,
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
      <div
        style={{
          width: "800px",
          height: "200px",
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

export const TimeCapsule: Story = {
  render: () => (
    <div>
      <InfoToast status="success" infoText="타임캡슐에 편지가 담겼어요." />
    </div>
  ),
};

export const OpenedTimeCapsule: Story = {
  render: () => (
    <div>
      <InfoToast status="success" infoText="타임캡슐이 열렸어요!" />
    </div>
  ),
};

export const ClosedTimeCapsule: Story = {
  render: () => (
    <div>
      <InfoToast status="locked" infoText="편지 작성이 마감된 캡슐이에요!" />
    </div>
  ),
};

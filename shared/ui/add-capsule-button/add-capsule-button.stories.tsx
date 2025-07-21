import type { Meta, StoryObj } from "@storybook/nextjs";
import AddCapsuleButton from "./index";

const meta: Meta<typeof AddCapsuleButton> = {
  title: "UI/AddCapsuleButton",
  component: AddCapsuleButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "AddCapsuleButton 컴포넌트는 캡슐을 추가하는 버튼입니다.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "800px",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {};

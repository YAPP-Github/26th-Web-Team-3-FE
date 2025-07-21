import type { Meta, StoryObj } from "@storybook/nextjs";

import Popup from "@/shared/ui/popup";
import PopupWarningCapsule from "@/shared/ui/popup/popup-warning-capsule";
const meta: Meta<typeof Popup> = {
  title: "UI/Popup",
  component: Popup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "팝업 컴포넌트입니다. 제목, 내용, 액션 버튼을 포함할 수 있습니다.",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popup>
      <Popup.Title>정말 캡슐을 떠나시겠어요?</Popup.Title>
      <Popup.Content>
        나가면 다시 캡슐에 참여할 수 없으며, <br />
        담은 편지가 사라지지 않아요.
      </Popup.Content>
      <Popup.Actions>
        <button>돌아가기</button>
        <button>계속 쓰기</button>
      </Popup.Actions>
    </Popup>
  ),
};

export const WarningCapsule: Story = {
  render: () => <PopupWarningCapsule />,
};

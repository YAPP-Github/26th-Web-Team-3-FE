import { themeVars } from "@/shared/styles/base/theme.css";
import Popup from "@/shared/ui/popup";
import PopupCancelCreation from "@/shared/ui/popup/popup-cancel-creation";
import PopupConfirmLetter from "@/shared/ui/popup/popup-confirm-letter";
import PopupExitLettie from "@/shared/ui/popup/popup-exit-lettie";
import PopupIntro from "@/shared/ui/popup/popup-intro";
import PopupReport from "@/shared/ui/popup/popup-report";
import PopupWarningCapsule from "@/shared/ui/popup/popup-warning-capsule";
import PopupWarningLetter from "@/shared/ui/popup/popup-warning-letter";

import type { Meta, StoryObj } from "@storybook/nextjs";
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
        <p>나가면 다시 캡슐에 참여할 수 없으며,</p>
        <p>담은 편지가 사라지지 않아요.</p>
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

export const WarningLetter: Story = {
  render: () => <PopupWarningLetter />,
};

export const CancelCreation: Story = {
  render: () => <PopupCancelCreation />,
};

export const ExitLettie: Story = {
  render: () => <PopupExitLettie />,
};

export const ConfirmLetter: Story = {
  render: () => <PopupConfirmLetter openDate="2025. 06. 25" />,
};

export const Intro: Story = {
  render: () => <PopupIntro />,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: themeVars.color.black["90_bg"],
          width: "800px",
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

export const Report: Story = {
  render: () => <PopupReport />,
};

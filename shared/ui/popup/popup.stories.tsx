import { themeVars } from "@/shared/styles/base/theme.css";
import Popup from "@/shared/ui/popup";
import PopupCancelCreation from "@/shared/ui/popup/popup-cancel-creation";
import PopupConfirmLetter from "@/shared/ui/popup/popup-confirm-letter";
import PopupExitLettie from "@/shared/ui/popup/popup-exit-lettie";
import PopupIntro from "@/shared/ui/popup/popup-intro";
import PopupReport from "@/shared/ui/popup/popup-report";
import PopupWarningCapsule from "@/shared/ui/popup/popup-warning-capsule";
import PopupWarningLetter from "@/shared/ui/popup/popup-warning-letter";
import { overlay } from "overlay-kit";

import type { Meta, StoryObj } from "@storybook/nextjs";

const meta: Meta<typeof Popup> = {
  title: "UI/Popup",
  component: Popup,
  parameters: {
    layout: "centered",
    docs: {
      preview: false,
      description: {
        component: `
팝업(Popup) 컴포넌트입니다.

## 기본 사용법
- \`Popup\` 컴포넌트는 제목, 내용, 액션 버튼을 포함할 수 있습니다.
- \`overlay.open\` 함수를 사용해 팝업을 띄울 수 있습니다.
- \`isOpen\`과 \`close\` props를 활용해 팝업의 열림/닫힘을 제어합니다.

\`\`\`tsx
overlay.open(({ isOpen, close }) => (
  <Popup open={isOpen}>
    <Popup.Title>제목</Popup.Title>
    <Popup.Content>내용</Popup.Content>
    <Popup.Actions>
      <Popup.Button onClick={close}>닫기</Popup.Button>
      <Popup.Button onClick={close}>확인</Popup.Button>
    </Popup.Actions>
  </Popup>
));
\`\`\`

## 커스텀 팝업
- \`PopupWarningCapsule\`, \`PopupWarningLetter\` 등 다양한 상황에 맞는 팝업 컴포넌트를 제공합니다.
- 각 팝업은 \`isOpen\`, \`close\` props를 필수로 받습니다.
 `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "팝업의 열림 상태",
      defaultValue: false,
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "white",
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
    <button
      style={{
        padding: "10px 20px",
        borderRadius: "12px",
      }}
      onClick={() => {
        overlay.open(({ isOpen, close }) => (
          <Popup open={isOpen}>
            <Popup.Title>Title</Popup.Title>
            <Popup.Content>description</Popup.Content>
            <Popup.Actions>
              <button
                onClick={close}
                style={{
                  width: "100%",
                  color: themeVars.color.white[40],
                }}
              >
                Back
              </button>
              <button
                style={{
                  width: "100%",
                  color: themeVars.color.purple[10],
                }}
                onClick={close}
              >
                Continue
              </button>
            </Popup.Actions>
          </Popup>
        ));
      }}
    >
      Open Popup
    </button>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "기본 팝업 예시입니다. 제목, 내용, 액션 버튼이 포함된 기본 형태의 팝업을 보여줍니다.",
      },
    },
  },
};

export const WarningCapsule: Story = {
  render: () => (
    <button
      style={{
        padding: "10px 20px",
        borderRadius: "12px",
      }}
      onClick={() => {
        overlay.open(({ isOpen, close }) => (
          <PopupWarningCapsule isOpen={isOpen} close={close} />
        ));
      }}
    >
      Open Popup
    </button>
  ),
  parameters: {
    docs: {
      description: {
        story: "캡슐 관련 경고를 표시하는 팝업입니다.",
      },
    },
  },
};

export const WarningLetter: Story = {
  render: () => (
    <button
      style={{
        padding: "10px 20px",
        borderRadius: "12px",
      }}
      onClick={() => {
        overlay.open(({ isOpen, close }) => (
          <PopupWarningLetter isOpen={isOpen} close={close} />
        ));
      }}
    >
      Open Popup
    </button>
  ),
  parameters: {
    docs: {
      description: {
        story: "편지 관련 경고를 표시하는 팝업입니다.",
      },
    },
  },
};

export const CancelCreation: Story = {
  render: () => (
    <button
      style={{
        padding: "10px 20px",
        borderRadius: "12px",
      }}
      onClick={() => {
        overlay.open(({ isOpen, close }) => (
          <PopupCancelCreation isOpen={isOpen} close={close} />
        ));
      }}
    >
      Open Popup
    </button>
  ),
  parameters: {
    docs: {
      description: {
        story: "만들기를 중단하는 팝업입니다.",
      },
    },
  },
};

export const ExitLettie: Story = {
  render: () => (
    <button
      style={{
        padding: "10px 20px",
        borderRadius: "12px",
      }}
      onClick={() => {
        overlay.open(({ isOpen, close }) => (
          <PopupExitLettie isOpen={isOpen} close={close} />
        ));
      }}
    >
      Open Popup
    </button>
  ),
  parameters: {
    docs: {
      description: {
        story: "레티를 떠나는 팝업입니다.",
      },
    },
  },
};

export const ConfirmLetter: Story = {
  render: () => (
    <button
      style={{
        padding: "10px 20px",
        borderRadius: "12px",
      }}
      onClick={() => {
        overlay.open(({ isOpen, close }) => (
          <PopupConfirmLetter
            openDate="2025. 06. 25"
            isOpen={isOpen}
            close={close}
          />
        ));
      }}
    >
      Open Popup
    </button>
  ),
  parameters: {
    docs: {
      description: {
        story: "편지 관련 경고를 표시하는 팝업입니다.",
      },
    },
  },
};
export const Intro: Story = {
  render: () => (
    <button
      style={{
        padding: "10px 20px",
        borderRadius: "12px",
      }}
      onClick={() => {
        overlay.open(({ isOpen, close }) => (
          <PopupIntro isOpen={isOpen} close={close} />
        ));
      }}
    >
      Open Popup
    </button>
  ),
  parameters: {
    docs: {
      description: {
        story: "인트로 화면에서 뜨는 팝업입니다.",
      },
    },
  },
};

export const Report: Story = {
  render: () => (
    <button
      style={{
        padding: "10px 20px",
        borderRadius: "12px",
      }}
      onClick={() => {
        overlay.open(({ isOpen, close }) => (
          <PopupReport isOpen={isOpen} close={close} />
        ));
      }}
    >
      Open Popup
    </button>
  ),
  parameters: {
    docs: {
      description: {
        story: "불편 사항을 리포트하는 팝업입니다.",
      },
    },
  },
};

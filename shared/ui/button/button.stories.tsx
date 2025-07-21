import Check from "@/shared/assets/icon/check.svg";
import Share from "@/shared/assets/icon/share.svg";
import { themeVars } from "@/shared/styles/base/theme.css";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";

import Button from "./index";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Button 컴포넌트입니다. 넓이는 100% 고정이며, 사용처에서 padding으로 크기를 조절해주세요.

### Variants
- **primary**: 기본적인 프라이머리 버튼
- **secondary**: 공유하기 버튼
        `,
      },
    },
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      defaultValue: "primary",
      description: "버튼의 시각적 스타일을 결정합니다.",
    },
    text: {
      description: "버튼 내부에 표시될 텍스트나 요소입니다.",
    },
    icon: {
      description: "버튼 내부에 표시될 아이콘입니다.",
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{ width: "800px", display: "flex", justifyContent: "center" }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => (
    <div
      style={{
        width: "320px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: themeVars.color.black["90_bg"],
        height: "10rem",
      }}
    >
      <Button variant="primary" text="Button" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "주요 액션에 사용되는 기본 버튼입니다. ",
      },
    },
  },
};

export const Secondary: Story = {
  render: () => (
    <div
      style={{
        width: "320px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: themeVars.color.black["90_bg"],
        height: "10rem",
        gap: "1rem",
      }}
    >
      <Button
        variant="secondary"
        text="공유하기"
        icon={<Share width={24} height={24} fill={themeVars.color.white[70]} />}
      />
      <Button
        variant="secondary"
        text="링크 복사됨"
        icon={<Check width={24} height={24} fill={themeVars.color.white[70]} />}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Secondary 버튼입니다. 현재 공유하기 버튼에 사용되는 UI이며, 아이콘과 텍스트를 사용합니다.",
      },
    },
  },
};

export const Disabled: Story = {
  render: () => (
    <div
      style={{
        width: "320px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: themeVars.color.black["90_bg"],
        height: "10rem",
      }}
    >
      <Button variant="primary" text="Button" disabled />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "primary 버튼의 disabled 상태입니다. 클릭이 불가능하며 시각적으로도 비활성화된 상태를 나타냅니다.",
      },
    },
  },
};

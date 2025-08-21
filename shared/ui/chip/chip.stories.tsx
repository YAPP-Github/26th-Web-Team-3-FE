import { colorTheme } from "@/shared/styles/tokens/color";
import type { Meta, StoryObj } from "@storybook/nextjs";

import Chip from "./index";

const meta: Meta<typeof Chip> = {
  title: "UI/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "텍스트나 태그를 표시하는데 사용되는 작은 UI 요소입니다. Purple과 Gray 두 가지 variant와 Small, Default 두 가지 size를 지원합니다.\n\n",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "칩 내부에 표시될 텍스트",
    },
    variant: {
      control: "radio",
      options: ["purple", "gray"],
      description: "칩의 색상 스타일",
      table: {
        type: { summary: '"purple" | "gray"' },
        defaultValue: { summary: "purple" },
      },
    },
    className: {
      control: "text",
      description: "추가 CSS 클래스",
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: colorTheme.black["90_bg"],
          padding: "40px",
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
  args: {
    children: "Default Chip",
    variant: "purple",
  },
};

export const Purple: Story = {
  args: {
    children: "Purple Chip",
    variant: "purple",
  },
};

export const Gray: Story = {
  args: {
    children: "Gray Chip",
    variant: "gray",
  },
};

export const Small: Story = {
  args: {
    children: "Small Chip",
    variant: "purple",
  },
};

export const SmallGray: Story = {
  args: {
    children: "Small Gray",
    variant: "gray",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Chip variant="purple">
        Small Purple
      </Chip>
      <Chip variant="purple">
        Default Purple
      </Chip>
      <Chip variant="gray">
        Small Gray
      </Chip>
      <Chip variant="gray">
        Default Gray
      </Chip>
    </div>
  ),
};

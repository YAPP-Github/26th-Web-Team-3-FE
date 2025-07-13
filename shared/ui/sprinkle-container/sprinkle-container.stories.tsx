import { colorTheme } from "@/shared/styles/tokens/color.css";
import type { Meta, StoryObj } from "@storybook/nextjs";

import SprinkleContainer from "./index";

const meta: Meta<typeof SprinkleContainer> = {
  title: "Common/SprinkleContainer",
  component: SprinkleContainer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "페이지 전역에 랜덤한 위치에서 페이드 인/아웃되는 여러 개의 점으로 구성된 애니메이션 스프링클 효과를 생성합니다.\n\n",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: colorTheme.background.normal,
          width: "100vw",
          height: "100vh",
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
  args: {},
};

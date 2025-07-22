import { ViewType } from "@/shared/types/types";
import type { Meta, StoryObj } from "@storybook/nextjs";
import ViewTypeTabs from "./index";

const meta: Meta<typeof ViewTypeTabs> = {
  component: ViewTypeTabs,
  title: "UI/Letter/ViewTypeTabs",
  tags: ["autodocs"],
  args: {},
  argTypes: {},
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "ViewTypeTabs 컴포넌트는 편지 상세 보기 화면에서 레이어 뷰와 그리드 뷰를 전환하는 버튼을 제공합니다.",
      },
    },
  },

  decorators: [
    (Story) => (
      <div
        style={{
          width: "800px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "20rem",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Grid: Story = {
  args: {
    viewType: ViewType.GRID,
    handleClick: () => {},
  },
};

export const Layers: Story = {
  args: {
    viewType: ViewType.LAYERS,
    handleClick: () => {},
  },
};

import type { Meta, StoryObj } from "@storybook/nextjs";
import AddCapsuleButton from "./index";

const meta: Meta<typeof AddCapsuleButton> = {
  title: "UI/AddCapsuleButton",
  component: AddCapsuleButton,
  parameters: {
    layout: "centered",
    docs: {
      disable: true,
      description: {
        component: `
AddCapsuleButton 컴포넌트는 캡슐을 추가하는 버튼입니다.
- IntersectionObserver API를 사용하여 스크롤을 내리면 버튼이 축소되도록 구현하였습니다.

Default 탭을 클릭하여 UI를 확인해주세요.
`,
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          width: "800px",
          height: "2500px",
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

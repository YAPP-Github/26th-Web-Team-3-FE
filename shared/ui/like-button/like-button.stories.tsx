import type { Meta, StoryObj } from "@storybook/nextjs";
import LikeButton from "./index";

const meta = {
  component: LikeButton,
  title: "UI/LikeButton",
  tags: ["autodocs"],
  args: {},
  argTypes: {},
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
좋아요 버튼 컴포넌트입니다.
        `,
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
          height: "8rem",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LikeButton>;

type Story = StoryObj<typeof LikeButton>;

export const Liked: Story = {
  args: {
    isFavorited: true,
  },
};

export const UnLiked: Story = {
  args: {
    isFavorited: false,
  },
};
export default meta;

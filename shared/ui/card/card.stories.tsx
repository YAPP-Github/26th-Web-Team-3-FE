import type { Meta, StoryObj } from "@storybook/nextjs";
import Card from "./index";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "타임캡슐 정보를 표시하는 카드 컴포넌트입니다. gradient variant에 따라 자동으로 다른 아이콘이 표시됩니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "gradient1",
        "gradient2",
        "gradient3",
        "gradient4",
        "gradient5",
        "gradient6",
      ],
      description: "카드의 그라디언트 배경과 아이콘을 결정합니다.",
    },
    dDay: {
      control: { type: "number" },
      description: "D-Day",
    },
    title: {
      control: { type: "text" },
      description: "카드의 제목",
    },
    peopleCount: {
      control: { type: "number", min: 1, max: 100 },
      description: "참여자 수",
    },
    count: {
      control: { type: "number", min: 1, max: 999 },
      description: "개수 (통)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    variant: "gradient1",
    dDay: 5,
    title: "2026년은 언제쯤 찾아올까요",
    peopleCount: 8,
    count: 31,
  },
};

// 모든 gradient variant 보기
export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1rem",
        maxWidth: "90rem",
        padding: "1rem",
      }}
    >
      <Card
        variant="gradient1"
        dDay={5}
        title="첫 번째 프로젝트"
        peopleCount={8}
        count={31}
      />
      <Card
        variant="gradient2"
        dDay={12}
        title="두 번째 프로젝트"
        peopleCount={15}
        count={42}
      />
      <Card
        variant="gradient3"
        dDay={3}
        title="세 번째 프로젝트"
        peopleCount={22}
        count={67}
      />
      <Card
        variant="gradient4"
        dDay={7}
        title="네 번째 프로젝트"
        peopleCount={18}
        count={55}
      />
      <Card
        variant="gradient5"
        dDay={1}
        title="다섯 번째 프로젝트"
        peopleCount={12}
        count={33}
      />
      <Card
        variant="gradient6"
        dDay={10}
        title="여섯 번째 프로젝트"
        peopleCount={9}
        count={24}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "모든 gradient variant와 각각에 매핑된 썸네일 아이콘을 보여줍니다.",
      },
    },
  },
};

import TabButton from "./index";

export default {
  title: "UI/TabButton",
  component: TabButton,
  argTypes: {
    selected: {
      control: "boolean",
    },
  },
  docs: {
    description: {
      component: "TabButton",
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "main의 탐색, 내캡슐 페이지에서 쓰이는 탭 버튼 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
};

export const Default = () => {
  return <TabButton text="tab" />;
};

export const Selected = () => {
  return <TabButton text="selected tab" selected />;
};

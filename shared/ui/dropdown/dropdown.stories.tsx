import type { Meta, StoryObj } from "@storybook/nextjs";
import Dropdown from "./index";

const meta = {
  title: "UI/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
드롭다운 컴포넌트입니다.

- \`Dropdown.Trigger\` : 드롭다운을 여는 트리거(버튼 등)를 감쌉니다.
- \`Dropdown.Content\` : 드롭다운의 내용을 감쌉니다.
- \`Dropdown.Item\` : 드롭다운 내의 각 아이템을 나타냅니다. label 속성을 통해 표시됩니다.
        `,
      },
      source: {
        code: `
<Dropdown>
  <Dropdown.Trigger>
    <MenuIcon />
  </Dropdown.Trigger>
  <Dropdown.Content>
    <Dropdown.Item label="Dropdown Item" />
    <Dropdown.Item label="Dropdown Item" />
    <Dropdown.Item label="Dropdown Item" />
  </Dropdown.Content>
</Dropdown>
        `.trim(),
        language: "tsx",
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          width: "800px",
          height: "300px",
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div>Dropdown</div>,
  },
  render: (args) => {
    return (
      <Dropdown {...args}>
        <div style={{ marginTop: "5rem" }}>
          <Dropdown.Trigger>TriggerButton</Dropdown.Trigger>
          <Dropdown.Content>
            <Dropdown.Item label="Dropdown Item" />
            <Dropdown.Item label="Dropdown Item" />
            <Dropdown.Item label="Dropdown Item" />
          </Dropdown.Content>
        </div>
      </Dropdown>
    );
  },
};

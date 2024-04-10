import type { Meta, StoryObj } from "storybook-solidjs";

import { InputField } from "./InputField";

const meta = {
  title: "Example/InputField",
  component: InputField,
  argTypes: {
    disabled: {
      options: ["false", "true"],
      control: { type: "radio" },
      defaultValue: "false",
      description: "disables Input",
    },
    hasError: {
      options: ["false", "true"],
      control: { type: "radio" },
      defaultValue: "false",
      description: "disables Input",
    },
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleInputField: Story = {
  render: ({ labelText, disabled, hasError, supportMessage }: any) => (
    <InputField
      labelText={labelText}
      supportMessage={supportMessage}
      disabled={disabled === "true"}
      hasError={hasError === "true"}
    />
  ),
  args: {
    labelText: "an input",
    supportMessage: "",
    disabled: {
      options: ["false", "true"],
      control: { type: "radio" },
      defaultValue: "false",
      description: "disables Input",
    },
    hasError: {
      options: ["false", "true"],
      control: { type: "radio" },
      defaultValue: "false",
      description: "error state",
    },
  },
};

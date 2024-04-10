import type { Meta, StoryObj } from "storybook-solidjs";

import { SelectField } from "./SelectField";

const meta = {
  title: "Example/SelectField",
  component: SelectField,
  argTypes: {
    disabled: {
      options: ["false", "true"],
      control: { type: "radio" },
      defaultValue: "false",
      description: "disables Select",
    },
    hasError: {
      options: ["false", "true"],
      control: { type: "radio" },
      defaultValue: "false",
      description: "error state",
    },
  },
} satisfies Meta<typeof SelectField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleSelectField = {
  render: ({ placeholder, disabled, hasError }: any) => (
    <SelectField
      placeholder={placeholder}
      disabled={disabled === "true"}
      hasError={hasError === "true"}
    />
  ),
  args: {
    placeholder: "some placeholder",
    disabled: {
      options: ["false", "true"],
      control: { type: "radio" },
      defaultValue: "false",
      description: "disables Select",
    },
    hasError: {
      options: ["false", "true"],
      control: { type: "radio" },
      defaultValue: "false",
      description: "error state",
    },
  },
};

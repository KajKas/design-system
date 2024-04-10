import type { Meta, StoryObj } from "storybook-solidjs";

import { Button } from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "link"],
      control: { variant: "radio" },
      defauldeftValue: "primary",
      description: "button variant",
    },
    size: {
      options: ["sm", "md"],
      control: { variant: "radio" },
      defaultValue: "md",
      description: "button size",
    },
    disabled: {
      options: ["false", "true"],
      control: { variant: "radio" },
      defaultValue: "false",
      description: "disables button",
    },
    iconLeft: {
      options: ["delete", "download"],
      control: { variant: "radio" },
      defaultValue: "delete",
      description: "button left icon",
    },
    iconRight: {
      options: ["delete", "download"],
      control: { variant: "radio" },
      defaultValue: "delete",
      description: "button right icon",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleButton = {
  render: ({ variant, label, size, disabled, iconLeft, iconRight }: any) => (
    <Button
      label={label}
      size={size}
      variant={variant}  
      disabled={disabled === "true"}
      iconLeft={iconLeft}
      iconRight={iconRight}
    />
  ),
  args: {
    variant: {
      options: ["primary", "secondary", "link"],
      control: { variant: "radio" },
      defaultValue: "primary",
      description: "button variant",
    },
    label: "a button",
    size: {
      options: ["sm", "md"],
      control: { variant: "radio" },
      defaultValue: "md",
      description: "button size",
    },
    disabled: {
      options: ["false", "true"],
      control: { variant: "radio" },
      defaultValue: "false",
      description: "disables button",
    },
    iconLeft: {
      options: ["delete", "download"],
      control: { variant: "radio" },
      defaultValue: "delete",
      description: "button left icon",
    },
    iconRight: {
      options: ["delete", "download"],
      control: { variant: "radio" },
      defaultValue: "delete",
      description: "button right icon",
    },
  },
};

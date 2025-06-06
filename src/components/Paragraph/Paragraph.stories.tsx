import type { Meta, StoryObj } from "@storybook/react";
import { Paragraph } from "./Paragraph";

const meta: Meta<typeof Paragraph> = {
  title: "Typography/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A Paragraph component built on top of Text that supports different sizes and normal weight body text.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  args: {
    children: "This is a paragraph with base size.",
    size: "base",
    className: "text-gray-800",
  },
};

export const Small: Story = {
  args: {
    children: "This is a small paragraph.",
    size: "sm",
    className: "text-gray-700",
  },
};

export const ExtraSmall: Story = {
  args: {
    children: "This is an extra small paragraph.",
    size: "xs",
    className: "text-gray-600",
  },
};

export const Large: Story = {
  args: {
    children: "This is a large paragraph.",
    size: "lg",
    className: "text-gray-900",
  },
};

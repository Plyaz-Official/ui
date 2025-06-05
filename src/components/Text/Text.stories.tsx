import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Typography/Text",
  component: Text,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A versatile Text component that supports different semantic elements, sizes, weights, and variants using Tailwind CSS.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "This is a paragraph",
    element: "p",
    size: "base",
    variant: "body",
    weight : "normal",
  },
};
export const Heading: Story = {
  args: {
    children: "This is a heading",
    element: "h1",
    size: "2xl",
    variant: "heading",
    weight: "bold",
  },
};
export const Caption: Story = {
  args: {
    children: "This is a caption",
    element: "p",
    size: "sm",
    variant: "caption",
    weight: "normal",
  },
};

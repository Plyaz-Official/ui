import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";
import { expect, fn, userEvent } from "@storybook/test";

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
    weight: "normal",
    className: "bg-white dark:bg-black dark:text-white",
  },
};
export const Heading: Story = {
  args: {
    children: "This is a heading",
    element: "h1",
    size: "2xl",
    variant: "heading",
    weight: "bold",
    className: "bg-white dark:bg-black dark:text-white",
  },
};
export const Caption: Story = {
  args: {
    children: "This is a caption",
    element: "p",
    size: "sm",
    variant: "caption",
    weight: "normal",
    className: "bg-white dark:bg-black dark:text-white",
  },
};

export const UserInteraction: Story = {
  args: {
    children: "This is a caption",
    element: "p",
    size: "sm",
    variant: "caption",
    weight: "normal",
    onClick: fn(),
  },
  play: async ({ args, canvas }) => {
    const container = canvas.getByTestId("text");
    await userEvent.click(container);
    await expect(args.onClick).toBeCalled();
  },
};

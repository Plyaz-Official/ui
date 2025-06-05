import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
  title: "Typography/Link",
  component: Link,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A simple Link component that renders an anchor tag with Tailwind CSS classes for styling.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: "This is a link",
    href: "#",
  },
}
export const CustomClass: Story = {
  args: {
    children: "This is a link link",
    className: "text-red-600 hover:text-red-800",
    href: "#",
  },
};

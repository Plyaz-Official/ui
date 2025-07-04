import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent } from "@storybook/test";

import { ExternalLink } from "@/components";

const meta: Meta<typeof ExternalLink> = {
  title: "Typography/ExternalLink",
  component: ExternalLink,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A simple Link component that renders an anchor tag with Tailwind CSS classes for styling.",
      },
    },
  },
  argTypes: {
    href: {
      control: { type: "text" },
      description:
        "The URL or path the component should navigate to when clicked.",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes to apply to the External Link.",
    },
    children: {
      control: { type: "text" },
      description: "Content to be rendered inside the External Link.",
    },
  },
};
export default meta;

type Story = StoryObj<typeof ExternalLink>;

export const Default: Story = {
  args: {
    children: "This is a link",
    href: "#",
  },
};
export const CustomClass: Story = {
  args: {
    children: "This is a link ",
    className: "text-red-600 hover:text-red-800",
    href: "#",
  },
};

export const UserInteraction: Story = {
  args: {
    children: "This is a link ",
    className: "text-red-600 hover:text-red-800",
    href: "#",
    onClick: fn(),
  },
  play: async ({ args, canvas }) => {
    const container = canvas.getByTestId("link");
    // Interaction performance test
    const start = performance.now();
    await userEvent.click(container);
    const end = performance.now();
    const duration = end - start;
    const durationTime = 200;
    await expect(duration).toBeLessThan(durationTime);
    await expect(args.onClick).toBeCalled();
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";
import { Box } from "@/components/Box/Box";

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A Container component that provides a responsive fixed width layout.",
      },
    },
  },
  
};
export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: <Box>Container</Box>,
    className: "bg-gray-100 p-6 rounded",
    element: "div",
  },
};

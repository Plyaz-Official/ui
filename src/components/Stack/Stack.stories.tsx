import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Stack";
import { Box } from "@/components/Box/Box";
import { expect, fn, userEvent } from "@storybook/test";

const meta: Meta<typeof Stack> = {
  title: "Layout/Stack",
  component: Stack,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A Stack component that arranges its children in a horizontal or vertical layout with customizable spacing.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  args: {
    direction: "horizontal",
    spacing: "space-x-2",
    className: "bg-gray-100 p-4 rounded dark:bg-black dark:text-white",
    children: (
      <>
        <Box className="bg-red-400 p-4 rounded text-white">Item 1</Box>
        <Box className="bg-blue-400 p-4 rounded text-white">Item 2</Box>
        <Box className="bg-green-400 p-4 rounded text-white">Item 3</Box>
      </>
    ),
  },
};

export const Vertical: Story = {
  args: {
    direction: "vertical",
    spacing: "space-y-4",
    className: "bg-gray-200 p-4 rounded dark:bg-black dark:text-white",
    children: (
      <>
        <Box className="bg-purple-500 p-3 text-white rounded">Item A</Box>
        <Box className="bg-purple-600 p-3 text-white rounded">Item B</Box>
        <Box className="bg-purple-700 p-3 text-white rounded">Item C</Box>
      </>
    ),
  },
};

export const UserInteraction: Story = {
  args: {
    direction: "vertical",
    spacing: "space-y-4",
    className: "bg-gray-200 p-4 rounded",
    onClick: fn(),
    children: (
      <>
        <Box className="bg-purple-500 p-3 text-white rounded">Item A</Box>
        <Box className="bg-purple-600 p-3 text-white rounded">Item B</Box>
        <Box className="bg-purple-700 p-3 text-white rounded">Item C</Box>
      </>
    ),
  },
  play: async ({ args, canvas }) => {
    const container = canvas.getAllByTestId("box")[0];
    await userEvent.click(container);
    await expect(args.onClick).toBeCalled();
  },
};

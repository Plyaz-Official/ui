import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "./Flex";
import { Box } from "@/components/Box/Box";
import { expect, fn, userEvent } from "@storybook/test";

const meta: Meta<typeof Flex> = {
  title: "Layout/Flex",
  component: Flex,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A Flex component that provides a flexible box layout system. It allows you to easily align and distribute space among items in a Box.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  args: {
    direction: "row",
    justify: "start",
    align: "start",
    wrap: "wrap",
    gap: "gap-2",
    className: "bg-gray-100 p-4 rounded dark:bg-black dark:text-white",
    children: (
      <>
        {Array.from({ length: 6 }, (_, i) => (
          <Box key={i} className={`bg-blue-400 p-3 text-white rounded`}>
            Item {i + 1}
          </Box>
        ))}
      </>
    ),
  },
};
export const ColumnCentered: Story = {
  args: {
    direction: "row",
    justify: "center",
    align: "center",
    gap: "gap-4",
    className: "bg-gray-200 p-4 rounded dark:bg-black dark:text-white",
    element: "div",
    children: (
      <>
        {Array.from({ length: 3 }, (_, i) => (
          <Box key={i} className={`bg-green-400 p-3 text-white rounded`}>
            Item {i + 1}
          </Box>
        ))}
      </>
    ),
  },
};

export const UserInteraction: Story = {
  args: {
    direction: "row",
    justify: "center",
    align: "center",
    gap: "gap-4",
    className: "bg-gray-200 p-4 rounded",
    element: "div",
    onClick: fn(),
    children: (
      <>
        {Array.from({ length: 3 }, (_, i) => (
          <Box key={i} className={`bg-green-400 p-3 text-white rounded`}>
            Item {i + 1}
          </Box>
        ))}
      </>
    ),
  },
  play: async ({ args, canvas }) => {
    const container = canvas.getAllByTestId("box")[0];
    await userEvent.click(container);
    expect(args.onClick).toBeCalled();
  },
};

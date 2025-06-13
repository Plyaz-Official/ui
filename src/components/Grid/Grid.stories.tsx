import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "./Grid";
import { Box } from "@/components/Box/Box";
import { expect, fn, userEvent } from "@storybook/test";

const meta: Meta<typeof Grid> = {
  title: "Layout/Grid",
  component: Grid,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A Grid component that allows for flexible layout using CSS Grid. It supports responsive columns, rows, and gaps.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  args: {
    children: (
      <>
        {Array.from({ length: 3 }, (_, i) => (
          <Box key={i} className={`bg-green-400 p-3 text-white rounded`}>
            Item {i + 1}
          </Box>
        ))}
      </>
    ),
    cols: "grid-cols-2",
    rows: "grid-rows-2",
    gap: "gap-4",
    className: "bg-white dark:bg-black dark:text-white",
  },
};

export const Justified: Story = {
  args: {
    children: (
      <>
        {Array.from({ length: 3 }, (_, i) => (
          <Box key={i} className={`bg-green-400 p-3 text-white rounded`}>
            Item {i + 1}
          </Box>
        ))}
      </>
    ),
    cols: "grid-cols-3",
    rows: "grid-rows-1",
    gap: "gap-6",
    justify: "center",
    className: "bg-white dark:bg-black dark:text-white",
  },
};

export const UserInteraction: Story = {
  args: {
    children: (
      <>
        {Array.from({ length: 3 }, (_, i) => (
          <Box key={i} className={`bg-green-400 p-3 text-white rounded`}>
            Item {i + 1}
          </Box>
        ))}
      </>
    ),
    cols: "grid-cols-3",
    rows: "grid-rows-1",
    gap: "gap-6",
    justify: "center",
    onClick: fn(),
  },
  play: async ({ args, canvas }) => {
    const container = canvas.getAllByTestId("box")[0];
    await userEvent.click(container);
    expect(args.onClick).toBeCalled();
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { Layout } from "./Layout";
import { Box } from "@/components/Box/Box";

const meta: Meta<typeof Layout> = {
  title: "Patterns/Layout",
  component: Layout,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The `Layout` component provides a flexible way to create layouts with Tailwind CSS styling. It supports various layout configurations and responsive design.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Layout>;

export const GridPattern: Story = {
  args: {
    layout: "grid",
    children: (
      <>
        <Box className="bg-amber-400">Flex Item 1</Box>
        <Box className="bg-blue-400">Flex Item 2</Box>
        <Box className="bg-cyan-100">Flex Item 3</Box>
      </>
    ),
  },
};

export const FlexPattern: Story = {
  args: {
    layout: "flex",
    children: (
      <>
        <Box className="bg-amber-400">Flex Item 1</Box>
        <Box className="bg-blue-400">Flex Item 2</Box>
        <Box className="bg-cyan-100">Flex Item 3</Box>
      </>
    ),
  },
};

export const FlexMobileViewPort: Story = {
  args: {
    layout: "flex",
    children: (
      <>
        <Box className="bg-amber-400">Flex Item 1</Box>
        <Box className="bg-blue-400">Flex Item 2</Box>
        <Box className="bg-cyan-100">Flex Item 3</Box>
      </>
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile_xs",
    },
  },
};

export const FlexTabletViewPort: Story = {
  args: {
    layout: "flex",
    children: (
      <>
        <Box className="bg-amber-400">Flex Item 1</Box>
        <Box className="bg-blue-400">Flex Item 2</Box>
        <Box className="bg-cyan-100">Flex Item 3</Box>
      </>
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet_sm",
    },
  },
};

export const FlexDesktopViewPort: Story = {
  args: {
    layout: "flex",
    children: (
      <>
        <Box className="bg-amber-400">Flex Item 1</Box>
        <Box className="bg-blue-400">Flex Item 2</Box>
        <Box className="bg-cyan-100">Flex Item 3</Box>
      </>
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: "laptop_xl",
    },
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { Section } from "./Section";
import { Box } from "@/components/ui/Box/Box";

const meta: Meta<typeof Section> = {
  title: "Layout/Section",
  component: Section,
  tags: ["autodocs"],
    parameters: {
        docs: {
        description: {
            component:
            "A Section component that provides a semantic sectioning element with Tailwind classes.",
        },
        },
    },
};
export default meta;
type Story = StoryObj<typeof Section>;
export const Default: Story = {
  args: {
    children: <Box>Section</Box>,
    className: "bg-gray-100  rounded",
  },
};

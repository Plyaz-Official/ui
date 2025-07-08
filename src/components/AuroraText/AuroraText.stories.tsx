import type { Meta, StoryObj } from "@storybook/react";

import { AuroraText } from "./AuroraText"; 

type Story = StoryObj<typeof AuroraText>;

const meta: Meta<typeof AuroraText> = {
  title: "Magic UI/AuroraText",
  component: AuroraText,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "`AuroraText` is a glowing animated text component that cycles through gradient colors. It accepts a list of colors and animation speed to create dynamic, attention-grabbing headings or hero text.",
      },
    },
  },
  argTypes: {
    children: {
      control: "text",
      description: "The text content to display with the Aurora effect.",
    },
    className: {
      control: "text",
      description: "Additional Tailwind classes to customize typography (size, weight, etc.).",
    },
    colors: {
      control: "object",
      description: "Array of color strings used in the animated gradient.",
    },
    speed: {
      control: "number",
      description: "Speed of the gradient animation (in seconds). Lower is faster.",
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    children: "Aurora Text",
    className: "text-4xl font-bold",
    colors: [
      "#f3f4f6", 
      "#e5e7eb", 
      "#dbeafe", 
    ],
    speed: 30,
  },
};

export const FastAnimation: Story = {
  args: {
    children: "Fast Aurora ",
    className: "text-5xl font-extrabold",
    colors: [
      "#e0f2fe", 
      "#d1fae5", 
      "#ede9fe", 
    ],
    speed: 10,
  },
};

export const CustomColors: Story = {
  args: {
    children: "Rainbow Vibes ",
    className: "text-6xl font-black tracking-tight",
   colors: [
      "#fef3c7",
      "#fce7f3", 
      "#e0f2fe",
      "#ede9fe",
      "#f3f4f6", 
      "#fff7ed", 
    ],
    speed: 40,
  },
};

export const SubtleEffect: Story = {
  args: {
    children: "Soft Aurora ",
    className: "text-3xl font-medium",
    colors: [
      "#f9fafb", 
      "#f3f4f6", 
      "#e5e7eb", 
    ],
    speed: 60,
  },
};



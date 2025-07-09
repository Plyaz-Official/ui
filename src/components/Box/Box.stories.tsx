import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, fn } from '@storybook/test';

import { Box } from '@/components';

type Story = StoryObj<typeof Box>;

const meta: Meta<typeof Box> = {
  title: 'Layout/Box',
  component: Box,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A flexible Box component that supports multiple semantic tags and Tailwind classes.',
      },
    },
  },
  argTypes: {
    element: {
      control: 'select',
      options: ['div', 'section', 'article', 'aside', 'nav', 'header', 'footer', 'main', 'span'],
      description: "The HTML element to render as the Box. Defaults to 'div'.",
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes to apply to the Box.',
    },
    children: {
      control: { type: 'text' },
      description: 'Content to be rendered inside the Box.',
    },
    onClick: {
      action: 'clicked',
      description: 'Function to call when the Box is clicked.',
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    children: 'This is a div',
    element: 'div',
    className: 'bg-gray-200 p-4 rounded-full dark:bg-black dark:text-white',
  },
};
export const Section: Story = {
  args: {
    children: 'This is a section',
    element: 'section',
    className: 'bg-blue-200 p-4 rounded dark:bg-black dark:text-white',
  },
};
export const Article: Story = {
  args: {
    children: 'This is an article',
    element: 'article',
    className: 'bg-green-200 p-4 rounded dark:bg-black dark:text-white',
  },
};
export const Aside: Story = {
  args: {
    children: 'This is an aside',
    element: 'aside',
    className: 'bg-yellow-200 p-3 rounded dark:bg-black dark:text-white',
  },
};
export const Nav: Story = {
  args: {
    children: 'This is a nav',
    element: 'nav',
    className: 'bg-purple-200 p-4 rounded dark:bg-black dark:text-white',
  },
};
export const Header: Story = {
  args: {
    children: 'This is a header',
    element: 'header',
    className: 'bg-pink-200 p-2 rounded dark:bg-black dark:text-white',
  },
};
export const Footer: Story = {
  args: {
    children: 'This is a footer',
    element: 'footer',
    className: 'bg-red-200 p-4 rounded dark:bg-black dark:text-white',
  },
};

export const UserInteraction: Story = {
  args: {
    children: 'This is a footer',
    element: 'footer',
    className: 'bg-red-200 p-4 rounded',
    onClick: fn(),
  },
  play: async ({ args, canvas }) => {
    const canvasElement = await canvas.findByTestId('box');
    // Interaction performance test
    const start = performance.now();
    await userEvent.click(canvasElement);
    const end = performance.now();
    const duration = end - start;
    await expect(duration).toBeLessThan(100);
    await expect(args.onClick).toBeCalled();
  },
};

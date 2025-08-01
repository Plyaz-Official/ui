import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent } from '@storybook/test';

import { Box, Container } from '@/components';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A Container component that provides a responsive fixed width layout.',
      },
    },
  },
  argTypes: {
    element: {
      control: 'select',
      options: ['div', 'section', 'article', 'aside', 'nav', 'header', 'footer'],
      description: "The HTML element to render as the Container. Defaults to 'div'.",
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes to apply to the Container.',
    },
    children: {
      control: { type: 'text' },
      description: 'Content to be rendered inside the Container.',
    },
    onClick: {
      action: 'clicked',
      description: 'Function to call when the Container is clicked.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: <Box>Container</Box>,
    className: 'bg-gray-100 p-6 rounded dark:bg-black dark:text-white',
    element: 'div',
  },
};

export const UserInteraction: Story = {
  args: {
    children: <Box>Container</Box>,
    className: 'bg-gray-100 p-6 rounded',
    element: 'div',
    onClick: fn(),
  },
  play: async ({ args, canvas }) => {
    const container = canvas.getAllByTestId('box')[0];
    // Interaction performance test
    const start = performance.now();
    await userEvent.click(container);
    const end = performance.now();
    const duration = end - start;
    await expect(duration).toBeLessThan(100);
    await expect(args.onClick).toBeCalled();
  },
};

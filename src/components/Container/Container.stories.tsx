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
    const container = canvas.getAllByTestId("box")[0];
    // Interaction performance test
    const start = performance.now();
    await userEvent.click(container);
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(100);
    expect(args.onClick).toBeCalled();
  },
};

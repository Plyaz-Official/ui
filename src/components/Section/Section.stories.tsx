import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent } from '@storybook/test';

import { Box, Section } from '@/components';

const meta: Meta<typeof Section> = {
  title: 'Layout/Section',
  component: Section,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A Section component that provides a semantic sectioning element with Tailwind classes.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {
    children: <Box>Section</Box>,
    className: 'bg-gray-100  rounded dark:bg-black dark:text-white',
  },
};

export const UserInteraction: Story = {
  args: {
    children: <Box>Section</Box>,
    className: 'bg-gray-100  rounded',
    onClick: fn(),
  },
  play: async ({ args, canvas }) => {
    const container = canvas.getAllByTestId('box')[0];
    await userEvent.click(container);
    await expect(args.onClick).toBeCalled();
  },
};

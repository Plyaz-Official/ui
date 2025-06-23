import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent } from '@storybook/test';

import { ExternalLink } from '@/components/ExternalLink/ExternalLink';

const meta: Meta<typeof ExternalLink> = {
  title: 'Typography/ExternalLink',
  component: ExternalLink,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A simple Link component that renders an anchor tag with Tailwind CSS classes for styling.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ExternalLink>;

export const Default: Story = {
  args: {
    children: 'This is a link',
    href: '#',
  },
};
export const CustomClass: Story = {
  args: {
    children: 'This is a link ',
    className: 'text-red-600 hover:text-red-800',
    href: '#',
  },
};

export const UserInteraction: Story = {
  args: {
    children: 'This is a link ',
    className: 'text-red-600 hover:text-red-800',
    href: '#',
    onClick: fn(),
  },
  play: async ({ args, canvas }) => {
    const container = canvas.getByTestId('link');
    await userEvent.click(container);
    await expect(args.onClick).toBeCalled();
  },
};

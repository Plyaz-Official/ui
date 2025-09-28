import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, fn } from '@storybook/test';
import { Check, X, Star, Bell } from 'lucide-react';

import { Badge } from '@/components';

type Story = StoryObj<typeof Badge>;

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Badge` component is used to display small pieces of information like status, counts, or labels. It supports multiple variants and can include icons. Built with class-variance-authority and styled with Tailwind CSS.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: 'Visual style of the badge.',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as a child component using Radix Slot.',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind CSS classes.',
    },
    children: {
      control: 'text',
      description: 'Content inside the badge.',
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

export const WithIcon: Story = {
  render: () => (
    <Badge variant="default">
      <Check className="h-3 w-3" />
      Success
    </Badge>
  ),
};

export const WithIconDestructive: Story = {
  render: () => (
    <Badge variant="destructive">
      <X className="h-3 w-3" />
      Error
    </Badge>
  ),
};

export const Notification: Story = {
  render: () => (
    <Badge variant="destructive" className="relative">
      <Bell className="h-3 w-3" />
      <span className="sr-only">Notifications</span>
      <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-white" />
    </Badge>
  ),
};

export const Status: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge variant="default">
        <div className="h-2 w-2 rounded-full bg-green-500" />
        Online
      </Badge>
      <Badge variant="secondary">
        <div className="h-2 w-2 rounded-full bg-yellow-500" />
        Away
      </Badge>
      <Badge variant="destructive">
        <div className="h-2 w-2 rounded-full bg-red-500" />
        Offline
      </Badge>
    </div>
  ),
};

export const Count: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge variant="default">5</Badge>
      <Badge variant="secondary">12</Badge>
      <Badge variant="destructive">99+</Badge>
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
      <Star className="h-3 w-3" />
      Premium
    </Badge>
  ),
};

export const AsChild: Story = {
  render: () => (
    <Badge asChild>
      <a href="/" className="hover:underline">
        Link Badge
      </a>
    </Badge>
  ),
};

export const UserInteraction: Story = {
  args: {
    children: 'Clickable Badge',
    variant: 'default',
    onClick: fn(),
  },
  play: async ({ args, canvas }) => {
    const badge = await canvas.findByTestId('badge');
    await userEvent.click(badge);
    await expect(args.onClick).toBeCalled();
  },
};
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, fn } from '@storybook/test';

import { Button } from '@/components';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Button` component is a flexible and styled wrapper around the native `<button>` element, supporting multiple variants, sizes, and interaction states. Built with Radix and Tailwind.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'secondary', 'destructive', 'ghost', 'link'],
      description: 'Visual style of the button.',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'Controls padding and height of the button.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button and prevents interactions.',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind CSS classes.',
    },
    children: {
      control: 'text',
      description: 'Content inside the button.',
    },
    onClick: {
      action: 'clicked',
      description: 'Called when the button is clicked.',
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    children: 'Default Button',
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
};

export const DefaultDisabled: Story = {
  args: {
    children: 'Default Button',
    variant: 'default',
    disabled: true,
  },
};

export const SecondaryDisabled: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    disabled: true,
  },
};

export const DestructiveDisabled: Story = {
  args: {
    children: 'Destructive Button',
    variant: 'destructive',
    disabled: true,
  },
};

export const OutlineDisabled: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
    disabled: true,
  },
};

export const LinkDisabled: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
    disabled: true,
  },
};

export const GhostDisabled: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
    disabled: true,
  },
};
export const UserInteraction: Story = {
  args: {
    children: 'Default Button',
    variant: 'default',
    onClick: fn(),
  },
  play: async ({ args, canvas }) => {
    const canvasElement = await canvas.findByRole('button');
    // Interaction performance test
    const start = performance.now();
    await userEvent.click(canvasElement);
    const end = performance.now();
    const duration = end - start;
    const expectDuration = 200;
    await expect(duration).toBeLessThan(expectDuration);
    await expect(args.onClick).toBeCalled();
  },
};

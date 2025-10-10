import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, fn } from '@storybook/test';

import { Input } from '@/components';

type Story = StoryObj<typeof Input>;

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '`Input` is a styled form input component built on top of the native `<input />` element. It supports all standard input types, Tailwind styling, and integrates well with form libraries like react-hook-form.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'text',
      description: 'The type of input (e.g., text, email, password).',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input field.',
    },
    value: {
      control: 'text',
      description: 'Controlled value of the input.',
    },
    className: {
      control: 'text',
      description: 'Tailwind CSS classes to customize the appearance.',
    },
    onChange: {
      action: 'changed',
      description: 'Callback function triggered on input change.',
    },
  },
};

export default meta;

// Basic usage
export const Default: Story = {
  args: {
    placeholder: 'Enter text',
  },
};

// With placeholder
export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Enter your name',
  },
};

// Password input
export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
};

// Interaction test
export const UserInteraction: Story = {
  args: {
    placeholder: 'Type something',
    onChange: fn(),
  },

  play: async ({ canvas, args }) => {
    const canvasElement = canvas.getByTestId('input');

    // Interaction performance test
    const start = performance.now();
    await userEvent.type(canvasElement, 'foo');
    const end = performance.now();
    const duration = end - start;
    const expectDuration = 300;
    await expect(duration).toBeLessThan(expectDuration);
    await expect(args.onChange).toBeCalled();
  },
};

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
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'url', 'tel', 'date', 'time', 'file'],
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
    readOnly: {
      control: 'boolean',
      description: 'Makes the input read-only.',
    },
    required: {
      control: 'boolean',
      description: 'Marks the input as required.',
    },
    min: {
      control: 'number',
      description: 'Minimum value (for number inputs).',
    },
    max: {
      control: 'number',
      description: 'Maximum value (for number inputs).',
    },
    step: {
      control: 'number',
      description: 'Step value (for number inputs).',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum number of characters allowed.',
    },
    pattern: {
      control: 'text',
      description: 'Pattern for validation (regex).',
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

// Email input
export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter your email',
  },
};

// Number input
export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Enter a number',
  },
};

// Search input
export const Search: Story = {
  args: {
    type: 'search',
    placeholder: 'Search...',
  },
};

// URL input
export const Url: Story = {
  args: {
    type: 'url',
    placeholder: 'Enter URL',
  },
};

// Tel input
export const Telephone: Story = {
  args: {
    type: 'tel',
    placeholder: 'Enter phone number',
  },
};

// Date input
export const Date: Story = {
  args: {
    type: 'date',
  },
};

// Time input
export const Time: Story = {
  args: {
    type: 'time',
  },
};

// File input
export const File: Story = {
  args: {
    type: 'file',
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    placeholder: 'This input is disabled',
    disabled: true,
  },
};

// With value
export const WithValue: Story = {
  args: {
    value: 'Pre-filled value',
    placeholder: 'Enter text',
  },
};

// Readonly state
export const ReadOnly: Story = {
  args: {
    value: 'This field is read-only',
    readOnly: true,
  },
};

// Required field
export const Required: Story = {
  args: {
    placeholder: 'This field is required',
    required: true,
  },
};

// With custom className
export const CustomStyling: Story = {
  args: {
    placeholder: 'Custom styled input',
    className: 'border-2 border-blue-500 bg-blue-50',
  },
};

// Error state
export const ErrorState: Story = {
  args: {
    placeholder: 'This field has an error',
    'aria-invalid': true,
    className: 'border-red-500',
  },
};

// Long placeholder
export const LongPlaceholder: Story = {
  args: {
    placeholder: 'This is a very long placeholder text that should wrap or truncate appropriately',
  },
};

// Small width
export const SmallWidth: Story = {
  args: {
    placeholder: 'Small width',
    className: 'w-32',
  },
};

// Large width
export const LargeWidth: Story = {
  args: {
    placeholder: 'Large width input field',
    className: 'w-96',
  },
};

// With min/max values (for number inputs)
export const NumberWithLimits: Story = {
  args: {
    type: 'number',
    placeholder: 'Number between 1-100',
    min: 1,
    max: 100,
  },
};

// With step (for number inputs)
export const NumberWithStep: Story = {
  args: {
    type: 'number',
    placeholder: 'Step by 0.5',
    step: 0.5,
  },
};

// With maxLength
export const WithMaxLength: Story = {
  args: {
    placeholder: 'Max 10 characters',
    maxLength: 10,
  },
};

// With pattern validation
export const WithPattern: Story = {
  args: {
    placeholder: 'Enter 3 letters',
    pattern: '[A-Za-z]{3}',
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

import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, fn } from '@storybook/test';

import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components';

type Story = StoryObj<typeof Select>;

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '`Select` is a headless, accessible dropdown component built on top of Radix UI. Use it to let users select a single option from a list. It supports full keyboard navigation, accessibility, and custom styling with Tailwind.',
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Selected value (controlled).',
    },
    defaultValue: {
      control: 'text',
      description: 'Initial value (uncontrolled).',
    },
    onValueChange: {
      action: 'changed',
      description: 'Called when user selects a value.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the select dropdown.',
    },
  },
};

export default meta;

const options = ['Apple', 'Banana', 'Orange'];

// Default uncontrolled Select
export const Default: Story = {
  render: args => (
    <Select defaultValue='apple' {...args}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select fruit' />
      </SelectTrigger>
      <SelectContent>
        {options.map(opt => (
          <SelectItem key={opt.toLowerCase()} value={opt.toLowerCase()}>
            {opt}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  ),
};

// With Placeholder
export const WithPlaceholder: Story = {
  render: args => (
    <Select {...args}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Pick a fruit' />
      </SelectTrigger>
      <SelectContent>
        {options.map(opt => (
          <SelectItem key={opt.toLowerCase()} value={opt.toLowerCase()}>
            {opt}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  ),
};

// Disabled Select
export const Disabled: Story = {
  render: args => (
    <Select {...args} disabled>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder="Can't open this" />
      </SelectTrigger>
      <SelectContent>
        {options.map(opt => (
          <SelectItem key={opt.toLowerCase()} value={opt.toLowerCase()}>
            {opt}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  ),
};

// Controlled Select
export const Controlled: Story = {
  args: {
    value: 'banana',
    onValueChange: fn(),
  },
  render: args => (
    <Select {...args}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Pick a fruit' />
      </SelectTrigger>
      <SelectContent>
        {options.map(opt => (
          <SelectItem key={opt.toLowerCase()} value={opt.toLowerCase()}>
            {opt}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  ),
};

export const UserInteraction: Story = {
  args: {
    onOpenChange: fn(),
  },
  render: args => (
    <Select {...args}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Pick a fruit' />
      </SelectTrigger>
      <SelectContent>
        {options.map(opt => (
          <SelectItem key={opt.toLowerCase()} value={opt.toLowerCase()}>
            {opt}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  ),
  play: async ({ canvasElement, args }) => {
    const button = canvasElement.querySelector('button');
    if (button) {
      const start = performance.now();
      await userEvent.click(button);
      const end = performance.now();
      const duration = end - start;
      const expectDuration = 200;
      await expect(duration).toBeLessThan(expectDuration);
      await expect(args.onOpenChange).toBeCalledTimes(1);
    }
  },
};

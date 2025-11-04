import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, fn } from '@storybook/test';

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from '@/components';

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

// Default grouped Select with comprehensive options
export const Default: Story = {
  render: args => (
    <Select onValueChange={function xte() {}} {...args}>
      <SelectTrigger className='w-96' title='Select'>
        <SelectValue placeholder='Select a fruit' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value='apple'>Apple</SelectItem>
          <SelectItem value='banana'>Banana</SelectItem>
          <SelectItem value='blueberry'>Blueberry</SelectItem>
          <SelectItem value='grapes'>Grapes</SelectItem>
          <SelectItem value='pineapple'>Pineapple</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value='aubergine'>Aubergine</SelectItem>
          <SelectItem value='broccoli'>Broccoli</SelectItem>
          <SelectItem disabled value='carrot'>
            Carrot
          </SelectItem>
          <SelectItem value='courgette'>Courgette</SelectItem>
          <SelectItem value='leek'>Leek</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Meat</SelectLabel>
          <SelectItem value='beef'>Beef</SelectItem>
          <SelectItem value='chicken'>Chicken</SelectItem>
          <SelectItem value='lamb'>Lamb</SelectItem>
          <SelectItem value='pork'>Pork</SelectItem>
        </SelectGroup>
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
        {['Apple', 'Banana', 'Orange'].map(opt => (
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

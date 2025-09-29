import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, fn } from '@storybook/test';
import { useState } from 'react';

import { Checkbox } from '@/components/client';

type Story = StoryObj<typeof Checkbox>;

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Checkbox` component is a form control that allows users to select one or more options from a set. Built with Radix UI and styled with Tailwind CSS, it provides accessible keyboard navigation and screen reader support.',
      },
    },
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled.',
    },
    required: {
      control: 'boolean',
      description: 'Whether the checkbox is required.',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind CSS classes.',
    },
    onCheckedChange: {
      action: 'checked',
      description: 'Called when the checked state changes.',
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    onCheckedChange: fn(),
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    onCheckedChange: fn(),
  },
};

export const Unchecked: Story = {
  args: {
    checked: false,
    onCheckedChange: fn(),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    onCheckedChange: fn(),
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    onCheckedChange: fn(),
  },
};

export const Required: Story = {
  args: {
    required: true,
    onCheckedChange: fn(),
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className='flex items-center space-x-2'>
      <Checkbox id='terms' />
      <label
        htmlFor='terms'
        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
      >
        Accept terms and conditions
      </label>
    </div>
  ),
};

export const WithLabelChecked: Story = {
  render: () => (
    <div className='flex items-center space-x-2'>
      <Checkbox id='terms-checked' defaultChecked />
      <label
        htmlFor='terms-checked'
        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
      >
        Accept terms and conditions
      </label>
    </div>
  ),
};

const MultipleCheckboxesComponent = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const items = [
    { id: 'item1', label: 'Option 1' },
    { id: 'item2', label: 'Option 2' },
    { id: 'item3', label: 'Option 3' },
  ];

  const handleChange = (itemId: string, checked: boolean) => {
    if (checked) {
      setCheckedItems([...checkedItems, itemId]);
    } else {
      setCheckedItems(checkedItems.filter(id => id !== itemId));
    }
  };

  return (
    <div className='space-y-2'>
      {items.map(item => (
        <div key={item.id} className='flex items-center space-x-2'>
          <Checkbox
            id={item.id}
            checked={checkedItems.includes(item.id)}
            onCheckedChange={checked => handleChange(item.id, checked as boolean)}
          />
          <label
            htmlFor={item.id}
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            {item.label}
          </label>
        </div>
      ))}
      <p className='text-sm text-muted-foreground'>Selected: {checkedItems.length} items</p>
    </div>
  );
};

export const MultipleCheckboxes: Story = {
  render: () => <MultipleCheckboxesComponent />,
};

const IndeterminateComponent = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>(['item1']);
  const items = ['item1', 'item2', 'item3'];

  const allChecked = checkedItems.length === items.length;
  const someChecked = checkedItems.length > 0;

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setCheckedItems(items);
    } else {
      setCheckedItems([]);
    }
  };

  const handleItemChange = (itemId: string, checked: boolean) => {
    if (checked) {
      setCheckedItems([...checkedItems, itemId]);
    } else {
      setCheckedItems(checkedItems.filter(id => id !== itemId));
    }
  };

  return (
    <div className='space-y-2'>
      <div className='flex items-center space-x-2'>
        <Checkbox
          id='select-all'
          checked={allChecked}
          onCheckedChange={handleSelectAll}
          ref={el => {
            if (el) {
              el.indeterminate = someChecked && !allChecked;
            }
          }}
        />
        <label
          htmlFor='select-all'
          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          Select All
        </label>
      </div>
      {items.map(item => (
        <div key={item} className='flex items-center space-x-2 ml-4'>
          <Checkbox
            id={item}
            checked={checkedItems.includes(item)}
            onCheckedChange={checked => handleItemChange(item, checked as boolean)}
          />
          <label
            htmlFor={item}
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            {item}
          </label>
        </div>
      ))}
    </div>
  );
};

export const Indeterminate: Story = {
  render: () => <IndeterminateComponent />,
};

export const CustomStyling: Story = {
  render: () => (
    <div className='flex items-center space-x-2'>
      <Checkbox id='custom' className='border-2 border-primary data-[state=checked]:bg-primary' />
      <label
        htmlFor='custom'
        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
      >
        Custom styled checkbox
      </label>
    </div>
  ),
};

export const UserInteraction: Story = {
  args: {
    onCheckedChange: fn(),
  },
  play: async ({ args, canvas }) => {
    const checkbox = await canvas.findByRole('checkbox');
    await userEvent.click(checkbox);
    await expect(args.onCheckedChange).toBeCalled();
  },
};

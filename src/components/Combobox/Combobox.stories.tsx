import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, fn } from '@storybook/test';
import { useState } from 'react';

import { Combobox, type ComboboxOption } from '@/components/client';

type Story = StoryObj<typeof Combobox>;

const frameworks: ComboboxOption[] = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt.js', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
];

const countries: ComboboxOption[] = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
  { value: 'au', label: 'Australia' },
];

const meta: Meta<typeof Combobox> = {
  title: 'Components/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Combobox` component is a searchable select input that combines the functionality of a text input and a dropdown. It allows users to search through options and select one. Built with Radix UI primitives and styled with Tailwind CSS.',
      },
    },
  },
  argTypes: {
    options: {
      control: 'object',
      description: 'Array of options to display in the combobox.',
    },
    value: {
      control: 'text',
      description: 'Currently selected value.',
    },
    onValueChange: {
      action: 'valueChanged',
      description: 'Called when the selected value changes.',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no option is selected.',
    },
    searchPlaceholder: {
      control: 'text',
      description: 'Placeholder text for the search input.',
    },
    emptyText: {
      control: 'text',
      description: 'Text to display when no options match the search.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the combobox is disabled.',
    },
    buttonVariant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'Variant of the trigger button.',
    },
    buttonSize: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'Size of the trigger button.',
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    options: frameworks,
    placeholder: 'Select framework...',
    searchPlaceholder: 'Search framework...',
    emptyText: 'No framework found.',
  },
};

export const WithValue: Story = {
  args: {
    options: frameworks,
    value: 'next.js',
    placeholder: 'Select framework...',
    searchPlaceholder: 'Search framework...',
    emptyText: 'No framework found.',
  },
};

export const WithManyOptions: Story = {
  args: {
    options: countries,
    placeholder: 'Select country...',
    searchPlaceholder: 'Search country...',
    emptyText: 'No country found.',
  },
};

export const Disabled: Story = {
  args: {
    options: frameworks,
    disabled: true,
    placeholder: 'Select framework...',
    searchPlaceholder: 'Search framework...',
    emptyText: 'No framework found.',
  },
};

export const WithDisabledOptions: Story = {
  args: {
    options: [
      { value: 'next.js', label: 'Next.js' },
      { value: 'sveltekit', label: 'SvelteKit', disabled: true },
      { value: 'nuxt.js', label: 'Nuxt.js' },
      { value: 'remix', label: 'Remix', disabled: true },
      { value: 'astro', label: 'Astro' },
    ],
    placeholder: 'Select framework...',
    searchPlaceholder: 'Search framework...',
    emptyText: 'No framework found.',
  },
};

export const CustomStyling: Story = {
  args: {
    options: frameworks,
    placeholder: 'Select framework...',
    searchPlaceholder: 'Search framework...',
    emptyText: 'No framework found.',
    className: 'w-[300px]',
    triggerClassName: 'border-primary',
    contentClassName: 'w-[300px]',
  },
};

export const DifferentVariants: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <label htmlFor='combobox-default' className='text-sm font-medium'>
          Default
        </label>
        <Combobox options={frameworks} placeholder='Select framework...' buttonVariant='default' />
      </div>
      <div>
        <label htmlFor='combobox-outline' className='text-sm font-medium'>
          Outline
        </label>
        <Combobox options={frameworks} placeholder='Select framework...' buttonVariant='outline' />
      </div>
      <div>
        <label htmlFor='combobox-secondary' className='text-sm font-medium'>
          Secondary
        </label>
        <Combobox
          options={frameworks}
          placeholder='Select framework...'
          buttonVariant='secondary'
        />
      </div>
    </div>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <label htmlFor='combobox-size-sm' className='text-sm font-medium'>
          Small
        </label>
        <Combobox options={frameworks} placeholder='Select framework...' buttonSize='sm' />
      </div>
      <div>
        <label htmlFor='combobox-size-default' className='text-sm font-medium'>
          Default
        </label>
        <Combobox options={frameworks} placeholder='Select framework...' buttonSize='default' />
      </div>
      <div>
        <label htmlFor='combobox-size-lg' className='text-sm font-medium'>
          Large
        </label>
        <Combobox options={frameworks} placeholder='Select framework...' buttonSize='lg' />
      </div>
    </div>
  ),
};

const ControlledComponent = () => {
  const [value, setValue] = useState('');

  return (
    <div className='space-y-4'>
      <Combobox
        options={frameworks}
        value={value}
        onValueChange={setValue}
        placeholder='Select framework...'
      />
      <p className='text-sm text-muted-foreground'>Selected: {value || 'None'}</p>
    </div>
  );
};

export const Controlled: Story = {
  render: () => <ControlledComponent />,
};

export const WithCustomEmptyText: Story = {
  args: {
    options: frameworks,
    placeholder: 'Select framework...',
    searchPlaceholder: 'Search framework...',
    emptyText: 'No matching frameworks found. Try a different search term.',
  },
};

export const UserInteraction: Story = {
  args: {
    options: frameworks,
    placeholder: 'Select framework...',
    searchPlaceholder: 'Search framework...',
    emptyText: 'No framework found.',
    onValueChange: fn(),
  },
  play: async ({ canvas }) => {
    const trigger = await canvas.findByRole('combobox');
    await userEvent.click(trigger);
  },
};

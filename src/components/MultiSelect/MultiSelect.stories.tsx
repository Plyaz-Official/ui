// MultiSelect.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import {
  MultiSelect,
  MultiSelectTrigger,
  MultiSelectValue,
  MultiSelectContent,
  MultiSelectItem,
  MultiSelectGroup,
} from './MultiSelect';

const meta: Meta<typeof MultiSelect> = {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A customizable multi-select component with search, badges, and overflow handling.',
      },
    },
  },
  argTypes: {
    values: {
      control: { type: 'object' },
      description: 'Controlled selected values array',
    },
    defaultValues: {
      control: { type: 'object' },
      description: 'Default selected values array',
    },
    onValuesChange: {
      action: 'valuesChanged',
      description: 'Callback when selected values change',
    },
  },
};

export default meta;

type Story = StoryObj<typeof MultiSelect>;

// Base template for stories
const Template: Story = {
  render: args => (
    <MultiSelect {...args}>
      <MultiSelectTrigger>
        <MultiSelectValue placeholder='Select options...' />
      </MultiSelectTrigger>
      <MultiSelectContent>
        <MultiSelectGroup className='text-secondary'>
          <MultiSelectItem value='option1'>Option 1</MultiSelectItem>
          <MultiSelectItem value='option2'>Option 2</MultiSelectItem>
          <MultiSelectItem value='option3'>Option 3</MultiSelectItem>
        </MultiSelectGroup>
      </MultiSelectContent>
    </MultiSelect>
  ),
};

export const Base: Story = {
  ...Template,
  args: {
    onValuesChange: fn(),
  },
};

export const WithDefaultValues: Story = {
  ...Template,
  args: {
    defaultValues: ['option1', 'option2'],
    onValuesChange: fn(),
  },
};

export const WithSearch: Story = {
  render: args => (
    <MultiSelect {...args}>
      <MultiSelectTrigger>
        <MultiSelectValue placeholder='Search and select...' />
      </MultiSelectTrigger>
      <MultiSelectContent
        search={{ placeholder: 'Search options...', emptyMessage: 'No results found' }}
      >
        <MultiSelectGroup className='text-secondary'>
          <MultiSelectItem value='apple'>Apple</MultiSelectItem>
          <MultiSelectItem value='banana'>Banana</MultiSelectItem>
          <MultiSelectItem value='orange'>Orange</MultiSelectItem>
          <MultiSelectItem value='grape'>Grape</MultiSelectItem>
          <MultiSelectItem value='strawberry'>Strawberry</MultiSelectItem>
        </MultiSelectGroup>
      </MultiSelectContent>
    </MultiSelect>
  ),
  args: {
    onValuesChange: fn(),
  },
};

export const WithCustomBadgeLabels: Story = {
  render: args => (
    <MultiSelect {...args}>
      <MultiSelectTrigger>
        <MultiSelectValue placeholder='Select categories...' className='cursor-pointer' />
      </MultiSelectTrigger>
      <MultiSelectContent>
        <MultiSelectGroup className='text-secondary'>
          <MultiSelectItem value='tech' badgeLabel='Tech'>
            Technology
          </MultiSelectItem>
          <MultiSelectItem value='sports' badgeLabel='Sports'>
            Sports & Fitness
          </MultiSelectItem>
          <MultiSelectItem value='art' badgeLabel='Art'>
            Arts & Creativity
          </MultiSelectItem>
          <MultiSelectItem value='food' badgeLabel='Food'>
            Food & Cooking
          </MultiSelectItem>
        </MultiSelectGroup>
      </MultiSelectContent>
    </MultiSelect>
  ),
  args: {
    onValuesChange: fn(),
  },
};

export const MultipleGroups: Story = {
  render: args => (
    <MultiSelect {...args}>
      <MultiSelectTrigger>
        <MultiSelectValue placeholder='Select items from different categories...' />
      </MultiSelectTrigger>
      <MultiSelectContent>
        <MultiSelectGroup className='text-secondary'>
          <MultiSelectItem value='fruits'>Fruits</MultiSelectItem>
          <MultiSelectItem value='vegetables'>Vegetables</MultiSelectItem>
        </MultiSelectGroup>
        <MultiSelectGroup>
          <MultiSelectItem value='dairy'>Dairy</MultiSelectItem>
          <MultiSelectItem value='meat'>Meat</MultiSelectItem>
        </MultiSelectGroup>
        <MultiSelectGroup>
          <MultiSelectItem value='grains'>Grains</MultiSelectItem>
          <MultiSelectItem value='beverages'>Beverages</MultiSelectItem>
        </MultiSelectGroup>
      </MultiSelectContent>
    </MultiSelect>
  ),
  args: {
    onValuesChange: fn(),
  },
};

export const WithoutSearch: Story = {
  render: args => (
    <MultiSelect {...args}>
      <MultiSelectTrigger>
        <MultiSelectValue placeholder='Select without search...' />
      </MultiSelectTrigger>
      <MultiSelectContent search={false}>
        <MultiSelectGroup className='text-secondary'>
          <MultiSelectItem value='item1'>Item One</MultiSelectItem>
          <MultiSelectItem value='item2'>Item Two</MultiSelectItem>
          <MultiSelectItem value='item3'>Item Three</MultiSelectItem>
        </MultiSelectGroup>
      </MultiSelectContent>
    </MultiSelect>
  ),
  args: {
    onValuesChange: fn(),
  },
};

export const Controlled: Story = {
  ...Template,
  args: {
    values: ['option1'],
    onValuesChange: fn(),
  },
};

// Interactive tests
export const UserInteraction: Story = {
  ...Template,
  args: {
    onValuesChange: fn(),
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  play: async ({ _, canvasElement }) => {
    const canvas = within(canvasElement);

    // Open the multi-select
    const trigger = canvas.getByRole('combobox');
    const start = performance.now();
    await userEvent.click(trigger);
    const end = performance.now();

    // Performance test - should open quickly
    const duration = end - start;
    const EXPECTED_DURATION = 200;
    await expect(duration).toBeLessThan(EXPECTED_DURATION);
  },
};

export const SelectionAndDeselection: Story = {
  ...Template,
  args: {
    onValuesChange: fn(),
  },
};

export const SearchFunctionality: Story = {
  render: args => (
    <MultiSelect {...args}>
      <MultiSelectTrigger>
        <MultiSelectValue placeholder='Search for fruits...' />
      </MultiSelectTrigger>
      <MultiSelectContent
        data-testid='search'
        search={{ placeholder: 'Type to search...', emptyMessage: 'No fruits found' }}
      >
        <MultiSelectGroup className='text-secondary'>
          <MultiSelectItem value='apple'>Apple</MultiSelectItem>
          <MultiSelectItem value='apricot'>Apricot</MultiSelectItem>
          <MultiSelectItem value='avocado'>Avocado</MultiSelectItem>
          <MultiSelectItem value='banana'>Banana</MultiSelectItem>
          <MultiSelectItem value='blueberry'>Blueberry</MultiSelectItem>
        </MultiSelectGroup>
      </MultiSelectContent>
    </MultiSelect>
  ),
  args: {
    onValuesChange: fn(),
  },
};

export const OverflowBehavior: Story = {
  render: args => (
    <div className='w-64'>
      <MultiSelect {...args}>
        <MultiSelectTrigger className='w-full'>
          <MultiSelectValue placeholder='Many options...' overflowBehavior='cutoff' />
        </MultiSelectTrigger>
        <MultiSelectContent>
          <MultiSelectGroup>
            <MultiSelectItem value='very-long-option-name-1'>
              Very Long Option Name One
            </MultiSelectItem>
            <MultiSelectItem value='very-long-option-name-2'>
              Very Long Option Name Two
            </MultiSelectItem>
            <MultiSelectItem value='very-long-option-name-3'>
              Very Long Option Name Three
            </MultiSelectItem>
            <MultiSelectItem value='very-long-option-name-4'>
              Very Long Option Name Four
            </MultiSelectItem>
            <MultiSelectItem value='very-long-option-name-5'>
              Very Long Option Name Five
            </MultiSelectItem>
          </MultiSelectGroup>
        </MultiSelectContent>
      </MultiSelect>
    </div>
  ),
  args: {
    defaultValues: [
      'very-long-option-name-1',
      'very-long-option-name-2',
      'very-long-option-name-3',
      'very-long-option-name-4',
    ],
    onValuesChange: fn(),
  },
};

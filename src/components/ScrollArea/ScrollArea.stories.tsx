import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent } from '@storybook/test';
import { useState } from 'react';

import { ScrollArea, ScrollBar } from '@/components';
import { NUMERIC_CONSTANTS } from '@/constants/constant';

type Story = StoryObj<typeof ScrollArea>;

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `ScrollArea` component provides a customizable scrollable area with custom scrollbars. It is built with Radix UI and styled with Tailwind CSS, offering a clean and accessible scrolling experience.',
      },
    },
  },
  argTypes: {
    children: {
      control: false,
      description: 'The content to be displayed inside the scroll area.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the scroll area.',
    },
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <ScrollArea className='h-72 w-48 rounded-md border'>
      <div className='p-4'>
        <h4 className='mb-4 text-sm font-medium leading-none'>Tags</h4>
        {Array.from({ length: 50 }, (_, i) => (
          <div key={i} className='text-sm'>
            v1.2.0-beta.{i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const WithLongContent: Story = {
  render: () => (
    <ScrollArea className='h-72 w-48 rounded-md border'>
      <div className='p-4'>
        <h4 className='mb-4 text-sm font-medium leading-none'>Long Content</h4>
        {Array.from({ length: 100 }, (_, i) => (
          <div key={i} className='mb-2 text-sm'>
            <strong>Item {i + 1}:</strong> This is a longer piece of content that demonstrates how
            the scroll area handles multiple lines of text and maintains proper spacing between
            items.
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const WithHorizontalScroll: Story = {
  render: () => (
    <ScrollArea className='h-32 w-48 rounded-md border'>
      <div className='flex w-max space-x-4 p-4'>
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className='shrink-0'>
            <div className='h-16 w-16 rounded-md bg-muted flex items-center justify-center'>
              {i + 1}
            </div>
          </div>
        ))}
      </div>
      <ScrollBar orientation='horizontal' />
    </ScrollArea>
  ),
};

export const WithBothScrollbars: Story = {
  render: () => (
    <ScrollArea className='h-72 w-48 rounded-md border'>
      <div className='p-4'>
        <h4 className='mb-4 text-sm font-medium leading-none'>Both Scrollbars</h4>
        <div className='flex w-max space-x-4'>
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className='shrink-0'>
              <div className='h-32 w-32 rounded-md bg-muted flex items-center justify-center mb-2'>
                {i + 1}
              </div>
              {Array.from({ length: 20 }, (_, j) => (
                <div key={j} className='text-sm'>
                  Item {j + 1}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <ScrollBar orientation='horizontal' />
    </ScrollArea>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <ScrollArea className='h-72 w-48 rounded-md border border-primary'>
      <div className='p-4'>
        <h4 className='mb-4 text-sm font-medium leading-none text-accent'>Custom Styled</h4>
        {Array.from({ length: 50 }, (_, i) => (
          <div key={i} className='text-sm p-2 rounded hover:bg-accent'>
            Custom item {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const WithListItems: Story = {
  render: () => (
    <ScrollArea className='h-72 w-48 rounded-md border'>
      <div className='p-4'>
        <h4 className='mb-4 text-sm font-medium leading-none'>List Items</h4>
        <ul className='space-y-2'>
          {Array.from({ length: NUMERIC_CONSTANTS.THIRTY }, (_, i) => (
            <li key={i} className='flex items-center space-x-2'>
              <div className='h-2 w-2 rounded-full bg-accent' />
              <span className='text-sm'>List item {i + 1}</span>
            </li>
          ))}
        </ul>
      </div>
    </ScrollArea>
  ),
};

export const WithFormContent: Story = {
  render: () => (
    <ScrollArea className='h-72 w-80 rounded-md border'>
      <div className='p-4'>
        <h4 className='mb-4 text-sm font-medium leading-none'>Form Content</h4>
        <form className='space-y-4'>
          {Array.from({ length: 15 }, (_, i) => (
            <div key={i}>
              <label className='block text-sm font-medium mb-1'>Field {i + 1}</label>
              <input
                type='text'
                className='w-full p-2 border rounded-md'
                placeholder={`Enter value for field ${i + 1}`}
              />
            </div>
          ))}
        </form>
      </div>
    </ScrollArea>
  ),
};

export const WithNestedScrollAreas: Story = {
  render: () => (
    <div className='space-y-4'>
      <ScrollArea className='h-48 w-80 rounded-md border'>
        <div className='p-4'>
          <h4 className='mb-4 text-sm font-medium leading-none'>Outer Scroll Area</h4>
          <ScrollArea className='h-32 w-72 rounded-md border'>
            <div className='p-4'>
              <h5 className='mb-2 text-sm font-medium'>Inner Scroll Area</h5>
              {Array.from({ length: 20 }, (_, i) => (
                <div key={i} className='text-sm'>
                  Nested item {i + 1}
                </div>
              ))}
            </div>
          </ScrollArea>
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className='text-sm mt-2'>
              Outer item {i + 1}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  ),
};

export const WithDifferentSizes: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <h4 className='mb-2 text-sm font-medium'>Small (h-32 w-48)</h4>
        <ScrollArea className='h-32 w-48 rounded-md border'>
          <div className='p-4'>
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className='text-sm'>
                Small item {i + 1}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
      <div>
        <h4 className='mb-2 text-sm font-medium'>Medium (h-48 w-64)</h4>
        <ScrollArea className='h-48 w-64 rounded-md border'>
          <div className='p-4'>
            {Array.from({ length: NUMERIC_CONSTANTS.THIRTY }, (_, i) => (
              <div key={i} className='text-sm'>
                Medium item {i + 1}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
      <div>
        <h4 className='mb-2 text-sm font-medium'>Large (h-72 w-80)</h4>
        <ScrollArea className='h-72 w-80 rounded-md border'>
          <div className='p-4'>
            {Array.from({ length: 50 }, (_, i) => (
              <div key={i} className='text-sm'>
                Large item {i + 1}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  ),
};

export const WithCustomScrollbar: Story = {
  render: () => (
    <ScrollArea className='h-72 w-48 rounded-md border'>
      <div className='p-4'>
        <h4 className='mb-4 text-sm font-medium leading-none'>Custom Scrollbar</h4>
        {Array.from({ length: 50 }, (_, i) => (
          <div key={i} className='text-sm'>
            Item {i + 1}
          </div>
        ))}
      </div>
      <ScrollBar className='w-3 bg-muted' />
    </ScrollArea>
  ),
};

export const WithHorizontalOnly: Story = {
  render: () => (
    <ScrollArea className='h-32 w-80 rounded-md border'>
      <div className='flex w-max space-x-4 p-4'>
        {Array.from({ length: 25 }, (_, i) => (
          <div key={i} className='shrink-0'>
            <div className='h-16 w-16 rounded-md bg-muted flex items-center justify-center'>
              {i + 1}
            </div>
          </div>
        ))}
      </div>
      <ScrollBar orientation='horizontal' />
    </ScrollArea>
  ),
};

export const WithVerticalOnly: Story = {
  render: () => (
    <ScrollArea className='h-72 w-48 rounded-md border'>
      <div className='p-4'>
        <h4 className='mb-4 text-sm font-medium leading-none'>Vertical Only</h4>
        {Array.from({ length: 50 }, (_, i) => (
          <div key={i} className='text-sm'>
            Item {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const WithFocusManagement: Story = {
  render: () => (
    <ScrollArea className='h-72 w-48 rounded-md border'>
      <div className='p-4'>
        <h4 className='mb-4 text-sm font-medium leading-none'>Focus Management</h4>
        {Array.from({ length: 30 }, (_, i) => (
          <button
            key={i}
            className='block w-full text-left p-2 rounded hover:bg-accent focus:bg-accent focus:outline-none'
          >
            Focusable item {i + 1}
          </button>
        ))}
      </div>
    </ScrollArea>
  ),
};

const WithDynamicContentComponent = () => {
  const [items, setItems] = useState(10);

  const addItem = () => setItems(prev => prev + 1);
  const removeItem = () => setItems(prev => Math.max(1, prev - 1));

  return (
    <div className='space-y-4'>
      <div className='flex gap-2'>
        <button
          onClick={addItem}
          className='px-3 py-1 text-sm bg-primary text-primary-foreground rounded hover:bg-primary/90'
        >
          Add Item
        </button>
        <button onClick={removeItem} className='px-3 py-1 text-sm border rounded hover:bg-accent'>
          Remove Item
        </button>
      </div>
      <ScrollArea className='h-72 w-48 rounded-md border'>
        <div className='p-4'>
          <h4 className='mb-4 text-sm font-medium leading-none'>Dynamic Content</h4>
          {Array.from({ length: items }, (_, i) => (
            <div key={i} className='text-sm'>
              Dynamic item {i + 1}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export const WithDynamicContent: Story = {
  render: () => <WithDynamicContentComponent />,
};

export const WithLoadingState: Story = {
  render: () => (
    <ScrollArea className='h-72 w-48 rounded-md border'>
      <div className='p-4'>
        <h4 className='mb-4 text-sm font-medium leading-none'>Loading State</h4>
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className='flex items-center space-x-2 mb-2'>
            <div className='h-4 w-4 bg-muted rounded animate-pulse' />
            <div className='h-4 w-32 bg-muted rounded animate-pulse' />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const UserInteraction: Story = {
  render: () => (
    <ScrollArea className='h-72 w-48 rounded-md border'>
      <div className='p-4'>
        <h4 className='mb-4 text-sm font-medium leading-none'>Interactive Content</h4>
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i} className='text-sm p-2 rounded hover:bg-accent cursor-pointer'>
            Interactive item {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

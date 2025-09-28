import type { Meta, StoryObj } from '@storybook/react';

import { Separator } from '@/components';

type Story = StoryObj<typeof Separator>;

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Separator` component provides a visual separator between content sections. It is built with Radix UI and styled with Tailwind CSS, offering both horizontal and vertical orientations.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the separator.',
    },
    decorative: {
      control: 'boolean',
      description: 'Whether the separator is decorative (not announced by screen readers).',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the separator.',
    },
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>Content above</div>
      <Separator />
      <div>Content below</div>
    </div>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>Content above</div>
      <Separator orientation='horizontal' />
      <div>Content below</div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className='flex h-20 items-center space-x-4'>
      <div>Left content</div>
      <Separator orientation='vertical' />
      <div>Right content</div>
    </div>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>Content above</div>
      <Separator className='bg-primary h-0.5' />
      <div>Content below</div>
    </div>
  ),
};

export const WithCustomColors: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>Red separator</div>
      <Separator className='bg-red-500' />
      <div>Blue separator</div>
      <Separator className='bg-blue-500' />
      <div>Green separator</div>
      <Separator className='bg-green-500' />
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className='flex items-center space-x-4'>
      <div>Left content</div>
      <Separator className='flex-1' />
      <span className='text-sm text-muted-foreground'>OR</span>
      <Separator className='flex-1' />
      <div>Right content</div>
    </div>
  ),
};

export const WithNavigation: Story = {
  render: () => (
    <nav className='flex items-center space-x-4'>
      <a href='/' className='text-sm font-medium'>
        Home
      </a>
      <Separator orientation='vertical' />
      <a href='/about' className='text-sm font-medium'>
        About
      </a>
      <Separator orientation='vertical' />
      <a href='/contact' className='text-sm font-medium'>
        Contact
      </a>
    </nav>
  ),
};

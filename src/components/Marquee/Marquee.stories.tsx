import type { Meta, StoryObj } from '@storybook/react';

import { Marquee } from './Marquee';

const meta = {
  title: 'Magic UI/Marquee',
  component: Marquee,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Content shown inside the marquee.',
    },
    repeat: {
      control: { type: 'number', min: 1 },
      description: 'How many times to duplicate the children content.',
    },
    vertical: {
      control: 'boolean',
      description: 'Animate vertically instead of horizontally.',
    },
    pauseOnHover: {
      control: 'boolean',
      description: 'Pause the animation when the user hovers over the marquee.',
    },
    reverse: {
      control: 'boolean',
      description: 'Reverse the animation direction.',
    },
    paused: {
      control: 'boolean',
      description: 'Pause the animation completely.',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind classes.',
    },
  },
  args: {
    children: (
      <>
        <div className='p-3 bg-blue-100 rounded mx-2'>
          <span>Jack</span>
        </div>
        <div className='p-3 bg-green-100 rounded mx-2'>
          <span>Jill</span>
        </div>
        <div className='p-3 bg-purple-100 rounded mx-2'>
          <span>John</span>
        </div>
      </>
    ),
    repeat: 3,
  },
} satisfies Meta<typeof Marquee>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: args => (
    <div className='relative w-full overflow-hidden border rounded-lg p-4'>
      <Marquee {...args} />
    </div>
  ),
};

export const Vertical: Story = {
  render: args => (
    <div className='relative flex h-[400px] w-full items-center justify-center overflow-hidden border rounded-lg'>
      <Marquee {...args} />
      <div className='pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background' />
      <div className='pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background' />
    </div>
  ),
  args: {
    vertical: true,
  },
};

export const PauseOnHover: Story = {
  render: args => (
    <div className='relative w-full overflow-hidden border rounded-lg p-4'>
      <Marquee {...args} />
    </div>
  ),
  args: {
    pauseOnHover: true,
  },
};

export const Reverse: Story = {
  render: args => (
    <div className='relative w-full overflow-hidden border rounded-lg p-4'>
      <Marquee {...args} />
    </div>
  ),
  args: {
    reverse: true,
  },
};

export const Paused: Story = {
  render: args => (
    <div className='relative w-full overflow-hidden border rounded-lg p-4'>
      <Marquee {...args} />
    </div>
  ),
  args: {
    paused: true,
  },
};

export const VerticalReverse: Story = {
  render: args => (
    <div className='relative flex h-[400px] w-full items-center justify-center overflow-hidden border rounded-lg'>
      <Marquee {...args} />
      <div className='pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background' />
      <div className='pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background' />
    </div>
  ),
  args: {
    vertical: true,
    reverse: true,
  },
};

export const CustomSpeed: Story = {
  render: args => (
    <div className='relative w-full overflow-hidden border rounded-lg p-4'>
      <Marquee {...args} />
    </div>
  ),
  args: {
    className: '[--duration:10s]',
  },
};

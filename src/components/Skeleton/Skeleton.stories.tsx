import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

import { Skeleton } from '@/components';

type Story = StoryObj<typeof Skeleton>;

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Skeleton` component provides a loading placeholder with a pulsing animation. It is styled with Tailwind CSS and can be customized for different content shapes and sizes.',
      },
    },
  },
  argTypes: {
    children: {
      control: false,
      description: 'The content to be displayed inside the skeleton (usually empty).',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the skeleton.',
    },
  },
};

export default meta;

export const Default: Story = {
  render: () => <Skeleton className='h-4 w-[250px]' />,
};

export const DifferentShapes: Story = {
  render: () => (
    <div className='space-y-4'>
      {/* Circle */}
      <Skeleton className='h-12 w-12 rounded-full' />

      {/* Rectangle */}
      <Skeleton className='h-4 w-[350px]' />

      {/* Square */}
      <Skeleton className='h-12 w-12' />
    </div>
  ),
};

export const CommonPatterns: Story = {
  render: () => (
    <div className='space-y-6'>
      {/* Card Pattern */}
      <div className='flex items-center space-x-4'>
        <Skeleton className='h-12 w-12 rounded-full' />
        <div className='space-y-2'>
          <Skeleton className='h-4 w-[250px]' />
          <Skeleton className='h-4 w-[200px]' />
        </div>
      </div>

      {/* Form Pattern */}
      <div className='space-y-4'>
        <div className='space-y-2'>
          <Skeleton className='h-4 w-[100px]' />
          <Skeleton className='h-10 w-full' />
        </div>
        <div className='space-y-2'>
          <Skeleton className='h-4 w-[120px]' />
          <Skeleton className='h-10 w-full' />
        </div>
        <Skeleton className='h-10 w-[100px]' />
      </div>

      {/* List Pattern */}
      <div className='space-y-3'>
        {Array.from({ length: 3 }, (_, i) => (
          <div key={i} className='flex items-center space-x-4'>
            <Skeleton className='h-10 w-10 rounded-full' />
            <div className='space-y-2'>
              <Skeleton className='h-4 w-[200px]' />
              <Skeleton className='h-3 w-[150px]' />
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Customization: Story = {
  render: () => (
    <div className='space-y-6'>
      {/* Different Sizes */}
      <div className='space-y-4'>
        <Skeleton className='h-2 w-[250px]' />
        <Skeleton className='h-4 w-[250px]' />
        <Skeleton className='h-6 w-[250px]' />
        <Skeleton className='h-8 w-[250px]' />
      </div>

      {/* Different Colors */}
      <div className='space-y-4'>
        <Skeleton className='h-4 w-[250px] bg-primary/20' />
        <Skeleton className='h-4 w-[250px] bg-secondary/20' />
        <Skeleton className='h-4 w-[250px] bg-accent/20' />
      </div>

      {/* Different Shapes */}
      <div className='space-y-4'>
        <Skeleton className='h-4 w-[250px] rounded-none' />
        <Skeleton className='h-4 w-[250px] rounded-md' />
        <Skeleton className='h-4 w-[250px] rounded-lg' />
        <Skeleton className='h-4 w-[250px] rounded-full' />
      </div>
    </div>
  ),
};

const LoadingStateComponent = () => {
  const [loading, setLoading] = useState(true);
  const THREE_SECONDS = 3000;
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), THREE_SECONDS);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className='space-y-4'>
        <Skeleton className='h-6 w-[200px]' />
        <div className='space-y-2'>
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-3/4' />
        </div>
        <Skeleton className='h-10 w-[100px]' />
      </div>
    );
  }

  return (
    <div className='space-y-4'>
      <h2 className='text-xl font-semibold'>Loaded Content</h2>
      <p className='text-gray-600'>This content has finished loading and replaced the skeleton.</p>
      <button className='px-4 py-2 bg-blue-500 text-white rounded'>Action Button</button>
    </div>
  );
};

export const LoadingState: Story = {
  render: () => <LoadingStateComponent />,
};

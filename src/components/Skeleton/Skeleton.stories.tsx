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
  render: () => <Skeleton className="h-4 w-[250px]" />,
};

export const Circle: Story = {
  render: () => <Skeleton className="h-12 w-12 rounded-full" />,
};

export const Rectangle: Story = {
  render: () => <Skeleton className="h-4 w-[350px]" />,
};

export const Square: Story = {
  render: () => <Skeleton className="h-12 w-12" />,
};

export const Card: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
};

export const Avatar: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
};

export const Button: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Skeleton className="h-10 w-20" />
      <Skeleton className="h-10 w-24" />
      <Skeleton className="h-10 w-16" />
    </div>
  ),
};

export const Form: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-[120px]" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-[80px]" />
        <Skeleton className="h-20 w-full" />
      </div>
      <Skeleton className="h-10 w-[100px]" />
    </div>
  ),
};

export const Table: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex space-x-4">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[80px]" />
      </div>
      <div className="flex space-x-4">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[80px]" />
      </div>
      <div className="flex space-x-4">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[80px]" />
      </div>
    </div>
  ),
};

export const List: Story = {
  render: () => (
    <div className="space-y-3">
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i} className="flex items-center space-x-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-3 w-[150px]" />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      {Array.from({ length: 6 }, (_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-[200px] w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      ))}
    </div>
  ),
};

export const Profile: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-20 w-20 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-6 w-[200px]" />
          <Skeleton className="h-4 w-[150px]" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  ),
};

export const Article: Story = {
  render: () => (
    <div className="space-y-4">
      <Skeleton className="h-8 w-3/4" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
      <Skeleton className="h-[200px] w-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  ),
};

export const Dashboard: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-8 w-[80px]" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-8 w-[80px]" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-8 w-[80px]" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-8 w-[80px]" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Skeleton className="h-[300px] w-full" />
        <Skeleton className="h-[300px] w-full" />
      </div>
    </div>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <div className="space-y-4">
      <Skeleton className="h-4 w-[250px] bg-primary/20" />
      <Skeleton className="h-4 w-[250px] bg-secondary/20" />
      <Skeleton className="h-4 w-[250px] bg-accent/20" />
      <Skeleton className="h-4 w-[250px] bg-muted/20" />
    </div>
  ),
};

export const CustomSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Skeleton className="h-2 w-[250px]" />
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-6 w-[250px]" />
      <Skeleton className="h-8 w-[250px]" />
      <Skeleton className="h-12 w-[250px]" />
    </div>
  ),
};

export const CustomAnimations: Story = {
  render: () => (
    <div className="space-y-4">
      <Skeleton className="h-4 w-[250px] animate-pulse" />
      <Skeleton className="h-4 w-[250px] animate-bounce" />
      <Skeleton className="h-4 w-[250px] animate-spin" />
      <Skeleton className="h-4 w-[250px] animate-ping" />
    </div>
  ),
};

export const CustomShapes: Story = {
  render: () => (
    <div className="space-y-4">
      <Skeleton className="h-4 w-[250px] rounded-none" />
      <Skeleton className="h-4 w-[250px] rounded-sm" />
      <Skeleton className="h-4 w-[250px] rounded-md" />
      <Skeleton className="h-4 w-[250px] rounded-lg" />
      <Skeleton className="h-4 w-[250px] rounded-xl" />
      <Skeleton className="h-4 w-[250px] rounded-full" />
    </div>
  ),
};

export const MultipleSkeletons: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
      <div className="flex space-x-4">
        <Skeleton className="h-4 w-[120px]" />
        <Skeleton className="h-4 w-[180px]" />
        <Skeleton className="h-4 w-[160px]" />
      </div>
      <div className="flex space-x-4">
        <Skeleton className="h-4 w-[140px]" />
        <Skeleton className="h-4 w-[110px]" />
        <Skeleton className="h-4 w-[190px]" />
      </div>
    </div>
  ),
};

export const NestedSkeletons: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="border rounded-lg p-4 space-y-3">
        <Skeleton className="h-6 w-[200px]" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <div className="flex space-x-2">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-24" />
        </div>
      </div>
    </div>
  ),
};

export const ResponsiveSkeletons: Story = {
  render: () => (
    <div className="space-y-4">
      <Skeleton className="h-4 w-full sm:w-[250px] md:w-[300px] lg:w-[350px]" />
      <Skeleton className="h-4 w-full sm:w-[200px] md:w-[250px] lg:w-[300px]" />
      <Skeleton className="h-4 w-full sm:w-[150px] md:w-[200px] lg:w-[250px]" />
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
      <div className="space-y-4">
        <Skeleton className="h-6 w-[200px]" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <Skeleton className="h-10 w-[100px]" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Loaded Content</h2>
      <p className="text-gray-600">
        This content has finished loading and replaced the skeleton.
      </p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded">
        Action Button
      </button>
    </div>
  );
};

export const LoadingState: Story = {
  render: () => <LoadingStateComponent />,
};

const InteractiveSkeletonsComponent = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);

  return (
    <div className="space-y-4">
      <button
        onClick={() => setShowSkeleton(!showSkeleton)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {showSkeleton ? 'Show Content' : 'Show Skeleton'}
      </button>
      
      {showSkeleton ? (
        <div className="space-y-4">
          <Skeleton className="h-6 w-[200px]" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <Skeleton className="h-10 w-[100px]" />
        </div>
      ) : (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Real Content</h2>
          <p className="text-gray-600">
            This is the actual content that was loading.
          </p>
          <button className="px-4 py-2 bg-green-500 text-white rounded">
            Success Button
          </button>
        </div>
      )}
    </div>
  );
};

export const InteractiveSkeletons: Story = {
  render: () => <InteractiveSkeletonsComponent />,
};

export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-4">
      <Skeleton className="h-4 w-[250px] border-2 border-primary" />
      <Skeleton className="h-4 w-[250px] shadow-lg" />
      <Skeleton className="h-4 w-[250px] bg-gradient-to-r from-primary to-secondary" />
      <Skeleton className="h-4 w-[250px] opacity-50" />
    </div>
  ),
};

export const Accessibility: Story = {
  render: () => (
    <div className="space-y-4">
      <Skeleton 
        className="h-4 w-[250px]" 
        role="status" 
        aria-label="Loading content"
      />
      <Skeleton 
        className="h-4 w-[200px]" 
        role="status" 
        aria-label="Loading description"
      />
      <Skeleton 
        className="h-10 w-20" 
        role="status" 
        aria-label="Loading button"
      />
    </div>
  ),
};

export const Performance: Story = {
  render: () => (
    <div className="space-y-4">
      {Array.from({ length: 100 }, (_, i) => (
        <Skeleton key={i} className="h-4 w-[250px]" />
      ))}
    </div>
  ),
};

export const UserInteraction: Story = {
  render: () => (
    <div className="space-y-4">
      <Skeleton 
        className="h-4 w-[250px] cursor-pointer hover:bg-accent/80" 
        onClick={() => alert('Skeleton clicked!')}
      />
      <Skeleton 
        className="h-4 w-[200px] cursor-pointer hover:bg-accent/80" 
        onClick={() => alert('Another skeleton clicked!')}
      />
    </div>
  ),
  play: async ({ canvas }) => {
    const skeleton = canvas.getByText('');
    await userEvent.click(skeleton);
  },
};

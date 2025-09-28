import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent } from '@storybook/test';
import { useState } from 'react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components';

type Story = StoryObj<typeof Tabs>;

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Tabs` component provides a way to organize content into separate views that can be toggled between. It is built with Radix UI and styled with Tailwind CSS, offering a flexible and accessible tabs solution.',
      },
    },
  },
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The default value of the tabs.',
    },
    value: {
      control: 'text',
      description: 'The controlled value of the tabs.',
    },
    onValueChange: {
      action: 'valueChange',
      description: 'Called when the value changes.',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the tabs.',
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'The direction of the tabs.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the tabs.',
    },
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue='tab1' className='w-[400px]'>
      <TabsList>
        <TabsTrigger value='tab1'>Account</TabsTrigger>
        <TabsTrigger value='tab2'>Password</TabsTrigger>
        <TabsTrigger value='tab3'>Settings</TabsTrigger>
      </TabsList>
      <TabsContent value='tab1'>
        <div className='p-4'>
          <h3 className='text-lg font-semibold'>Account</h3>
          <p className='text-muted-foreground'>Manage your account settings and preferences.</p>
        </div>
      </TabsContent>
      <TabsContent value='tab2'>
        <div className='p-4'>
          <h3 className='text-lg font-semibold'>Password</h3>
          <p className='text-muted-foreground'>Update your password and security settings.</p>
        </div>
      </TabsContent>
      <TabsContent value='tab3'>
        <div className='p-4'>
          <h3 className='text-lg font-semibold'>Settings</h3>
          <p className='text-muted-foreground'>Configure your application settings.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue='home' className='w-[400px]'>
      <TabsList>
        <TabsTrigger value='home'>
          <svg className='mr-2 h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
            />
          </svg>
          Home
        </TabsTrigger>
        <TabsTrigger value='profile'>
          <svg className='mr-2 h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
            />
          </svg>
          Profile
        </TabsTrigger>
        <TabsTrigger value='messages'>
          <svg className='mr-2 h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
            />
          </svg>
          Messages
        </TabsTrigger>
      </TabsList>
      <TabsContent value='home'>
        <div className='p-4'>
          <h3 className='text-lg font-semibold'>Home</h3>
          <p className='text-muted-foreground'>Welcome to your dashboard.</p>
        </div>
      </TabsContent>
      <TabsContent value='profile'>
        <div className='p-4'>
          <h3 className='text-lg font-semibold'>Profile</h3>
          <p className='text-muted-foreground'>Manage your profile information.</p>
        </div>
      </TabsContent>
      <TabsContent value='messages'>
        <div className='p-4'>
          <h3 className='text-lg font-semibold'>Messages</h3>
          <p className='text-muted-foreground'>View and manage your messages.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <Tabs defaultValue='tab1' className='w-[400px]'>
      <TabsList>
        <TabsTrigger value='tab1'>Available</TabsTrigger>
        <TabsTrigger value='tab2' disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value='tab3'>Available</TabsTrigger>
      </TabsList>
      <TabsContent value='tab1'>
        <div className='p-4'>
          <h3 className='text-lg font-semibold'>Available Tab</h3>
          <p className='text-muted-foreground'>This tab is available and can be selected.</p>
        </div>
      </TabsContent>
      <TabsContent value='tab2'>
        <div className='p-4'>
          <h3 className='text-lg font-semibold'>Disabled Tab</h3>
          <p className='text-muted-foreground'>This tab is disabled and cannot be selected.</p>
        </div>
      </TabsContent>
      <TabsContent value='tab3'>
        <div className='p-4'>
          <h3 className='text-lg font-semibold'>Available Tab</h3>
          <p className='text-muted-foreground'>This tab is also available and can be selected.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

const WithControlledStateComponent = () => {
  const [value, setValue] = useState('tab1');

  return (
    <div className='space-y-4'>
      <Tabs value={value} onValueChange={setValue} className='w-[400px]'>
        <TabsList>
          <TabsTrigger value='tab1'>Tab 1</TabsTrigger>
          <TabsTrigger value='tab2'>Tab 2</TabsTrigger>
          <TabsTrigger value='tab3'>Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value='tab1'>
          <div className='p-4'>
            <h3 className='text-lg font-semibold'>Tab 1 Content</h3>
            <p className='text-muted-foreground'>Current value: {value}</p>
          </div>
        </TabsContent>
        <TabsContent value='tab2'>
          <div className='p-4'>
            <h3 className='text-lg font-semibold'>Tab 2 Content</h3>
            <p className='text-muted-foreground'>Current value: {value}</p>
          </div>
        </TabsContent>
        <TabsContent value='tab3'>
          <div className='p-4'>
            <h3 className='text-lg font-semibold'>Tab 3 Content</h3>
            <p className='text-muted-foreground'>Current value: {value}</p>
          </div>
        </TabsContent>
      </Tabs>

      <div className='flex gap-2'>
        <button
          onClick={() => setValue('tab1')}
          className='px-3 py-1 text-sm bg-primary text-primary-foreground rounded'
        >
          Go to Tab 1
        </button>
        <button
          onClick={() => setValue('tab2')}
          className='px-3 py-1 text-sm bg-primary text-primary-foreground rounded'
        >
          Go to Tab 2
        </button>
        <button
          onClick={() => setValue('tab3')}
          className='px-3 py-1 text-sm bg-primary text-primary-foreground rounded'
        >
          Go to Tab 3
        </button>
      </div>
    </div>
  );
};

export const WithControlledState: Story = {
  render: () => <WithControlledStateComponent />,
};

export const WithCustomStyling: Story = {
  render: () => (
    <Tabs defaultValue='tab1' className='w-[400px]'>
      <TabsList className='bg-blue-100'>
        <TabsTrigger
          value='tab1'
          className='data-[state=active]:bg-blue-500 data-[state=active]:text-white'
        >
          Custom 1
        </TabsTrigger>
        <TabsTrigger
          value='tab2'
          className='data-[state=active]:bg-blue-500 data-[state=active]:text-white'
        >
          Custom 2
        </TabsTrigger>
        <TabsTrigger
          value='tab3'
          className='data-[state=active]:bg-blue-500 data-[state=active]:text-white'
        >
          Custom 3
        </TabsTrigger>
      </TabsList>
      <TabsContent value='tab1'>
        <div className='p-4 bg-blue-50 rounded-md'>
          <h3 className='text-lg font-semibold text-blue-900'>Custom Styled Tab 1</h3>
          <p className='text-blue-700'>This tab has custom styling with blue colors.</p>
        </div>
      </TabsContent>
      <TabsContent value='tab2'>
        <div className='p-4 bg-blue-50 rounded-md'>
          <h3 className='text-lg font-semibold text-blue-900'>Custom Styled Tab 2</h3>
          <p className='text-blue-700'>This tab also has custom styling.</p>
        </div>
      </TabsContent>
      <TabsContent value='tab3'>
        <div className='p-4 bg-blue-50 rounded-md'>
          <h3 className='text-lg font-semibold text-blue-900'>Custom Styled Tab 3</h3>
          <p className='text-blue-700'>This tab has the same custom styling.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const WithVerticalOrientation: Story = {
  render: () => (
    <Tabs defaultValue='tab1' orientation='vertical' className='flex gap-4 w-[500px]'>
      <TabsList className='flex-col h-fit'>
        <TabsTrigger value='tab1'>Tab 1</TabsTrigger>
        <TabsTrigger value='tab2'>Tab 2</TabsTrigger>
        <TabsTrigger value='tab3'>Tab 3</TabsTrigger>
      </TabsList>
      <div className='flex-1'>
        <TabsContent value='tab1'>
          <div className='p-4'>
            <h3 className='text-lg font-semibold'>Vertical Tab 1</h3>
            <p className='text-muted-foreground'>This is a vertically oriented tab.</p>
          </div>
        </TabsContent>
        <TabsContent value='tab2'>
          <div className='p-4'>
            <h3 className='text-lg font-semibold'>Vertical Tab 2</h3>
            <p className='text-muted-foreground'>This is also a vertically oriented tab.</p>
          </div>
        </TabsContent>
        <TabsContent value='tab3'>
          <div className='p-4'>
            <h3 className='text-lg font-semibold'>Vertical Tab 3</h3>
            <p className='text-muted-foreground'>This is another vertically oriented tab.</p>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  ),
};

const WithUserInteractionComponent = () => {
  const [value, setValue] = useState('tab1');
  const [clickCount, setClickCount] = useState(0);

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    setClickCount(prev => prev + 1);
  };

  return (
    <div className='space-y-4'>
      <Tabs value={value} onValueChange={handleValueChange} className='w-[400px]'>
        <TabsList>
          <TabsTrigger value='tab1'>Interactive Tab 1</TabsTrigger>
          <TabsTrigger value='tab2'>Interactive Tab 2</TabsTrigger>
          <TabsTrigger value='tab3'>Interactive Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value='tab1'>
          <div className='p-4'>
            <h3 className='text-lg font-semibold'>Interactive Tab 1</h3>
            <p className='text-muted-foreground'>Current value: {value}</p>
            <p className='text-muted-foreground'>Tab changes: {clickCount}</p>
          </div>
        </TabsContent>
        <TabsContent value='tab2'>
          <div className='p-4'>
            <h3 className='text-lg font-semibold'>Interactive Tab 2</h3>
            <p className='text-muted-foreground'>Current value: {value}</p>
            <p className='text-muted-foreground'>Tab changes: {clickCount}</p>
          </div>
        </TabsContent>
        <TabsContent value='tab3'>
          <div className='p-4'>
            <h3 className='text-lg font-semibold'>Interactive Tab 3</h3>
            <p className='text-muted-foreground'>Current value: {value}</p>
            <p className='text-muted-foreground'>Tab changes: {clickCount}</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export const WithUserInteraction: Story = {
  render: () => <WithUserInteractionComponent />,
  play: async ({ canvas }) => {
    const tab2 = canvas.getByText('Interactive Tab 2');
    await userEvent.click(tab2);
    await expect(tab2).toHaveAttribute('data-state', 'active');
  },
};

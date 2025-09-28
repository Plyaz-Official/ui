import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent } from '@storybook/test';

import { Button } from '@/components';

import { Popover, PopoverTrigger, PopoverContent } from './Popover';

type Story = StoryObj<typeof Popover>;

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Popover` component is a floating panel that appears on top of the page content when triggered. Built with Radix UI and styled with Tailwind CSS.',
      },
    },
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls whether the popover is open or closed.',
    },
    onOpenChange: {
      action: 'openChange',
      description: 'Called when the open state changes.',
    },
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline'>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className='space-y-2'>
          <h4 className='font-medium leading-none'>Popover Title</h4>
          <p className='text-sm text-muted-foreground'>
            This is the popover content. It can contain any React elements.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline'>Open Settings</Button>
      </PopoverTrigger>
      <PopoverContent className='w-80'>
        <div className='space-y-4'>
          <div className='space-y-2'>
            <h4 className='font-medium leading-none'>Settings</h4>
            <p className='text-sm text-muted-foreground'>Manage your application settings.</p>
          </div>
          <div className='space-y-2'>
            <label htmlFor='theme' className='text-sm font-medium'>
              Theme
            </label>
            <select className='w-full p-2 border rounded'>
              <option>Light</option>
              <option>Dark</option>
              <option>System</option>
            </select>
          </div>
          <div className='flex justify-end space-x-2'>
            <Button variant='outline' size='sm'>
              Cancel
            </Button>
            <Button size='sm'>Save</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const TopPosition: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline'>Open Top</Button>
      </PopoverTrigger>
      <PopoverContent side='top' className='w-64'>
        <div className='space-y-2'>
          <h4 className='font-medium leading-none'>Top Position</h4>
          <p className='text-sm text-muted-foreground'>This popover appears above the trigger.</p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const BottomPosition: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline'>Open Bottom</Button>
      </PopoverTrigger>
      <PopoverContent side='bottom' className='w-64'>
        <div className='space-y-2'>
          <h4 className='font-medium leading-none'>Bottom Position</h4>
          <p className='text-sm text-muted-foreground'>This popover appears below the trigger.</p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const LeftPosition: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline'>Open Left</Button>
      </PopoverTrigger>
      <PopoverContent side='left' className='w-64'>
        <div className='space-y-2'>
          <h4 className='font-medium leading-none'>Left Position</h4>
          <p className='text-sm text-muted-foreground'>
            This popover appears to the left of the trigger.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const RightPosition: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline'>Open Right</Button>
      </PopoverTrigger>
      <PopoverContent side='right' className='w-64'>
        <div className='space-y-2'>
          <h4 className='font-medium leading-none'>Right Position</h4>
          <p className='text-sm text-muted-foreground'>
            This popover appears to the right of the trigger.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline'>Create New</Button>
      </PopoverTrigger>
      <PopoverContent className='w-80'>
        <div className='space-y-4'>
          <div className='space-y-2'>
            <h4 className='font-medium leading-none'>Create New Item</h4>
            <p className='text-sm text-muted-foreground'>
              Fill out the form below to create a new item.
            </p>
          </div>
          <div className='space-y-4'>
            <div className='space-y-2'>
              <label htmlFor='name' className='text-sm font-medium'>
                Name
              </label>
              <input className='w-full p-2 border rounded' placeholder='Enter name' />
            </div>
            <div className='space-y-2'>
              <label htmlFor='description' className='text-sm font-medium'>
                Description
              </label>
              <textarea
                className='w-full p-2 border rounded'
                placeholder='Enter description'
                rows={3}
              />
            </div>
            <div className='flex justify-end space-x-2'>
              <Button variant='outline' size='sm'>
                Cancel
              </Button>
              <Button size='sm'>Create</Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const UserInteraction: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' onClick={fn()}>
          Interactive Popover
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className='space-y-2'>
          <h4 className='font-medium leading-none'>Interactive Content</h4>
          <p className='text-sm text-muted-foreground'>
            This popover demonstrates user interaction.
          </p>
          <Button size='sm' onClick={fn()}>
            Action Button
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
  play: async ({ canvas }) => {
    const canvasElement = await canvas.findByRole('button');
    // Interaction performance test
    const start = performance.now();
    await userEvent.click(canvasElement);
    const end = performance.now();
    const duration = end - start;
    const expectDuration = 200;
    await expect(duration).toBeLessThan(expectDuration);
  },
};

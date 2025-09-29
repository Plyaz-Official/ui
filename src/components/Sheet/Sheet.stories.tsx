import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription
} from '@/components/client';
import { Button } from '@/components';

type Story = StoryObj<typeof Sheet>;

const meta: Meta<typeof Sheet> = {
  title: 'Components/Sheet',
  component: Sheet,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Sheet` component provides a slide-out panel that can be triggered from any side of the screen. It is built with Radix UI and styled with Tailwind CSS, offering a flexible and accessible overlay solution.',
      },
    },
  },
  argTypes: {
    children: {
      control: false,
      description: 'The content to be displayed inside the sheet.',
    },
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline'>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <label htmlFor='name' className='text-right'>
              Name
            </label>
            <input
              id='name'
              defaultValue='Pedro Duarte'
              className='col-span-3 rounded-md border border-input bg-background px-3 py-2'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <label htmlFor='username' className='text-right'>
              Username
            </label>
            <input
              id='username'
              defaultValue='@peduarte'
              className='col-span-3 rounded-md border border-input bg-background px-3 py-2'
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type='submit'>Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const DifferentSides: Story = {
  render: () => (
    <div className='space-x-4'>
      {/* Left Side */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline'>Left</Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>Menu items</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      {/* Right Side */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline'>Right</Button>
        </SheetTrigger>
        <SheetContent side='right'>
          <SheetHeader>
            <SheetTitle>Settings</SheetTitle>
            <SheetDescription>Configuration</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      {/* Top Side */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline'>Top</Button>
        </SheetTrigger>
        <SheetContent side='top'>
          <SheetHeader>
            <SheetTitle>Notifications</SheetTitle>
            <SheetDescription>Alerts and updates</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      {/* Bottom Side */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline'>Bottom</Button>
        </SheetTrigger>
        <SheetContent side='bottom'>
          <SheetHeader>
            <SheetTitle>Quick Actions</SheetTitle>
            <SheetDescription>Common tasks</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline'>Open Form</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Create Item</SheetTitle>
          <SheetDescription>Fill out the form below.</SheetDescription>
        </SheetHeader>
        <form className='grid gap-4 py-4'>
          <div className='space-y-2'>
            <label htmlFor='title' className='text-sm font-medium'>
              Title
            </label>
            <input
              id='title'
              className='w-full rounded-md border border-input bg-background px-3 py-2'
            />
          </div>
          <div className='space-y-2'>
            <label htmlFor='description' className='text-sm font-medium'>
              Description
            </label>
            <textarea
              id='description'
              className='w-full rounded-md border border-input bg-background px-3 py-2'
              rows={3}
            />
          </div>
        </form>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant='outline'>Cancel</Button>
          </SheetClose>
          <Button type='submit'>Create</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const WithCustomWidth: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline'>Open Wide Sheet</Button>
      </SheetTrigger>
      <SheetContent className='w-[600px] sm:max-w-[600px]'>
        <SheetHeader>
          <SheetTitle>Wide Sheet</SheetTitle>
          <SheetDescription>This sheet has a custom width of 600px.</SheetDescription>
        </SheetHeader>
        <div className='p-4'>
          <p>Content for wide sheet</p>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

const WithControlledStateComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='space-y-4'>
      <div className='flex gap-2'>
        <Button onClick={() => setOpen(true)}>Open Sheet</Button>
        <Button onClick={() => setOpen(false)} variant='outline'>
          Close Sheet
        </Button>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Controlled Sheet</SheetTitle>
            <SheetDescription>This sheet&apos;s state is controlled externally.</SheetDescription>
          </SheetHeader>
          <div className='p-4'>
            <p>Sheet is {open ? 'open' : 'closed'}</p>
            <Button onClick={() => setOpen(false)} className='mt-4'>
              Close from inside
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export const WithControlledState: Story = {
  render: () => <WithControlledStateComponent />,
};

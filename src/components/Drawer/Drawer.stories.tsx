import type { Meta, StoryObj } from '@storybook/react';
import { userEvent } from '@storybook/test';
import { useState } from 'react';

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/client';
import { Button } from '@/components';

type Story = StoryObj<typeof Drawer>;

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Drawer` component is a slide-out panel that appears from the edge of the screen. It provides a way to display additional content or navigation without taking up the full screen. Built with Vaul and styled with Tailwind CSS.',
      },
    },
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the drawer is open.',
    },
    onOpenChange: {
      action: 'openChanged',
      description: 'Called when the open state changes.',
    },
    direction: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'The direction from which the drawer slides in.',
    },
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant='outline'>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button variant='outline'>Cancel</Button>
          <Button variant='destructive'>Delete</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const BottomDrawer: Story = {
  render: () => (
    <Drawer direction='bottom'>
      <DrawerTrigger asChild>
        <Button variant='outline'>Open Bottom Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Bottom Drawer</DrawerTitle>
          <DrawerDescription>This drawer slides up from the bottom.</DrawerDescription>
        </DrawerHeader>
        <div className='p-4'>
          <p>This is the content of the bottom drawer.</p>
        </div>
        <DrawerFooter>
          <Button variant='outline'>Cancel</Button>
          <Button>Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const TopDrawer: Story = {
  render: () => (
    <Drawer direction='top'>
      <DrawerTrigger asChild>
        <Button variant='outline'>Open Top Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Top Drawer</DrawerTitle>
          <DrawerDescription>This drawer slides down from the top.</DrawerDescription>
        </DrawerHeader>
        <div className='p-4'>
          <p>This is the content of the top drawer.</p>
        </div>
        <DrawerFooter>
          <Button variant='outline'>Cancel</Button>
          <Button>Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const LeftDrawer: Story = {
  render: () => (
    <Drawer direction='left'>
      <DrawerTrigger asChild>
        <Button variant='outline'>Open Left Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Left Drawer</DrawerTitle>
          <DrawerDescription>This drawer slides in from the left.</DrawerDescription>
        </DrawerHeader>
        <div className='p-4'>
          <p>This is the content of the left drawer.</p>
        </div>
        <DrawerFooter>
          <Button variant='outline'>Cancel</Button>
          <Button>Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const RightDrawer: Story = {
  render: () => (
    <Drawer direction='right'>
      <DrawerTrigger asChild>
        <Button variant='outline'>Open Right Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Right Drawer</DrawerTitle>
          <DrawerDescription>This drawer slides in from the right.</DrawerDescription>
        </DrawerHeader>
        <div className='p-4'>
          <p>This is the content of the right drawer.</p>
        </div>
        <DrawerFooter>
          <Button variant='outline'>Cancel</Button>
          <Button>Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

const FormDrawerComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant='outline'>Edit Profile</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DrawerDescription>
        </DrawerHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <label htmlFor='name' className='text-right'>
              Name
            </label>
            <input
              id='name'
              defaultValue='Pedro Duarte'
              className='col-span-3 rounded-md border border-input px-3 py-2'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <label htmlFor='username' className='text-right'>
              Username
            </label>
            <input
              id='username'
              defaultValue='@peduarte'
              className='col-span-3 rounded-md border border-input px-3 py-2'
            />
          </div>
        </div>
        <DrawerFooter>
          <Button variant='outline' onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>Save changes</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export const FormDrawer: Story = {
  render: () => <FormDrawerComponent />,
};

export const NavigationDrawer: Story = {
  render: () => (
    <Drawer direction='left'>
      <DrawerTrigger asChild>
        <Button variant='outline'>Open Navigation</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Navigation</DrawerTitle>
          <DrawerDescription>Navigate through the application.</DrawerDescription>
        </DrawerHeader>
        <nav className='flex flex-col gap-2 p-4'>
          <a href='/' className='p-2 hover:bg-accent rounded-md'>
            Home
          </a>
          <a href='/about' className='p-2 hover:bg-accent rounded-md'>
            About
          </a>
          <a href='/services' className='p-2 hover:bg-accent rounded-md'>
            Services
          </a>
          <a href='/contact' className='p-2 hover:bg-accent rounded-md'>
            Contact
          </a>
        </nav>
        <DrawerFooter>
          <Button variant='outline'>Close</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const LargeContentDrawer: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant='outline'>Open Large Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Large Content Drawer</DrawerTitle>
          <DrawerDescription>
            This drawer contains a lot of content to demonstrate scrolling.
          </DrawerDescription>
        </DrawerHeader>
        <div className='p-4 space-y-4'>
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className='p-4 border rounded-md'>
              <h3 className='font-semibold'>Item {i + 1}</h3>
              <p className='text-sm text-muted-foreground'>
                This is item {i + 1} in the drawer content.
              </p>
            </div>
          ))}
        </div>
        <DrawerFooter>
          <Button variant='outline'>Cancel</Button>
          <Button>Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant='outline'>Open Custom Drawer</Button>
      </DrawerTrigger>
      <DrawerContent className='bg-gradient-to-b from-background to-muted/20 border-2 border-primary/20'>
        <DrawerHeader>
          <DrawerTitle className='text-accent'>Custom Styled Drawer</DrawerTitle>
          <DrawerDescription>This drawer has custom styling applied.</DrawerDescription>
        </DrawerHeader>
        <div className='p-4'>
          <p>This drawer has custom styling applied.</p>
        </div>
        <DrawerFooter>
          <Button variant='outline'>Cancel</Button>
          <Button>Confirm</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

const ControlledDrawerComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='space-y-4'>
      <div className='flex gap-2'>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Button onClick={() => setOpen(false)}>Close Drawer</Button>
      </div>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Controlled Drawer</DrawerTitle>
            <DrawerDescription>This drawer is controlled by external state.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button variant='outline' onClick={() => setOpen(false)}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export const ControlledDrawerUserInteraction: Story = {
  render: () => <ControlledDrawerComponent />,
};

export const UserInteraction: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant='outline' onClick={() => {}}>
          Open Drawer
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Interactive Drawer</DrawerTitle>
          <DrawerDescription>This drawer demonstrates user interaction.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button variant='outline' onClick={() => {}}>
            Cancel
          </Button>
          <Button onClick={() => {}}>Confirm</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const ControlledDrawer: Story = {
  render: () => <ControlledDrawerComponent />,
  play: async ({ canvas }) => {
    const trigger = await canvas.findByText('Open Drawer');
    await userEvent.click(trigger);
  },
};

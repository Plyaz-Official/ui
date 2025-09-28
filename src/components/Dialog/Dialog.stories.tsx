import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent } from '@storybook/test';
import { useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  Button,
} from '@/components';

type Story = StoryObj<typeof Dialog>;

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Dialog` component is a modal dialog that appears on top of the page content. It provides a way to display important information or collect user input without navigating away from the current page. Built with Radix UI and styled with Tailwind CSS.',
      },
    },
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the dialog is open.',
    },
    onOpenChange: {
      action: 'openChanged',
      description: 'Called when the open state changes.',
    },
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant='outline'>Cancel</Button>
          <Button variant='destructive'>Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const WithoutCloseButton: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Important Notice</DialogTitle>
          <DialogDescription>
            This dialog cannot be closed by clicking the X button.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant='outline'>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const LargeDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Open Large Dialog</Button>
      </DialogTrigger>
      <DialogContent className='max-w-2xl'>
        <DialogHeader>
          <DialogTitle>Large Dialog</DialogTitle>
          <DialogDescription>
            This is a larger dialog with more content to demonstrate the responsive behavior.
          </DialogDescription>
        </DialogHeader>
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
        <DialogFooter>
          <Button variant='outline'>Cancel</Button>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

const FormDialogComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='outline'>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
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
        <DialogFooter>
          <Button variant='outline' onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const FormDialog: Story = {
  render: () => <FormDialogComponent />,
};

export const AlertDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='destructive'>Delete Account</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This will permanently delete your account and all of your data. This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant='outline'>Cancel</Button>
          <Button variant='destructive'>Delete Account</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Open Custom Dialog</Button>
      </DialogTrigger>
      <DialogContent className='max-w-md bg-gradient-to-b from-background to-muted/20 border-2 border-primary/20'>
        <DialogHeader>
          <DialogTitle className='text-primary'>Custom Styled Dialog</DialogTitle>
          <DialogDescription>This dialog has custom styling applied.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant='outline'>Cancel</Button>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const MultipleDialogs: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline'>Dialog 1</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>First Dialog</DialogTitle>
            <DialogDescription>This is the first dialog.</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline'>Dialog 2</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Second Dialog</DialogTitle>
            <DialogDescription>This is the second dialog.</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  ),
};

const ControlledDialogComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='space-y-4'>
      <div className='flex gap-2'>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Button onClick={() => setOpen(false)}>Close Dialog</Button>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Controlled Dialog</DialogTitle>
            <DialogDescription>This dialog is controlled by external state.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant='outline' onClick={() => setOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export const UserInteraction: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' onClick={() => {}}>
          Open Dialog
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Interactive Dialog</DialogTitle>
          <DialogDescription>This dialog demonstrates user interaction.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant='outline' onClick={() => {}}>
            Cancel
          </Button>
          <Button onClick={() => {}}>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const ControlledDialog: Story = {
  render: () => <ControlledDialogComponent />,
  play: async ({ canvas }) => {
    const trigger = await canvas.findByText('Open Dialog');
    await userEvent.click(trigger);
    await expect(canvas.getByText('Interactive Dialog')).toBeInTheDocument();
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/client';

/**
 * A drawer component for React.
 */
const meta: Meta<typeof Drawer> = {
  title: 'components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  args: {
    onOpenChange: fn(),
    onClose: fn(),
    onAnimationEnd: fn(),
  },
  render: args => (
    <Drawer {...args}>
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you sure absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose className='bg-primary px-4 py-2 rounded text-primary-foreground'>
            Submit
          </DrawerClose>
          <DrawerClose className='hover:underline'>Cancel</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

/**
 * The default form of the drawer.
 */
export const Default: Story = {
  args: {},
};

export const ShouldOpenCloseWithSubmit: Story = {
  name: 'when clicking Submit button, should close the drawer',
  tags: ['!autodocs'],
  args: {},
  play: async ({ args, canvasElement, step }) => {
    const canvasBody = within(canvasElement.ownerDocument.body);

    await step('Open the drawer', async () => {
      await userEvent.click(await canvasBody.findByRole('button', { name: /open/i }));
      await expect(args.onOpenChange).toHaveBeenCalled();

      const dialog = await canvasBody.findByRole('dialog');
      await expect(dialog).toBeInTheDocument();
      await expect(dialog).toHaveAttribute('data-state', 'open');
    });

    await step('Close the drawer', async () => {
      await userEvent.click(await canvasBody.findByRole('button', { name: /submit/i }), {
        delay: 100,
      });
      await expect(args.onClose).toHaveBeenCalled();
      await expect(await canvasBody.findByRole('dialog')).toHaveAttribute('data-state', 'closed');
    });
  },
};

export const ShouldOpenCloseWithCancel: Story = {
  name: 'when clicking Cancel button, should close the drawer',
  tags: ['!autodocs'],
  args: {},
  play: async ({ args, canvasElement, step }) => {
    const canvasBody = within(canvasElement.ownerDocument.body);

    await step('Open the drawer', async () => {
      await userEvent.click(await canvasBody.findByRole('button', { name: /open/i }));
      await expect(args.onOpenChange).toHaveBeenCalled();

      const dialog = await canvasBody.findByRole('dialog');
      await expect(dialog).toBeInTheDocument();
      await expect(dialog).toHaveAttribute('data-state', 'open');
    });

    await step('Close the drawer', async () => {
      await userEvent.click(await canvasBody.findByRole('button', { name: /cancel/i }), {
        delay: 100,
      });
      await expect(args.onClose).toHaveBeenCalled();
      await expect(await canvasBody.findByRole('dialog')).toHaveAttribute('data-state', 'closed');
    });
  },
};

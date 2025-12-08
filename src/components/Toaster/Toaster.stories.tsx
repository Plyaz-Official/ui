import { expect, userEvent, waitFor, within, fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';
import { toast } from 'sonner';
import { CircleCheckIcon } from 'lucide-react';

import { Button } from '@/components';
import { Toaster } from '@/components/client';

/**
 * An opinionated toast component for React.
 */
const meta: Meta<typeof Toaster> = {
  title: 'components/Sonner',
  component: Toaster,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    position: 'bottom-right',
  },
  parameters: {
    layout: 'fullscreen',
  },
  render: args => (
    <div className='flex flex-wrap justify-center items-center gap-2 min-h-96 p-8'>
      <Button
        onClick={() =>
          toast('Event has been created', {
            description: new Date().toLocaleString(),
            duration: 999999999,
            icon: <CircleCheckIcon className='size-6' />,
            action: {
              label: 'Undo',
              onClick: fn(),
            },
          })
        }
      >
        Default
      </Button>
      <Button
        onClick={() =>
          toast.success('Success!', {
            description: 'Operation completed successfully',
            duration: 999999999,
            action: {
              label: 'Undo',
              onClick: fn(),
            },
          })
        }
      >
        Success
      </Button>
      <Button
        onClick={() =>
          toast.error('Error!', {
            description: 'Something went wrong',
            duration: 999999999,
            action: {
              label: 'Undo',
              onClick: fn(),
            },
          })
        }
      >
        Error
      </Button>
      <Button
        onClick={() =>
          toast.warning('Warning!', {
            description: 'Please be careful',
            duration: 999999999,
            action: {
              label: 'Undo',
              onClick: fn(),
            },
          })
        }
      >
        Warning
      </Button>
      <Button
        onClick={() =>
          toast.info('Info', {
            description: 'Here is some information',
            duration: 999999999,
            action: {
              label: 'Undo',
              onClick: fn(),
            },
          })
        }
      >
        Info
      </Button>
      <Button
        onClick={() =>
          toast.loading('Loading...', {
            description: 'Please wait',
            duration: 999999999,
            action: {
              label: 'Undo',
              onClick: fn(),
            },
          })
        }
      >
        Loading
      </Button>
      <Toaster {...args} />
    </div>
  ),
} satisfies Meta<typeof Toaster>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the toaster.
 */
export const Default: Story = {};

export const ShouldShowToast: Story = {
  name: 'when clicking Show Toast button, should show a toast',
  tags: ['!autodocs'],
  play: async ({ canvasElement, step }) => {
    const canvasBody = within(canvasElement.ownerDocument.body);
    const triggerBtn = await canvasBody.findByRole('button', {
      name: /show/i,
    });

    await step('create a toast', async () => {
      await userEvent.click(triggerBtn);
      await waitFor(() => expect(canvasBody.queryByRole('listitem')).toBeInTheDocument());
    });

    await step('create more toasts', async () => {
      await userEvent.click(triggerBtn);
      await userEvent.click(triggerBtn);
      const length = 3;
      await waitFor(() => expect(canvasBody.getAllByRole('listitem')).toHaveLength(length));
    });
  },
};

export const ShouldCloseToast: Story = {
  name: 'when clicking the close button, should close the toast',
  tags: ['!autodocs'],
  play: async ({ canvasElement, step }) => {
    const canvasBody = within(canvasElement.ownerDocument.body);
    const triggerBtn = await canvasBody.findByRole('button', {
      name: /show/i,
    });

    await step('create a toast', async () => {
      await userEvent.click(triggerBtn);
    });

    await step('close the toast', async () => {
      await userEvent.click(await canvasBody.findByRole('button', { name: /undo/i }));
      await waitFor(() => expect(canvasBody.queryByRole('listitem')).not.toBeInTheDocument());
    });
  },
};

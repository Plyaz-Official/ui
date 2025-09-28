import type { Meta, StoryObj } from '@storybook/react';
import { toast } from 'sonner';

import { Toaster } from '@/components';

type Story = StoryObj<typeof Toaster>;

const meta: Meta<typeof Toaster> = {
  title: 'Components/Toaster',
  component: Toaster,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Toaster` component provides toast notifications with theme support. It is built with Sonner and styled with Tailwind CSS, offering a flexible and accessible toast solution.',
      },
    },
  },
  argTypes: {
    theme: {
      control: 'select',
      options: ['light', 'dark', 'system'],
      description: 'The theme of the toaster.',
    },
    position: {
      control: 'select',
      options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'],
      description: 'The position of the toaster.',
    },
    expand: {
      control: 'boolean',
      description: 'Whether to expand the toaster.',
    },
    richColors: {
      control: 'boolean',
      description: 'Whether to use rich colors.',
    },
    closeButton: {
      control: 'boolean',
      description: 'Whether to show close button.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the toaster.',
    },
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="space-x-2">
        <button
          onClick={() => toast('Hello World!')}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
          Show Toast
        </button>
      </div>
    </div>
  ),
};

export const WithTheme: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster theme="light" />
      <div className="space-x-2">
        <button
          onClick={() => toast('Light theme toast!')}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
          Light Theme
        </button>
      </div>
    </div>
  ),
};

export const WithPosition: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster position="top-right" />
      <div className="space-x-2">
        <button
          onClick={() => toast('Top right toast!')}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
          Top Right
        </button>
      </div>
    </div>
  ),
};

export const WithExpand: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster expand />
      <div className="space-x-2">
        <button
          onClick={() => toast('Expanded toast!')}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
          Expanded
        </button>
      </div>
    </div>
  ),
};

export const WithRichColors: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster richColors />
      <div className="space-x-2">
        <button
          onClick={() => toast.success('Success toast!')}
          className="px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Success
        </button>
        <button
          onClick={() => toast.error('Error toast!')}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Error
        </button>
        <button
          onClick={() => toast.warning('Warning toast!')}
          className="px-4 py-2 bg-yellow-500 text-white rounded-md"
        >
          Warning
        </button>
        <button
          onClick={() => toast.info('Info toast!')}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Info
        </button>
      </div>
    </div>
  ),
};

export const WithCloseButton: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster closeButton />
      <div className="space-x-2">
        <button
          onClick={() => toast('Toast with close button!')}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
          With Close Button
        </button>
      </div>
    </div>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster className="custom-toaster" />
      <div className="space-x-2">
        <button
          onClick={() => toast('Custom styled toast!')}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
          Custom Styled
        </button>
      </div>
    </div>
  ),
};

export const WithMultipleToasts: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="space-x-2">
        <button
          onClick={() => {
            toast('First toast!');
            toast('Second toast!');
            toast('Third toast!');
          }}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
          Multiple Toasts
        </button>
      </div>
    </div>
  ),
};

export const WithDifferentTypes: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="space-x-2">
        <button
          onClick={() => toast('Default toast!')}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
          Default
        </button>
        <button
          onClick={() => toast.success('Success toast!')}
          className="px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Success
        </button>
        <button
          onClick={() => toast.error('Error toast!')}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Error
        </button>
        <button
          onClick={() => toast.warning('Warning toast!')}
          className="px-4 py-2 bg-yellow-500 text-white rounded-md"
        >
          Warning
        </button>
        <button
          onClick={() => toast.info('Info toast!')}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Info
        </button>
      </div>
    </div>
  ),
};

export const WithActions: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="space-x-2">
        <button
          onClick={() => toast('Toast with action!', {
            action: {
              label: 'Undo',
              onClick: () => toast('Undone!'),
            },
          })}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
          With Action
        </button>
      </div>
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="space-x-2">
        <button
          onClick={() => toast('Toast with description!', {
            description: 'This is a longer description that provides more context.',
          })}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
          With Description
        </button>
      </div>
    </div>
  ),
};

export const WithDuration: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="space-x-2">
        <button
          onClick={() => toast('Short duration toast!', { duration: 1000 })}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
          Short Duration
        </button>
        <button
          onClick={() => toast('Long duration toast!', { duration: 10000 })}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
          Long Duration
        </button>
      </div>
    </div>
  ),
};

export const WithPromise: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="space-x-2">
        <button
          onClick={() => {
            const TWO_SECONDS = 2000;
            const promise = new Promise((resolve) => {
              setTimeout(() => resolve('Promise resolved!'), TWO_SECONDS);
            });
            
            toast.promise(promise, {
              loading: 'Loading...',
              success: 'Success!',
              error: 'Error!',
            });
          }}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
          Promise Toast
        </button>
      </div>
    </div>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="space-x-2">
        <button
          onClick={() => toast(
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Custom content toast!</span>
            </div>
          )}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
          Custom Content
        </button>
      </div>
    </div>
  ),
};

export const WithLoading: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="space-x-2">
        <button
          onClick={() => toast.loading('Loading...', {
            id: 'loading-toast',
          })}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
          Loading Toast
        </button>
        <button
          onClick={() => toast.dismiss('loading-toast')}
          className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md"
        >
          Dismiss
        </button>
      </div>
    </div>
  ),
};

export const WithDismiss: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="space-x-2">
        <button
          onClick={() => toast('Dismissible toast!', { id: 'dismissible' })}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
          Show Toast
        </button>
        <button
          onClick={() => toast.dismiss('dismissible')}
          className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md"
        >
          Dismiss
        </button>
        <button
          onClick={() => toast.dismiss()}
          className="px-4 py-2 bg-destructive text-white rounded-md"
        >
          Dismiss All
        </button>
      </div>
    </div>
  ),
};

export const WithKeyboardNavigation: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="space-x-2">
        <button
          onClick={() => toast('Keyboard accessible toast!')}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
          Keyboard Accessible
        </button>
      </div>
    </div>
  ),
};

export const WithPerformance: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="space-x-2">
        <button
          onClick={() => {
            for (let i = 0; i < 10; i++) {
              toast(`Toast ${i + 1}`);
            }
          }}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
          Multiple Toasts
        </button>
      </div>
    </div>
  ),
};

export const WithUserInteraction: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="space-x-2">
        <button
          onClick={() => toast('Interactive toast!', {
            action: {
              label: 'Click me',
              onClick: () => toast('Action clicked!'),
            },
          })}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
          Interactive Toast
        </button>
      </div>
    </div>
  ),
  play: async ({ canvas }) => {
    const button = canvas.getByText('Interactive Toast');
    await userEvent.click(button);
  },
};

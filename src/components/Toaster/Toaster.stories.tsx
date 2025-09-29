import type { Meta, StoryObj } from '@storybook/react';
import { toast } from 'sonner';

import { Toaster } from '@/components/client';

const meta: Meta<typeof Toaster> = {
  title: 'Components/Toaster',
  component: Toaster,
};
export default meta;

type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => (
    <div className='space-y-4'>
      <Toaster />
      <button
        onClick={() => toast('Hello World!')}
        className='px-4 py-2 bg-primary text-primary-foreground rounded-md'
      >
        Show Toast
      </button>
    </div>
  ),
};

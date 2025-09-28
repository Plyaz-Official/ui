import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent } from '@storybook/test';
import { useState } from 'react';
import { HelpCircle, Info, Settings, User, Mail, Phone } from 'lucide-react';

import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider, Button } from '@/components';

type Story = StoryObj<typeof Tooltip>;

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Tooltip` component provides contextual information when users hover over or focus on an element. It is built with Radix UI and styled with Tailwind CSS, offering a flexible and accessible tooltip solution.',
      },
    },
  },
  argTypes: {
    delayDuration: {
      control: 'number',
      description: 'The delay duration in milliseconds before showing the tooltip.',
    },
    disableHoverableContent: {
      control: 'boolean',
      description: 'Whether to disable hoverable content.',
    },
    open: {
      control: 'boolean',
      description: 'Whether the tooltip is open.',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Whether the tooltip is open by default.',
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
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant='outline'>
          <HelpCircle className='h-4 w-4' />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithText: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button>Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithLongText: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant='outline'>
          <Info className='h-4 w-4' />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>
          This is a longer tooltip that demonstrates how the tooltip handles extended text content.
        </p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithCustomDelay: Story = {
  render: () => (
    <TooltipProvider delayDuration={500}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>
            <Settings className='h-4 w-4' />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This tooltip has a 500ms delay</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant='outline'>
          <User className='h-4 w-4' />
        </Button>
      </TooltipTrigger>
      <TooltipContent className='bg-blue-500 text-white'>
        <p>Custom styled tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithPositioning: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>Top</Button>
        </TooltipTrigger>
        <TooltipContent side='top'>
          <p>Tooltip on top</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>Right</Button>
        </TooltipTrigger>
        <TooltipContent side='right'>
          <p>Tooltip on right</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side='bottom'>
          <p>Tooltip on bottom</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>Left</Button>
        </TooltipTrigger>
        <TooltipContent side='left'>
          <p>Tooltip on left</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const WithAlignment: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>Start</Button>
        </TooltipTrigger>
        <TooltipContent side='top' align='start'>
          <p>Aligned to start</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>Center</Button>
        </TooltipTrigger>
        <TooltipContent side='top' align='center'>
          <p>Aligned to center</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>End</Button>
        </TooltipTrigger>
        <TooltipContent side='top' align='end'>
          <p>Aligned to end</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const WithMultipleTooltips: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>
            <Mail className='h-4 w-4' />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Send email</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>
            <Phone className='h-4 w-4' />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Call phone</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>
            <Settings className='h-4 w-4' />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Open settings</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button disabled>
          <HelpCircle className='h-4 w-4' />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This tooltip won&apos;t show on disabled button</p>
      </TooltipContent>
    </Tooltip>
  ),
};

const WithControlledStateComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='space-y-4'>
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger asChild>
          <Button variant='outline'>
            <Info className='h-4 w-4' />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Controlled tooltip</p>
        </TooltipContent>
      </Tooltip>

      <div className='flex gap-2'>
        <Button onClick={() => setOpen(true)} size='sm'>
          Show Tooltip
        </Button>
        <Button onClick={() => setOpen(false)} size='sm' variant='outline'>
          Hide Tooltip
        </Button>
      </div>
    </div>
  );
};

export const WithControlledState: Story = {
  render: () => <WithControlledStateComponent />,
};

export const WithRichContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant='outline'>
          <Info className='h-4 w-4' />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <div className='space-y-1'>
          <p className='font-semibold'>Rich Tooltip</p>
          <p className='text-xs opacity-80'>This tooltip contains multiple elements</p>
        </div>
      </TooltipContent>
    </Tooltip>
  ),
};

const WithUserInteractionComponent = () => {
  const [showCount, setShowCount] = useState(0);

  return (
    <div className='space-y-4'>
      <Tooltip
        onOpenChange={open => {
          if (open) setShowCount(prev => prev + 1);
        }}
      >
        <TooltipTrigger asChild>
          <Button variant='outline'>
            <HelpCircle className='h-4 w-4' />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Interactive tooltip</p>
        </TooltipContent>
      </Tooltip>

      <p className='text-sm text-muted-foreground'>Tooltip shown {showCount} times</p>
    </div>
  );
};

export const WithUserInteraction: Story = {
  render: () => <WithUserInteractionComponent />,
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button');
    await userEvent.hover(button);
    await expect(button).toBeInTheDocument();
  },
};

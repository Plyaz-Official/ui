import type { Meta, StoryObj } from '@storybook/react';
import { userEvent } from '@storybook/test';
import { useState } from 'react';

import { HoverCard, HoverCardContent, HoverCardTrigger, Button } from '@/components';

type Story = StoryObj<typeof HoverCard>;

const meta: Meta<typeof HoverCard> = {
  title: 'Components/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `HoverCard` component is a card that appears when a user hovers over a trigger element. It provides a way to display additional information or content without taking up permanent space. Built with Radix UI and styled with Tailwind CSS.',
      },
    },
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the hover card is open.',
    },
    onOpenChange: {
      action: 'openChanged',
      description: 'Called when the open state changes.',
    },
    openDelay: {
      control: 'number',
      description: 'The delay in milliseconds before the hover card opens.',
    },
    closeDelay: {
      control: 'number',
      description: 'The delay in milliseconds before the hover card closes.',
    },
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant='outline'>@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className='space-y-1'>
          <h4 className='text-sm font-semibold'>@nextjs</h4>
          <p className='text-sm text-muted-foreground'>
            The React Framework – created and maintained by @vercel.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const WithImage: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant='outline'>@vercel</Button>
      </HoverCardTrigger>
      <HoverCardContent className='w-80'>
        <div className='flex justify-between space-x-4'>
          <div className='space-y-1'>
            <h4 className='text-sm font-semibold'>@vercel</h4>
            <p className='text-sm text-muted-foreground'>
              The platform for the frontend cloud. Build, scale, and ship faster.
            </p>
            <div className='flex items-center pt-2'>
              <span className='text-xs text-muted-foreground'>Joined December 2021</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const WithAvatar: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant='outline'>John Doe</Button>
      </HoverCardTrigger>
      <HoverCardContent className='w-80'>
        <div className='flex justify-between space-x-4'>
          <div className='space-y-1'>
            <h4 className='text-sm font-semibold'>John Doe</h4>
            <p className='text-sm text-muted-foreground'>
              Software Engineer at Vercel. Building the future of web development.
            </p>
            <div className='flex items-center pt-2'>
              <span className='text-xs text-muted-foreground'>Followed by 1,234 people</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const WithStats: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant='outline'>React</Button>
      </HoverCardTrigger>
      <HoverCardContent className='w-80'>
        <div className='space-y-1'>
          <h4 className='text-sm font-semibold'>React</h4>
          <p className='text-sm text-muted-foreground'>
            A JavaScript library for building user interfaces.
          </p>
          <div className='flex items-center pt-2 space-x-4'>
            <div className='flex items-center space-x-1'>
              <span className='text-xs text-muted-foreground'>Stars:</span>
              <span className='text-xs font-medium'>200k+</span>
            </div>
            <div className='flex items-center space-x-1'>
              <span className='text-xs text-muted-foreground'>Forks:</span>
              <span className='text-xs font-medium'>40k+</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const WithActions: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant='outline'>View Profile</Button>
      </HoverCardTrigger>
      <HoverCardContent className='w-80'>
        <div className='space-y-1'>
          <h4 className='text-sm font-semibold'>Jane Smith</h4>
          <p className='text-sm text-muted-foreground'>
            Product Designer at Figma. Passionate about creating beautiful user experiences.
          </p>
          <div className='flex items-center pt-2 space-x-2'>
            <Button size='sm' variant='outline'>
              Follow
            </Button>
            <Button size='sm' variant='outline'>
              Message
            </Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const WithCustomDelay: Story = {
  render: () => (
    <HoverCard openDelay={500} closeDelay={200}>
      <HoverCardTrigger asChild>
        <Button variant='outline'>Hover with delay</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className='space-y-1'>
          <h4 className='text-sm font-semibold'>Delayed Hover</h4>
          <p className='text-sm text-muted-foreground'>
            This hover card has a custom delay of 500ms to open and 200ms to close.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const WithDifferentAlignments: Story = {
  render: () => (
    <div className='flex space-x-4'>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant='outline'>Start</Button>
        </HoverCardTrigger>
        <HoverCardContent align='start'>
          <div className='space-y-1'>
            <h4 className='text-sm font-semibold'>Start Aligned</h4>
            <p className='text-sm text-muted-foreground'>
              This hover card is aligned to the start.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant='outline'>Center</Button>
        </HoverCardTrigger>
        <HoverCardContent align='center'>
          <div className='space-y-1'>
            <h4 className='text-sm font-semibold'>Center Aligned</h4>
            <p className='text-sm text-muted-foreground'>
              This hover card is aligned to the center.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant='outline'>End</Button>
        </HoverCardTrigger>
        <HoverCardContent align='end'>
          <div className='space-y-1'>
            <h4 className='text-sm font-semibold'>End Aligned</h4>
            <p className='text-sm text-muted-foreground'>This hover card is aligned to the end.</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant='outline'>Custom Styled</Button>
      </HoverCardTrigger>
      <HoverCardContent className='w-80 bg-gradient-to-b from-background to-muted/20 border-2 border-primary/20'>
        <div className='space-y-1'>
          <h4 className='text-sm font-semibold text-accent'>Custom Styled Hover Card</h4>
          <p className='text-sm text-muted-foreground'>
            This hover card has custom styling applied.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const WithLongContent: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant='destructive'>Long Content</Button>
      </HoverCardTrigger>
      <HoverCardContent className='w-96'>
        <div className='space-y-2'>
          <h4 className='text-sm font-semibold'>Long Content Hover Card</h4>
          <p className='text-sm text-muted-foreground'>
            This hover card contains a lot of content to demonstrate how it handles longer text and
            multiple paragraphs. It should wrap properly and maintain good readability.
          </p>
          <p className='text-sm text-muted-foreground'>
            The content can include multiple paragraphs, lists, and other elements while maintaining
            proper spacing and alignment.
          </p>
          <div className='flex items-center pt-2'>
            <span className='text-xs text-muted-foreground'>Last updated: 2 hours ago</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

const ControlledHoverCardComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='space-y-4'>
      <div className='flex gap-2'>
        <Button onClick={() => setOpen(true)}>Open Hover Card</Button>
        <Button onClick={() => setOpen(false)}>Close Hover Card</Button>
      </div>
      <HoverCard open={open} onOpenChange={setOpen}>
        <HoverCardTrigger asChild>
          <Button variant='outline'>Controlled Hover Card</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className='space-y-1'>
            <h4 className='text-sm font-semibold'>Controlled Hover Card</h4>
            <p className='text-sm text-muted-foreground'>
              This hover card is controlled by external state.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export const UserInteraction: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant='outline' onClick={() => {}}>
          Interactive Hover Card
        </Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className='space-y-1'>
          <h4 className='text-sm font-semibold'>Interactive Hover Card</h4>
          <p className='text-sm text-muted-foreground'>
            This hover card demonstrates user interaction.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const ControlledHoverCard: Story = {
  render: () => <ControlledHoverCardComponent />,
  play: async ({ canvas }) => {
    const trigger = await canvas.findByText('Controlled Hover Card');
    await userEvent.hover(trigger);
  },
};

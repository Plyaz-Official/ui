import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, fn } from '@storybook/test';
import { useState } from 'react';
import { Copy, CreditCard, Edit, MoreHorizontal, Settings, Trash2, User } from 'lucide-react';

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuGroup,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
} from '@/components';

type Story = StoryObj<typeof ContextMenu>;

const meta: Meta<typeof ContextMenu> = {
  title: 'Components/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `ContextMenu` component is a right-click menu that appears when users interact with elements. It provides a contextual set of actions and options. Built with Radix UI and styled with Tailwind CSS.',
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional Tailwind CSS classes.',
    },
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className='flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm'>
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className='w-64'>
        <ContextMenuItem>
          <User className='mr-2 h-4 w-4' />
          <span>Profile</span>
          <ContextMenuShortcut>⌘P</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <CreditCard className='mr-2 h-4 w-4' />
          <span>Billing</span>
          <ContextMenuShortcut>⌘B</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <Settings className='mr-2 h-4 w-4' />
          <span>Settings</span>
          <ContextMenuShortcut>⌘S</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <span>Team</span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithDestructiveAction: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className='flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm'>
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className='w-64'>
        <ContextMenuItem>
          <Edit className='mr-2 h-4 w-4' />
          <span>Edit</span>
        </ContextMenuItem>
        <ContextMenuItem>
          <Copy className='mr-2 h-4 w-4' />
          <span>Copy</span>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant='destructive'>
          <Trash2 className='mr-2 h-4 w-4' />
          <span>Delete</span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

const WithCheckboxItemsComponent = () => {
  const [showGrid, setShowGrid] = useState(false);
  const [showRulers, setShowRulers] = useState(true);

  return (
    <ContextMenu>
      <ContextMenuTrigger className='flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm'>
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className='w-64'>
        <ContextMenuLabel>View</ContextMenuLabel>
        <ContextMenuCheckboxItem checked={showGrid} onCheckedChange={setShowGrid}>
          Show Grid
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem checked={showRulers} onCheckedChange={setShowRulers}>
          Show Rulers
        </ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export const WithCheckboxItems: Story = {
  render: () => <WithCheckboxItemsComponent />,
};

const WithRadioItemsComponent = () => {
  const [viewMode, setViewMode] = useState('list');

  return (
    <ContextMenu>
      <ContextMenuTrigger className='flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm'>
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className='w-64'>
        <ContextMenuLabel>View Mode</ContextMenuLabel>
        <ContextMenuRadioGroup value={viewMode} onValueChange={setViewMode}>
          <ContextMenuRadioItem value='list'>List View</ContextMenuRadioItem>
          <ContextMenuRadioItem value='grid'>Grid View</ContextMenuRadioItem>
          <ContextMenuRadioItem value='detail'>Detail View</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export const WithRadioItems: Story = {
  render: () => <WithRadioItemsComponent />,
};

export const WithSubMenu: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className='flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm'>
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className='w-64'>
        <ContextMenuItem>
          <User className='mr-2 h-4 w-4' />
          <span>Profile</span>
        </ContextMenuItem>
        <ContextMenuItem>
          <Settings className='mr-2 h-4 w-4' />
          <span>Settings</span>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <MoreHorizontal className='mr-2 h-4 w-4' />
            <span>More</span>
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>
              <span>Export</span>
            </ContextMenuItem>
            <ContextMenuItem>
              <span>Import</span>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>
              <span>Preferences</span>
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className='flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm'>
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className='w-64'>
        <ContextMenuGroup>
          <ContextMenuItem>
            <Edit className='mr-2 h-4 w-4' />
            <span>Edit</span>
          </ContextMenuItem>
          <ContextMenuItem>
            <Copy className='mr-2 h-4 w-4' />
            <span>Copy</span>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem>
            <User className='mr-2 h-4 w-4' />
            <span>Profile</span>
          </ContextMenuItem>
          <ContextMenuItem>
            <Settings className='mr-2 h-4 w-4' />
            <span>Settings</span>
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithDisabledItems: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className='flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm'>
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className='w-64'>
        <ContextMenuItem>
          <Edit className='mr-2 h-4 w-4' />
          <span>Edit</span>
        </ContextMenuItem>
        <ContextMenuItem disabled>
          <Copy className='mr-2 h-4 w-4' />
          <span>Copy (Disabled)</span>
        </ContextMenuItem>
        <ContextMenuItem>
          <Settings className='mr-2 h-4 w-4' />
          <span>Settings</span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className='flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm'>
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className='w-64 bg-gradient-to-b from-background to-muted/20 border-2 border-primary/20'>
        <ContextMenuItem className='hover:bg-primary/10'>
          <User className='mr-2 h-4 w-4 text-primary' />
          <span>Profile</span>
        </ContextMenuItem>
        <ContextMenuItem className='hover:bg-primary/10'>
          <Settings className='mr-2 h-4 w-4 text-primary' />
          <span>Settings</span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const UserInteraction: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className='flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm'>
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className='w-64'>
        <ContextMenuItem onSelect={fn()}>
          <User className='mr-2 h-4 w-4' />
          <span>Profile</span>
        </ContextMenuItem>
        <ContextMenuItem onSelect={fn()}>
          <Settings className='mr-2 h-4 w-4' />
          <span>Settings</span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
  play: async ({ canvas }) => {
    const trigger = await canvas.findByText('Right click here');
    await userEvent.pointer({ target: trigger, keys: '[MouseRight]' });
    await expect(canvas.getByText('Profile')).toBeInTheDocument();
  },
};

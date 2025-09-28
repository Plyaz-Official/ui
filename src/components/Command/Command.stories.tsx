import type { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/test';
import { useState } from 'react';
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-react';

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components';

type Story = StoryObj<typeof Command>;

const meta: Meta<typeof Command> = {
  title: 'Components/Command',
  component: Command,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "The `Command` component is a command palette interface that provides a searchable list of commands. It's built with CMDK and styled with Tailwind CSS, perfect for implementing command palettes, search interfaces, and keyboard navigation.",
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
    <Command className='rounded-lg border shadow-md'>
      <CommandInput placeholder='Type a command or search...' />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading='Suggestions'>
          <CommandItem>
            <Calendar className='mr-2 h-4 w-4' />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile className='mr-2 h-4 w-4' />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Calculator className='mr-2 h-4 w-4' />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <Command className='rounded-lg border shadow-md'>
      <CommandInput placeholder='Type a command or search...' />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading='Suggestions'>
          <CommandItem>
            <Calendar className='mr-2 h-4 w-4' />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile className='mr-2 h-4 w-4' />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Calculator className='mr-2 h-4 w-4' />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading='Settings'>
          <CommandItem>
            <User className='mr-2 h-4 w-4' />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className='mr-2 h-4 w-4' />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className='mr-2 h-4 w-4' />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const WithShortcuts: Story = {
  render: () => (
    <Command className='rounded-lg border shadow-md'>
      <CommandInput placeholder='Type a command or search...' />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading='Quick Actions'>
          <CommandItem>
            <span>Create new file</span>
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Open file</span>
            <CommandShortcut>⌘O</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Save file</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Find and replace</span>
            <CommandShortcut>⌘⇧F</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const WithDisabledItems: Story = {
  render: () => (
    <Command className='rounded-lg border shadow-md'>
      <CommandInput placeholder='Type a command or search...' />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading='Actions'>
          <CommandItem>
            <span>Available action</span>
          </CommandItem>
          <CommandItem disabled>
            <span>Disabled action</span>
          </CommandItem>
          <CommandItem>
            <span>Another available action</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <Command className='rounded-lg border shadow-md bg-gradient-to-b from-background to-muted/20'>
      <CommandInput
        placeholder='Type a command or search...'
        className='border-b-2 border-primary/20'
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading='Custom Styled Group'>
          <CommandItem className='hover:bg-primary/10'>
            <Calendar className='mr-2 h-4 w-4 text-primary' />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem className='hover:bg-primary/10'>
            <Smile className='mr-2 h-4 w-4 text-primary' />
            <span>Search Emoji</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

const CommandDialogComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className='px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'
      >
        Open Command Palette
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Suggestions'>
            <CommandItem>
              <Calendar className='mr-2 h-4 w-4' />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile className='mr-2 h-4 w-4' />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator className='mr-2 h-4 w-4' />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading='Settings'>
            <CommandItem>
              <User className='mr-2 h-4 w-4' />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className='mr-2 h-4 w-4' />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export const CommandDialogStory: Story = {
  render: () => <CommandDialogComponent />,
};

const WithSearchComponent = () => {
  const [search, setSearch] = useState('');

  const items = [
    { id: '1', title: 'Calendar', icon: Calendar },
    { id: '2', title: 'Calculator', icon: Calculator },
    { id: '3', title: 'Settings', icon: Settings },
    { id: '4', title: 'Profile', icon: User },
  ];

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Command className='rounded-lg border shadow-md'>
      <CommandInput
        placeholder='Type a command or search...'
        value={search}
        onValueChange={setSearch}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading='Results'>
          {filteredItems.map(item => (
            <CommandItem key={item.id}>
              <item.icon className='mr-2 h-4 w-4' />
              <span>{item.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export const WithSearch: Story = {
  render: () => <WithSearchComponent />,
};

export const UserInteraction: Story = {
  render: () => (
    <Command className='rounded-lg border shadow-md'>
      <CommandInput placeholder='Type a command or search...' />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading='Suggestions'>
          <CommandItem onSelect={() => {}}>
            <Calendar className='mr-2 h-4 w-4' />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem onSelect={() => {}}>
            <Smile className='mr-2 h-4 w-4' />
            <span>Search Emoji</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  play: async ({ canvas }) => {
    const command = await canvas.findByTestId('command');
    await expect(command).toBeInTheDocument();
  },
};

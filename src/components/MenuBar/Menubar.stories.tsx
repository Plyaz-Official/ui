import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, screen, fn } from '@storybook/test';

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarLabel,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarCheckboxItem,
  MenubarGroup,
} from '@/components/MenuBar/Menubar';

type Story = StoryObj<typeof Menubar>;

const meta: Meta<typeof Menubar> = {
  title: 'Components/Menubar',
  component: Menubar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '`Menubar` is a headless, accessible horizontal menu bar built with Radix UI. Use it to group top-level actions with dropdowns for navigation or commands. Supports keyboard navigation, accessibility, and custom styling.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Content of the menubar',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for custom styling',
    },
  },
};

export default meta;

// -- Default
export const Default: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem disabled>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

// -- With Submenu
export const WithSubmenu: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Actions</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Download</MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

// -- With Radio Items
export const WithRadioItems: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel inset>Device Size</MenubarLabel>
          <MenubarRadioGroup value='md'>
            <MenubarRadioItem value='sm'>Small</MenubarRadioItem>
            <MenubarRadioItem value='md'>Medium</MenubarRadioItem>
            <MenubarRadioItem value='lg'>Large</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

// -- With Checkbox Items
export const WithCheckboxItems: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Filters</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Show All</MenubarItem>
          <MenubarGroup>
            <MenubarCheckboxItem checked>Unread</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>Important</MenubarCheckboxItem>
            <MenubarCheckboxItem>Flagged</MenubarCheckboxItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

// -- Disabled Trigger
export const DisabledTrigger: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger disabled>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Should not open</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

// -- User Interaction Test
export const UserInteraction: Story = {
  args: {
    onClick: fn(),
  },
  render: args => (
    <Menubar {...args}>
      <MenubarMenu>
        <MenubarTrigger data-testid='file'>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem data-testid='new-tab' onSelect={() => args.onSelect}>
            New Tab
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  play: async ({ args, canvas }) => {
    const button = canvas.getByTestId('file');
    const start = performance.now();
    await userEvent.click(await screen.findByRole('menuitem'));
    const end = performance.now();
    const performanceDuration = 300;
    await expect(end - start).toBeLessThan(performanceDuration);
    const items = await screen.findAllByRole('menuitem');
    const EXPECTED_LENGTH = 2;
    await expect(items).toHaveLength(EXPECTED_LENGTH);
    if (button) {
      await userEvent.click(button);
      await expect(args.onClick).toBeCalled();
    }
    const EXPECTED_DURATION = 100;
    await userEvent.click(items[0], { delay: EXPECTED_DURATION });
  },
};

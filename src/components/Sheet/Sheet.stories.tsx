import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent } from '@storybook/test';
import { useState } from 'react';

import { 
  Sheet, 
  SheetTrigger, 
  SheetClose, 
  SheetContent, 
  SheetHeader, 
  SheetFooter, 
  SheetTitle, 
  SheetDescription 
, Button } from '@/components';


type Story = StoryObj<typeof Sheet>;

const meta: Meta<typeof Sheet> = {
  title: 'Components/Sheet',
  component: Sheet,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Sheet` component provides a slide-out panel that can be triggered from any side of the screen. It is built with Radix UI and styled with Tailwind CSS, offering a flexible and accessible overlay solution.',
      },
    },
  },
  argTypes: {
    children: {
      control: false,
      description: 'The content to be displayed inside the sheet.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the sheet.',
    },
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Name
            </label>
            <input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3 rounded-md border border-input bg-background px-3 py-2"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right">
              Username
            </label>
            <input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3 rounded-md border border-input bg-background px-3 py-2"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const LeftSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Left Sheet</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>
            Navigate through the application.
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col space-y-2">
          <a href="/" className="px-3 py-2 rounded-md hover:bg-accent">Home</a>
          <a href="/about" className="px-3 py-2 rounded-md hover:bg-accent">About</a>
          <a href="/contact" className="px-3 py-2 rounded-md hover:bg-accent">Contact</a>
        </nav>
      </SheetContent>
    </Sheet>
  ),
};

export const RightSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Right Sheet</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Settings</SheetTitle>
          <SheetDescription>
            Configure your application settings.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <label htmlFor="theme" className="text-sm font-medium">Theme</label>
            <select className="w-full rounded-md border border-input bg-background px-3 py-2">
              <option>Light</option>
              <option>Dark</option>
              <option>System</option>
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="language" className="text-sm font-medium">Language</label>
            <select className="w-full rounded-md border border-input bg-background px-3 py-2">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const TopSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Top Sheet</Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>
            You have 3 unread notifications.
          </SheetDescription>
        </SheetHeader>
        <div className="space-y-2">
          <div className="p-3 border rounded-md">
            <p className="text-sm font-medium">New message from John</p>
            <p className="text-xs text-muted-foreground">2 minutes ago</p>
          </div>
          <div className="p-3 border rounded-md">
            <p className="text-sm font-medium">System update available</p>
            <p className="text-xs text-muted-foreground">1 hour ago</p>
          </div>
          <div className="p-3 border rounded-md">
            <p className="text-sm font-medium">Welcome to the app!</p>
            <p className="text-xs text-muted-foreground">1 day ago</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const BottomSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Bottom Sheet</Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Quick Actions</SheetTitle>
          <SheetDescription>
            Choose an action to perform.
          </SheetDescription>
        </SheetHeader>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline">Create Post</Button>
          <Button variant="outline">Upload Image</Button>
          <Button variant="outline">Share Link</Button>
          <Button variant="outline">Send Message</Button>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Form Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Create New Item</SheetTitle>
          <SheetDescription>
            Fill out the form below to create a new item.
          </SheetDescription>
        </SheetHeader>
        <form className="grid gap-4 py-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Title
            </label>
            <input
              id="title"
              className="w-full rounded-md border border-input bg-background px-3 py-2"
              placeholder="Enter title"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              className="w-full rounded-md border border-input bg-background px-3 py-2"
              rows={3}
              placeholder="Enter description"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium">
              Category
            </label>
            <select className="w-full rounded-md border border-input bg-background px-3 py-2">
              <option>Select category</option>
              <option>Technology</option>
              <option>Design</option>
              <option>Business</option>
            </select>
          </div>
        </form>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button type="submit">Create Item</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const WithList: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open List Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Recent Items</SheetTitle>
          <SheetDescription>
            Your recently viewed items.
          </SheetDescription>
        </SheetHeader>
        <div className="space-y-2">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="flex items-center space-x-4 p-3 border rounded-md hover:bg-accent">
              <div className="h-10 w-10 rounded-full bg-muted" />
              <div className="flex-1">
                <p className="text-sm font-medium">Item {i + 1}</p>
                <p className="text-xs text-muted-foreground">Last updated 2 hours ago</p>
              </div>
              <Button variant="ghost" size="sm">View</Button>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const WithScrollableContent: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Scrollable Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Long Content</SheetTitle>
          <SheetDescription>
            This sheet contains scrollable content.
          </SheetDescription>
        </SheetHeader>
        <div className="space-y-4 overflow-y-auto">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i} className="p-4 border rounded-md">
              <h3 className="font-medium">Section {i + 1}</h3>
              <p className="text-sm text-muted-foreground mt-2">
                This is a long section of content that demonstrates scrolling within the sheet.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const WithCustomWidth: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Wide Sheet</Button>
      </SheetTrigger>
      <SheetContent className="w-[600px] sm:max-w-[600px]">
        <SheetHeader>
          <SheetTitle>Wide Sheet</SheetTitle>
          <SheetDescription>
            This sheet has a custom width of 600px.
          </SheetDescription>
        </SheetHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <div className="space-y-2">
            <label htmlFor="left-column" className="text-sm font-medium">Left Column</label>
            <input className="w-full rounded-md border border-input bg-background px-3 py-2" />
          </div>
          <div className="space-y-2">
            <label htmlFor="right-column" className="text-sm font-medium">Right Column</label>
            <input className="w-full rounded-md border border-input bg-background px-3 py-2" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Styled Sheet</Button>
      </SheetTrigger>
      <SheetContent className="border-primary">
        <SheetHeader className="bg-primary/10">
          <SheetTitle className="text-primary">Styled Sheet</SheetTitle>
          <SheetDescription>
            This sheet has custom styling applied.
          </SheetDescription>
        </SheetHeader>
        <div className="p-4">
          <p className="text-sm">This sheet has a primary border and styled header.</p>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const WithMultipleSheets: Story = {
  render: () => (
    <div className="space-x-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open Sheet 1</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet 1</SheetTitle>
            <SheetDescription>This is the first sheet.</SheetDescription>
          </SheetHeader>
          <div className="p-4">
            <p>Content for sheet 1</p>
          </div>
        </SheetContent>
      </Sheet>
      
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open Sheet 2</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet 2</SheetTitle>
            <SheetDescription>This is the second sheet.</SheetDescription>
          </SheetHeader>
          <div className="p-4">
            <p>Content for sheet 2</p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  ),
};

export const WithNestedSheets: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Parent Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Parent Sheet</SheetTitle>
          <SheetDescription>
            This sheet contains another sheet.
          </SheetDescription>
        </SheetHeader>
        <div className="p-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Nested Sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Nested Sheet</SheetTitle>
                <SheetDescription>
                  This is a nested sheet.
                </SheetDescription>
              </SheetHeader>
              <div className="p-4">
                <p>Content for nested sheet</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

const WithControlledStateComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button onClick={() => setOpen(true)}>
          Open Sheet
        </Button>
        <Button onClick={() => setOpen(false)} variant="outline">
          Close Sheet
        </Button>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Controlled Sheet</SheetTitle>
            <SheetDescription>
              This sheet&apos;s state is controlled externally.
            </SheetDescription>
          </SheetHeader>
          <div className="p-4">
            <p>Sheet is {open ? 'open' : 'closed'}</p>
            <Button onClick={() => setOpen(false)} className="mt-4">
              Close from inside
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export const WithControlledState: Story = {
  render: () => <WithControlledStateComponent />,
};

export const WithCustomCloseButton: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Custom Close Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Custom Close Button</SheetTitle>
          <SheetDescription>
            This sheet has a custom close button.
          </SheetDescription>
        </SheetHeader>
        <div className="p-4">
          <p>This sheet has a custom close button in the footer.</p>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="destructive">Close Sheet</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const WithNoCloseButton: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open No Close Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>No Close Button</SheetTitle>
          <SheetDescription>
            This sheet has no close button.
          </SheetDescription>
        </SheetHeader>
        <div className="p-4">
          <p>This sheet has no close button in the header.</p>
          <p className="text-sm text-muted-foreground mt-2">
            You can only close it by clicking outside or using the trigger.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

const WithLoadingStateComponent = () => {
  const [loading, setLoading] = useState(false);
  const TWO_SECONDS = 2000;

  const handleSubmit = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, TWO_SECONDS));
    setLoading(false);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Loading Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Loading State</SheetTitle>
          <SheetDescription>
            This sheet demonstrates a loading state.
          </SheetDescription>
        </SheetHeader>
        <div className="p-4">
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? 'Loading...' : 'Submit'}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export const WithLoadingState: Story = {
  render: () => <WithLoadingStateComponent />,
};

const WithErrorStateComponent = () => {
  const [error, setError] = useState(false);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Error Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Error State</SheetTitle>
          <SheetDescription>
            This sheet demonstrates an error state.
          </SheetDescription>
        </SheetHeader>
        <div className="p-4">
          {error ? (
            <div className="p-4 border border-destructive rounded-md bg-destructive/10">
              <p className="text-destructive">Something went wrong!</p>
            </div>
          ) : (
            <Button onClick={() => setError(true)}>
              Trigger Error
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export const WithErrorState: Story = {
  render: () => <WithErrorStateComponent />,
};

const WithSuccessStateComponent = () => {
  const [success, setSuccess] = useState(false);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Success Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Success State</SheetTitle>
          <SheetDescription>
            This sheet demonstrates a success state.
          </SheetDescription>
        </SheetHeader>
        <div className="p-4">
          {success ? (
            <div className="p-4 border border-green-500 rounded-md bg-green-50">
              <p className="text-green-700">Operation completed successfully!</p>
            </div>
          ) : (
            <Button onClick={() => setSuccess(true)}>
              Trigger Success
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export const WithSuccessState: Story = {
  render: () => <WithSuccessStateComponent />,
};

export const UserInteraction: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Interactive Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Interactive Sheet</SheetTitle>
          <SheetDescription>
            This sheet has interactive elements.
          </SheetDescription>
        </SheetHeader>
        <div className="p-4 space-y-4">
          <Button onClick={() => alert('Button clicked!')}>
            Click Me
          </Button>
          <input 
            type="text" 
            placeholder="Type something..."
            className="w-full rounded-md border border-input bg-background px-3 py-2"
          />
        </div>
      </SheetContent>
    </Sheet>
  ),
  play: async ({ canvas }) => {
    const trigger = await canvas.findByText('Open Interactive Sheet');
    await userEvent.click(trigger);
    await expect(canvas.getByText('Interactive Sheet')).toBeInTheDocument();
  },
};

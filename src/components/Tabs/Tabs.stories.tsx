import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent } from '@storybook/test';
import { useState } from 'react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components';

type Story = StoryObj<typeof Tabs>;

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Tabs` component provides a way to organize content into separate views that can be toggled between. It is built with Radix UI and styled with Tailwind CSS, offering a flexible and accessible tabs solution.',
      },
    },
  },
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The default value of the tabs.',
    },
    value: {
      control: 'text',
      description: 'The controlled value of the tabs.',
    },
    onValueChange: {
      action: 'valueChange',
      description: 'Called when the value changes.',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the tabs.',
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'The direction of the tabs.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the tabs.',
    },
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Account</TabsTrigger>
        <TabsTrigger value="tab2">Password</TabsTrigger>
        <TabsTrigger value="tab3">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Account</h3>
          <p className="text-muted-foreground">Manage your account settings and preferences.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Password</h3>
          <p className="text-muted-foreground">Update your password and security settings.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Settings</h3>
          <p className="text-muted-foreground">Configure your application settings.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="home" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="home">
          <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Home
        </TabsTrigger>
        <TabsTrigger value="profile">
          <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Profile
        </TabsTrigger>
        <TabsTrigger value="messages">
          <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Messages
        </TabsTrigger>
      </TabsList>
      <TabsContent value="home">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Home</h3>
          <p className="text-muted-foreground">Welcome to your dashboard.</p>
        </div>
      </TabsContent>
      <TabsContent value="profile">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Profile</h3>
          <p className="text-muted-foreground">Manage your profile information.</p>
        </div>
      </TabsContent>
      <TabsContent value="messages">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Messages</h3>
          <p className="text-muted-foreground">View and manage your messages.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const WithForms: Story = {
  render: () => (
    <Tabs defaultValue="general" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="general">
        <div className="p-4 space-y-4">
          <h3 className="text-lg font-semibold">General Settings</h3>
          <div className="space-y-2">
            <label htmlFor="display-name" className="text-sm font-medium">Display Name</label>
            <input className="w-full px-3 py-2 border rounded-md" placeholder="Enter display name" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input className="w-full px-3 py-2 border rounded-md" placeholder="Enter email" />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="security">
        <div className="p-4 space-y-4">
          <h3 className="text-lg font-semibold">Security Settings</h3>
          <div className="space-y-2">
            <label htmlFor="current-password" className="text-sm font-medium">Current Password</label>
            <input type="password" className="w-full px-3 py-2 border rounded-md" placeholder="Enter current password" />
          </div>
          <div className="space-y-2">
            <label htmlFor="new-password" className="text-sm font-medium">New Password</label>
            <input type="password" className="w-full px-3 py-2 border rounded-md" placeholder="Enter new password" />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="notifications">
        <div className="p-4 space-y-4">
          <h3 className="text-lg font-semibold">Notification Settings</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span className="text-sm">Email notifications</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span className="text-sm">Push notifications</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span className="text-sm">SMS notifications</span>
            </label>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Available</TabsTrigger>
        <TabsTrigger value="tab2" disabled>Disabled</TabsTrigger>
        <TabsTrigger value="tab3">Available</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Available Tab</h3>
          <p className="text-muted-foreground">This tab is available and can be selected.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Disabled Tab</h3>
          <p className="text-muted-foreground">This tab is disabled and cannot be selected.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Available Tab</h3>
          <p className="text-muted-foreground">This tab is also available and can be selected.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

const WithControlledStateComponent = () => {
  const [value, setValue] = useState("tab1");
  
  return (
    <div className="space-y-4">
      <Tabs value={value} onValueChange={setValue} className="w-[400px]">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <div className="p-4">
            <h3 className="text-lg font-semibold">Tab 1 Content</h3>
            <p className="text-muted-foreground">Current value: {value}</p>
          </div>
        </TabsContent>
        <TabsContent value="tab2">
          <div className="p-4">
            <h3 className="text-lg font-semibold">Tab 2 Content</h3>
            <p className="text-muted-foreground">Current value: {value}</p>
          </div>
        </TabsContent>
        <TabsContent value="tab3">
          <div className="p-4">
            <h3 className="text-lg font-semibold">Tab 3 Content</h3>
            <p className="text-muted-foreground">Current value: {value}</p>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="flex gap-2">
        <button
          onClick={() => setValue("tab1")}
          className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded"
        >
          Go to Tab 1
        </button>
        <button
          onClick={() => setValue("tab2")}
          className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded"
        >
          Go to Tab 2
        </button>
        <button
          onClick={() => setValue("tab3")}
          className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded"
        >
          Go to Tab 3
        </button>
      </div>
    </div>
  );
};

export const WithControlledState: Story = {
  render: () => <WithControlledStateComponent />,
};

export const WithCustomStyling: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList className="bg-blue-100">
        <TabsTrigger value="tab1" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
          Custom 1
        </TabsTrigger>
        <TabsTrigger value="tab2" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
          Custom 2
        </TabsTrigger>
        <TabsTrigger value="tab3" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
          Custom 3
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4 bg-blue-50 rounded-md">
          <h3 className="text-lg font-semibold text-blue-900">Custom Styled Tab 1</h3>
          <p className="text-blue-700">This tab has custom styling with blue colors.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4 bg-blue-50 rounded-md">
          <h3 className="text-lg font-semibold text-blue-900">Custom Styled Tab 2</h3>
          <p className="text-blue-700">This tab also has custom styling.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="p-4 bg-blue-50 rounded-md">
          <h3 className="text-lg font-semibold text-blue-900">Custom Styled Tab 3</h3>
          <p className="text-blue-700">This tab has the same custom styling.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const WithVerticalOrientation: Story = {
  render: () => (
    <Tabs defaultValue="tab1" orientation="vertical" className="flex gap-4 w-[500px]">
      <TabsList className="flex-col h-fit">
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <div className="flex-1">
        <TabsContent value="tab1">
          <div className="p-4">
            <h3 className="text-lg font-semibold">Vertical Tab 1</h3>
            <p className="text-muted-foreground">This is a vertically oriented tab.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab2">
          <div className="p-4">
            <h3 className="text-lg font-semibold">Vertical Tab 2</h3>
            <p className="text-muted-foreground">This is also a vertically oriented tab.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab3">
          <div className="p-4">
            <h3 className="text-lg font-semibold">Vertical Tab 3</h3>
            <p className="text-muted-foreground">This is another vertically oriented tab.</p>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  ),
};

export const WithManyTabs: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        <TabsTrigger value="tab4">Tab 4</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Tab 1</h3>
          <p className="text-muted-foreground">Content for tab 1.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Tab 2</h3>
          <p className="text-muted-foreground">Content for tab 2.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Tab 3</h3>
          <p className="text-muted-foreground">Content for tab 3.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab4">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Tab 4</h3>
          <p className="text-muted-foreground">Content for tab 4.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const WithLongContent: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Short</TabsTrigger>
        <TabsTrigger value="tab2">Long Content</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Short Content</h3>
          <p className="text-muted-foreground">This tab has short content.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4 space-y-4">
          <h3 className="text-lg font-semibold">Long Content</h3>
          <div className="space-y-2">
            <p className="text-muted-foreground">This tab has much longer content to demonstrate scrolling behavior.</p>
            <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="text-muted-foreground">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p className="text-muted-foreground">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p className="text-muted-foreground">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const WithKeyboardNavigation: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1 (Tab to focus, Arrow keys to navigate)</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Keyboard Navigation</h3>
          <p className="text-muted-foreground">Use Tab to focus, Arrow keys to navigate between tabs.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Tab 2</h3>
          <p className="text-muted-foreground">Keyboard navigation works here too.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Tab 3</h3>
          <p className="text-muted-foreground">And here as well.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const WithAccessibility: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList aria-label="Settings tabs">
        <TabsTrigger value="tab1">General</TabsTrigger>
        <TabsTrigger value="tab2">Security</TabsTrigger>
        <TabsTrigger value="tab3">Privacy</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4">
          <h3 className="text-lg font-semibold">General Settings</h3>
          <p className="text-muted-foreground">Configure your general application settings.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Security Settings</h3>
          <p className="text-muted-foreground">Manage your security preferences and authentication.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Privacy Settings</h3>
          <p className="text-muted-foreground">Control your privacy and data sharing preferences.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

const WithPerformanceComponent = () => {
  const [value, setValue] = useState("tab1");
  
  return (
    <Tabs value={value} onValueChange={setValue} className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Performance Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Performance Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Performance Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Performance Optimized</h3>
          <p className="text-muted-foreground">This tab renders efficiently with minimal re-renders.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Performance Optimized</h3>
          <p className="text-muted-foreground">This tab also renders efficiently.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Performance Optimized</h3>
          <p className="text-muted-foreground">This tab renders efficiently as well.</p>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export const WithPerformance: Story = {
  render: () => <WithPerformanceComponent />,
};

const WithUserInteractionComponent = () => {
  const [value, setValue] = useState("tab1");
  const [clickCount, setClickCount] = useState(0);
  
  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    setClickCount(prev => prev + 1);
  };
  
  return (
    <div className="space-y-4">
      <Tabs value={value} onValueChange={handleValueChange} className="w-[400px]">
        <TabsList>
          <TabsTrigger value="tab1">Interactive Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Interactive Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Interactive Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <div className="p-4">
            <h3 className="text-lg font-semibold">Interactive Tab 1</h3>
            <p className="text-muted-foreground">Current value: {value}</p>
            <p className="text-muted-foreground">Tab changes: {clickCount}</p>
          </div>
        </TabsContent>
        <TabsContent value="tab2">
          <div className="p-4">
            <h3 className="text-lg font-semibold">Interactive Tab 2</h3>
            <p className="text-muted-foreground">Current value: {value}</p>
            <p className="text-muted-foreground">Tab changes: {clickCount}</p>
          </div>
        </TabsContent>
        <TabsContent value="tab3">
          <div className="p-4">
            <h3 className="text-lg font-semibold">Interactive Tab 3</h3>
            <p className="text-muted-foreground">Current value: {value}</p>
            <p className="text-muted-foreground">Tab changes: {clickCount}</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export const WithUserInteraction: Story = {
  render: () => <WithUserInteractionComponent />,
  play: async ({ canvas }) => {
    const tab2 = canvas.getByText('Interactive Tab 2');
    await userEvent.click(tab2);
    await expect(tab2).toHaveAttribute('data-state', 'active');
  },
};

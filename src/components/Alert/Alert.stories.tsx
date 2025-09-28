import type { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/test';
import { AlertTriangle, Info, CheckCircle, XCircle } from 'lucide-react';

import { Alert, AlertTitle, AlertDescription } from '@/components';

type Story = StoryObj<typeof Alert>;

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Alert` component is used to display important messages to users. It supports different variants and can include icons, titles, and descriptions. Built with class-variance-authority and styled with Tailwind CSS.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
      description: 'Visual style of the alert.',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind CSS classes.',
    },
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <Alert>
      <Info className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive">
      <XCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Alert>
      <CheckCircle className="h-4 w-4" />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  render: () => (
    <Alert>
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        This action cannot be undone. Please proceed with caution.
      </AlertDescription>
    </Alert>
  ),
};

export const WithoutIcon: Story = {
  render: () => (
    <Alert>
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This is a simple alert without an icon.
      </AlertDescription>
    </Alert>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Alert>
      <Info className="h-4 w-4" />
      <AlertTitle>Important Update</AlertTitle>
      <AlertDescription>
        <p>
          We&apos;ve made significant improvements to our platform. This includes:
        </p>
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li>Enhanced security features</li>
          <li>Improved performance</li>
          <li>New user interface elements</li>
        </ul>
        <p className="mt-2">
          Please update your application to the latest version to take advantage of these improvements.
        </p>
      </AlertDescription>
    </Alert>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <Alert className="border-blue-200 bg-blue-50 text-blue-900">
      <Info className="h-4 w-4 text-blue-600" />
      <AlertTitle className="text-blue-800">Custom Alert</AlertTitle>
      <AlertDescription className="text-blue-700">
        This alert has custom styling applied.
      </AlertDescription>
    </Alert>
  ),
};

export const UserInteraction: Story = {
  render: () => (
    <Alert>
      <Info className="h-4 w-4" />
      <AlertTitle>Interactive Alert</AlertTitle>
      <AlertDescription>
        This alert demonstrates user interaction capabilities.
      </AlertDescription>
    </Alert>
  ),
  play: async ({ canvas }) => {
    const alert = await canvas.findByRole('alert');
    await expect(alert).toBeInTheDocument();
  },
};

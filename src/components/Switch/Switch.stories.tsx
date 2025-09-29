import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Switch } from '@/components/client';

type Story = StoryObj<typeof Switch>;

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Switch` component provides a toggle switch control for boolean values. It is built with Radix UI and styled with Tailwind CSS, offering a flexible and accessible switch solution.',
      },
    },
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'The checked state of the switch.',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'The default checked state of the switch.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled.',
    },
    required: {
      control: 'boolean',
      description: 'Whether the switch is required.',
    },
    name: {
      control: 'text',
      description: 'The name of the switch.',
    },
    value: {
      control: 'text',
      description: 'The value of the switch.',
    },
    onCheckedChange: {
      action: 'checkedChange',
      description: 'Called when the checked state changes.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the switch.',
    },
  },
};

export default meta;

export const Default: Story = {
  render: () => <Switch />,
};

export const Checked: Story = {
  render: () => <Switch checked />,
};

export const DefaultChecked: Story = {
  render: () => <Switch defaultChecked />,
};

export const Disabled: Story = {
  render: () => <Switch disabled />,
};

export const DisabledChecked: Story = {
  render: () => <Switch disabled checked />,
};

const WithLabelComponent = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className='flex items-center space-x-2'>
      <Switch id='airplane-mode' checked={checked} onCheckedChange={setChecked} />
      <label
        htmlFor='airplane-mode'
        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
      >
        Airplane Mode
      </label>
    </div>
  );
};

export const WithLabel: Story = {
  render: () => <WithLabelComponent />,
};

const WithDescriptionComponent = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className='flex items-start space-x-2'>
      <Switch id='notifications' checked={checked} onCheckedChange={setChecked} />
      <div className='grid gap-1.5 leading-none'>
        <label
          htmlFor='notifications'
          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          Email notifications
        </label>
        <p className='text-xs text-muted-foreground'>Receive emails about your account activity.</p>
      </div>
    </div>
  );
};

export const WithDescription: Story = {
  render: () => <WithDescriptionComponent />,
};

const WithFormComponent = () => {
  const [formData, setFormData] = useState({
    notifications: false,
    marketing: true,
    updates: false,
  });

  return (
    <form className='space-y-4'>
      <div className='flex items-center space-x-2'>
        <Switch
          id='notifications'
          checked={formData.notifications}
          onCheckedChange={checked => setFormData(prev => ({ ...prev, notifications: checked }))}
        />
        <label htmlFor='notifications' className='text-sm font-medium'>
          Push Notifications
        </label>
      </div>

      <div className='flex items-center space-x-2'>
        <Switch
          id='marketing'
          checked={formData.marketing}
          onCheckedChange={checked => setFormData(prev => ({ ...prev, marketing: checked }))}
        />
        <label htmlFor='marketing' className='text-sm font-medium'>
          Marketing Emails
        </label>
      </div>

      <div className='flex items-center space-x-2'>
        <Switch
          id='updates'
          checked={formData.updates}
          onCheckedChange={checked => setFormData(prev => ({ ...prev, updates: checked }))}
        />
        <label htmlFor='updates' className='text-sm font-medium'>
          Product Updates
        </label>
      </div>

      <div className='text-sm text-muted-foreground'>Current state: {JSON.stringify(formData)}</div>
    </form>
  );
};

export const WithForm: Story = {
  render: () => <WithFormComponent />,
};

export const WithCustomColors: Story = {
  render: () => (
    <div className='space-y-6'>
      <div>
        <label htmlFor='default' className='text-sm font-medium'>
          Default
        </label>
        <Switch id='default' />
      </div>
      <div>
        <label htmlFor='primary' className='text-sm font-medium'>
          Primary
        </label>
        <Switch id='primary' className='data-[state=checked]:bg-primary' />
      </div>
      <div>
        <label htmlFor='secondary' className='text-sm font-medium'>
          Secondary
        </label>
        <Switch id='secondary' className='data-[state=checked]:bg-secondary' />
      </div>
      <div>
        <label htmlFor='accent' className='text-sm font-medium'>
          Accent
        </label>
        <Switch id='accent' className='data-[state=checked]:bg-accent' />
      </div>
    </div>
  ),
};

export const WithStates: Story = {
  render: () => (
    <div className='space-y-6'>
      <div>
        <label htmlFor='unchecked' className='text-sm font-medium'>
          Unchecked
        </label>
        <Switch id='unchecked' checked={false} />
      </div>
      <div>
        <label htmlFor='checked' className='text-sm font-medium'>
          Checked
        </label>
        <Switch id='checked' checked={true} />
      </div>
      <div>
        <label htmlFor='disabled-unchecked' className='text-sm font-medium'>
          Disabled Unchecked
        </label>
        <Switch id='disabled-unchecked' disabled checked={false} />
      </div>
      <div>
        <label htmlFor='disabled-checked' className='text-sm font-medium'>
          Disabled Checked
        </label>
        <Switch id='disabled-checked' disabled checked={true} />
      </div>
    </div>
  ),
};

const WithControlledStateComponent = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className='space-y-4'>
      <div className='flex items-center space-x-2'>
        <Switch id='controlled' checked={checked} onCheckedChange={setChecked} />
        <label htmlFor='controlled' className='text-sm font-medium'>
          Controlled Switch
        </label>
      </div>
      <div className='text-sm text-muted-foreground'>Current state: {checked ? 'On' : 'Off'}</div>
      <div className='space-x-2'>
        <button
          onClick={() => setChecked(true)}
          className='px-3 py-1 text-xs bg-primary text-primary-foreground rounded'
        >
          Turn On
        </button>
        <button
          onClick={() => setChecked(false)}
          className='px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded'
        >
          Turn Off
        </button>
      </div>
    </div>
  );
};

export const WithControlledState: Story = {
  render: () => <WithControlledStateComponent />,
};

export const WithUncontrolledState: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='flex items-center space-x-2'>
        <Switch id='uncontrolled' defaultChecked />
        <label htmlFor='uncontrolled' className='text-sm font-medium'>
          Uncontrolled Switch
        </label>
      </div>
      <div className='text-sm text-muted-foreground'>
        This switch starts checked and maintains its own state.
      </div>
    </div>
  ),
};

import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, fn } from '@storybook/test';

import { Label, Input, Checkbox } from '@/components';

type Story = StoryObj<typeof Label>;

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Label` component is a text label that can be associated with form controls. It provides accessible labeling for inputs and other interactive elements. Built with Radix UI and styled with Tailwind CSS.',
      },
    },
  },
  argTypes: {
    htmlFor: {
      control: 'text',
      description: 'The ID of the form control this label is associated with.',
    },
    children: {
      control: 'text',
      description: 'The content of the label.',
    },
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <div className='space-y-2'>
      <Label htmlFor='email'>Email</Label>
      <Input id='email' type='email' placeholder='Enter your email' />
    </div>
  ),
};

export const WithInput: Story = {
  render: () => (
    <div className='space-y-2'>
      <Label htmlFor='username'>Username</Label>
      <Input id='username' type='text' placeholder='Enter your username' />
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <div className='flex items-center space-x-2'>
      <Checkbox id='terms' />
      <Label htmlFor='terms'>I agree to the terms and conditions</Label>
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div className='space-y-2'>
      <Label htmlFor='password'>
        Password <span className='text-destructive'>*</span>
      </Label>
      <Input id='password' type='password' placeholder='Enter your password' />
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className='space-y-2'>
      <Label htmlFor='phone'>Phone Number</Label>
      <Input id='phone' type='tel' placeholder='Enter your phone number' />
      <p className='text-sm text-muted-foreground'>
        We&apos;ll use this to send you verification codes.
      </p>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className='space-y-2'>
      <Label htmlFor='disabled-input' className='opacity-50'>
        Disabled Input
      </Label>
      <Input id='disabled-input' type='text' disabled placeholder='This input is disabled' />
    </div>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <div className='space-y-2'>
      <Label htmlFor='custom-input' className='text-lg font-bold text-primary'>
        Custom Styled Label
      </Label>
      <Input id='custom-input' type='text' placeholder='Enter your text' />
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className='space-y-2'>
      <Label htmlFor='icon-input' className='flex items-center gap-2'>
        <span>🔒</span>
        Secure Input
      </Label>
      <Input id='icon-input' type='password' placeholder='Enter your password' />
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className='space-y-2'>
      <Label htmlFor='error-input' className='text-destructive'>
        Email Address
      </Label>
      <Input
        id='error-input'
        type='email'
        placeholder='Enter your email'
        className='border-destructive'
      />
      <p className='text-sm text-destructive'>Please enter a valid email address.</p>
    </div>
  ),
};

export const WithHelpText: Story = {
  render: () => (
    <div className='space-y-2'>
      <Label htmlFor='help-input'>Help Text Example</Label>
      <Input id='help-input' type='text' placeholder='Enter your text' />
      <p className='text-sm text-muted-foreground'>
        This is some helpful text that explains what to enter.
      </p>
    </div>
  ),
};

export const MultipleLabels: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='space-y-2'>
        <Label htmlFor='first-name'>First Name</Label>
        <Input id='first-name' type='text' placeholder='Enter your first name' />
      </div>
      <div className='space-y-2'>
        <Label htmlFor='last-name'>Last Name</Label>
        <Input id='last-name' type='text' placeholder='Enter your last name' />
      </div>
      <div className='space-y-2'>
        <Label htmlFor='email-address'>Email Address</Label>
        <Input id='email-address' type='email' placeholder='Enter your email' />
      </div>
    </div>
  ),
};

export const WithFormGroup: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='space-y-2'>
        <Label htmlFor='username'>Username</Label>
        <Input id='username' type='text' placeholder='Enter your username' />
      </div>
      <div className='space-y-2'>
        <Label htmlFor='password'>Password</Label>
        <Input id='password' type='password' placeholder='Enter your password' />
      </div>
      <div className='flex items-center space-x-2'>
        <Checkbox id='remember' />
        <Label htmlFor='remember'>Remember me</Label>
      </div>
    </div>
  ),
};

export const UserInteraction: Story = {
  render: () => (
    <div className='space-y-2'>
      <Label htmlFor='interactive-input' onClick={fn()}>
        Clickable Label
      </Label>
      <Input id='interactive-input' type='text' placeholder='Click the label to focus' />
    </div>
  ),
  play: async ({ canvas }) => {
    const label = await canvas.findByText('Clickable Label');
    await userEvent.click(label);
    await expect(canvas.getByPlaceholderText('Click the label to focus')).toHaveFocus();
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent } from '@storybook/test';
import { useState } from 'react';

import { RadioGroup, RadioGroupItem, Label } from '@/components';

type Story = StoryObj<typeof RadioGroup>;

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `RadioGroup` component is a set of radio buttons that allows users to select a single option from multiple choices. It provides a way to create mutually exclusive selections. Built with Radix UI and styled with Tailwind CSS.',
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'The current value of the radio group.',
    },
    onValueChange: {
      action: 'valueChanged',
      description: 'Called when the value changes.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio group is disabled.',
    },
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue='option1'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option1' id='option1' />
        <Label htmlFor='option1'>Option 1</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option2' id='option2' />
        <Label htmlFor='option2'>Option 2</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option3' id='option3' />
        <Label htmlFor='option3'>Option 3</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <RadioGroup defaultValue='apple'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='apple' id='apple' />
        <Label htmlFor='apple'>Apple</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='banana' id='banana' />
        <Label htmlFor='banana'>Banana</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='orange' id='orange' />
        <Label htmlFor='orange'>Orange</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='grape' id='grape' />
        <Label htmlFor='grape'>Grape</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithDescriptions: Story = {
  render: () => (
    <RadioGroup defaultValue='basic'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='basic' id='basic' />
        <div className='grid gap-1.5 leading-none'>
          <Label htmlFor='basic'>Basic Plan</Label>
          <p className='text-sm text-muted-foreground'>Perfect for individuals getting started.</p>
        </div>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='pro' id='pro' />
        <div className='grid gap-1.5 leading-none'>
          <Label htmlFor='pro'>Pro Plan</Label>
          <p className='text-sm text-muted-foreground'>Best for growing businesses and teams.</p>
        </div>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='enterprise' id='enterprise' />
        <div className='grid gap-1.5 leading-none'>
          <Label htmlFor='enterprise'>Enterprise Plan</Label>
          <p className='text-sm text-muted-foreground'>
            Advanced features for large organizations.
          </p>
        </div>
      </div>
    </RadioGroup>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <RadioGroup defaultValue='option2'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option1' id='option1' />
        <Label htmlFor='option1'>Option 1</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option2' id='option2' />
        <Label htmlFor='option2'>Option 2 (Default)</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option3' id='option3' />
        <Label htmlFor='option3'>Option 3</Label>
      </div>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue='option1' disabled>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option1' id='option1' />
        <Label htmlFor='option1'>Option 1</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option2' id='option2' />
        <Label htmlFor='option2'>Option 2</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option3' id='option3' />
        <Label htmlFor='option3'>Option 3</Label>
      </div>
    </RadioGroup>
  ),
};

export const PartiallyDisabled: Story = {
  render: () => (
    <RadioGroup defaultValue='option1'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option1' id='option1' />
        <Label htmlFor='option1'>Option 1</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option2' id='option2' disabled />
        <Label htmlFor='option2' className='text-muted-foreground'>
          Option 2 (Disabled)
        </Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option3' id='option3' />
        <Label htmlFor='option3'>Option 3</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <RadioGroup defaultValue='option1' className='space-y-4'>
      <div className='flex items-center space-x-2 p-3 border rounded-lg hover:bg-accent/50 transition-colors'>
        <RadioGroupItem value='option1' id='option1' />
        <Label htmlFor='option1' className='text-lg'>
          Option 1
        </Label>
      </div>
      <div className='flex items-center space-x-2 p-3 border rounded-lg hover:bg-accent/50 transition-colors'>
        <RadioGroupItem value='option2' id='option2' />
        <Label htmlFor='option2' className='text-lg'>
          Option 2
        </Label>
      </div>
      <div className='flex items-center space-x-2 p-3 border rounded-lg hover:bg-accent/50 transition-colors'>
        <RadioGroupItem value='option3' id='option3' />
        <Label htmlFor='option3' className='text-lg'>
          Option 3
        </Label>
      </div>
    </RadioGroup>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <RadioGroup defaultValue='email'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='email' id='email' />
        <Label htmlFor='email' className='flex items-center gap-2'>
          <span>📧</span>
          Email
        </Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='phone' id='phone' />
        <Label htmlFor='phone' className='flex items-center gap-2'>
          <span>📱</span>
          Phone
        </Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='sms' id='sms' />
        <Label htmlFor='sms' className='flex items-center gap-2'>
          <span>💬</span>
          SMS
        </Label>
      </div>
    </RadioGroup>
  ),
};

export const WithPricing: Story = {
  render: () => (
    <RadioGroup defaultValue='monthly'>
      <div className='flex items-center space-x-2 p-4 border rounded-lg'>
        <RadioGroupItem value='monthly' id='monthly' />
        <div className='grid gap-1.5 leading-none'>
          <Label htmlFor='monthly' className='text-base font-medium'>
            Monthly
          </Label>
          <p className='text-sm text-muted-foreground'>$9.99/month</p>
        </div>
      </div>
      <div className='flex items-center space-x-2 p-4 border rounded-lg'>
        <RadioGroupItem value='yearly' id='yearly' />
        <div className='grid gap-1.5 leading-none'>
          <Label htmlFor='yearly' className='text-base font-medium'>
            Yearly
          </Label>
          <p className='text-sm text-muted-foreground'>$99.99/year (Save 17%)</p>
        </div>
      </div>
    </RadioGroup>
  ),
};

const WithFormComponent = () => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Selected: ${value}`);
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <Label className='text-base font-medium'>Choose your preference</Label>
        <RadioGroup value={value} onValueChange={setValue} className='mt-2'>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='option1' id='form-option1' />
            <Label htmlFor='form-option1'>Option 1</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='option2' id='form-option2' />
            <Label htmlFor='form-option2'>Option 2</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='option3' id='form-option3' />
            <Label htmlFor='form-option3'>Option 3</Label>
          </div>
        </RadioGroup>
      </div>
      <button
        type='submit'
        className='px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'
        disabled={!value}
      >
        Submit
      </button>
    </form>
  );
};

export const WithForm: Story = {
  render: () => <WithFormComponent />,
};

const WithControlledValueComponent = () => {
  const [value, setValue] = useState('option2');

  return (
    <div className='space-y-4'>
      <div className='flex gap-2'>
        <button onClick={() => setValue('option1')} className='px-3 py-1 text-sm border rounded'>
          Select Option 1
        </button>
        <button onClick={() => setValue('option2')} className='px-3 py-1 text-sm border rounded'>
          Select Option 2
        </button>
        <button onClick={() => setValue('option3')} className='px-3 py-1 text-sm border rounded'>
          Select Option 3
        </button>
      </div>
      <RadioGroup value={value} onValueChange={setValue}>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='option1' id='controlled-option1' />
          <Label htmlFor='controlled-option1'>Option 1</Label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='option2' id='controlled-option2' />
          <Label htmlFor='controlled-option2'>Option 2</Label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='option3' id='controlled-option3' />
          <Label htmlFor='controlled-option3'>Option 3</Label>
        </div>
      </RadioGroup>
      <p className='text-sm text-muted-foreground'>Current value: {value}</p>
    </div>
  );
};

export const WithControlledValue: Story = {
  render: () => <WithControlledValueComponent />,
};

const WithValidationComponent = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    setError('');
  };

  const handleSubmit = () => {
    if (!value) {
      setError('Please select an option');
    } else {
      alert(`Selected: ${value}`);
    }
  };

  return (
    <div className='space-y-4'>
      <RadioGroup value={value} onValueChange={handleValueChange}>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='option1' id='valid-option1' />
          <Label htmlFor='valid-option1'>Option 1</Label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='option2' id='valid-option2' />
          <Label htmlFor='valid-option2'>Option 2</Label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='option3' id='valid-option3' />
          <Label htmlFor='valid-option3'>Option 3</Label>
        </div>
      </RadioGroup>
      {error && <p className='text-sm text-destructive'>{error}</p>}
      <button
        onClick={handleSubmit}
        className='px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'
      >
        Submit
      </button>
    </div>
  );
};

export const WithValidation: Story = {
  render: () => <WithValidationComponent />,
};

export const UserInteraction: Story = {
  render: () => (
    <RadioGroup defaultValue='option1'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option1' id='interactive-option1' />
        <Label htmlFor='interactive-option1'>Option 1</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option2' id='interactive-option2' />
        <Label htmlFor='interactive-option2'>Option 2</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option3' id='interactive-option3' />
        <Label htmlFor='interactive-option3'>Option 3</Label>
      </div>
    </RadioGroup>
  ),
  play: async ({ canvas }) => {
    const option2 = await canvas.findByLabelText('Option 2');
    await userEvent.click(option2);
    await expect(option2).toBeChecked();
  },
};

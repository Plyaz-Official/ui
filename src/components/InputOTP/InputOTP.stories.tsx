import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent } from '@storybook/test';
import { useState } from 'react';

import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from '@/components/client';

type Story = StoryObj<typeof InputOTP>;

const meta: Meta<typeof InputOTP> = {
  title: 'Components/InputOTP',
  component: InputOTP,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `InputOTP` component is a one-time password input field that allows users to enter a code digit by digit. It provides a secure and user-friendly way to input verification codes. Built with input-otp and styled with Tailwind CSS.',
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'The current value of the OTP input.',
    },
    onChange: {
      action: 'changed',
      description: 'Called when the value changes.',
    },
    maxLength: {
      control: 'number',
      description: 'The maximum length of the OTP.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the OTP input is disabled.',
    },
  },
};

export default meta;

const DefaultComponent = () => {
  const [value, setValue] = useState('');

  return (
    <InputOTP maxLength={6} value={value} onChange={setValue}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
};

export const Default: Story = {
  render: () => <DefaultComponent />,
};

const WithSeparatorComponent = () => {
  const [value, setValue] = useState('');

  return (
    <InputOTP maxLength={6} value={value} onChange={setValue}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
};

export const WithSeparator: Story = {
  render: () => <WithSeparatorComponent />,
};

const FourDigitsComponent = () => {
  const [value, setValue] = useState('');

  return (
    <InputOTP maxLength={4} value={value} onChange={setValue}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  );
};

export const FourDigits: Story = {
  render: () => <FourDigitsComponent />,
};

const EightDigitsComponent = () => {
  const [value, setValue] = useState('');

  return (
    <InputOTP maxLength={8} value={value} onChange={setValue}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
        <InputOTPSlot index={6} />
        <InputOTPSlot index={7} />
      </InputOTPGroup>
    </InputOTP>
  );
};

export const EightDigits: Story = {
  render: () => <EightDigitsComponent />,
};

const DisabledComponent = () => {
  const [value, setValue] = useState('123456');

  return (
    <InputOTP maxLength={6} value={value} onChange={setValue} disabled>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
};

export const Disabled: Story = {
  render: () => <DisabledComponent />,
};

const WithInitialValueComponent = () => {
  const [value, setValue] = useState('123456');

  return (
    <InputOTP maxLength={6} value={value} onChange={setValue}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
};

export const WithInitialValue: Story = {
  render: () => <WithInitialValueComponent />,
};

const WithCustomStylingComponent = () => {
  const [value, setValue] = useState('');

  return (
    <InputOTP maxLength={6} value={value} onChange={setValue}>
      <InputOTPGroup className='gap-4'>
        <InputOTPSlot index={0} className='h-12 w-12 text-lg' />
        <InputOTPSlot index={1} className='h-12 w-12 text-lg' />
        <InputOTPSlot index={2} className='h-12 w-12 text-lg' />
        <InputOTPSlot index={3} className='h-12 w-12 text-lg' />
        <InputOTPSlot index={4} className='h-12 w-12 text-lg' />
        <InputOTPSlot index={5} className='h-12 w-12 text-lg' />
      </InputOTPGroup>
    </InputOTP>
  );
};

export const WithCustomStyling: Story = {
  render: () => <WithCustomStylingComponent />,
};

const WithValidationComponent = () => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    setIsValid(newValue.length === 6 && /^\d+$/.test(newValue));
  };

  return (
    <div className='space-y-2'>
      <InputOTP
        maxLength={6}
        value={value}
        onChange={handleChange}
        className={!isValid ? 'aria-invalid:border-destructive' : ''}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      {!isValid && value.length > 0 && (
        <p className='text-sm text-destructive'>Please enter a valid 6-digit code.</p>
      )}
    </div>
  );
};

export const WithValidation: Story = {
  render: () => <WithValidationComponent />,
};

const WithFormComponent = () => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`OTP submitted: ${value}`);
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <label htmlFor='otp' className='text-sm font-medium'>
          Enter verification code
        </label>
        <InputOTP maxLength={6} value={value} onChange={setValue} id='otp'>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <button
        type='submit'
        className='px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'
        disabled={value.length !== 6}
      >
        Verify Code
      </button>
    </form>
  );
};

export const WithForm: Story = {
  render: () => <WithFormComponent />,
};

const WithAutoFocusComponent = () => {
  const [value, setValue] = useState('');

  return (
    <InputOTP maxLength={6} value={value} onChange={setValue}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
};

export const WithAutoFocus: Story = {
  render: () => <WithAutoFocusComponent />,
};

const UserInteractionComponent = () => {
  const [value, setValue] = useState('');

  return (
    <InputOTP maxLength={6} value={value} onChange={setValue}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
};

export const UserInteraction: Story = {
  render: () => <UserInteractionComponent />,
  play: async ({ canvas }) => {
    const firstSlot = await canvas.findByRole('textbox');
    await userEvent.click(firstSlot);
    await userEvent.keyboard('1');
    await expect(canvas.getByDisplayValue('1')).toBeInTheDocument();
  },
};

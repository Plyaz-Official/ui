import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent } from '@storybook/test';
import { useState } from 'react';

import { Textarea } from '@/components';
import { NUMERIC_CONSTANTS } from '@/constants/constant';

type Story = StoryObj<typeof Textarea>;

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Textarea` component provides a multi-line text input field. It is styled with Tailwind CSS and offers a flexible and accessible textarea solution.',
      },
    },
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'The placeholder text for the textarea.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled.',
    },
    value: {
      control: 'text',
      description: 'The controlled value of the textarea.',
    },
    defaultValue: {
      control: 'text',
      description: 'The default value of the textarea.',
    },
    rows: {
      control: 'number',
      description: 'The number of visible text lines.',
    },
    cols: {
      control: 'number',
      description: 'The visible width of the textarea.',
    },
    maxLength: {
      control: 'number',
      description: 'The maximum number of characters allowed.',
    },
    minLength: {
      control: 'number',
      description: 'The minimum number of characters required.',
    },
    required: {
      control: 'boolean',
      description: 'Whether the textarea is required.',
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the textarea is read-only.',
    },
    autoFocus: {
      control: 'boolean',
      description: 'Whether the textarea should be focused on mount.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the textarea.',
    },
  },
};

export default meta;

export const Default: Story = {
  render: () => <Textarea placeholder='Type your message here...' />,
};

export const WithLabel: Story = {
  render: () => (
    <div className='space-y-2'>
      <label htmlFor='textarea-label' className='text-sm font-medium'>
        Message
      </label>
      <Textarea id='textarea-label' placeholder='Type your message here...' />
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className='space-y-2'>
      <label htmlFor='textarea-error' className='text-sm font-medium'>
        Message
      </label>
      <Textarea
        id='textarea-error'
        placeholder='This textarea has an error'
        aria-invalid='true'
        className='border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/50'
      />
      <p className='text-sm text-red-600'>This field is required</p>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => <Textarea placeholder='This textarea is disabled' disabled />,
};

export const ReadOnly: Story = {
  render: () => <Textarea defaultValue='This textarea is read-only' readOnly />,
};

export const WithMaxLength: Story = {
  render: () => <Textarea placeholder='Maximum 100 characters' maxLength={100} />,
};

export const WithRows: Story = {
  render: () => <Textarea placeholder='This textarea has 5 rows' rows={5} />,
};

const WithControlledStateComponent = () => {
  const [value, setValue] = useState('');

  return (
    <div className='space-y-4'>
      <Textarea
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder='This is a controlled textarea'
      />
      <p className='text-sm text-muted-foreground'>Character count: {value.length}</p>
    </div>
  );
};

export const WithControlledState: Story = {
  render: () => <WithControlledStateComponent />,
};

const WithCharacterLimitComponent = () => {
  const [value, setValue] = useState('');
  const maxLength = 100;

  return (
    <div className='space-y-2'>
      <Textarea
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder='Maximum 100 characters'
        maxLength={maxLength}
      />
      <div className='flex justify-between text-sm text-muted-foreground'>
        <span>Character count: {value.length}</span>
        <span>Remaining: {maxLength - value.length}</span>
      </div>
    </div>
  );
};

export const WithCharacterLimit: Story = {
  render: () => <WithCharacterLimitComponent />,
};

const WithValidationComponent = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (newValue.length < 10) {
      setError('Message must be at least 10 characters long');
    } else if (newValue.length > NUMERIC_CONSTANTS.FIVE_HUNDRED) {
      setError('Message must be less than 500 characters');
    } else {
      setError('');
    }
  };

  return (
    <div className='space-y-2'>
      <Textarea
        value={value}
        onChange={handleChange}
        placeholder='Enter a message (10-500 characters)'
        className={
          error ? 'border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/50' : ''
        }
      />
      {error && <p className='text-sm text-red-600'>{error}</p>}
      <p className='text-sm text-muted-foreground'>{value.length}/500 characters</p>
    </div>
  );
};

export const WithValidation: Story = {
  render: () => <WithValidationComponent />,
};

export const WithCustomStyling: Story = {
  render: () => (
    <Textarea
      placeholder='This textarea has custom styling'
      className='border-blue-500 focus-visible:border-blue-500 focus-visible:ring-blue-500/50 bg-blue-50'
    />
  ),
};

export const WithResizeOptions: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='space-y-2'>
        <label htmlFor='default-resize' className='text-sm font-medium'>
          Default resize
        </label>
        <Textarea placeholder='Default resize behavior' />
      </div>
      <div className='space-y-2'>
        <label htmlFor='no-resize' className='text-sm font-medium'>
          No resize
        </label>
        <Textarea placeholder='Cannot be resized' className='resize-none' />
      </div>
      <div className='space-y-2'>
        <label htmlFor='vertical-resize' className='text-sm font-medium'>
          Vertical resize only
        </label>
        <Textarea placeholder='Can only resize vertically' className='resize-y' />
      </div>
    </div>
  ),
};

const WithUserInteractionComponent = () => {
  const [value, setValue] = useState('');
  const [focusCount, setFocusCount] = useState(0);
  const [blurCount, setBlurCount] = useState(0);

  return (
    <div className='space-y-4'>
      <Textarea
        value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setFocusCount(prev => prev + 1)}
        onBlur={() => setBlurCount(prev => prev + 1)}
        placeholder='Interact with this textarea to see the counters'
      />
      <div className='text-sm text-muted-foreground space-y-1'>
        <p>Focus count: {focusCount}</p>
        <p>Blur count: {blurCount}</p>
        <p>Character count: {value.length}</p>
      </div>
    </div>
  );
};

export const WithUserInteraction: Story = {
  render: () => <WithUserInteractionComponent />,
  play: async ({ canvas }) => {
    const textarea = canvas.getByRole('textbox');
    await userEvent.click(textarea);
    await expect(textarea).toHaveFocus();
  },
};

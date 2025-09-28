import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent } from '@storybook/test';
import { useState } from 'react';

import { Textarea } from '@/components';

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
    autoComplete: {
      control: 'text',
      description: 'The autocomplete attribute for the textarea.',
    },
    autoCorrect: {
      control: 'text',
      description: 'The autocorrect attribute for the textarea.',
    },
    autoCapitalize: {
      control: 'text',
      description: 'The autocapitalize attribute for the textarea.',
    },
    spellCheck: {
      control: 'boolean',
      description: 'Whether the textarea should be spell-checked.',
    },
    wrap: {
      control: 'select',
      options: ['soft', 'hard', 'off'],
      description: 'The wrap attribute for the textarea.',
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl', 'auto'],
      description: 'The direction of the text.',
    },
    dirName: {
      control: 'text',
      description: 'The name of the direction input.',
    },
    form: {
      control: 'text',
      description: 'The form element the textarea belongs to.',
    },
    name: {
      control: 'text',
      description: 'The name attribute for the textarea.',
    },
    id: {
      control: 'text',
      description: 'The id attribute for the textarea.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the textarea.',
    },
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <Textarea placeholder="Type your message here..." />
  ),
};

export const WithPlaceholder: Story = {
  render: () => (
    <Textarea placeholder="Enter your feedback here..." />
  ),
};

export const WithValue: Story = {
  render: () => (
    <Textarea defaultValue="This is a default value" />
  ),
};

export const WithRows: Story = {
  render: () => (
    <Textarea placeholder="This textarea has 5 rows" rows={5} />
  ),
};

export const WithMaxLength: Story = {
  render: () => (
    <Textarea placeholder="Maximum 100 characters" maxLength={100} />
  ),
};

export const WithMinLength: Story = {
  render: () => (
    <Textarea placeholder="Minimum 10 characters" minLength={10} />
  ),
};

export const Disabled: Story = {
  render: () => (
    <Textarea placeholder="This textarea is disabled" disabled />
  ),
};

export const ReadOnly: Story = {
  render: () => (
    <Textarea defaultValue="This textarea is read-only" readOnly />
  ),
};

export const Required: Story = {
  render: () => (
    <Textarea placeholder="This textarea is required" required />
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2">
      <label htmlFor="textarea-label" className="text-sm font-medium">
        Message
      </label>
      <Textarea id="textarea-label" placeholder="Type your message here..." />
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="space-y-2">
      <label htmlFor="textarea-error" className="text-sm font-medium">
        Message
      </label>
      <Textarea 
        id="textarea-error" 
        placeholder="This textarea has an error" 
        aria-invalid="true"
        className="border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/50"
      />
      <p className="text-sm text-red-600">This field is required</p>
    </div>
  ),
};

export const WithSuccess: Story = {
  render: () => (
    <div className="space-y-2">
      <label htmlFor="textarea-success" className="text-sm font-medium">
        Message
      </label>
      <Textarea 
        id="textarea-success" 
        placeholder="This textarea is valid" 
        className="border-green-500 focus-visible:border-green-500 focus-visible:ring-green-500/50"
      />
      <p className="text-sm text-green-600">Message saved successfully</p>
    </div>
  ),
};

export const WithAutoComplete: Story = {
  render: () => (
    <Textarea placeholder="This textarea has autocomplete" autoComplete="on" />
  ),
};

export const WithSpellCheck: Story = {
  render: () => (
    <Textarea placeholder="This textarea has spell check enabled" spellCheck />
  ),
};

export const WithWrap: Story = {
  render: () => (
    <Textarea placeholder="This textarea has hard wrap" wrap="hard" />
  ),
};

export const WithDirection: Story = {
  render: () => (
    <Textarea placeholder="This textarea has RTL direction" dir="rtl" />
  ),
};

export const WithForm: Story = {
  render: () => (
    <form className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="textarea-form" className="text-sm font-medium">
          Message
        </label>
        <Textarea id="textarea-form" name="message" placeholder="Type your message here..." />
      </div>
      <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
        Submit
      </button>
    </form>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <Textarea 
      placeholder="This textarea has custom styling" 
      className="border-blue-500 focus-visible:border-blue-500 focus-visible:ring-blue-500/50 bg-blue-50"
    />
  ),
};

export const WithCustomSize: Story = {
  render: () => (
    <Textarea 
      placeholder="This textarea has custom size" 
      className="w-96 h-32"
    />
  ),
};

export const WithResize: Story = {
  render: () => (
    <Textarea 
      placeholder="This textarea can be resized" 
      className="resize"
    />
  ),
};

export const WithNoResize: Story = {
  render: () => (
    <Textarea 
      placeholder="This textarea cannot be resized" 
      className="resize-none"
    />
  ),
};

export const WithVerticalResize: Story = {
  render: () => (
    <Textarea 
      placeholder="This textarea can only be resized vertically" 
      className="resize-y"
    />
  ),
};

export const WithHorizontalResize: Story = {
  render: () => (
    <Textarea 
      placeholder="This textarea can only be resized horizontally" 
      className="resize-x"
    />
  ),
};

const WithControlledStateComponent = () => {
  const [value, setValue] = useState("");
  
  return (
    <div className="space-y-4">
      <Textarea 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="This is a controlled textarea"
      />
      <p className="text-sm text-muted-foreground">
        Character count: {value.length}
      </p>
    </div>
  );
};

export const WithControlledState: Story = {
  render: () => <WithControlledStateComponent />,
};

const WithCharacterLimitComponent = () => {
  const [value, setValue] = useState("");
  const maxLength = 100;
  
  return (
    <div className="space-y-2">
      <Textarea 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Maximum 100 characters"
        maxLength={maxLength}
      />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Character count: {value.length}</span>
        <span>Remaining: {maxLength - value.length}</span>
      </div>
    </div>
  );
};

export const WithCharacterLimit: Story = {
  render: () => <WithCharacterLimitComponent />,
};

const WithAutoResizeComponent = () => {
  const [value, setValue] = useState("");
  
  return (
    <Textarea 
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="This textarea auto-resizes based on content"
      className="min-h-16 max-h-32 overflow-y-auto"
      style={{ height: 'auto' }}
      onInput={(e) => {
        const target = e.target as HTMLTextAreaElement;
        target.style.height = 'auto';
        target.style.height = target.scrollHeight + 'px';
      }}
    />
  );
};

export const WithAutoResize: Story = {
  render: () => <WithAutoResizeComponent />,
};

const WithValidationComponent = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    const FIVE_HUNDRED = 500;
    if (newValue.length < 10) {
      setError("Message must be at least 10 characters long");
    } else if (newValue.length > FIVE_HUNDRED) {
      setError("Message must be less than 500 characters");
    } else {
      setError("");
    }
  };
  
  return (
    <div className="space-y-2">
      <Textarea 
        value={value}
        onChange={handleChange}
        placeholder="Enter a message (10-500 characters)"
        className={error ? "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/50" : ""}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
      <p className="text-sm text-muted-foreground">
        {value.length}/500 characters
      </p>
    </div>
  );
};

export const WithValidation: Story = {
  render: () => <WithValidationComponent />,
};

export const WithLoading: Story = {
  render: () => (
    <div className="space-y-2">
      <Textarea 
        placeholder="Loading textarea..." 
        disabled 
        className="opacity-50"
      />
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  ),
};

export const WithHelpText: Story = {
  render: () => (
    <div className="space-y-2">
      <label htmlFor="textarea-help" className="text-sm font-medium">
        Message
      </label>
      <Textarea 
        id="textarea-help" 
        placeholder="Type your message here..." 
      />
      <p className="text-sm text-muted-foreground">
        Please provide detailed feedback about your experience.
      </p>
    </div>
  ),
};

export const WithMultiple: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="textarea-1" className="text-sm font-medium">
          First Message
        </label>
        <Textarea id="textarea-1" placeholder="First message..." />
      </div>
      <div className="space-y-2">
        <label htmlFor="textarea-2" className="text-sm font-medium">
          Second Message
        </label>
        <Textarea id="textarea-2" placeholder="Second message..." />
      </div>
      <div className="space-y-2">
        <label htmlFor="textarea-3" className="text-sm font-medium">
          Third Message
        </label>
        <Textarea id="textarea-3" placeholder="Third message..." />
      </div>
    </div>
  ),
};

export const WithKeyboardNavigation: Story = {
  render: () => (
    <div className="space-y-4">
      <Textarea placeholder="Use Tab to navigate between textareas" />
      <Textarea placeholder="This is the second textarea" />
      <Textarea placeholder="This is the third textarea" />
    </div>
  ),
};

export const WithAccessibility: Story = {
  render: () => (
    <div className="space-y-2">
      <label htmlFor="textarea-accessible" className="text-sm font-medium">
        Message
      </label>
      <Textarea 
        id="textarea-accessible" 
        placeholder="This textarea has proper accessibility attributes" 
        aria-describedby="textarea-description"
        required
      />
      <p id="textarea-description" className="text-sm text-muted-foreground">
        Enter your message here. This field is required.
      </p>
    </div>
  ),
};

const WithPerformanceComponent = () => {
  const [value, setValue] = useState("");
  
  return (
    <div className="space-y-4">
      <Textarea 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="This textarea is optimized for performance"
      />
      <p className="text-sm text-muted-foreground">
        Performance optimized with controlled state and minimal re-renders.
      </p>
    </div>
  );
};

export const WithPerformance: Story = {
  render: () => <WithPerformanceComponent />,
};

const WithUserInteractionComponent = () => {
  const [value, setValue] = useState("");
  const [focusCount, setFocusCount] = useState(0);
  const [blurCount, setBlurCount] = useState(0);
  
  return (
    <div className="space-y-4">
      <Textarea 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocusCount(prev => prev + 1)}
        onBlur={() => setBlurCount(prev => prev + 1)}
        placeholder="Interact with this textarea to see the counters"
      />
      <div className="text-sm text-muted-foreground space-y-1">
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

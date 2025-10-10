import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, fn } from '@storybook/test';
import { Search, Eye, DollarSign, User, Mail, Lock } from 'lucide-react';

import { 
  InputGroup, 
  InputGroupAddon, 
  InputGroupButton, 
  InputGroupText, 
  InputGroupInput, 
  InputGroupTextarea 
} from '@/components';

type Story = StoryObj<typeof InputGroup>;

const meta: Meta<typeof InputGroup> = {
  title: 'Components/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '`InputGroup` is a composite component that combines input fields with addons, buttons, and text elements. It provides a cohesive way to create complex input layouts with consistent styling and behavior.',
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Tailwind CSS classes to customize the appearance.',
    },
  },
};

export default meta;

// Basic input group with text addon
export const WithTextAddon: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon>
        <InputGroupText>@</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="username" />
    </InputGroup>
  ),
};

// Input group with icon addon
export const WithIconAddon: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon>
        <Search className="size-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
    </InputGroup>
  ),
};

// Input group with button addon
export const WithButtonAddon: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput placeholder="Enter amount" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton>
          <DollarSign className="size-4" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
};

// Input group with both start and end addons
export const WithStartAndEndAddons: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon>
        <User className="size-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Full name" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton>
          <Eye className="size-4" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
};

// Email input group
export const EmailInputGroup: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon>
        <Mail className="size-4" />
      </InputGroupAddon>
      <InputGroupInput type="email" placeholder="Enter your email" />
    </InputGroup>
  ),
};

// Password input group with toggle
export const PasswordInputGroup: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon>
        <Lock className="size-4" />
      </InputGroupAddon>
      <InputGroupInput type="password" placeholder="Enter password" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton>
          <Eye className="size-4" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
};

// URL input group
export const UrlInputGroup: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon>
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput type="url" placeholder="example.com" />
    </InputGroup>
  ),
};

// Currency input group
export const CurrencyInputGroup: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon>
        <InputGroupText>$</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput type="number" placeholder="0.00" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>USD</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
};

// Textarea input group
export const TextareaInputGroup: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon align="block-start">
        <InputGroupText>Message</InputGroupText>
      </InputGroupAddon>
      <InputGroupTextarea placeholder="Enter your message..." rows={4} />
    </InputGroup>
  ),
};

// Block alignment variants
export const BlockAlignment: Story = {
  render: () => (
    <div className="space-y-4">
      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>Label on top</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="Input field" />
      </InputGroup>
      
      <InputGroup>
        <InputGroupInput placeholder="Input field" />
        <InputGroupAddon align="block-end">
          <InputGroupText>Label at bottom</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

// Multiple button sizes
export const ButtonSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <InputGroup>
        <InputGroupInput placeholder="Extra small button" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="xs">
            <Search className="size-4" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      
      <InputGroup>
        <InputGroupInput placeholder="Small button" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="sm">
            <Search className="size-4" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      
      <InputGroup>
        <InputGroupInput placeholder="Icon extra small" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs">
            <Search className="size-4" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      
      <InputGroup>
        <InputGroupInput placeholder="Icon small" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-sm">
            <Search className="size-4" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

// Disabled state
export const Disabled: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon>
        <User className="size-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="This input is disabled" disabled />
      <InputGroupAddon align="inline-end">
        <InputGroupButton disabled>
          <Eye className="size-4" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
};

// Error state
export const ErrorState: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon>
        <Mail className="size-4" />
      </InputGroupAddon>
      <InputGroupInput 
        placeholder="Invalid email" 
        aria-invalid={true}
        value="invalid-email"
      />
    </InputGroup>
  ),
};

// With keyboard shortcuts
export const WithKeyboardShortcuts: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon>
        <InputGroupText>Search</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="Type to search..." />
      <InputGroupAddon align="inline-end">
        <InputGroupText>
          <kbd>⌘</kbd>+<kbd>K</kbd>
        </InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
};

// Complex form example
export const ComplexFormExample: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <div>
        <label htmlFor="username" className="block text-sm font-medium mb-1">Username</label>
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>@</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput id="username" placeholder="username" />
        </InputGroup>
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
        <InputGroup>
          <InputGroupAddon>
            <Mail className="size-4" />
          </InputGroupAddon>
          <InputGroupInput id="email" type="email" placeholder="your@email.com" />
        </InputGroup>
      </div>
      
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
        <InputGroup>
          <InputGroupAddon>
            <Lock className="size-4" />
          </InputGroupAddon>
          <InputGroupInput id="password" type="password" placeholder="Enter password" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton>
              <Eye className="size-4" />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
      
      <div>
        <label htmlFor="budget" className="block text-sm font-medium mb-1">Budget</label>
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput id="budget" type="number" placeholder="1000" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  ),
};

// Custom styling
export const CustomStyling: Story = {
  render: () => (
    <InputGroup className="border-2 border-blue-500 bg-blue-50">
      <InputGroupAddon>
        <Search className="size-4 text-blue-600" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Custom styled input group" />
    </InputGroup>
  ),
};

// Interaction test
export const UserInteraction: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon>
        <Search className="size-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Type something" onChange={fn()} />
      <InputGroupAddon align="inline-end">
        <InputGroupButton onClick={fn()}>
          <Eye className="size-4" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),

  play: async ({ canvas }) => {
    const input = canvas.getByPlaceholderText('Type something');
    const button = canvas.getByRole('button');

    // Interaction performance test
    const start = performance.now();
    await userEvent.type(input, 'test');
    await userEvent.click(button);
    const end = performance.now();
    const duration = end - start;
    const expectDuration = 500;
    await expect(duration).toBeLessThan(expectDuration);
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent } from '@storybook/test';
import { useState } from 'react';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

import { Toggle } from '@/components';

type Story = StoryObj<typeof Toggle>;

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Toggle` component provides a two-state button that can be toggled on and off. It is built with Radix UI and styled with Tailwind CSS, offering a flexible and accessible toggle solution.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
      description: 'The visual style variant of the toggle.',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
      description: 'The size of the toggle.',
    },
    pressed: {
      control: 'boolean',
      description: 'Whether the toggle is pressed/on.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled.',
    },
    onPressedChange: {
      action: 'pressedChange',
      description: 'Called when the pressed state changes.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the toggle.',
    },
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <Toggle aria-label="Toggle italic">
      <Italic />
    </Toggle>
  ),
};

export const WithText: Story = {
  render: () => (
    <Toggle>Toggle</Toggle>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Toggle aria-label="Toggle bold">
      <Bold />
    </Toggle>
  ),
};

export const WithIconAndText: Story = {
  render: () => (
    <Toggle>
      <Bold />
      Bold
    </Toggle>
  ),
};

export const Outline: Story = {
  render: () => (
    <Toggle variant="outline" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  ),
};

export const Small: Story = {
  render: () => (
    <Toggle size="sm" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  ),
};

export const Large: Story = {
  render: () => (
    <Toggle size="lg" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Toggle disabled aria-label="Toggle italic">
      <Italic />
    </Toggle>
  ),
};

export const Pressed: Story = {
  render: () => (
    <Toggle pressed aria-label="Toggle italic">
      <Italic />
    </Toggle>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <Toggle 
      className="bg-blue-500 text-white hover:bg-blue-600 data-[state=on]:bg-blue-700" 
      aria-label="Toggle italic"
    >
      <Italic />
    </Toggle>
  ),
};

const TextFormattingGroupComponent = () => {
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  
  return (
    <div className="flex items-center gap-1">
      <Toggle 
        pressed={bold} 
        onPressedChange={setBold} 
        aria-label="Toggle bold"
      >
        <Bold />
      </Toggle>
      <Toggle 
        pressed={italic} 
        onPressedChange={setItalic} 
        aria-label="Toggle italic"
      >
        <Italic />
      </Toggle>
      <Toggle 
        pressed={underline} 
        onPressedChange={setUnderline} 
        aria-label="Toggle underline"
      >
        <Underline />
      </Toggle>
    </div>
  );
};

export const TextFormattingGroup: Story = {
  render: () => <TextFormattingGroupComponent />,
};

const AlignmentGroupComponent = () => {
  const [alignment, setAlignment] = useState('left');
  
  return (
    <div className="flex items-center gap-1">
      <Toggle 
        pressed={alignment === 'left'} 
        onPressedChange={() => setAlignment('left')} 
        aria-label="Align left"
      >
        <AlignLeft />
      </Toggle>
      <Toggle 
        pressed={alignment === 'center'} 
        onPressedChange={() => setAlignment('center')} 
        aria-label="Align center"
      >
        <AlignCenter />
      </Toggle>
      <Toggle 
        pressed={alignment === 'right'} 
        onPressedChange={() => setAlignment('right')} 
        aria-label="Align right"
      >
        <AlignRight />
      </Toggle>
    </div>
  );
};

export const AlignmentGroup: Story = {
  render: () => <AlignmentGroupComponent />,
};

const WithLabelsComponent = () => {
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Toggle 
          pressed={bold} 
          onPressedChange={setBold} 
          aria-label="Toggle bold"
        >
          <Bold />
        </Toggle>
        <span className="text-sm">Bold</span>
      </div>
      <div className="flex items-center gap-2">
        <Toggle 
          pressed={italic} 
          onPressedChange={setItalic} 
          aria-label="Toggle italic"
        >
          <Italic />
        </Toggle>
        <span className="text-sm">Italic</span>
      </div>
    </div>
  );
};

export const WithLabels: Story = {
  render: () => <WithLabelsComponent />,
};

const WithTooltipsComponent = () => {
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  
  return (
    <div className="flex items-center gap-1">
      <Toggle 
        pressed={bold} 
        onPressedChange={setBold} 
        aria-label="Toggle bold"
        title="Bold (Ctrl+B)"
      >
        <Bold />
      </Toggle>
      <Toggle 
        pressed={italic} 
        onPressedChange={setItalic} 
        aria-label="Toggle italic"
        title="Italic (Ctrl+I)"
      >
        <Italic />
      </Toggle>
    </div>
  );
};

export const WithTooltips: Story = {
  render: () => <WithTooltipsComponent />,
};

const WithKeyboardShortcutsComponent = () => {
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  
  return (
    <div className="flex items-center gap-1">
      <Toggle 
        pressed={bold} 
        onPressedChange={setBold} 
        aria-label="Toggle bold"
        onKeyDown={(e) => {
          if (e.ctrlKey && e.key === 'b') {
            e.preventDefault();
            setBold(!bold);
          }
        }}
      >
        <Bold />
      </Toggle>
      <Toggle 
        pressed={italic} 
        onPressedChange={setItalic} 
        aria-label="Toggle italic"
        onKeyDown={(e) => {
          if (e.ctrlKey && e.key === 'i') {
            e.preventDefault();
            setItalic(!italic);
          }
        }}
      >
        <Italic />
      </Toggle>
    </div>
  );
};

export const WithKeyboardShortcuts: Story = {
  render: () => <WithKeyboardShortcutsComponent />,
};

export const WithAccessibility: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <label htmlFor="text-formatting" className="text-sm font-medium">Text Formatting</label>
        <div className="flex items-center gap-1 mt-2">
          <Toggle 
            aria-label="Toggle bold formatting" 
            aria-describedby="bold-description"
          >
            <Bold />
          </Toggle>
          <Toggle 
            aria-label="Toggle italic formatting" 
            aria-describedby="italic-description"
          >
            <Italic />
          </Toggle>
          <Toggle 
            aria-label="Toggle underline formatting" 
            aria-describedby="underline-description"
          >
            <Underline />
          </Toggle>
        </div>
        <div className="text-xs text-muted-foreground mt-1">
          <p id="bold-description">Makes text bold</p>
          <p id="italic-description">Makes text italic</p>
          <p id="underline-description">Makes text underlined</p>
        </div>
      </div>
    </div>
  ),
};

const WithPerformanceComponent = () => {
  const [toggles, setToggles] = useState({
    bold: false,
    italic: false,
    underline: false,
  });
  
  const handleToggle = (key: keyof typeof toggles) => {
    setToggles(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  return (
    <div className="flex items-center gap-1">
      <Toggle 
        pressed={toggles.bold} 
        onPressedChange={() => handleToggle('bold')} 
        aria-label="Toggle bold"
      >
        <Bold />
      </Toggle>
      <Toggle 
        pressed={toggles.italic} 
        onPressedChange={() => handleToggle('italic')} 
        aria-label="Toggle italic"
      >
        <Italic />
      </Toggle>
      <Toggle 
        pressed={toggles.underline} 
        onPressedChange={() => handleToggle('underline')} 
        aria-label="Toggle underline"
      >
        <Underline />
      </Toggle>
    </div>
  );
};

export const WithPerformance: Story = {
  render: () => <WithPerformanceComponent />,
};

const WithUserInteractionComponent = () => {
  const [bold, setBold] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  
  const handleToggle = (pressed: boolean) => {
    setBold(pressed);
    setClickCount(prev => prev + 1);
  };
  
  return (
    <div className="space-y-4">
      <Toggle 
        pressed={bold} 
        onPressedChange={handleToggle} 
        aria-label="Toggle bold"
      >
        <Bold />
      </Toggle>
      <div className="text-sm text-muted-foreground space-y-1">
        <p>Bold: {bold ? 'On' : 'Off'}</p>
        <p>Clicks: {clickCount}</p>
      </div>
    </div>
  );
};

export const WithUserInteraction: Story = {
  render: () => <WithUserInteractionComponent />,
  play: async ({ canvas }) => {
    const toggle = canvas.getByRole('button');
    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute('data-state', 'on');
  },
};

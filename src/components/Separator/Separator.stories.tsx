import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent } from '@storybook/test';

import { Separator } from '@/components';

type Story = StoryObj<typeof Separator>;

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Separator` component provides a visual separator between content sections. It is built with Radix UI and styled with Tailwind CSS, offering both horizontal and vertical orientations.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the separator.',
    },
    decorative: {
      control: 'boolean',
      description: 'Whether the separator is decorative (not announced by screen readers).',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the separator.',
    },
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <div>Content above</div>
      <Separator />
      <div>Content below</div>
    </div>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <div className="space-y-4">
      <div>Content above</div>
      <Separator orientation="horizontal" />
      <div>Content below</div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-20 items-center space-x-4">
      <div>Left content</div>
      <Separator orientation="vertical" />
      <div>Right content</div>
    </div>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <div className="space-y-4">
      <div>Content above</div>
      <Separator className="bg-primary h-0.5" />
      <div>Content below</div>
    </div>
  ),
};

export const WithThickSeparator: Story = {
  render: () => (
    <div className="space-y-4">
      <div>Content above</div>
      <Separator className="h-2 bg-primary" />
      <div>Content below</div>
    </div>
  ),
};

export const WithDashedSeparator: Story = {
  render: () => (
    <div className="space-y-4">
      <div>Content above</div>
      <Separator className="border-dashed border-t-2 border-primary" />
      <div>Content below</div>
    </div>
  ),
};

export const WithDottedSeparator: Story = {
  render: () => (
    <div className="space-y-4">
      <div>Content above</div>
      <Separator className="border-dotted border-t-2 border-primary" />
      <div>Content below</div>
    </div>
  ),
};

export const WithGradientSeparator: Story = {
  render: () => (
    <div className="space-y-4">
      <div>Content above</div>
      <Separator className="h-1 bg-gradient-to-r from-primary to-secondary" />
      <div>Content below</div>
    </div>
  ),
};

export const WithMultipleSeparators: Story = {
  render: () => (
    <div className="space-y-4">
      <div>Section 1</div>
      <Separator />
      <div>Section 2</div>
      <Separator />
      <div>Section 3</div>
      <Separator />
      <div>Section 4</div>
    </div>
  ),
};

export const WithVerticalSeparators: Story = {
  render: () => (
    <div className="flex h-20 items-center space-x-4">
      <div>Item 1</div>
      <Separator orientation="vertical" />
      <div>Item 2</div>
      <Separator orientation="vertical" />
      <div>Item 3</div>
      <Separator orientation="vertical" />
      <div>Item 4</div>
    </div>
  ),
};

export const WithMixedOrientations: Story = {
  render: () => (
    <div className="space-y-4">
      <div>Horizontal separator below</div>
      <Separator orientation="horizontal" />
      <div className="flex h-20 items-center space-x-4">
        <div>Vertical separator to the right</div>
        <Separator orientation="vertical" />
        <div>Content after vertical separator</div>
      </div>
      <Separator orientation="horizontal" />
      <div>Content after horizontal separator</div>
    </div>
  ),
};

export const WithCustomColors: Story = {
  render: () => (
    <div className="space-y-4">
      <div>Red separator</div>
      <Separator className="bg-red-500" />
      <div>Blue separator</div>
      <Separator className="bg-blue-500" />
      <div>Green separator</div>
      <Separator className="bg-green-500" />
    </div>
  ),
};

export const WithCustomSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>Thin separator (1px)</div>
      <Separator className="h-px" />
      <div>Medium separator (4px)</div>
      <Separator className="h-1" />
      <div>Thick separator (8px)</div>
      <Separator className="h-2" />
    </div>
  ),
};

export const WithVerticalSizes: Story = {
  render: () => (
    <div className="flex h-20 items-center space-x-4">
      <div>Thin vertical</div>
      <Separator orientation="vertical" className="w-px" />
      <div>Medium vertical</div>
      <Separator orientation="vertical" className="w-1" />
      <div>Thick vertical</div>
      <Separator orientation="vertical" className="w-2" />
    </div>
  ),
};

export const WithSpacing: Story = {
  render: () => (
    <div className="space-y-8">
      <div>Content with large spacing</div>
      <Separator className="my-8" />
      <div>Content with large spacing</div>
    </div>
  ),
};

export const WithMargins: Story = {
  render: () => (
    <div>
      <div>Content above</div>
      <Separator className="mx-8" />
      <div>Content below</div>
    </div>
  ),
};

export const WithPadding: Story = {
  render: () => (
    <div>
      <div>Content above</div>
      <Separator className="py-4" />
      <div>Content below</div>
    </div>
  ),
};

export const WithRoundedCorners: Story = {
  render: () => (
    <div className="space-y-4">
      <div>Content above</div>
      <Separator className="h-2 rounded-full" />
      <div>Content below</div>
    </div>
  ),
};

export const WithOpacity: Story = {
  render: () => (
    <div className="space-y-4">
      <div>Content above</div>
      <Separator className="opacity-50" />
      <div>Content below</div>
    </div>
  ),
};

export const WithShadow: Story = {
  render: () => (
    <div className="space-y-4">
      <div>Content above</div>
      <Separator className="shadow-lg" />
      <div>Content below</div>
    </div>
  ),
};

export const WithBorder: Story = {
  render: () => (
    <div className="space-y-4">
      <div>Content above</div>
      <Separator className="border border-primary" />
      <div>Content below</div>
    </div>
  ),
};

export const WithBackground: Story = {
  render: () => (
    <div className="space-y-4">
      <div>Content above</div>
      <Separator className="bg-primary/20" />
      <div>Content below</div>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <div>Left content</div>
      <Separator className="flex-1" />
      <span className="text-sm text-muted-foreground">OR</span>
      <Separator className="flex-1" />
      <div>Right content</div>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <div>Left content</div>
      <Separator className="flex-1" />
      <div className="text-muted-foreground">•</div>
      <Separator className="flex-1" />
      <div>Right content</div>
    </div>
  ),
};

export const WithFormSections: Story = {
  render: () => (
    <form className="space-y-4">
      <div>
        <label htmlFor="form-name" className="block text-sm font-medium">Name</label>
        <input id="form-name" type="text" className="w-full p-2 border rounded" />
      </div>
      <Separator />
      <div>
        <label htmlFor="form-email" className="block text-sm font-medium">Email</label>
        <input id="form-email" type="email" className="w-full p-2 border rounded" />
      </div>
      <Separator />
      <div>
        <label htmlFor="form-message" className="block text-sm font-medium">Message</label>
        <textarea id="form-message" className="w-full p-2 border rounded" rows={3} />
      </div>
    </form>
  ),
};

export const WithListItems: Story = {
  render: () => (
    <ul className="space-y-2">
      <li>List item 1</li>
      <Separator />
      <li>List item 2</li>
      <Separator />
      <li>List item 3</li>
      <Separator />
      <li>List item 4</li>
    </ul>
  ),
};

export const WithCardSections: Story = {
  render: () => (
    <div className="border rounded-lg p-4 space-y-4">
      <div>
        <h3 className="font-semibold">Card Title</h3>
        <p className="text-sm text-muted-foreground">Card description</p>
      </div>
      <Separator />
      <div>
        <h4 className="font-medium">Section 1</h4>
        <p className="text-sm">Content for section 1</p>
      </div>
      <Separator />
      <div>
        <h4 className="font-medium">Section 2</h4>
        <p className="text-sm">Content for section 2</p>
      </div>
    </div>
  ),
};

export const WithNavigation: Story = {
  render: () => (
    <nav className="flex items-center space-x-4">
      <a href="/" className="text-sm font-medium">Home</a>
      <Separator orientation="vertical" />
      <a href="/about" className="text-sm font-medium">About</a>
      <Separator orientation="vertical" />
      <a href="/contact" className="text-sm font-medium">Contact</a>
    </nav>
  ),
};

export const WithBreadcrumbs: Story = {
  render: () => (
    <nav className="flex items-center space-x-2 text-sm">
      <a href="/" className="text-muted-foreground hover:text-foreground">Home</a>
      <Separator orientation="vertical" className="h-4" />
      <a href="/products" className="text-muted-foreground hover:text-foreground">Products</a>
      <Separator orientation="vertical" className="h-4" />
      <span className="text-foreground">Current Page</span>
    </nav>
  ),
};

export const WithTableRows: Story = {
  render: () => (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span>Row 1</span>
        <span>Value 1</span>
      </div>
      <Separator />
      <div className="flex justify-between">
        <span>Row 2</span>
        <span>Value 2</span>
      </div>
      <Separator />
      <div className="flex justify-between">
        <span>Row 3</span>
        <span>Value 3</span>
      </div>
    </div>
  ),
};

export const WithResponsiveDesign: Story = {
  render: () => (
    <div className="space-y-4">
      <div>Content above</div>
      <Separator className="hidden md:block" />
      <div className="block md:hidden">
        <Separator orientation="vertical" className="h-4" />
      </div>
      <div>Content below</div>
    </div>
  ),
};

export const WithAnimation: Story = {
  render: () => (
    <div className="space-y-4">
      <div>Content above</div>
      <Separator className="animate-pulse" />
      <div>Content below</div>
    </div>
  ),
};

export const WithHoverEffect: Story = {
  render: () => (
    <div className="space-y-4">
      <div>Content above</div>
      <Separator className="hover:bg-primary transition-colors" />
      <div>Content below</div>
    </div>
  ),
};

export const WithFocusIndicator: Story = {
  render: () => (
    <div className="space-y-4">
      <div>Content above</div>
      <Separator className="focus:bg-primary focus:outline-none" tabIndex={0} />
      <div>Content below</div>
    </div>
  ),
};

export const WithAccessibility: Story = {
  render: () => (
    <div className="space-y-4">
      <div>Content above</div>
      <Separator decorative={false} aria-label="Section separator" />
      <div>Content below</div>
    </div>
  ),
};

export const WithCustomDataAttributes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>Content above</div>
      <Separator data-testid="custom-separator" />
      <div>Content below</div>
    </div>
  ),
};

export const WithEventHandlers: Story = {
  render: () => (
    <div className="space-y-4">
      <div>Content above</div>
      <Separator 
        onClick={() => alert('Separator clicked!')}
        className="cursor-pointer hover:bg-primary"
      />
      <div>Content below</div>
    </div>
  ),
};

const WithRefComponent = () => {
  const separatorRef = React.useRef<HTMLDivElement>(null);
  
  const handleClick = () => {
    if (separatorRef.current) {
      separatorRef.current.style.backgroundColor = 'red';
    }
  };

  return (
      <div className="space-y-4">
        <div>Content above</div>
        <Separator ref={separatorRef} />
        <div>Content below</div>
        <button onClick={handleClick} className="px-2 py-1 text-sm border rounded">
          Change separator color
        </button>
      </div>
  );
};

export const WithRef: Story = {
  render: () => <WithRefComponent />,
};

export const UserInteraction: Story = {
  render: () => (
    <div className="space-y-4">
      <div>Content above</div>
      <Separator />
      <div>Content below</div>
    </div>
  ),
  play: async ({ canvas }) => {
    const separator = await canvas.findByTestId('separator');
    await userEvent.hover(separator);
    await expect(separator).toBeInTheDocument();
  },
};

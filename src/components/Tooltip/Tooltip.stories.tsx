import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';

import { Button } from '@/main';

import { Tooltip, TooltipContent, TooltipTrigger } from './Tooltip';

/**
 * A popup that displays information related to an element when the element
 * receives keyboard focus or the mouse hovers over it.
 */
const meta: Meta<typeof TooltipContent> = {
  title: 'components/Tooltip',
  component: TooltipContent,
  render: args => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant='outline'>Hover</Button>
      </TooltipTrigger>
      <TooltipContent {...args} className='text-secondary'>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  ),
  tags: ['autodocs'],
  argTypes: {
    side: {
      options: ['top', 'bottom', 'left', 'right'],
      control: {
        type: 'radio',
      },
    },
    children: {
      control: 'text',
    },
  },
  args: {
    side: 'top',
    children: 'Add to library',
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TooltipContent>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the tooltip.
 */
export const Default: Story = {};

/**
 * Use the `bottom` side to display the tooltip below the element.
 */
export const Bottom: Story = {
  args: {
    side: 'bottom',
  },
};

/**
 * Use the `left` side to display the tooltip to the left of the element.
 */
export const Left: Story = {
  args: {
    side: 'left',
  },
};

/**
 * Use the `right` side to display the tooltip to the right of the element.
 */
export const Right: Story = {
  args: {
    side: 'right',
  },
};

export const ShouldShowOnHover: Story = {
  tags: ['!autodocs'],
  play: async ({ canvasElement, step }) => {
    const canvasBody = within(canvasElement.ownerDocument.body);
    const triggerBtn = await canvasBody.findByRole('button', { name: /Hover/i });

    await step('hover over trigger', async () => {
      await userEvent.hover(triggerBtn);
      await waitFor(() =>
        expect(
          canvasElement.ownerDocument.body.querySelector('[data-slot="tooltip-content"]')
        ).toBeVisible()
      );
    });
  },
};

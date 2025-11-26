import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/client';

/**
 * A vertically stacked set of interactive headings that each reveal a section
 * of content.
 */
const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      description: 'Type of accordion behavior',
      options: ['single', 'multiple'],
    },
    collapsible: {
      control: 'boolean',
      description: 'Can an open accordion be collapsed using the trigger',
      if: { arg: 'type', eq: 'single' },
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    type: 'single',
    collapsible: true,
    disabled: false,
  },
  render: args => (
    <Accordion {...args} type='single' className='w-full'>
      <AccordionItem value='item-1'>
        <AccordionTrigger className='text-secondary'>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          {'Yes. It comes with default styles that matches the other components' + 'aesthetic.'}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          {"Yes. It's animated by default, but you can disable it if you prefer."}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
} satisfies Meta;

export default meta;

type Story = StoryObj;

/**
 * The default behavior of the accordion allows only one item to be open.
 */
export const Default: Story = {};

export const UserInteraction: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const accordions = await canvas.getAllByRole('button');

    // Open the tabs one at a time
    for (const trigger of accordions) {
      await userEvent.click(trigger);
      await waitFor(async () => {
        const content = await canvas.findAllByRole('region');
        return expect(content.length).toBe(1);
      });
    }

    // Close the last opened tab
    await userEvent.click(accordions[accordions.length - 1]);
    await waitFor(async () => {
      const content = await canvas.findAllByRole('region');
      return expect(content[2]).toBeFalsy();
    });
  },
};

export const ShouldOpenAllWhenMultipleType: Story = {
  name: 'when accordions are clicked, should open all items one at a time',
  args: {
    type: 'multiple',
  },
  tags: ['!autodocs'],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const accordions = await canvas.getAllByRole('button');

    // Open all tabs one at a time
    for (let i = 0; i < accordions.length; i++) {
      await userEvent.click(accordions[i]);
      await waitFor(async () => {
        const content = await canvas.findAllByRole('region');
        return expect(content.length).toBe(i + 1);
      });
    }

    // Close all tabs one at a time
    for (let i = accordions.length - 1; i > 0; i--) {
      await userEvent.click(accordions[i]);
      await waitFor(async () => {
        const content = await canvas.findAllByRole('region');
        return expect(content.length).toBe(i);
      });
    }
  },
};

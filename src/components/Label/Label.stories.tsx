
import type { Meta, StoryObj } from "@storybook/react";

import { Input, Label } from "@/components";

/**
 * Renders an accessible label associated with controls.
 */
const meta = {
  title: "components/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "text" },
    },
  },
  args: {
    children: "Your email address",
    htmlFor: "email",
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof Label>;

/**
 * The default form of the label.
 */
export const Default: Story = {};

/**
 * A disabled label with reduced opacity and disabled cursor.
 */
export const Disabled: Story = {
  render: () => (
    <div>
      <div>
        <div className="group" data-disabled={true}>
          <Label htmlFor="disabled-input">Disabled Label</Label>
          <Input
            id="disabled-input"
            type="text"
            placeholder="This input is disabled"
            disabled
          />
        </div>
      </div>
    </div>
  ),
};
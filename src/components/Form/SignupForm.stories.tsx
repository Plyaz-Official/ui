import type { Meta, StoryObj } from '@storybook/react';

import { SignupForm } from './SignupForm';

const meta: Meta<typeof SignupForm> = {
  title: 'Patterns/Form/SignupForm',
  component: SignupForm,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `SignupForm` showcases a validated form pattern with fields for name, email, and password. It uses Tailwind CSS and supports inline error messaging.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SignupForm>;

export const Default: Story = {};

export const SignupFormMobileViewPort: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile_xs',
    },
  },
};

export const SignupFormTabletViewPort: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet_sm',
    },
  },
};

export const SignupFormDesktopViewPort: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'laptop_xl',
    },
  },
};

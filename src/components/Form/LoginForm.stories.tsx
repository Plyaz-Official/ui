import type { Meta, StoryObj } from '@storybook/react';

import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'Patterns/Form/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Form` component provides a flexible way to create forms with Tailwind CSS styling. It supports various input types and validation.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {};

export const LoginFormMobileViewPort: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile_xs',
    },
  },
};

export const LoginFormTabletViewPort: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet_sm',
    },
  },
};

export const LoginFormDesktopViewPort: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'laptop_xl',
    },
  },
};

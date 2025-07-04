import type { Meta, StoryObj } from "@storybook/react";

import { FormComposition } from "@/components/Form/FormComposition";
import { LoginForm } from "@/components/Form/LoginForm";
import { SignupForm } from "@/components/Form/SignupForm";

const meta: Meta<typeof FormComposition> = {
  title: "Patterns/Form/FormComposition",
  component: FormComposition,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The `FormComposition` showcases a complete form layout with a header, form, and footer. It uses Tailwind CSS for styling and supports responsive design.",
      },
    },
  },
  argTypes: {
    children: {
      control: { type: "object" },
      description: "The form component to be rendered inside the composition.",
    },
    heading: {
      control: { type: "text" },
      description: "The heading for the form section.",
    },
    description: {
      control: { type: "text" },
      description: "A brief description or instruction for the form.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof FormComposition>;
export const SignupFormComposition: Story = {
  args: {
    children: <SignupForm />,
    heading: "Sign up",
    description: "Join and get started!",
  },
};

export const LoginFormComposition: Story = {
  args: {
    children: <LoginForm />,
    heading: "Login",
    description: "Welcome back! Please log in to continue.",
  },
};

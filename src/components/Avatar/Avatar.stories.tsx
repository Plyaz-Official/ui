import type { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/test';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/client';

type Story = StoryObj<typeof Avatar>;

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Avatar` component is used to display user profile pictures or initials. It supports fallback content when images fail to load and can be customized with different sizes and styles. Built with Radix UI and styled with Tailwind CSS.',
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional Tailwind CSS classes.',
    },
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src='/broken-image.jpg' alt='Broken image' />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};

export const OnlyFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  ),
};

export const Large: Story = {
  render: () => (
    <Avatar className='size-16'>
      <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const Small: Story = {
  render: () => (
    <Avatar className='size-6'>
      <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const CustomFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src='/broken-image.jpg' alt='Broken image' />
      <AvatarFallback className='bg-primary text-primary-foreground font-bold'>JS</AvatarFallback>
    </Avatar>
  ),
};

export const MultipleAvatars: Story = {
  render: () => (
    <div className='flex -space-x-2'>
      <Avatar className='border-2 border-background'>
        <AvatarImage src='https://github.com/shadcn.png' alt='User 1' />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <Avatar className='border-2 border-background'>
        <AvatarImage src='https://github.com/vercel.png' alt='User 2' />
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
      <Avatar className='border-2 border-background'>
        <AvatarFallback>+3</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const WithStatus: Story = {
  render: () => (
    <div className='relative'>
      <Avatar>
        <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className='absolute -bottom-1 -right-1 size-3 rounded-full bg-accent border-2 border-background' />
    </div>
  ),
};

export const UserInteraction: Story = {
  render: () => (
    <Avatar className='cursor-pointer hover:ring-2 hover:ring-ring transition-all'>
      <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
  play: async ({ canvas }) => {
    const avatar = await canvas.findByRole('img');
    await expect(avatar).toBeInTheDocument();
  },
};

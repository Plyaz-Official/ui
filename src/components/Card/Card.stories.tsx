import type { Meta, StoryObj } from '@storybook/react';
import { BellRing } from 'lucide-react';

import { Button } from '@/components';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/Card/Card';

const notifications = [
  {
    title: 'Your call has been confirmed.',
    description: '1 hour ago',
  },
  {
    title: 'You have a new message!',
    description: '1 hour ago',
  },
  {
    title: 'Your subscription is expiring soon!',
    description: '2 hours ago',
  },
];

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    className: 'w-96',
  },
  render: args => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className='gap-4 grid'>
        {notifications.map((notification, index) => (
          <div key={index} className='flex items-center gap-4'>
            <BellRing className='size-6' />
            <div>
              <p>{notification.title}</p>
              <p className='text-foreground/60'>{notification.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button variant='link'>Close</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/Card/Card';

describe('Card component', () => {
  it('renders under 100ms', () => {
    const start = performance.now();
    render(
      <Card className='w-96'>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>You have 3 unread messages.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Message 1</p>
        </CardContent>
        <CardFooter>
          <button>Close</button>
        </CardFooter>
      </Card>
    );
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(100);
  });

  it('renders all Card subcomponents correctly', () => {
    render(
      <Card className='w-96'>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>You have 3 unread messages.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Message 1</p>
        </CardContent>
        <CardFooter>
          <button>Close</button>
        </CardFooter>
      </Card>
    );

    expect(screen.getByText('Notifications')).toBeInTheDocument();
    expect(screen.getByText('You have 3 unread messages.')).toBeInTheDocument();
    expect(screen.getByText('Message 1')).toBeInTheDocument();
    expect(screen.getByText('Close')).toBeInTheDocument();
  });
});

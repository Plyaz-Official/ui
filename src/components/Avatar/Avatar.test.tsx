import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Avatar, AvatarImage, AvatarFallback } from './Avatar';

describe('Avatar component', () => {
  it('renders under 200ms', () => {
    const start = performance.now();
    render(
      <Avatar>
        <AvatarImage src='https://example.com/image.jpg' alt='Test' />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    );
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(200);
  });

  it('renders avatar with fallback', () => {
    render(
      <Avatar>
        <AvatarImage src='https://example.com/image.jpg' alt='Test' />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    );

    expect(screen.getByText('AB')).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Avatar, AvatarImage, AvatarFallback } from './Avatar';

const renderAvatar = () =>
  render(
    <Avatar>
      <AvatarImage src='https://example.com/image.jpg' alt='Test' />
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  );

describe('Avatar component', () => {
  it('renders under 200ms', () => {
    const start = performance.now();
    renderAvatar();
    const end = performance.now();
    expect(end - start).toBeLessThan(200);
  });

  it('renders avatar with fallback', () => {
    renderAvatar();
    expect(screen.getByText('AB')).toBeInTheDocument();
  });
});

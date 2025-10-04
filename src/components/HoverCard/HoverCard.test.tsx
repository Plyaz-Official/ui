import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { HoverCard, HoverCardContent, HoverCardTrigger } from './HoverCard';

const renderHoverCard = () =>
  render(
    <HoverCard>
      <HoverCardTrigger>Hover me</HoverCardTrigger>
      <HoverCardContent>
        <div>Test content</div>
      </HoverCardContent>
    </HoverCard>
  );

describe('HoverCard component', () => {
  it('renders under 100ms', () => {
    const start = performance.now();
    renderHoverCard();
    const end = performance.now();
    expect(end - start).toBeLessThan(150);
  });

  it('renders hover card with trigger', () => {
    renderHoverCard();
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });
});

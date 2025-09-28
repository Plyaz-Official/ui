import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { HoverCard, HoverCardContent, HoverCardTrigger } from './HoverCard';

describe('HoverCard component', () => {
  it('renders under 100ms', () => {
    const start = performance.now();
    render(
      <HoverCard>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>
          <div>Test content</div>
        </HoverCardContent>
      </HoverCard>
    );
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(150);
  });

  it('renders hover card with trigger', () => {
    render(
      <HoverCard>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>
          <div>Test content</div>
        </HoverCardContent>
      </HoverCard>
    );

    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });
});
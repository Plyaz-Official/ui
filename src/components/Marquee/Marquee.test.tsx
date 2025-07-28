import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import React from 'react';

import { Marquee } from './Marquee';

describe('Marquee', () => {
  it('repeats children the specified number of times', () => {
    const repeatCount = 3;
    render(<Marquee repeat={repeatCount}>Hello</Marquee>);
    expect(screen.getAllByText('Hello').length).toBe(repeatCount);
  });

  it('applies vertical orientation classes when vertical is true', () => {
    const { container } = render(<Marquee vertical>Item</Marquee>);
    const root = container.firstElementChild as HTMLElement;

    // Root should switch flex direction when vertical is enabled
    expect(root).toHaveClass('flex-col');
    expect(root).not.toHaveClass('flex-row');

    // Inner group should use the vertical marquee animation
    const verticalGroup = root.querySelector('.animate-marquee-vertical');
    expect(verticalGroup).toBeTruthy();
  });
});

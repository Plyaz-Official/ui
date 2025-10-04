import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Tooltip, TooltipContent, TooltipTrigger } from './Tooltip';

const renderTooltip = () =>
  render(
    <Tooltip>
      <TooltipTrigger asChild>
        <button>Test</button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Test tooltip</p>
      </TooltipContent>
    </Tooltip>
  );

describe('Tooltip component', () => {
  it('renders under 200ms', () => {
    const start = performance.now();
    renderTooltip();
    const end = performance.now();
    expect(end - start).toBeLessThan(200);
  });

  it('renders tooltip with trigger and content', () => {
    renderTooltip();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});

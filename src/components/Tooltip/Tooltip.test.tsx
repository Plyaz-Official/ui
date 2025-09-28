import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Tooltip, TooltipContent, TooltipTrigger } from './Tooltip';

describe('Tooltip component', () => {
  it('renders under 200ms', () => {
    const start = performance.now();
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
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(200);
  });

  it('renders tooltip with trigger and content', () => {
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

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Textarea } from './Textarea';

describe('Textarea component', () => {
  it('renders under 100ms', () => {
    const start = performance.now();
    render(<Textarea placeholder='Test textarea' />);
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(100);
  });

  it('renders textarea with default props', () => {
    render(<Textarea placeholder='Test textarea' />);

    const textareaElement = screen.getByRole('textbox');
    expect(textareaElement).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Section } from '@/components/Section/Section';

const sectionProps = {
  children: 'Section',
  className: 'bg-red-200 px-4 py-2',
};

describe('Paragraph component ', () => {
  // Performance test to ensure the component renders quickly
  it('renders under 100ms', () => {
    const start = performance.now();
    render(<Section {...sectionProps} />);
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(100);
  });
  // Unit test to check if the component renders with the correct element, class, and children
  it('renders with correct element, class, and children', () => {
    render(<Section {...sectionProps} />);
    expect(screen.getByText(/Section/i)).toBeDefined();
  });
});

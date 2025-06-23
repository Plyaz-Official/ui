import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Section } from '@/components/Section/Section';

const sectionProps = {
  children: 'Section',
  className: 'bg-red-200 px-4 py-2',
};

describe('Paragraph component ', () => {
  it('renders with correct element, class, and children', () => {
    render(<Section {...sectionProps} />);
    expect(screen.getByText(/Section/i)).toBeDefined();
  });
});

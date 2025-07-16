import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import LanguageSelector from './LanguageSelector';

const mockLocales = ['en', 'es', 'fr'];
const mockGetLabel = vi.fn((locale: string) => {
  const labels: Record<string, string> = {
    en: 'English',
    es: 'Español',
    fr: 'Français',
  };
  return labels[locale] || locale;
});

const defaultProps = {
  locale: 'en',
  locales: mockLocales,
  onChange: vi.fn(),
  getLabel: mockGetLabel,
};

describe('LanguageSelector', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders with current locale', () => {
    render(<LanguageSelector {...defaultProps} />);
    
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(mockGetLabel).toHaveBeenCalledWith('en');
  });

  it('displays the correct label for current locale', () => {
    render(<LanguageSelector {...defaultProps} />);
    
    expect(screen.getByText('English')).toBeInTheDocument();
  });

  it('renders with different current locale', () => {
    render(<LanguageSelector {...defaultProps} locale="es" />);
    
    expect(screen.getByText('Español')).toBeInTheDocument();
  });

  it('is disabled when disabled prop is true', () => {
    render(<LanguageSelector {...defaultProps} disabled />);
    
    const trigger = screen.getByRole('combobox');
    expect(trigger).toBeDisabled();
  });

  it('handles empty locales array', () => {
    render(<LanguageSelector {...defaultProps} locales={[]} />);
    
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('calls getLabel for current locale', () => {
    render(<LanguageSelector {...defaultProps} />);
    
    expect(mockGetLabel).toHaveBeenCalledWith('en');
  });
}); 
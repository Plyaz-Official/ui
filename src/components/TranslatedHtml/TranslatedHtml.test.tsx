import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

// import { mockNextIntl } from '../../test-utils';

import TranslatedHtml from './TranslatedHtml';

// Mock next-intl before importing the component
// mockNextIntl();

describe('TranslatedHtml component', () => {
  it('renders translated HTML content', () => {
    render(
      <TranslatedHtml translationKey='components.LanguageSelector.label' tag='div' />
    );
    expect(screen.getByText('Language')).toBeDefined();
  });

  it('renders with correct tag and class', () => {
    render(
      <TranslatedHtml translationKey='components.LanguageSelector.label' tag='section' className={`
        text-red-500
      `} />
    );
    const el = screen.getByText('Language');
    expect(el.tagName.toLowerCase()).toBe('section');
    expect(el).toHaveClass('text-red-500');
  });

  it('renders with translation options', () => {
    render(
      <TranslatedHtml
        translationKey='components.LanguageSelector.label'
        translationOptions={{ args: { url: '/help', text: 'here' } }}
        tag='p'
      />
    );
    expect(screen.getByText('Language')).toBeDefined();
  });

  it('renders with namespace', () => {
    render(
      <TranslatedHtml translationKey='components.LanguageSelector.label' namespace='components' tag='span' />
    );
    expect(screen.getByText('Language')).toBeDefined();
  });

  it('renders with default div tag when no tag is specified', () => {
    render(
      <TranslatedHtml translationKey='components.LanguageSelector.label' />
    );
    const el = screen.getByText('Language');
    expect(el.tagName.toLowerCase()).toBe('div');
  });
});

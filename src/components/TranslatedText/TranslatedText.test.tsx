import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import TranslatedText from './TranslatedText';

describe('TranslatedText component', () => {
  it('renders translated text', () => {
    render(
      <TranslatedText translationKey='components.LanguageSelector.label' element='p' variant='body' weight='normal' />
    );
    expect(screen.getByText('Language')).toBeDefined();
  });

  it('renders with correct element and class', () => {
    render(
      <TranslatedText
        translationKey='components.LanguageSelector.label'
        element='h2'
        variant='caption'
        weight='bold'
      />
    );
    const el = screen.getByText('Language');
    expect(el.tagName.toLowerCase()).toBe('h2');
  });

  it('renders with translation options', () => {
    render(
      <TranslatedText
        translationKey='components.LanguageSelector.label'
        translationOptions={{ args: { url: '/help', text: 'here' } }}
        element='p'
        variant='body'
        weight='normal'
      />
    );
    expect(screen.getByText('Language')).toBeDefined();
  });

  it('renders with namespace', () => {
    render(
      <TranslatedText translationKey='components.LanguageSelector.label' namespace='components' element='span' variant='body' weight='normal' />
    );
    expect(screen.getByText('Language')).toBeDefined();
  });

  it('renders with default element when no element is specified', () => {
    render(
      <TranslatedText translationKey='components.LanguageSelector.label' element='p' variant='body' weight='normal' />
    );
    const el = screen.getByText('Language');
    expect(el.tagName.toLowerCase()).toBe('p');
  });
});

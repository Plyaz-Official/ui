import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import TranslatedHtml from './TranslatedHtml';

describe('TranslatedHtml component', () => {
  it('renders translated HTML content', () => {
    render(<TranslatedHtml translationKey='common.welcome' tag='div' />);
    expect(screen.getByText('translated:common.welcome')).toBeDefined();
  });

  it('renders with correct tag and class', () => {
    render(<TranslatedHtml translationKey='common.help' tag='section' className='text-red-500' />);
    const el = screen.getByText('translated:common.help');
    expect(el.tagName.toLowerCase()).toBe('section');
    expect(el).toHaveClass('text-red-500');
  });

  it('renders with translation options', () => {
    render(
      <TranslatedHtml
        translationKey='common.click_here'
        translationOptions={{ args: { url: '/help', text: 'here' } }}
        tag='p'
      />
    );
    expect(screen.getByText('translated:common.click_here')).toBeDefined();
  });

  it('renders with namespace', () => {
    render(<TranslatedHtml translationKey='common.hello' namespace='custom' tag='span' />);
    expect(screen.getByText('translated:common.hello')).toBeDefined();
  });

  it('renders with default div tag when no tag is specified', () => {
    render(<TranslatedHtml translationKey='common.default' />);
    const el = screen.getByText('translated:common.default');
    expect(el.tagName.toLowerCase()).toBe('div');
  });
});

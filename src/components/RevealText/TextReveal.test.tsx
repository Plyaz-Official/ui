import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import React from 'react'; // important for mocked components

import { TextReveal } from './TextReveal';

describe('TextReveal', () => {
  it('throws if children is not a string', () => {
    // @ts-expect-error – we're testing invalid usage
    expect(() => render(<TextReveal>{123}</TextReveal>)).toThrow(
      'TextReveal: children must be a string'
    );
  });
});

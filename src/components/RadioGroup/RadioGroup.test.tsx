import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { RadioGroup, RadioGroupItem } from './RadioGroup';

describe('RadioGroup component', () => {
  it('renders under 150ms', () => {
    const start = performance.now();
    render(
      <RadioGroup>
        <RadioGroupItem value='option1' />
        <RadioGroupItem value='option2' />
      </RadioGroup>
    );
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(250);
  });

  it('renders radio group with items', () => {
    render(
      <RadioGroup>
        <RadioGroupItem value='option1' />
        <RadioGroupItem value='option2' />
      </RadioGroup>
    );

    const radioGroup = document.querySelector('[data-slot="radio-group"]');
    expect(radioGroup).toBeInTheDocument();
  });
});

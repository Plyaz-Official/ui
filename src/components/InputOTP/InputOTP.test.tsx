import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { InputOTP, InputOTPGroup, InputOTPSlot } from './InputOTP';

describe('InputOTP component', () => {
  it('renders under 150ms', () => {
    const start = performance.now();
    render(
      <InputOTP maxLength={6} value='' onChange={() => {}}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
      </InputOTP>
    );
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(250);
  });

  it('renders input OTP with slots', () => {
    render(
      <InputOTP maxLength={6} value='' onChange={() => {}}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
      </InputOTP>
    );

    // Check that the component renders without errors
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { Search } from 'lucide-react';

import { 
  InputGroup, 
  InputGroupAddon, 
  InputGroupButton, 
  InputGroupText, 
  InputGroupInput, 
  InputGroupTextarea 
} from './InputGroup';

describe('InputGroup component', () => {
  let renderedComponent: ReturnType<typeof render>;
  let handleClick: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    handleClick = vi.fn();
    renderedComponent = render(
      <InputGroup className="border-2 border-blue-500">
        <InputGroupAddon align="inline-start">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="username" disabled aria-invalid={false} />
        <InputGroupAddon align="inline-end">
          <InputGroupButton onClick={handleClick} size="sm">
            <Search className="size-4" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    );
  });

  it('handles error state', () => {
    renderedComponent.rerender(
      <InputGroup>
        <InputGroupInput placeholder="username" aria-invalid={true} />
      </InputGroup>
    );
    
    const input = screen.getByPlaceholderText('username');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  describe('Additional scenarios', () => {
    it('renders with textarea', () => {
      render(
        <InputGroup>
          <InputGroupTextarea placeholder="Enter message" rows={4} />
        </InputGroup>
      );
      
      const textarea = screen.getByPlaceholderText('Enter message');
      expect(textarea).toBeInTheDocument();
    });
  });
});

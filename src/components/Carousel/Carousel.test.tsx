import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './Carousel';

const renderCarousel = () =>
  render(
    <Carousel>
      <CarouselContent>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );

describe('Carousel component', () => {
  it('renders under 260ms', () => {
    const start = performance.now();
    renderCarousel();
    const end = performance.now();
    expect(end - start).toBeLessThan(260);
  });

  it('renders carousel with content', () => {
    renderCarousel();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });
});

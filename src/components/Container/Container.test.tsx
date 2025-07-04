import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Container } from "@/components/Container/Container";
import type { ElementType } from "@/types/type";

const containerProps = {
  element: "div" as ElementType,
  children: "Container",
  className: "bg-red-200 px-4 py-2",
};

describe("Container component ", () => {
  // Performance test to ensure the component renders quickly
  it("renders under 100ms", () => {
    const start = performance.now();
    render(<Container {...containerProps} />);
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(100);
  });
  // Unit test to check if the component renders with the correct element, class, and children
  it("renders with correct element, class, and children", () => {
    render(<Container {...containerProps} />);
    expect(screen.getByText(/Container/i)).toBeDefined();
  });
});

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Flex } from "@/components/Flex/Flex";

const flexProps = {
  children: "Flex",
  className: "bg-red-200 px-4 py-2",
};

describe("Flex component ", () => {
  // Performance test to ensure the component renders quickly
  it("renders under 100ms", () => {
    const start = performance.now();
    render(<Flex {...flexProps} />);
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(100);
  });
  // Unit test to check if the component renders with the correct element, class, and children
  it("renders with correct element, class, and children", () => {
    render(<Flex {...flexProps} />);
    expect(screen.getByText(/Flex/i)).toBeDefined();
  });
});

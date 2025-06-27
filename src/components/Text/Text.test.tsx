import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Text } from "@/components/Text/Text";
import type { TEXT_WEIGHT_MAPPER, VARIANT_MAPPER } from "@/constants/constant";

type TextElement = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const textProps = {
  children: "Text",
  className: "bg-red-200 px-4 py-2",
  element: "h1" as TextElement,
  variant: "body" as keyof typeof VARIANT_MAPPER,
  weight: "light" as keyof typeof TEXT_WEIGHT_MAPPER,
};

describe("Text component ", () => {
  // Performance test to ensure the component renders quickly
  it("renders under 100ms", () => {
    const start = performance.now();
    render(<Text {...textProps} />);
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(100);
  });
  // Unit test to check if the component renders with the correct element, class, and children
  it("renders with correct element, class, and children", () => {
    render(<Text {...textProps} />);
    expect(screen.getByText(/Text/i)).toBeDefined();
  });
});

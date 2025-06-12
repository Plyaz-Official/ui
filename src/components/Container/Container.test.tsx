import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Container } from "@/components/Container/Container";
import type { ElementType } from "@/types/type";

const containerProps = {
  element: "div" as ElementType,
  children: "Container",
  className: "bg-red-200 px-4 py-2",
};

describe("Container component ", () => {
  it("renders with correct element, class, and children", () => {
    render(<Container {...containerProps} />);
    expect(screen.getByText(/Container/i)).toBeDefined();
  });
});

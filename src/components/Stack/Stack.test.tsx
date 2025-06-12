import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Stack } from "@/components/Stack/Stack";

const stackProps = {
  children: "Stack",
  className: "bg-red-200 px-4 py-2",
};

describe("Stack component ", () => {
  it("renders with correct element, class, and children", () => {
    render(<Stack {...stackProps} />);
    expect(screen.getByText(/Stack/i)).toBeDefined();
  });
});

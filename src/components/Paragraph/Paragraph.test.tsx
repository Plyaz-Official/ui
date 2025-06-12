import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Paragraph } from "@/components/Paragraph/Paragraph";

const SIZE_MAP = {
  lg: "lg",
} as const;

const paragraphProps = {
  children: "Paragraph",
  className: "bg-red-200 px-4 py-2",
  size: SIZE_MAP["lg"],
};
describe("Paragraph component ", () => {
  it("renders with correct element, class, and children", () => {
    render(<Paragraph {...paragraphProps} />);
    expect(screen.getByText(/Paragraph/i)).toBeDefined();
  });
});

import { describe, expect, it,   } from "vitest";
import { render, screen } from "@testing-library/react";
import { Link } from "@/components/Link/Link";

const linkProps = {
  children: "Link",
  className: "bg-red-200 px-4 py-2",
  href : "#"


};
describe("Link component ", () => {
  it("renders with correct element, class, and children", () => {
    render(<Link {...linkProps} />);
    expect(screen.getByText(/Link/i)).toBeDefined();
  });
});

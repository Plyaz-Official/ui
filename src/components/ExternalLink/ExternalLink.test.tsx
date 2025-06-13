import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ExternalLink } from "@/components/ExternalLink/ExternalLink";

const ExternalLinkProps = {
  children: "Link",
  className: "bg-red-200 px-4 py-2",
  href: "#",
};

describe("ExternalLink component ", () => {
  it("renders with correct element, class, and children", () => {
    render(<ExternalLink {...ExternalLinkProps} />);
    expect(screen.getByText(/Link/i)).toBeDefined();
  });
});

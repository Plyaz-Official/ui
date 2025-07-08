import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, vi } from "vitest";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./Select";

describe("Select component", () => {
  it("renders with placeholder", () => {
    render(
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>
    );

    expect(screen.getByText("Select a fruit")).toBeInTheDocument();
  });

  it("allows selecting an option and calls onValueChange and render under 100ms", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    const start = performance.now();
    render(
      <Select onValueChange={onChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>
    );
    const end = performance.now();
    const duration = end - start;
    expect(duration).toBeLessThan(100);
    const trigger = screen.getByRole("button");
    await user.click(trigger);

    const appleOption = await screen.findByText("Apple");
    await user.click(appleOption);

    expect(onChange).toHaveBeenCalledWith("apple");
  });
});

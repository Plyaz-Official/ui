import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import App from "../src/App";

describe("App Component", () => {
  it("calls the onClick handler when clicked", async () => {
    render(<App />);
    const button = screen.getByTestId("count-button");
    await userEvent.click(button);
    expect(button).toHaveTextContent("count is 1");
  });
});

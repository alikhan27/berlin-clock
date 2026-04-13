import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App component - Heading", () => {
  it("renders the App component and finds a heading", () => {
    render(<App />);
    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement).toBeInTheDocument();
  });

  it("renders the App component and finds the correct heading text", () => {
    render(<App />);
    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement).toHaveTextContent(/berlin clock/i);
  });
});

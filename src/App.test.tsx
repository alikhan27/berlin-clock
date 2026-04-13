import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
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

describe("App component - Seconds Lamp", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders the App component and checks if the seconds lamp is present", () => {
    render(<App />);
    const lampElement = screen.getByRole("seconds").querySelector(".lamp");
    expect(lampElement).toBeInTheDocument();
  });

  it("renders the App component and checks if the seconds lamp is Off when seconds is odd", () => {
    const oddDate = new Date(2026, 0, 1, 12, 0, 1); // 12:00:01 is odd
    vi.setSystemTime(oddDate);
    render(<App />);
    vi.advanceTimersByTime(1000);
    const lampElement = screen.getByRole("seconds").querySelector(".lamp");
    expect(lampElement).toHaveClass("lamp rounded");
    expect(lampElement).not.toHaveClass("yellow");
  });

  it("renders the App component and checks if the seconds lamp is On when seconds is even", () => {
    const evenDate = new Date(2026, 0, 1, 12, 0, 4); // 12:00:02 is even
    vi.setSystemTime(evenDate);
    render(<App />);
    const lampElement = screen.getByRole("seconds").querySelector(".lamp");
    expect(lampElement).toHaveClass("lamp rounded");
    expect(lampElement).toHaveClass("yellow");
  });
});

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

describe("App component - Hours Lamp", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });
  it("renders the App component and checks if the hour section TimeBlock components have correct number of lamps", () => {
    render(<App />);
    const hourSection = screen.getByRole("hours");
    const timeBlocks = hourSection.querySelectorAll("[role='time-block']");
    timeBlocks.forEach((timeBlock) => {
      const lamps = timeBlock.querySelectorAll("[role='lamp']");
      expect(lamps.length).toBe(4); // Each TimeBlock should have 4 lamps
    });
  });
  it("renders the App component and checks if the hour section TimeBlock components have correct number of lit lamps based on time", () => {
    const testDate = new Date(2026, 0, 1, 13, 0, 0);
    vi.setSystemTime(testDate);
    render(<App />);
    const hourSection = screen.getByRole("hours");
    const timeBlocks = hourSection.querySelectorAll("[role='time-block']");
    const firstTimeBlockLamps = timeBlocks[0].querySelectorAll("[role='lamp']");

    // - (5-hour blocks) to have 2 lit lamps (10 hours)
    expect(firstTimeBlockLamps[0]).toHaveClass("red");
    expect(firstTimeBlockLamps[1]).toHaveClass("red");
    expect(firstTimeBlockLamps[2]).not.toHaveClass("red");
    expect(firstTimeBlockLamps[3]).not.toHaveClass("red");

    // - (1-hour blocks) to have 3 lit lamps (3 hours)
    const secondTimeBlockLamps =
      timeBlocks[1].querySelectorAll("[role='lamp']");
    expect(secondTimeBlockLamps[0]).toHaveClass("red");
    expect(secondTimeBlockLamps[1]).toHaveClass("red");
    expect(secondTimeBlockLamps[2]).toHaveClass("red");
    expect(secondTimeBlockLamps[3]).not.toHaveClass("red");
  });
});
describe("App component - Minutes Lamp", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders the App component and checks if the minute section have correct number of lamps", () => {
    render(<App />);
    const minSection = screen.getByRole("minutes");
    const timeBlocks = minSection.querySelectorAll("[role='time-block']");
    expect(timeBlocks[0].querySelectorAll("[role='lamp']").length).toBe(11); // First TimeBlock should have 11 lamps
    expect(timeBlocks[1].querySelectorAll("[role='lamp']").length).toBe(4); // Second TimeBlock should have 4 lamps
  });

  it("renders the App component and checks if the minute section have correct number of lit lamps", () => {
    const testDate = new Date(2026, 0, 1, 12, 34, 0);
    vi.setSystemTime(testDate);
    render(<App />);
    const minSection = screen.getByRole("minutes");
    const timeBlocks = minSection.querySelectorAll("[role='time-block']");
    const yellowlitLamps = timeBlocks[0].querySelectorAll(".lamp.yellow");
    const redLitLamps = timeBlocks[0].querySelectorAll(".lamp.red");

    // - (5-minute blocks) to have 4 yellow lit lamps (20 minutes) and 2 red lit lamps (10 minutes)
    expect(yellowlitLamps.length).toBe(4);
    expect(redLitLamps.length).toBe(2);

    // - (1-minute blocks) to have 4 lit lamps (4 minutes)
    const secondTimeBlockLamps =
      timeBlocks[1].querySelectorAll("[role='lamp']");
    expect(secondTimeBlockLamps[0]).toHaveClass("yellow");
    expect(secondTimeBlockLamps[1]).toHaveClass("yellow");
    expect(secondTimeBlockLamps[2]).toHaveClass("yellow");
    expect(secondTimeBlockLamps[3]).toHaveClass("yellow");
  });
});

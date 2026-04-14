import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LAMP_CLASSES, GRID_SIZES } from "../../constants";
import TimeBlock from "./TimeBlock";

describe("TimeBlock component", () => {
  it("renders the TimeBlock component with correct grid size", () => {
    render(
      <TimeBlock
        lamps={GRID_SIZES.FOUR}
        litLamps={2}
        litColor={LAMP_CLASSES.RED}
      />,
    );
    expect(screen.getByRole("time-block")).toBeInTheDocument();
    const lampElements = screen.getAllByRole("lamp");
    expect(lampElements).toHaveLength(GRID_SIZES.FOUR);
  });

  it("renders the TimeBlock component with correct number of lit lamps", () => {
    render(
      <TimeBlock
        lamps={GRID_SIZES.FOUR}
        litLamps={3}
        litColor={LAMP_CLASSES.RED}
      />,
    );
    const lampElements = screen.getAllByRole("lamp");
    const litLamps = lampElements.filter((lamp) =>
      lamp.classList.contains("red"),
    );
    expect(litLamps).toHaveLength(3);
  });

  it("renders the TimeBlock component for 5 minute row with correct lit color for third lamps", () => {
    render(
      <TimeBlock
        lamps={GRID_SIZES.ELEVEN}
        litLamps={6}
        litColor={LAMP_CLASSES.YELLOW}
      />,
    );
    const lampElements = screen.getAllByRole("lamp");
    const yellowlitLamps = lampElements.filter((lamp) =>
      lamp.classList.contains("yellow"),
    );
    const redLitLamps = lampElements.filter((lamp) =>
      lamp.classList.contains("red"),
    );
    expect(yellowlitLamps).toHaveLength(4);
    expect(redLitLamps).toHaveLength(2);
  });
});

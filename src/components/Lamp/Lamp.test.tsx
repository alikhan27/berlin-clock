import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Lamp from "./Lamp";
import { LAMP_CLASSES } from "../../constants";

describe("Lamp component", () => {
  it("renders the Lamp component with background color white", () => {
    render(<Lamp />);
    expect(screen.getByRole("lamp")).toHaveClass("lamp");
    expect(screen.getByRole("lamp")).toHaveStyle("background-color: #ffffff;");
  });

  it("renders the Lamp component with lit color as yellow", () => {
    render(<Lamp litColor={LAMP_CLASSES.YELLOW} />);
    expect(screen.getByRole("lamp")).toHaveClass("lamp yellow");
    expect(screen.getByRole("lamp")).toHaveStyle("background-color: #ffee00;");
  });

  it("renders the Lamp component with lit color as red", () => {
    render(<Lamp litColor={LAMP_CLASSES.RED} />);
    expect(screen.getByRole("lamp")).toHaveClass("lamp red");
    expect(screen.getByRole("lamp")).toHaveStyle("background-color: #ff0000;");
  });

  it("renders the Lamp component in rounded shape", () => {
    render(<Lamp shape={LAMP_CLASSES.ROUNDED} />);
    expect(screen.getByRole("lamp")).toHaveClass("lamp rounded");
  });
});

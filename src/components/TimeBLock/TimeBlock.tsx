import { memo } from "react";
import Lamp from "../Lamp/Lamp";
import "./TimeBlock.css";
import { GRID_SIZES, LAMP_CLASSES } from "../../constants";
import type { TimeBlockProps } from "./TimeBlock.types";

const TimeBlock = memo(({ lamps, litLamps, litColor }: TimeBlockProps) => {
  const lampElements = [];
  for (let i = 0; i < lamps; i++) {
    const third = lamps === GRID_SIZES.ELEVEN && (i + 1) % 3 === 0;
    lampElements.push(
      <Lamp
        key={i}
        litColor={i < litLamps ? (third ? LAMP_CLASSES.RED : litColor) : ""}
      />,
    );
  }
  return (
    <div className="time-block" role="time-block">
      {lampElements}
    </div>
  );
});
export default TimeBlock;

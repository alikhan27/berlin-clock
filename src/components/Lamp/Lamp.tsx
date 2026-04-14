import "./Lamp.css";
import type { LampProps } from "./Lamp.types";

const Lamp = ({ litColor, shape = "" }: LampProps) => {
  const lampClass = `lamp ${shape} ${litColor}`;
  return <div role="lamp" className={lampClass}></div>;
};

export default Lamp;

import "./Lamp.css";
import type { LampProps } from "./Lamp.types";

const Lamp: React.FC<LampProps> = ({ litColor, shape = "" }) => {
  const lampClass = `lamp ${shape} ${litColor}`;
  return <div role="lamp" className={lampClass}></div>;
};

export default Lamp;

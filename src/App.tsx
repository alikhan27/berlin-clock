import "./App.css";
import Lamp from "./components/Lamp/Lamp";
import { LAMP_CLASSES } from "./constants";
import useClock from "./hooks/useClock";
import { getBerlinClockData } from "./utils/BerlinClock";

function App() {
  const time = useClock();
  const { isSecondsEven } = getBerlinClockData(time);
  return (
    <>
      <h1>Berlin Clock</h1>
      <div className="clock">
        <section role="seconds" className="seconds">
          <Lamp
            shape="rounded"
            litColor={isSecondsEven ? LAMP_CLASSES.YELLOW : ""}
          />
        </section>
      </div>
    </>
  );
}

export default App;

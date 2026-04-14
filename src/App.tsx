import "./App.css";
import Lamp from "./components/Lamp/Lamp";
import TimeBlock from "./components/TimeBlock/TimeBlock";
import { LAMP_CLASSES, GRID_SIZES } from "./constants";
import useClock from "./hooks/useClock";
import { getBerlinClockData } from "./utils/BerlinClock";

function App() {
  const time = useClock();
  const {
    isSecondsEven,
    fiveHoursCount,
    singleHoursCount,
    fiveMinutesCount,
    singleMinutesCount,
  } = getBerlinClockData(time);
  return (
    <>
      <h1>Berlin Clock</h1>
      <div className="clock">
        <section role="seconds">
          <Lamp
            shape="rounded"
            litColor={isSecondsEven ? LAMP_CLASSES.YELLOW : ""}
          />
        </section>
        <section role="hours">
          {[fiveHoursCount, singleHoursCount].map((_, index) => (
            <TimeBlock
              lamps={GRID_SIZES.FOUR}
              litLamps={index === 0 ? fiveHoursCount : singleHoursCount}
              litColor={LAMP_CLASSES.RED}
            />
          ))}
        </section>
        <section role="minutes">
          {[fiveMinutesCount, singleMinutesCount].map((count, index) => (
            <TimeBlock
              lamps={index === 0 ? GRID_SIZES.ELEVEN : GRID_SIZES.FOUR}
              litLamps={count}
              litColor={LAMP_CLASSES.YELLOW}
            />
          ))}
        </section>
      </div>
    </>
  );
}

export default App;

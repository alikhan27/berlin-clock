import type { BerlinClockData } from "./BerlinClock.types";

export const getBerlinClockData = (date: Date): BerlinClockData => {
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();

  return {
    isSecondsEven: s % 2 === 0,
    fiveHoursCount: Math.floor(h / 5),
    singleHoursCount: h % 5,
    fiveMinutesCount: Math.floor(m / 5),
    singleMinutesCount: m % 5,
    hours: h.toString().padStart(2, "0"),
    minutes: m.toString().padStart(2, "0"),
    seconds: s.toString().padStart(2, "0"),
  };
};

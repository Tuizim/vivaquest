import type { Habit } from "../../types";
import type { DayRecord } from "../../types/history";

export function buildDayRecord(habits: Habit[], date: Date): DayRecord {
  return {
    date: date.toISOString(),
    completedHabits: habits.filter((h) => h.concluded).map((h) => h.id),
    totalHabits: habits.length,
  };
}

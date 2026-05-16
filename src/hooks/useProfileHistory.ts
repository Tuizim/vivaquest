import { HABITS_LIST } from "../data/habits";
import { useAppStore } from "../store/useAppStore";
import type { Habit } from "../types";

export type HistoryEntry = {
  date: string;
  completedHabits: Habit[];
  totalHabits: number;
};

export function useProfileHistory(): HistoryEntry[] {
  const history = useAppStore((state) => state.history);

  return [...history]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((record) => ({
      date: record.date,
      totalHabits: record.totalHabits,
      completedHabits: record.completedHabits
        .map((id) => HABITS_LIST.find((h) => h.id === id))
        .filter((h): h is Habit => h !== undefined),
    }));
}

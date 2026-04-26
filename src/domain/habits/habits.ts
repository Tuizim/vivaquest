import { HABITS_LIST } from "../../data/habits";

export function getHabitById(habitId: string) {
  return HABITS_LIST.find((habit) => habit.id === habitId) ?? null;
}

export function getHabitIconById(habitId: string) {
  return getHabitById(habitId)?.icon ?? null;
}
import type { Habit } from "../../types"

export function toggleHabitById(habits: Habit[], habitId: string, status: boolean): Habit[] {
  return habits.map((h) =>
    h.id === habitId ? { ...h, concluded: status } : h
  )
}

export function findHabitById(habits: Habit[], habitId: string): Habit | undefined {
  return habits.find((h) => h.id === habitId)
}

export function allHabitsCompleted(habits: Habit[]): boolean {
  return habits.length > 0 && habits.every((h) => h.concluded)
}
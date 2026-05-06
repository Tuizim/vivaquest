import type { Gamification, Habit } from "../../types"
import { applyPoints, calcPointsDelta } from "../gamification/gamefication"
import type { ToggleHabitResult } from "../gamification/interfaces/toggleHabitResult"

export function toggleHabitById(habits: Habit[], habitId: string, status: boolean): Habit[] {
  return habits.map((h) =>
    h.id === habitId ? { ...h, concluded: status } : h
  )
}

export function findHabitById(habits: Habit[], habitId: string): Habit | undefined {
  return habits.find((h) => h.id === habitId)
}

export function processToggleHabit(
  habits: Habit[],
  gamification: Gamification,
  habitId: string,
  status: boolean
): ToggleHabitResult {
  const habit = findHabitById(habits, habitId)
  const delta = calcPointsDelta(habit?.concluded ?? false, status)

  return {
    habits: toggleHabitById(habits, habitId, status),
    gamification: applyPoints(gamification, delta),
  }
}
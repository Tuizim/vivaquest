import { applyPoints, calcPointsDelta } from "../domain/gamification/gamefication";
import { findHabitById, toggleHabitById } from "../domain/habits/habits";
import type { ToggleHabitResult } from "../interfaces/toggleHabitResult";
import type { Gamification, Habit } from "../types";

export function toggleHabit(
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
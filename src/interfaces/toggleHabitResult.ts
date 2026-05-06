import type { Gamification, Habit } from "../types"

export interface ToggleHabitResult {
  habits: Habit[]
  gamification: Gamification
}
import { calcStreak } from "../domain/gamification/gamefication"
import { allHabitsCompleted } from "../domain/habits/habits"
import type { Gamification, Habit } from "../types"

export function checkStreakProgress(
  habits: Habit[],
  gamification: Gamification
): Gamification {
  if (!allHabitsCompleted(habits)) return gamification
  return calcStreak(gamification)
}
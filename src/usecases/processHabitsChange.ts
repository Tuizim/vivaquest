import { applyPoints, POINTS_PER_HABIT } from '../domain/gamification/gamefication'
import type { Gamification, Habit } from '../types'

export function processHabitsChange(
  prevHabits: Habit[],
  nextHabits: Habit[],
  gamification: Gamification,
): { habits: Habit[]; gamification: Gamification } {
  const nextIds = new Set(nextHabits.map((h) => h.id))

  const removedConcluded = prevHabits.filter((h) => !nextIds.has(h.id) && h.concluded)

  const delta = -removedConcluded.length * POINTS_PER_HABIT

  return {
    habits: nextHabits,
    gamification: applyPoints(gamification, delta),
  }
}

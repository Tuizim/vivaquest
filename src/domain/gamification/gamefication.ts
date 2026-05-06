import type { Gamification } from "../../types"

export const POINTS_PER_HABIT = 10

export function calcPointsDelta(wasCompleted: boolean,newStatus: boolean): number {
  if (newStatus && !wasCompleted) return POINTS_PER_HABIT
  if (!newStatus && wasCompleted) return -POINTS_PER_HABIT
  return 0
}

export function applyPoints(gamification: Gamification,delta: number): Gamification {
  return {
    ...gamification,
    points: gamification.points + delta,
  }
}
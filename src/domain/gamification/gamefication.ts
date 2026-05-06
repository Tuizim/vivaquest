import type { Gamification } from "../../types"
import { toLocalDate, wasYesterday } from "../../utils/dateUtils"

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

export function calcStreak(gamification: Gamification): Gamification {
  const streakContinues = gamification.lastProcessedDate
    ? wasYesterday(new Date(gamification.lastProcessedDate))
    : false

  const newStreak = streakContinues
    ? gamification.currentStreak + 1
    : gamification.currentStreak

  return {
    ...gamification,
    currentStreak: newStreak,
    bestStreak: Math.max(newStreak, gamification.bestStreak),
    lastProcessedDate: toLocalDate(),
  }
}
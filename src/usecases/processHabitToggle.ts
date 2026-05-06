import type { ToggleHabitResult } from '../interfaces/toggleHabitResult'
import type { Gamification, Habit } from '../types'
import { checkStreakProgress } from './checkStreakProgress'
import { toggleHabit } from './togglehabit'

export function processHabitToggle(
  habits: Habit[],
  gamification: Gamification,
  habitId: string,
  status: boolean
): ToggleHabitResult {
  const toggled = toggleHabit(habits, gamification, habitId, status)

  return {
    ...toggled,
    gamification: checkStreakProgress(toggled.habits, toggled.gamification),
  }
}
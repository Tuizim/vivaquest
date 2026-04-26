import type { Habit } from "./habit"
import type { UserProfile } from "./profile"

export type AppActions = {
  setProfile: (profile: UserProfile | null) => void
  setHabits: (habits: Habit[] | undefined) => void
  toggleHabit: (habitId: string, status: boolean) => void
}
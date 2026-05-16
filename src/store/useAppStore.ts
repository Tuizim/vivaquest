import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { persistConfig } from '../storage/persistConfig'
import { buildDayRecord } from '../domain/habits/habitHistory'
import type { AppStore } from '../types/appStore'
import { processHabitToggle } from '../usecases/processHabitToggle'
import { processHabitsChange } from '../usecases/processHabitsChange'

export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      profile: null,
      habits: [],
      history: [],
      gamification: {
        points: 0,
        currentStreak: 0,
        bestStreak: 0,
        lastProcessedDate: null,
      },
      lastResetDate: null,

      setProfile: (profile) => set({ profile }),
      setHabits: (habits) => {
        const { habits: prevHabits, gamification } = get()
        set(processHabitsChange(prevHabits, habits ?? [], gamification))
      },

      toggleHabit: (habitId, status) => {
        const { habits, gamification } = get()
        set(processHabitToggle(habits, gamification, habitId, status))
      },

      resetDailyHabits: (today) => {
        const { habits, history, lastResetDate } = get()
        const newHistory = lastResetDate
          ? [...history, buildDayRecord(habits, new Date(lastResetDate))]
          : history
        set({
          habits: habits.map((h) => ({ ...h, concluded: false })),
          lastResetDate: today,
          history: newHistory,
        })
      },
    }),
    persistConfig
  )
)
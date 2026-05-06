import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { persistConfig } from '../storage/persistConfig'
import type { AppStore } from '../types/appStore'
import { processHabitToggle } from '../usecases/processHabitToggle'

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
      setHabits: (habits) => set({ habits }),

      toggleHabit: (habitId, status) => {
        const { habits, gamification } = get()
        set(processHabitToggle(habits, gamification, habitId, status))
      },

      resetDailyHabits: (today) => {
        const { habits } = get()
        set({
          habits: habits.map((h) => ({ ...h, concluded: false })),
          lastResetDate: today,
        })
      },
    }),
    persistConfig
  )
)
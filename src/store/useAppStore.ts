import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { persistConfig } from '../storage/persistConfig'
import type { AppStore } from '../types/appStore'
import { processToggleHabit } from '../domain/habits/habits'

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
        lastProcessedDate: new Date(),
      },

      setProfile: (profile) => set({ profile }),
      setHabits: (habits) => set({ habits }),

      toggleHabit: (habitId, status) => {
        const { habits, gamification } = get()
        set(processToggleHabit(habits, gamification, habitId, status))
      },
    }),
    persistConfig
  )
)
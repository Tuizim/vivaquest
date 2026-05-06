import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { persistConfig } from '../storage/persistConfig'
import type { AppStore } from '../types/appStore'
import { toggleHabit } from '../usecases/togglehabit'
import { checkStreakProgress } from '../usecases/checkStreakProgress'
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

      setProfile: (profile) => set({ profile }),
      setHabits: (habits) => set({ habits }),

      toggleHabit: (habitId, status) => {
        const { habits, gamification } = get()
        set(processHabitToggle(habits, gamification, habitId, status))
      },
    }),
    persistConfig
  )
)
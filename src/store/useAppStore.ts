import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { AppState } from '../types'
import type { AppActions } from '../types/appActions'

type AppStore = AppState & AppActions

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
        lastProcessedDate: new Date,
      },
      setProfile: (profile) => set({ profile }),
      setHabits: (habits) => set({ habits }),
      toggleHabit: (habitId, status) =>
        set((state) => ({
          habits: state.habits.map((habit) =>
            habit.id === habitId
              ? { ...habit, concluded: status }
              : habit
          ),
        })),
    }),
    {
      name: 'vivaquest_state',
    }
  )
)
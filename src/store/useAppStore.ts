import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { AppState } from '../types'

type AppStore = AppState & {
}

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
        lastProcessedDate: '',
      },
    }),
    {
      name: 'vivaquest_state',
    }
  )
)
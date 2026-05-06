import { useEffect } from "react"
import { useAppStore } from "../store/useAppStore"
import { toLocalDate } from "../utils/dateUtils"

export function useDayReset() {
  const {lastResetDate, resetDailyHabits} = useAppStore()

  useEffect(() => {
    function checkAndReset() {
      const today = toLocalDate()
      const stored = lastResetDate ? new Date(lastResetDate) : null
      if (!stored || today.getTime() !== stored.getTime()) {
        resetDailyHabits(today)
      }
    }

    checkAndReset()

    document.addEventListener("visibilitychange", checkAndReset)
    return () => document.removeEventListener("visibilitychange", checkAndReset)
  }, [lastResetDate, resetDailyHabits])
}

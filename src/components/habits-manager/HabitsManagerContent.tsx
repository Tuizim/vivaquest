import { useAppStore } from "../../store/useAppStore"
import { HabitSelectList } from "../habits/HabitSelectList"
import type { Habit } from "../../types"
import { scrollHeight } from "../../styles/tokens"

const MIN_HABITS = 3

export function HabitsManagerContet() {
  const habits = useAppStore((s) => s.habits)
  const setHabits = useAppStore((s) => s.setHabits)

  const activeIds = new Set(habits.map((h) => h.id))
  const atMinimum = activeIds.size <= MIN_HABITS
  const disabledIds = atMinimum ? activeIds : undefined

  function handleToggle(habit: Habit) {
    if (activeIds.has(habit.id)) {
      if (atMinimum) return
      setHabits(habits.filter((h) => h.id !== habit.id))
    } else {
      setHabits([...habits, { ...habit, concluded: false }])
    }
  }

  return (
    <HabitSelectList
      selectedIds={activeIds}
      onToggle={handleToggle}
      disabledIds={disabledIds}
      maxH={scrollHeight.full}
    />
  )
}

import { HABITS_LIST } from "../../data/habits"
import { FadeScroll, type ResponsiveString } from "../layout/FadeScroll"
import SelectHabit from "./SelectHabit"
import type { Habit } from "../../types"

type Props = {
  selectedIds: Set<string>
  onToggle: (habit: Habit) => void
  disabledIds?: Set<string>
  maxH: ResponsiveString
  fadeColor?: string
}

export function HabitSelectList({ selectedIds, onToggle, disabledIds, maxH, fadeColor }: Props) {
  return (
    <FadeScroll maxH={maxH} fadeColor={fadeColor}>
      {HABITS_LIST.map((habit) => (
        <SelectHabit
          key={habit.id}
          habit={habit}
          checked={selectedIds.has(habit.id)}
          disabled={disabledIds?.has(habit.id)}
          onToggle={() => onToggle(habit)}
        />
      ))}
    </FadeScroll>
  )
}

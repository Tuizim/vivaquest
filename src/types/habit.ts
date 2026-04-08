import type { IconType } from 'react-icons'

export type Habit = {
  id: string
  name: string
  icon: IconType
  iconColor: string
  iconBg: string
  description: string
  active: boolean
}
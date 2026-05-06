import type { IconType } from "react-icons"
import { MdDashboard } from "react-icons/md"

export type NavItem = {
  label: string
  icon: IconType
  path: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", icon: MdDashboard, path: "/dashboard" },
]

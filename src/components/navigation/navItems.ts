import { MdDashboard, MdChecklist } from "react-icons/md"
import { LuUser } from "react-icons/lu"
import type { IconType } from "react-icons"

export type NavItemConfig = {
  to: string
  icon: IconType
  label: string
}

export const navItems: NavItemConfig[] = [
  { to: "/dashboard",      icon: MdDashboard, label: "Dashboard" },
  { to: "/habits-manager", icon: MdChecklist,  label: "Hábitos"   },
  { to: "/profile",        icon: LuUser,       label: "Perfil"    },
]

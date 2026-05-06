import { useAppStore } from "../../store/useAppStore"
import { BottomNav } from "./BottomNav"
import { SidebarNav } from "./SidebarNav"

export function AppNav() {
  const profile = useAppStore((state) => state.profile)

  if (!profile) return null

  return (
    <>
      <SidebarNav />
      <BottomNav />
    </>
  )
}

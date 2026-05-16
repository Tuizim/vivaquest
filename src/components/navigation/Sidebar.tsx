import { Box } from "@chakra-ui/react"
import { useAppStore } from "../../store/useAppStore"
import { sidebar } from "../../styles/tokens"
import { SidebarLogo } from "./SidebarLogo"
import { SidebarNav } from "./SidebarNav"

export function Sidebar() {
  const profile = useAppStore((state) => state.profile)

  if (!profile) return null

  return (
    <Box
      as="nav"
      position="fixed"
      left={0}
      top={0}
      h="100vh"
      w={sidebar.width}
      bg="white"
      borderRight="1px solid"
      borderColor="secondary.100"
      display={{ base: "none", lg: "flex" }}
      flexDir="column"
      zIndex={200}
      py={6}
      px={4}
    >
      <SidebarLogo />
      <SidebarNav />
    </Box>
  )
}

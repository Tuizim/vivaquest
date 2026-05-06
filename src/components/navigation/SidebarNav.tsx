import { Box, Text } from "@chakra-ui/react"
import { Link, useLocation } from "react-router-dom"
import { NAV_ITEMS, type NavItem } from "./navConfig"

export function SidebarNav() {
  const { pathname } = useLocation()

  return (
    <Box
      as="nav"
      display={{ base: "none", lg: "flex" }}
      flexDir="column"
      position="fixed"
      top={0}
      left={0}
      h="100vh"
      w="240px"
      bg="white"
      borderRight="1px solid"
      borderColor="secondary.200"
      p={4}
      gap={1}
      zIndex={100}
    >
      <Box px={3} py={4} mb={2}>
        <Text fontWeight="bold" fontSize="lg" color="brand.500">
          VivaQuest
        </Text>
      </Box>

      {NAV_ITEMS.map((item) => (
        <SidebarItem key={item.path} item={item} isActive={pathname === item.path} />
      ))}
    </Box>
  )
}

type SidebarItemProps = {
  item: NavItem
  isActive: boolean
}

function SidebarItem({ item, isActive }: SidebarItemProps) {
  const Icon = item.icon
  return (
    <Link to={item.path} style={{ textDecoration: "none" }}>
      <Box
        display="flex"
        alignItems="center"
        gap={3}
        px={3}
        py={3}
        rounded="xl"
        bg={isActive ? "brand.muted" : "transparent"}
        color={isActive ? "brand.500" : "secondary.500"}
        fontWeight={isActive ? "semibold" : "medium"}
        fontSize="sm"
        transition="all 0.15s ease"
        cursor="pointer"
      >
        <Icon size={20} />
        <Text>{item.label}</Text>
      </Box>
    </Link>
  )
}

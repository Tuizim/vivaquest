import { Box, Text } from "@chakra-ui/react"
import { Link, useLocation } from "react-router-dom"
import { NAV_ITEMS, type NavItem } from "./navConfig"

export function BottomNav() {
  const { pathname } = useLocation()

  return (
    <Box
      as="nav"
      display={{ base: "flex", lg: "none" }}
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      h="64px"
      bg="white"
      borderTop="1px solid"
      borderColor="secondary.100"
      zIndex={100}
      alignItems="center"
      justifyContent="space-around"
      px={2}
    >
      {NAV_ITEMS.map((item) => (
        <BottomNavItem key={item.path} item={item} isActive={pathname === item.path} />
      ))}
    </Box>
  )
}

type BottomNavItemProps = {
  item: NavItem
  isActive: boolean
}

function BottomNavItem({ item, isActive }: BottomNavItemProps) {
  const Icon = item.icon
  return (
    <Link to={item.path} style={{ textDecoration: "none", flex: "1" }}>
      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        gap="1"
        py={2}
        color={isActive ? "brand.500" : "secondary.400"}
        transition="all 0.15s ease"
        cursor="pointer"
      >
        <Icon size={22} />
        <Text fontSize="xs" fontWeight={isActive ? "semibold" : "normal"}>
          {item.label}
        </Text>
      </Box>
    </Link>
  )
}

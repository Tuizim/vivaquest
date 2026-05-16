import { Flex, Text } from "@chakra-ui/react"
import { Link, useLocation } from "react-router-dom"
import type { NavItemConfig } from "./navItems"

export function NavItem({ to, icon: Icon, label }: NavItemConfig) {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link to={to}>
      <Flex
        align="center"
        gap={3}
        px={3}
        py={2.5}
        rounded="xl"
        bg={isActive ? "brand.100" : "transparent"}
        color={isActive ? "brand.600" : "secondary.500"}
        fontWeight={isActive ? "semibold" : "medium"}
        fontSize="sm"
        transition="all 0.15s"
        _hover={{
          bg: isActive ? "brand.100" : "secondary.50",
          color: isActive ? "brand.600" : "secondary.700",
        }}
      >
        <Icon size={20} />
        <Text>{label}</Text>
      </Flex>
    </Link>
  )
}

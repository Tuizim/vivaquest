import { Flex } from "@chakra-ui/react"
import { NavItem } from "./NavItem"
import { navItems } from "./navItems"

export function SidebarNav() {
  return (
    <Flex flexDir="column" gap={1} flex={1}>
      {navItems.map((item) => (
        <NavItem key={item.to} {...item} />
      ))}
    </Flex>
  )
}

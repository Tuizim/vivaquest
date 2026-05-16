import { Box, Flex, Text } from "@chakra-ui/react"
import { Link, useLocation } from "react-router-dom"
import { MdDashboard, MdChecklist } from "react-icons/md"
import { LuUser } from "react-icons/lu"
import { MdOutlineRocketLaunch } from "react-icons/md"
import type { IconType } from "react-icons"
import { useAppStore } from "../../store/useAppStore"
import { sidebar } from "../../styles/tokens"

type NavItemProps = {
  to: string
  icon: IconType
  label: string
}

function NavItem({ to, icon: Icon, label }: NavItemProps) {
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
      <Flex align="center" gap={3} mb={8} px={2}>
        <Box
          w={9}
          h={9}
          rounded="xl"
          bg="brand.500"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="white"
          flexShrink={0}
        >
          <MdOutlineRocketLaunch size={20} />
        </Box>
        <Text fontWeight="bold" fontSize="md" color="secondary.900" letterSpacing="tight">
          VivaQuest
        </Text>
      </Flex>

      <Flex flexDir="column" gap={1} flex={1}>
        <NavItem to="/dashboard"      icon={MdDashboard} label="Dashboard" />
        <NavItem to="/habits-manager" icon={MdChecklist}  label="Hábitos"   />
        <NavItem to="/profile"        icon={LuUser}       label="Perfil"    />
      </Flex>

      <Flex
        align="center"
        gap={3}
        px={3}
        py={2.5}
        rounded="xl"
        bg="secondary.50"
        mt={4}
      >
        <Box
          w={8}
          h={8}
          rounded="full"
          bg="brand.100"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="brand.600"
          fontSize="sm"
          fontWeight="bold"
          flexShrink={0}
        >
          {profile.name?.charAt(0).toUpperCase()}
        </Box>
        <Text fontSize="sm" fontWeight="medium" color="secondary.700" truncate>
          {profile.name}
        </Text>
      </Flex>
    </Box>
  )
}

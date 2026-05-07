import { Flex, Heading, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useAppStore } from "../../store/useAppStore"
import { UserAvatar } from "../user/UserAvatar"

export function DashboardHeader() {
  const profile = useAppStore((state) => state.profile)

  return (
    <Flex w="full" maxW="sm" align="center" justify="space-between">
      <Flex flexDir="column" align="flex-start">
        <Text fontSize="sm" color="secondary.500">Dashboard</Text>
        <Heading size="2xl" fontWeight="bold">Bem vindo, {profile?.name}</Heading>
      </Flex>
      <Link to="/profile">
        <UserAvatar name={profile?.name} avatar={profile?.avatar} />
      </Link>
    </Flex>
  )
}
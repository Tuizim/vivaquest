import { Flex, Heading, Text } from "@chakra-ui/react"
import { useAppStore } from "../../store/useAppStore"

export function DashboardHeader() {

  const profile = useAppStore((state) => state.profile)

  return (
    <Flex w="full" maxW="sm" flexDir="column" align="flex-start">
      <Text fontSize="sm" color="secondary.500">
        Dashboard
      </Text>
      <Heading size="2xl" fontWeight="bold">
        Bem vindo, {profile?.name}
      </Heading>
    </Flex>
  )
}
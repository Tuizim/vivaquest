import { Box, Flex, Text } from "@chakra-ui/react"
import { useAppStore } from "../../store/useAppStore"
import { getLevel } from "../../utils/levelUtils"
import { UserAvatar } from "../user/UserAvatar"

export function ProfileHeader() {
  const profile = useAppStore((state) => state.profile)
  const gamification = useAppStore((state) => state.gamification)

  const level = getLevel(gamification.points)

  return (
    <Flex direction="column" align="center" gap={3}>
      <Flex direction="column" align="center" gap={2} cursor="pointer">
        <Box
          rounded="full"
          p="3px"
          background="linear-gradient(135deg, {colors.brand.400}, {colors.brand.600})"
        >
          <Box rounded="full" overflow="hidden" border="3px solid white">
            <UserAvatar name={profile?.name} avatar={profile?.avatar} size="4xl" />
          </Box>
        </Box>

        <Box
          mt="-3"
          bg="brand.500"
          color="white"
          fontSize="md"
          fontWeight="semibold"
          px={2}
          py={0.5}
          rounded="full"
          border="2px solid white"
          lineHeight="1.4"
        >
          Nível {level}
        </Box>
      </Flex>

      <Text fontWeight="semibold" fontSize="2xl" color="secondary.800">
        {profile?.name}
      </Text>
    </Flex>
  )
}

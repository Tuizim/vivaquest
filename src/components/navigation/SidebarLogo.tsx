import { Flex, Text } from "@chakra-ui/react"

export function SidebarLogo() {
  return (
    <Flex align="center" gap={3} mb={8} px={2}>
      <img src="/icon.svg" alt="VivaQuest" width={36} height={36} style={{ flexShrink: 0 }} />
      <Text fontWeight="bold" fontSize="md" color="secondary.900" letterSpacing="tight">
        VivaQuest
      </Text>
    </Flex>
  )
}

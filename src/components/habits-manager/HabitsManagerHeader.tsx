import { Badge, Flex, Text } from "@chakra-ui/react";
import { useAppStore } from "../../store/useAppStore";
import { HABITS_LIST } from "../../data/habits";

export function HabitsManagerHeader() {
  const activeCount = useAppStore((s) => s.habits.length)

  return (
    <Flex w="full" flexDir="column" gap={3}>
      <Text fontSize="sm" color="secondary.500">
        Ative os hábitos que deseja monitorar no seu dia a dia.
      </Text>
      <Flex align="center" gap={2}>
        <Badge colorPalette="brand" variant="subtle" rounded="full" px={3} py={1} fontSize="xs">
          {activeCount} ativo{activeCount !== 1 ? "s" : ""}
        </Badge>
        <Badge colorPalette="secondary" variant="subtle" rounded="full" px={3} py={1} fontSize="xs">
          {HABITS_LIST.length - activeCount} disponíve{HABITS_LIST.length - activeCount !== 1 ? "is" : "l"}
        </Badge>
      </Flex>
    </Flex>
  )
}

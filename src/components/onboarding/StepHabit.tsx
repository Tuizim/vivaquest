import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import { HabitSelectList } from "../habits/HabitSelectList"
import type { Habit } from "../../types"
import { scrollHeight } from "../../styles/tokens"

type Props = {
  selected: Habit[]
  onToggle: (habit: Habit) => void
  onFinish: () => void
}

const MIN_HABITS = 3

export default function StepHabit({ selected, onToggle, onFinish }: Props) {
  const isReady = selected.length >= MIN_HABITS
  const selectedIds = new Set(selected.map((h) => h.id))

  return (
    <Flex flexDir="column" gap={5} w="full">
      <Flex gap={3} justifyContent="space-between" alignItems="center" w="full">
        <Heading fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">Hábitos iniciais</Heading>
        <Text
          fontSize="xs"
          fontWeight="semibold"
          color={isReady ? "brand.500" : "secondary.500"}
        >
          {selected.length} selecionado{selected.length !== 1 ? "s" : ""}
        </Text>
      </Flex>

      <HabitSelectList
        selectedIds={selectedIds}
        onToggle={onToggle}
        maxH={scrollHeight.selection}
      />

      <Button colorPalette="brand" rounded="2xl" onClick={onFinish} disabled={!isReady}>
        Finalizar
      </Button>
    </Flex>
  )
}

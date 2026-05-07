import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import SelectHabit from "../habits/SelectHabit"
import { HABITS_LIST } from "../../data/habits"
import type { Habit } from "../../types"

type Props = {
  selected: Habit[]
  onToggle: (habit: Habit) => void
  onFinish: () => void
}

const MIN_HABITS = 3

export default function StepHabit({ selected, onToggle, onFinish }: Props) {
  const isReady = selected.length >= MIN_HABITS

  return (
    <Flex flexDir="column" gap={5}>
      <Flex gap={3} justifyContent="space-between" alignItems="center" w="full">
        <Heading fontSize="xl" fontWeight="bold">Hábitos iniciais</Heading>
        <Text
          fontSize="xs"
          fontWeight="semibold"
          color={isReady ? "brand.500" : "secondary.500"}
        >
          {selected.length} selecionado{selected.length !== 1 ? "s" : ""}
        </Text>
      </Flex>
      <Flex flexDir="column" gap={3} w="full" overflowY="auto" maxH="45vh" px={1} py={0.5}>
        {HABITS_LIST.map(habit => (
          <SelectHabit
            key={habit.id}
            habit={habit}
            checked={selected.includes(habit)}
            onToggle={() => onToggle(habit)}
          />
        ))}
      </Flex>
      <Button colorPalette="brand" rounded="2xl" onClick={onFinish} disabled={!isReady}>
        Finalizar
      </Button>
    </Flex>
  )
}
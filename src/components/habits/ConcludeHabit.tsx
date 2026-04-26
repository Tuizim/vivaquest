import { Box, Flex, Text } from "@chakra-ui/react"
import type { Habit } from "../../types"
import { getHabitIconById } from "../../domain/habits/habits"
import { Checkbutton } from "../button/Checkbutton"

type ConcludeHabitProp = {
  habit: Habit
  toggleHabit: (habitId: string, status: boolean) => void
}

export function ConcludeHabit({ habit, toggleHabit }: ConcludeHabitProp) {
  const Icon = getHabitIconById(habit.id)
  const bgColor = habit.concluded? "success.muted" : "secondary.50"
  return (
    <Box
      bg={bgColor}
      p={5}
      rounded="2xl"
      border="1px solid"
      borderColor="secondary.100"
    >
      <Flex align="center" justify="space-between">
        <Flex align="center" gap={3}>
          <Box
            p={3}
            bg="white"
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="xs"
          >
            {Icon ? <Icon /> : null}
          </Box>

          <Text fontSize="lg" fontWeight="bold">
            {habit.name}
          </Text>
        </Flex>

        <Checkbutton stats={habit.concluded} onClick={()=> toggleHabit(habit.id, !habit.concluded)}></Checkbutton>
      </Flex>
    </Box>
  )
}
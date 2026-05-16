import { Box, Flex, Text } from "@chakra-ui/react"
import type { Habit } from "../../types"
import { Checkbutton } from "../button/Checkbutton"
import { getHabitIconById } from "../../utils/habitUtilss"
import { cardPadding } from "../../styles/tokens"

type ConcludeHabitProp = {
  habit: Habit
  toggleHabit: (habitId: string, status: boolean) => void
}

export function ConcludeHabit({ habit, toggleHabit }: ConcludeHabitProp) {
  const Icon = getHabitIconById(habit.id)
  const bgColor = habit.concluded ? "success.muted" : "secondary.50"
  const borderColor = habit.concluded ? "success.muted" : "secondary.100"
  const textColor = habit.concluded ? "success.emphasized" : "secondary.500"
  const iconBgColor = habit.concluded ? "green.50" : "white"
  const iconColor = habit.concluded ? "success.emphasized" : "secondary.500"

  return (
    <Box
      bg={bgColor}
      p={cardPadding}
      rounded="2xl"
      border="1px solid"
      transition="all 0.2s ease"
      borderColor={borderColor}
      minH="64px"
    >
      <Flex align="center" justify="space-between" gap={3} h="full">
        <Flex align="center" gap={3} flex="1" minW={0}>
          <Box
            p={{ base: 2, md: 3 }}
            bg={iconBgColor}
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexShrink={0}
            boxShadow="xs"
            color={iconColor}
          >
            {Icon ? <Icon /> : null}
          </Box>

          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="bold"
            color={textColor}
            textDecoration={habit.concluded ? "line-through" : "none"}
            opacity={habit.concluded ? 0.65 : 1}
            truncate
          >
            {habit.name}
          </Text>
        </Flex>

        <Checkbutton stats={habit.concluded} onClick={() => toggleHabit(habit.id, !habit.concluded)} />
      </Flex>
    </Box>
  )
}
import { Flex, Heading } from "@chakra-ui/react"
import { ConcludeHabit } from "../habits/ConcludeHabit"
import { useAppStore } from "../../store/useAppStore"

export function DashboardHabits() {
  const{habits,toggleHabit} = useAppStore()

  return (
    <Flex as='section'  w="full" maxW="sm" flexDir="column" gap="3" p="3">
      <Heading as="h3" size="xl" mt={5}>Seus hábitos</Heading>
      {
        habits.map(habit => (
          <ConcludeHabit habit={habit} key={habit.id} toggleHabit={toggleHabit}></ConcludeHabit>
        ))
      }
    </Flex>
  )
}
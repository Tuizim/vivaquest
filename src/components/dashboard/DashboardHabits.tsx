import { Flex, Heading, Text } from "@chakra-ui/react"
import { ConcludeHabit } from "../habits/ConcludeHabit"
import { useAppStore } from "../../store/useAppStore"
import { Link } from "react-router-dom"
import { FadeScroll } from "../layout/FadeScroll"
import { scrollHeight } from "../../styles/tokens"

export function DashboardHabits() {
  const { habits, toggleHabit } = useAppStore()

  return (
    <Flex as="section" w="full" flexDir="column" gap={3}>
      <Flex align="center" justify="space-between" mt={5}>
        <Heading as="h3" size={{ base: "xl", lg: "2xl" }}>Seus hábitos</Heading>
        <Link to="/habits-manager">
          <Text fontSize="sm" color="brand.500" fontWeight="normal">Outras opções</Text>
        </Link>
      </Flex>
      <FadeScroll maxH={scrollHeight.full}>
        {habits.map(habit => (
          <ConcludeHabit habit={habit} key={habit.id} toggleHabit={toggleHabit} />
        ))}
      </FadeScroll>
    </Flex>
  )
}
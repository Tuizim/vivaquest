import { Badge, Button, Flex, Heading } from "@chakra-ui/react"
import SelectHabit from "../habits/SelectHabit"
import { HABITS_LIST } from "../../data/habits"

type Props = {
  selected: string[]
  onToggle: (id: string) => void
}

export default function StepHabit({ selected, onToggle }: Props) {

  return (
    <Flex flexDir="column" gap={5}>
      <Flex gap={3} justifyContent="space-between" alignItems="center" w="full">
        <Heading fontWeight='bold'>Hábitos iniciais</Heading>
        <Badge colorPalette="secondary">Escolha quantos quiser</Badge>
      </Flex>
      <Flex flexDir="column" gap={3} w="full" overflowY="auto" maxH="30vh">
        {HABITS_LIST.map(habit => (
          <SelectHabit
            key={habit.id}
            habit={habit}
            checked={selected.includes(habit.id)}
            onToggle={() => onToggle(habit.id)}
          />
        ))}
      </Flex>
      <Button colorPalette="brand" rounded="2xl">Finalizar</Button>
    </Flex>
  )
}
import { Flex, Text, Checkbox } from '@chakra-ui/react'
import type { Habit } from '../../types'

type Props = {
  habit: Habit
  checked: boolean
  onToggle: () => void
}

export default function SelectHabit({ habit, checked, onToggle }: Props) {
  return (
    <Flex
      align="center"
      gap={3}
      p={4}
      rounded="xl"
      borderWidth="1px"
      borderColor={checked ? 'brand.500' : 'gray.200'}
      bg={checked ? 'brand.100' : 'white'}
      cursor="pointer"
      transition="all 0.2s"
      onClick={onToggle}
      w="full"
    >
      <Flex
        w={10}
        h={10}
        rounded="3xl"
        bg={habit.iconBg}
        align="center"
        justify="center"
        fontSize="xl"
        transition="all 0.2s"
        color={habit.iconColor}
      >
        <habit.icon/>
      </Flex>

      <Flex flexDir="column" flex={1}>
        <Text fontWeight="semibold" fontSize="sm">{habit.name}</Text>
        <Text fontSize="sm" color="secondary.500">{habit.description}</Text>
      </Flex>

      <Checkbox.Root
        checked={checked}
        onCheckedChange={() => onToggle()}
        colorPalette="brand"
        pointerEvents="none"
      >
        <Checkbox.HiddenInput />
        <Checkbox.Control rounded="full" />
      </Checkbox.Root>
    </Flex>
  )
}
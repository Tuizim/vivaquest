import { Flex, Text, Switch } from '@chakra-ui/react'
import type { Habit } from '../../types'

type Props = {
  habit: Habit
  checked: boolean
  onToggle: () => void
  disabled?: boolean
}

export default function SelectHabit({ habit, checked, onToggle, disabled = false }: Props) {
  return (
    <Flex
      align="center"
      gap={4}
      px={4}
      py={3}
      rounded="2xl"
      borderWidth="1.5px"
      borderColor={checked ? 'brand.400' : 'secondary.200'}
      bg={checked ? 'brand.100' : 'white'}
      cursor={disabled ? 'not-allowed' : 'pointer'}
      opacity={disabled ? 0.65 : 1}
      transition="all 0.15s"
      onClick={disabled ? undefined : onToggle}
      _hover={disabled ? {} : { borderColor: checked ? 'brand.500' : 'secondary.300' }}
      w="full"
    >
      <Flex
        w={11}
        h={11}
        rounded="xl"
        bg={habit.iconBg}
        align="center"
        justify="center"
        fontSize="xl"
        color={habit.iconColor}
        transition="all 0.15s"
        flexShrink={0}
      >
        <habit.icon />
      </Flex>

      <Flex flexDir="column" flex={1} gap={0.5}>
        <Text fontWeight="semibold" fontSize="sm" color="secondary.800">
          {habit.name}
        </Text>
        <Text fontSize="xs" color="secondary.400">
          {habit.description}
        </Text>
      </Flex>

      <Switch.Root
        checked={checked}
        colorPalette="brand"
        pointerEvents="none"
        size="sm"
      >
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
      </Switch.Root>
    </Flex>
  )
}

import { Flex, Text } from "@chakra-ui/react";
import type { Habit } from "../../types";

type HistoryHabitChipProps = {
  habit: Habit;
};

export function HistoryHabitChip({ habit }: HistoryHabitChipProps) {
  return (
    <Flex
      align="center"
      gap={1.5}
      px={2.5}
      py={1}
      rounded="full"
      bg="secondary.100"
      border="1px solid"
      borderColor="secondary.200"
    >
      <Flex
        w={4}
        h={4}
        align="center"
        justify="center"
        color={habit.iconColor}
        fontSize="10px"
        flexShrink={0}
      >
        <habit.icon />
      </Flex>
      <Text fontSize="xs" color="secondary.700" fontWeight="medium">
        {habit.name}
      </Text>
    </Flex>
  );
}

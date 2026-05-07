import { Flex } from "@chakra-ui/react";
import { HabitsManagerHeader } from "../components/habits-manager/HabitsManagerHeader";

export default function HabitsManager() {
  return (
    <Flex w="full" maxW="sm" flexDir="column" gap="5">
     <HabitsManagerHeader></HabitsManagerHeader>
    </Flex>
  )
}
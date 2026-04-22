import { Flex } from "@chakra-ui/react";
import { DashboardHeader } from "../components/dashboard/DashboardHeader";
import { DashboardStatistics } from "../components/dashboard/DashboardStatistics";

export default function Dashboard() {
  return (
    <Flex w="full" maxW="sm" flexDir="column" gap="5">
      <DashboardHeader></DashboardHeader>
      <DashboardStatistics></DashboardStatistics>
    </Flex>
  )
}
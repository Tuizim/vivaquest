import { Box, Flex, Group, Progress, Text } from "@chakra-ui/react";
import { useAppStore } from "../../store/useAppStore";
import { getLevel, getPointsForNextLevel, getProgressInLevel } from "../../domain/gamification/level";

export function DashboardStatistics() {
  const gamefication = useAppStore((state) => state.gamification)
  const points = gamefication.points
  const currentLevel = getLevel(points)
  const pointsGoal = getPointsForNextLevel(points)
  const currentStreak = gamefication.currentStreak
  const progress = getProgressInLevel(points)

  return (
    <Box background="gray.900" width="100%" padding="5" color="white" rounded="2xl">
      <Text color="secondary.400" fontWeight="medium">Nível Atual</Text>
      <Text fontWeight="bolder" fontSize="2xl">{currentLevel}</Text>
      <Group grow mt="2">
        <StatisticData title="Sequencia" value={currentStreak + " dias"}></StatisticData>
        <StatisticData title="Pontos" value={points}></StatisticData>
      </Group>
      <StatisticProgressLevel points={points} pointsGoal={pointsGoal} progress={progress}></StatisticProgressLevel>
    </Box>
  )
}

type StatisticDataProps = {
  title: string;
  value: string | number;
};

function StatisticData({ title, value }: StatisticDataProps) {
  return (
    <Box
      bg="whiteAlpha.100"
      backdropFilter="blur(10px)"
      border="1px solid"
      borderColor="whiteAlpha.200"
      p={4}
      rounded="xl"
    >
      <Text fontSize="sm" color="secondary.300">
        {title}
      </Text>

      <Text fontWeight="bold" fontSize="lg">
        {value}
      </Text>
    </Box>
  );
}


type StatisticProgressProps = {
  points: number;
  pointsGoal: number;
  progress: number;
}

function StatisticProgressLevel({ points, pointsGoal, progress }: StatisticProgressProps) {
  return (
    <Box w="full" mt={4}>
      <Flex justify="space-between" mb={1}>
        <Text fontSize="xs" color="secondary.400">
          Próximo nível
        </Text>

        <Text fontSize="xs" color="secondary.400">
          {points} / {pointsGoal} XP
        </Text>
      </Flex>
      <Progress.Root
        value={progress}
        colorPalette="brand"
        variant="subtle"
        w="full"
        size="xs"
      >
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
    </Box>
  )
}
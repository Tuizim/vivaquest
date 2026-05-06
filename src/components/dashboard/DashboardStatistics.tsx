import { Box, Flex, Group, Progress, Text } from "@chakra-ui/react";
import { useAppStore } from "../../store/useAppStore";
import { getLevel, getPointsForNextLevel, getProgressInLevel } from "../../utils/levelUtils";
import { StatisticData } from "./StatisticData";

export function DashboardStatistics() {
  const gamefication = useAppStore((state) => state.gamification)
  const points = gamefication.points
  const currentLevel = getLevel(points)
  const pointsGoal = getPointsForNextLevel(points)
  const currentStreak = gamefication.currentStreak
  const progress = getProgressInLevel(points)

  return (
    <Box position="relative" width="100%" p={5} rounded="2xl" color="white" bg="secondary.900">
      <LightEffect></LightEffect>
      <Text color="secondary.400" fontWeight="medium">
        Nível Atual
      </Text>

      <Text fontWeight="bolder" fontSize="2xl">
        {currentLevel}
      </Text>

      <Group grow mt="2">
        <StatisticData title="Sequência" value={currentStreak} variant="streak" />
        <StatisticData title="Pontos" value={points} />
      </Group>

      <StatisticProgressLevel
        points={points}
        pointsGoal={pointsGoal}
        progress={progress}
      />
    </Box>
  )
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

function LightEffect() {
  return (<>
    <Box
      position="absolute"
      top="-40px"
      left="-40px"
      w="160px"
      h="160px"
      bg="#3b82f6"
      borderRadius="full"
      filter="blur(100px)"
      opacity={0.4}
    />

    <Box
      position="absolute"
      bottom="-60px"
      right="-30px"
      w="200px"
      h="200px"
      bg="#60a5fa"
      borderRadius="full"
      filter="blur(120px)"
      opacity={0.35}
    />

    <Box
      position="absolute"
      top="40%"
      left="60%"
      w="120px"
      h="120px"
      bg="#2563eb"
      borderRadius="full"
      filter="blur(90px)"
      opacity={0.3}
    />
  </>)
}
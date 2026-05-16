import { Flex, Progress, Text } from "@chakra-ui/react";
import { InfoCard } from "../layout/InfoCard";

type ProfileExperienceProps = {
  progressInLevel: number;
  pointsGoal: number;
  progressPercent: number;
  pointsLeft: number;
  nextLevel: number;
};

export function ProfileExperience({
  progressInLevel,
  pointsGoal,
  progressPercent,
  pointsLeft,
  nextLevel,
}: ProfileExperienceProps) {
  return (
    <InfoCard>
      <Text color="secondary.400" fontWeight="medium" fontSize={{ base: "xs", md: "sm" }}>
        Experiência
      </Text>

      <Flex justify="space-between" align="center" mt={1} mb={3}>
        <Text fontWeight="bold" fontSize={{ base: "lg", md: "xl" }} color="secondary.800">
          {progressInLevel} / {pointsGoal} XP
        </Text>
        <Text fontSize="sm" color="secondary.400">
          {progressPercent.toFixed(0)}%
        </Text>
      </Flex>

      <Progress.Root
        value={progressPercent}
        colorPalette="brand"
        variant="subtle"
        w="full"
        size="sm"
      >
        <Progress.Track rounded="full">
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>

      <Text fontSize={{ base: "xs", md: "sm" }} color="secondary.400" mt={2}>
        Faltam {pointsLeft} XP para o nível {nextLevel}
      </Text>
    </InfoCard>
  );
}

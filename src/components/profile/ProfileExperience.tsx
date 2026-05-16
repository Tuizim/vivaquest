import { Box, Flex, Progress, Text } from "@chakra-ui/react";

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
    <Box
      w="full"
      p={5}
      rounded="2xl"
      bg="white"
      border="1.5px solid"
      borderColor="secondary.200"
      boxShadow="0 2px 8px rgba(0,0,0,0.06)"
    >
      <Text color="secondary.400" fontWeight="medium" fontSize="sm">
        Experiência
      </Text>

      <Flex justify="space-between" align="center" mt={1} mb={3}>
        <Text fontWeight="bold" fontSize="lg" color="secondary.800">
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

      <Text fontSize="xs" color="secondary.400" mt={2}>
        Faltam {pointsLeft} XP para o nível {nextLevel}
      </Text>
    </Box>
  );
}

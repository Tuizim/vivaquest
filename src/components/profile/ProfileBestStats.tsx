import { Box, Flex, Group, Text } from "@chakra-ui/react";

type ProfileBestStatsProps = {
  bestStreak: number;
  points: number;
};

export function ProfileBestStats({ bestStreak, points }: ProfileBestStatsProps) {
  return (
    <Group grow>
      <StatBox icon="🏆" label="Melhor streak" value={`${bestStreak} Dias`} />
      <StatBox icon="⭐" label="Pontos totais" value={points.toString()} />
    </Group>
  );
}

type StatBoxProps = {
  icon: string;
  label: string;
  value: string;
};

function StatBox({ icon, label, value }: StatBoxProps) {
  return (
    <Box
      p={4}
      rounded="2xl"
      bg="white"
      border="1.5px solid"
      borderColor="secondary.200"
      boxShadow="0 2px 8px rgba(0,0,0,0.06)"
    >
      <Flex align="center" gap={2} mb={1}>
        <Text fontSize="xl">{icon}</Text>
      </Flex>
      <Text fontSize="xs" color="secondary.400">
        {label}
      </Text>
      <Text fontWeight="bold" fontSize="lg" color="secondary.800" mt={1}>
        {value}
      </Text>
    </Box>
  );
}

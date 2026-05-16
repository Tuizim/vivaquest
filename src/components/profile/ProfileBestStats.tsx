import { Flex, Group, Text } from "@chakra-ui/react";
import { InfoCard } from "../layout/InfoCard";

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
    <InfoCard>
      <Flex align="center" gap={2} mb={1}>
        <Text fontSize={{ base: "lg", md: "xl" }}>{icon}</Text>
      </Flex>
      <Text fontSize={{ base: "xs", md: "sm" }} color="secondary.400">
        {label}
      </Text>
      <Text fontWeight="bold" fontSize={{ base: "lg", md: "xl" }} color="secondary.800" mt={1}>
        {value}
      </Text>
    </InfoCard>
  );
}

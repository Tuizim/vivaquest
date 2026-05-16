import { Flex, Text } from "@chakra-ui/react";
import { InfoCard } from "../layout/InfoCard";

type ProfileStreakProps = {
  currentStreak: number;
};

export function ProfileStreak({ currentStreak }: ProfileStreakProps) {
  const isActive = currentStreak > 0;

  const style = isActive
    ? {
        borderColor: "rgba(255,120,60,0.4)",
        shadow: "0 2px 8px rgba(255,90,0,0.1)",
        icon: "🔥",
        label: "pegando fogo",
        labelColor: "orange.400",
        valueColor: "orange.500",
      }
    : {
        borderColor: "secondary.200",
        shadow: "0 2px 8px rgba(0,0,0,0.06)",
        icon: "❄️",
        label: "sem sequência",
        labelColor: "secondary.400",
        valueColor: "secondary.600",
      };

  return (
    <InfoCard borderColor={style.borderColor} boxShadow={style.shadow}>
      <Text color="secondary.400" fontWeight="medium" fontSize={{ base: "xs", md: "sm" }}>
        Streak atual
      </Text>

      <Flex justify="space-between" align="center" mt={2} flexWrap="wrap" gap={1}>
        <Text fontWeight="bold" fontSize={{ base: "2xl", lg: "3xl" }} color={style.valueColor}>
          {style.icon} {currentStreak} Dias
        </Text>
        <Text fontSize="sm" color={style.labelColor}>
          ({style.label})
        </Text>
      </Flex>
    </InfoCard>
  );
}

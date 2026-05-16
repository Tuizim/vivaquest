import { Box, Flex, Text } from "@chakra-ui/react";

type ProfileStreakProps = {
  currentStreak: number;
};

export function ProfileStreak({ currentStreak }: ProfileStreakProps) {
  const isActive = currentStreak > 0;

  const style = isActive
    ? {
        bg: "white",
        borderColor: "rgba(255,120,60,0.4)",
        shadow: "0 2px 8px rgba(255,90,0,0.1)",
        icon: "🔥",
        label: "pegando fogo",
        labelColor: "orange.400",
        valueColor: "orange.500",
      }
    : {
        bg: "white",
        borderColor: "secondary.200",
        shadow: "0 2px 8px rgba(0,0,0,0.06)",
        icon: "❄️",
        label: "sem sequência",
        labelColor: "secondary.400",
        valueColor: "secondary.600",
      };

  return (
    <Box
      w="full"
      p={5}
      rounded="2xl"
      bg={style.bg}
      border="1.5px solid"
      borderColor={style.borderColor}
      boxShadow={style.shadow}
    >
      <Text color="secondary.400" fontWeight="medium" fontSize="sm">
        Streak atual
      </Text>

      <Flex justify="space-between" align="center" mt={2}>
        <Text fontWeight="bold" fontSize="2xl" color={style.valueColor}>
          {style.icon} {currentStreak} Dias
        </Text>
        <Text fontSize="sm" color={style.labelColor}>
          ({style.label})
        </Text>
      </Flex>
    </Box>
  );
}

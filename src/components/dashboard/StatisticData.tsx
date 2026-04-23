import { Box, Text } from "@chakra-ui/react";

type StatisticDataProps = {
  title: string;
  value: number;
  variant?: "default" | "streak";
};

export function StatisticData({
  title,
  value,
  variant = "default",
}: StatisticDataProps) {
  const streakValue = typeof value === "number" ? value : Number(value);
  const isStreak = variant === "streak";
  const message = isStreak ? `${streakValue} dias` : streakValue.toString()

  const streakStyle = isStreak ? getStreakStyle(streakValue) : null;

  return (
    <Box
      bg={streakStyle?.bg ?? "whiteAlpha.100"}
      backdropFilter="blur(10px)"
      border="1px solid"
      borderColor={streakStyle?.borderColor ?? "whiteAlpha.200"}
      p={4}
      rounded="xl"
      boxShadow={streakStyle?.shadow}
      transition="all 0.2s ease"
    >
      <Text fontSize="sm" color={streakStyle?.titleColor ?? "secondary.300"}>
        {title}
      </Text>

      <Text fontWeight="bold" fontSize="lg" color={streakStyle?.valueColor}>
        {streakStyle?.icon} {message}
      </Text>
    </Box>
  );
}

function getStreakStyle(streak: number) {
  if (!streak || streak <= 0) {
    return {
      icon: "❄️",
      bg: "rgba(255,255,255,0.04)",
      borderColor: "rgba(255,255,255,0.08)",
      titleColor: "gray.400",
      valueColor: "gray.300",
      shadow: "none",
    };
  }

  return {
    icon: "🔥",
    bg: "rgba(255,90,0,0.14)",
    borderColor: "rgba(255,120,60,0.35)",
    titleColor: "orange.100",
    valueColor: "orange.300",
    shadow: "0 0 18px rgba(255,90,0,0.28)",
  };
}
import { Stack } from "@chakra-ui/react";
import { useProfileStats } from "../../hooks/useProfileStats";
import { ProfileExperience } from "./ProfileExperience";
import { ProfileStreak } from "./ProfileStreak";
import { ProfileBestStats } from "./ProfileBestStats";

export function ProfileStatistics() {
  const {
    points,
    currentStreak,
    bestStreak,
    nextLevel,
    pointsGoal,
    progressInLevel,
    progressPercent,
    pointsLeft,
  } = useProfileStats();

  return (
    <Stack gap={4} w="full">
      <ProfileExperience
        progressInLevel={progressInLevel}
        pointsGoal={pointsGoal}
        progressPercent={progressPercent}
        pointsLeft={pointsLeft}
        nextLevel={nextLevel}
      />
      <ProfileStreak currentStreak={currentStreak} />
      <ProfileBestStats bestStreak={bestStreak} points={points} />
    </Stack>
  );
}

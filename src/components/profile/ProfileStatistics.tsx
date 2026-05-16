import { Grid, GridItem } from "@chakra-ui/react";
import { useProfileStats } from "../../hooks/useProfileStats";
import { ProfileExperience } from "./ProfileExperience";
import { ProfileStreak } from "./ProfileStreak";
import { ProfileBestStats } from "./ProfileBestStats";
import { ProfileHistory } from "./ProfileHistory";

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
    <Grid
      templateColumns={{ base: "1fr", md: "1fr 1fr" }}
      gap={4}
      w="full"
      alignItems="start"
    >
      <GridItem display="flex" flexDir="column" gap={4}>
        <ProfileExperience
          progressInLevel={progressInLevel}
          pointsGoal={pointsGoal}
          progressPercent={progressPercent}
          pointsLeft={pointsLeft}
          nextLevel={nextLevel}
        />
        <ProfileBestStats bestStreak={bestStreak} points={points} />
      </GridItem>

      <GridItem display="flex" flexDir="column" gap={4}>
        <ProfileStreak currentStreak={currentStreak} />
        <ProfileHistory />
      </GridItem>
    </Grid>
  );
}

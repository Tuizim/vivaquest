import { useAppStore } from "../store/useAppStore";
import {
  getLevel,
  getPointsForNextLevel,
  getProgressInLevel,
  getProgressPercentage,
} from "../utils/levelUtils";

export function useProfileStats() {
  const { points, currentStreak, bestStreak } = useAppStore(
    (state) => state.gamification
  );

  const currentLevel = getLevel(points);
  const nextLevel = currentLevel + 1;
  const pointsGoal = getPointsForNextLevel(points);
  const progressInLevel = getProgressInLevel(points);
  const progressPercent = getProgressPercentage(points);
  const pointsLeft = pointsGoal - progressInLevel;

  return {
    points,
    currentStreak,
    bestStreak,
    currentLevel,
    nextLevel,
    pointsGoal,
    progressInLevel,
    progressPercent,
    pointsLeft,
  };
}

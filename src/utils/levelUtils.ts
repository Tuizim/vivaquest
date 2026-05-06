export function getLevel(points: number): number {
  return Math.floor(points / 100) + 1;
}

export function getPointsForNextLevel(points: number): number {
  const currentLevel = getLevel(points);
  return currentLevel * 100;
}

export function getProgressInLevel(points: number): number {
  return points % 100;
}

export function getProgressPercentage(points: number): number {
  return (getProgressInLevel(points) / 100) * 100;
}
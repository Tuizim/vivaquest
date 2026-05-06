import type { Gamification } from "./gamefication";
import type { Habit } from "./habit";
import type { DayRecord } from "./history";
import type { UserProfile } from "./profile";

export type AppState = {
  profile: UserProfile | null;
  habits: Habit[];
  history: DayRecord[];
  gamification: Gamification;
  lastResetDate: Date | null;
};
import { useState } from "react";
import type { Habit } from "../types";

export function useOnboardingHook() {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState<string | undefined>(undefined);
  const [selectedHabits, setSelectedHabits] = useState<Habit[]>([]);
  const [step, setStep] = useState<1 | 2 | 3>(1);

  function nextStep() {
    setStep((current) => (current < 3 ? ((current + 1) as 1 | 2 | 3) : current));
  }

  function previousStep() {
    setStep((current) => (current > 1 ? ((current - 1) as 1 | 2 | 3) : current));
  }

  function toggleHabit(habit: Habit) {
    setSelectedHabits((prev) =>
      prev.some((item) => item.id === habit.id)
        ? prev.filter((item) => item.id !== habit.id)
        : [...prev, habit]
    );
  }

  return {
    step,
    setStep,
    nextStep,
    previousStep,
    name,
    setName,
    avatar,
    setAvatar,
    selectedHabits,
    toggleHabit,
  };
}
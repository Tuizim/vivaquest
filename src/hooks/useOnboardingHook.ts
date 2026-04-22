import { useState } from "react";
import type { Habit } from "../types";

export function useOnboardingHook() {
  const [name, setName] = useState("");
  const [selectedHabits, setSelectedHabits] = useState<Habit[]>([]);
  const [step, setStep] = useState<1 | 2>(1);

  function nextStep() {
    setStep((current) => (current === 1 ? 2 : current));
  }

  function previousStep() {
    setStep((current) => (current === 2 ? 1 : current));
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
    selectedHabits,
    toggleHabit,
  };
}
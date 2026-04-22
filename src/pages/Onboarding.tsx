import { Button, Flex } from "@chakra-ui/react";
import StepName from "../components/onboarding/StepName";
import StepHabit from "../components/onboarding/StepHabit";
import { OnboardingHeader } from "../components/onboarding/OnboardingHeader";
import { useAppStore } from "../store/useAppStore";
import { useOnboardingHook } from "../hooks/useOnboardingHook";
import type { UserProfile } from "../types";
import { useNavigate } from "react-router-dom";

const TOTAL_STEPS = 2;

export default function Onboarding() {
  const setProfile = useAppStore((state) => state.setProfile);
  const setHabits = useAppStore((state) => state.setHabits);
  const navigate = useNavigate();

  const {
    step,
    name,
    setName,
    selectedHabits,
    toggleHabit,
    nextStep,
  } = useOnboardingHook();

  function handleFinish() {
    const profile:UserProfile = { name:name, createdAt: new Date()}
    setProfile(profile);
    setHabits(selectedHabits)
    navigate("/")
  }

  return (
    <Flex flexDir="column" w="full" maxW="sm" gap={6} as="section">
      <OnboardingHeader step={step} totalSteps={TOTAL_STEPS} />

      {step === 1 && (
        <StepName
          value={name}
          onChange={setName}
          onNext={nextStep}
        />
      )}

      {step === 2 && (
        <>
          <StepHabit
            selected={selectedHabits}
            onToggle={toggleHabit}
          />
          <Button colorPalette="brand" rounded="2xl" onClick={handleFinish}>
            Finalizar
          </Button>
        </>
      )}
    </Flex>
  );
}
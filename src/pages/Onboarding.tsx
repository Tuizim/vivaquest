import { Button, Flex } from "@chakra-ui/react";
import StepName from "../components/onboarding/StepName";
import StepHabit from "../components/onboarding/StepHabit";
import { OnboardingHeader } from "../components/onboarding/OnboardingHeader";
import { useAppStore } from "../store/useAppStore";
import { useOnboardingHook } from "../hooks/useOnboardingHook";
import type { UserProfile } from "../types";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const TOTAL_STEPS = 2;

export default function Onboarding() {
  const setProfile = useAppStore((state) => state.setProfile);
  const setHabits = useAppStore((state) => state.setHabits);
  const profile = useAppStore((state) => state.profile);
  const navigate = useNavigate();

  const {
    step,
    name,
    setName,
    selectedHabits,
    toggleHabit,
    nextStep,
  } = useOnboardingHook();

  useEffect(() => {
    if (profile) {
      navigate("/", { replace: true });
    }
  }, [profile, navigate]);

  function handleFinish() {
    const profileData: UserProfile = {
      name,
      createdAt: new Date(),
    };

    setProfile(profileData);
    setHabits(selectedHabits);
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
import { useState } from "react";
import { MdOutlineRocketLaunch } from "react-icons/md";
import StepName from "../components/onboarding/StepName";

export default function Onboarding() {
  const [step, setStep] = useState<1 | 2>(1)
  const [name, setName] = useState('')
  const [selectedHabits, setSelectedHabits] = useState<string[]>([])

  return (
    <main className="min-h-screen flex flex-col items-center px-6 mt-10">
      <section className="w-full max-w-sm flex flex-col gap-6">
        <header className="flex flex-col items-center gap-2">
          <div className="w-20 h-20 rounded-4xl shadow-md flex items-center justify-center bg-card  mb-4">
            <MdOutlineRocketLaunch  className="w-14 h-14 text-brand" />
          </div>
          <h1 className="text-3xl font-bold text-center mb-3">Vamos começar sua jornada saudável</h1>
          <p className="text-sm text-muted-foreground text-center">Personalize sua experiência para criar
      hábitos que realmente duram.</p>
        </header>
      </section>

      <section>
        {step === 1 && (
          <StepName
            value={name}
            onChange={setName}
            onNext={() => setStep(2)}
          />
        )}
      </section>
    </main>
  )
}
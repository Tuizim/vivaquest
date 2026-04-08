type Props = {
  value: string
  onChange: (name: string) => void
  onNext: () => void
}

export default function StepName({ value, onNext }: Props) {
  const isValid = value.trim().length >= 2

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (isValid) onNext()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">Vamos começar</h1>
        <p className="text-sm text-muted-foreground">Como devemos te chamar?</p>
      </header>

    </form>
  )
}
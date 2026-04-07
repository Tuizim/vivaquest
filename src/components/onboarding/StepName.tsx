import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

type Props = {
  value: string
  onChange: (name: string) => void
  onNext: () => void
}

export default function StepName({ value, onChange, onNext }: Props) {
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

      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Seu nome</Label>
        <Input
          id="name"
          placeholder="Digite seu nome"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </div>

      <Button type="submit" disabled={!isValid} className="w-full">
        Próximo
      </Button>
    </form>
  )
}
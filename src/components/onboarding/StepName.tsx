import { Field } from "@chakra-ui/react/field"
import { Input } from "@chakra-ui/react/input"
import { InputGroup } from "@chakra-ui/react/input-group"
import { LuUser } from "react-icons/lu"
import { Button } from "@chakra-ui/react"
import { RiArrowRightLine } from "react-icons/ri"
import { StepWrapper } from "./StepWrapper"

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
    <StepWrapper>
      <Field.Root>
        <Field.Label>Como devemos te chamar?</Field.Label>
        <InputGroup startElement={<LuUser />}>
          <Input placeholder="Seu nome" colorPalette="brand" onChange={e => onChange(e.target.value)} />
        </InputGroup>
      </Field.Root>

      <Button colorPalette="brand" rounded="2xl" disabled={!isValid} onClick={handleSubmit}>
        Continuar <RiArrowRightLine />
      </Button>
    </StepWrapper>
  )
}
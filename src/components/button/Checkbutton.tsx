import { Button } from "@chakra-ui/react";
import { HiCheck } from "react-icons/hi";

type Props = {
  stats: boolean
  onClick: () => void
}

export function Checkbutton({ stats, onClick }: Props) {
  const bgColor = stats ? "success.solid" : "brand.solid"
  return (
    <Button rounded="full" p="0" bg={bgColor} onClick={() => onClick()} transition="all 0.2s ease">
      <HiCheck></HiCheck>
    </Button>
  )
}
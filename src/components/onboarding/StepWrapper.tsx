import { Flex } from "@chakra-ui/react"
import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export function StepWrapper({ children }: Props) {
  return (
    <Flex flexDir="column" align="center" gap={5} textAlign="center" pt={10} as="section">
      {children}
    </Flex>
  )
}

import { Flex } from "@chakra-ui/react"
import type { ReactNode } from "react"
import { formMaxW } from "../../styles/tokens"

type Props = {
  children: ReactNode
}

export function StepWrapper({ children }: Props) {
  return (
    <Flex
      flexDir="column"
      align="center"
      gap={5}
      textAlign="center"
      pt={10}
      as="section"
      w="full"
      maxW={formMaxW}
      mx="auto"
    >
      {children}
    </Flex>
  )
}

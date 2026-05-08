import { Flex } from "@chakra-ui/react"
import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export function PageScreen({ children }: Props) {
  return (
    <Flex
      w="full"
      maxW="sm"
      flexDir="column"
      gap={5}
      pb={{ base: "80px", lg: "6" }}
      px={4}
    >
      {children}
    </Flex>
  )
}

import { Flex } from "@chakra-ui/react"
import type { ReactNode } from "react"
import { contentMaxW, containerPx, containerPb, sectionGap } from "../../styles/tokens"

type Props = {
  children: ReactNode
}

export function TabScreen({ children }: Props) {
  return (
    <Flex
      w="full"
      maxW={contentMaxW}
      flexDir="column"
      gap={sectionGap}
      pt={6}
      pb={containerPb}
      px={containerPx}
    >
      {children}
    </Flex>
  )
}

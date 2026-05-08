import { Box, Flex } from "@chakra-ui/react"
import type { ReactNode } from "react"

type Props = {
  children: ReactNode
  maxH: string
  fadeColor?: string
  gap?: number
}

export function FadeScroll({ children, maxH, fadeColor = "white", gap = 3 }: Props) {
  return (
    <Flex position="relative" maxH={maxH} minH={0}>
      <Flex flexDir="column" gap={gap} overflowY="auto" w="full" pb={8} px={2} pt={1}>
        {children}
      </Flex>
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        h="60px"
        pointerEvents="none"
        style={{
          background: `linear-gradient(to bottom, transparent, ${fadeColor})`,
        }}
      />
    </Flex>
  )
}

import { Flex } from "@chakra-ui/react"
import type { ReactNode } from "react"
import { PageHeader } from "../navigation/PageHeader"
import { contentMaxW, containerPx, containerPb, sectionGap } from "../../styles/tokens"

type Props = {
  title: string
  showReturnButton?: boolean
  children: ReactNode
}

export function PageLayout({ title, showReturnButton, children }: Props) {
  return (
    <Flex w="full" flexDir="column">
      <PageHeader title={title} showReturnButton={showReturnButton} />
      <Flex
        w="full"
        maxW={contentMaxW}
        mx="auto"
        flexDir="column"
        gap={sectionGap}
        px={containerPx}
        pb={containerPb}
        mt={5}
      >
        {children}
      </Flex>
    </Flex>
  )
}

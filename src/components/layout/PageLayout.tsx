import { Flex } from "@chakra-ui/react"
import type { ReactNode } from "react"
import { PageHeader } from "../navigation/PageHeader"

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
        maxW="sm"
        mx="auto"
        flexDir="column"
        gap={5}
        px={4}
        pb={{ base: "80px", lg: "6" }}
        mt={5}
      >
        {children}
      </Flex>
    </Flex>
  )
}

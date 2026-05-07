import { Box, Heading } from "@chakra-ui/react"
import { ReturnButton } from "../button/ReturnButton"

type PageHeaderProps = {
  title: string
  showReturnButton?: boolean
}

export function PageHeader({ title, showReturnButton = true }: PageHeaderProps) {
  return (
    <Box
      as="nav"
      display={{ base: "flex", lg: "none" }}
      position="fixed"
      top={0}
      left={0}
      right={0}
      h="64px"
      bg="white"
      borderBottom="1px solid"
      borderColor="secondary.100"
      zIndex={100}
      alignItems="center"
      px={2}
    >
      <Box w="40px">
        {showReturnButton && <ReturnButton />}
      </Box>
      <Heading flex={1} textAlign="center">{title}</Heading>
      <Box w="40px" />
    </Box>
  )
}

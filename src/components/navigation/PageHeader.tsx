import { Box, Heading } from "@chakra-ui/react"
import { ReturnButton } from "../button/ReturnButton"
import { header } from "../../styles/tokens"

type PageHeaderProps = {
  title: string
  showReturnButton?: boolean
}

export function PageHeader({ title, showReturnButton = true }: PageHeaderProps) {
  return (
    <Box
      as="nav"
      w="full"
      display="flex"
      h={header.height}
      bg="white"
      borderBottom="1px solid"
      borderColor="secondary.100"
      zIndex={100}
      alignItems="center"
      px={header.px}
    >
      <Box w="40px">
        {showReturnButton && <ReturnButton />}
      </Box>
      <Heading flex={1} textAlign="center">{title}</Heading>
      <Box w="40px" />
    </Box>
  )
}

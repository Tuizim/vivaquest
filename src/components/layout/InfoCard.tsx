import { Box } from "@chakra-ui/react"
import type { ComponentProps } from "react"
import { cardPadding } from "../../styles/tokens"

type InfoCardProps = ComponentProps<typeof Box>

export function InfoCard({ children, ...props }: InfoCardProps) {
  return (
    <Box
      w="full"
      p={cardPadding}
      rounded="2xl"
      bg="white"
      border="1.5px solid"
      borderColor="secondary.200"
      boxShadow="0 2px 8px rgba(0,0,0,0.06)"
      {...props}
    >
      {children}
    </Box>
  )
}

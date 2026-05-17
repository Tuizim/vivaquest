import { Box, Button, Flex, Text } from '@chakra-ui/react'

interface Props {
  onUpdate: () => void
  onDismiss: () => void
}

export function PWAUpdateBanner({ onUpdate, onDismiss }: Props) {
  return (
    <Box
      position="fixed"
      bottom={4}
      left="50%"
      transform="translateX(-50%)"
      zIndex={9999}
      bg="white"
      borderRadius="xl"
      boxShadow="lg"
      px={5}
      py={3}
      borderWidth={1}
      borderColor="brand.200"
      maxW="sm"
      w="calc(100% - 2rem)"
    >
      <Flex align="center" gap={3} wrap="wrap">
        <Text fontSize="sm" fontWeight="medium" flex={1} minW="0">
          Nova versão disponível
        </Text>
        <Flex gap={2} flexShrink={0}>
          <Button size="sm" variant="ghost" colorPalette="secondary" onClick={onDismiss}>
            Depois
          </Button>
          <Button size="sm" colorPalette="brand" onClick={onUpdate}>
            Atualizar
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { useRef } from "react"
import { FiCamera } from "react-icons/fi"
import { RiArrowRightLine } from "react-icons/ri"
import { UserAvatar } from "../user/UserAvatar"

type Props = {
  avatar: string | undefined
  onChange: (avatar: string) => void
  onNext: () => void
  onSkip: () => void
}

export default function StepAvatar({ avatar, onChange, onNext, onSkip }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => onChange(reader.result as string)
    reader.readAsDataURL(file)
  }

  return (
    <Flex flexDir="column" align="center" gap={6} textAlign="center" pt={10} as="section">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleFileChange}
      />

      <Box
        w={28}
        h={28}
        rounded="full"
        overflow="hidden"
        border="2px dashed"
        borderColor={avatar ? "brand.500" : "secondary.200"}
        cursor="pointer"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        onClick={() => inputRef.current?.click()}
        bg={avatar ? "transparent" : "secondary.50"}
      >
        <UserAvatar name="" avatar={avatar} size="2xl" />
        {!avatar && <FiCamera size={16} style={{ position: "absolute", bottom: 8 }} />}
      </Box>

      <Flex flexDir="column" gap={1}>
        <Text fontWeight="semibold" fontSize="lg">Adicione uma foto</Text>
        <Text fontSize="sm" color="secondary.500">Toque na imagem para escolher da galeria</Text>
      </Flex>

      <Flex gap={3} w="full" flexDir="column">
        <Button colorPalette="brand" rounded="2xl" onClick={onNext} disabled={!avatar}>
          Continuar <RiArrowRightLine />
        </Button>
        <Button variant="ghost" rounded="2xl" onClick={onSkip}>
          Pular por agora
        </Button>
      </Flex>
    </Flex>
  )
}

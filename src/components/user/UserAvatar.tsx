import { Avatar } from "@chakra-ui/react"

const customSizes: Record<string, string> = {
  "3xl": "80px",
  "4xl": "96px",
  "5xl": "120px",
}

type ChakraAvatarSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
type AvatarSize = ChakraAvatarSize | "3xl" | "4xl" | "5xl"

type Props = {
  name?: string
  avatar?: string
  size?: AvatarSize
}

export function UserAvatar({ name, avatar, size = "md" }: Props) {
  const override = customSizes[size]
  const chakraSize: ChakraAvatarSize = override ? "2xl" : (size as ChakraAvatarSize)
  return (
    <Avatar.Root size={chakraSize} w={override} h={override}>
      <Avatar.Fallback name={name ?? ""} />
      <Avatar.Image src={avatar} />
    </Avatar.Root>
  )
}

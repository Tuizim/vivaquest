import { Avatar } from "@chakra-ui/react"

type Props = {
  name?: string
  avatar?: string
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
}

export function UserAvatar({ name, avatar, size = "md" }: Props) {
  return (
    <Avatar.Root size={size}>
      <Avatar.Fallback name={name ?? ""} />
      <Avatar.Image src={avatar} />
    </Avatar.Root>
  )
}

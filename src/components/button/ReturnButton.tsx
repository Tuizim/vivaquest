import { IconButton } from '@chakra-ui/react'
import { FiChevronLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

export function ReturnButton() {
  const navigate = useNavigate()

  return (
    <IconButton
      aria-label="Voltar"
      onClick={() => navigate('/dashboard')}
      rounded="full"
      variant="ghost"
    >
      <FiChevronLeft size={22} />
    </IconButton>
  )
}

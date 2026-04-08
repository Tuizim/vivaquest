import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.tsx'
import './index.css'
import { system } from './theme.ts'

createRoot(document.getElementById('root')!).render(
  <ChakraProvider value={system}>
    <App />
  </ChakraProvider>
)
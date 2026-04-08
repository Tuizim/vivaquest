import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          solid: { value: '#4C6EF5' },
          muted: { value: '#E7F5FF' },
          100: { value: '#E7F5FF' },
          200: { value: '#bfd9f5' },
          300: { value: '#8fb8ee' },
          400: { value: '#6a96f0' },
          500: { value: '#4C6EF5' },
          600: { value: '#3a55c4' },
          700: { value: '#2a3e93' },
          800: { value: '#1c2962' },
          900: { value: '#0e1531' },
        }
      }
    }
  }
})

export const system = createSystem(defaultConfig, config)
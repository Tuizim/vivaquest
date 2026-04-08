import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          100: { value: '#E7F5FF' },
          200: { value: '#bfd9f5' },
          300: { value: '#8fb8ee' },
          400: { value: '#6a96f0' },
          500: { value: '#4C6EF5' },
          600: { value: '#3a55c4' },
          700: { value: '#2a3e93' },
          800: { value: '#1c2962' },
          900: { value: '#0e1531' },
          solid: { value: 'var(--chakra-colors-brand-500)' },
          muted: { value: 'var(--chakra-colors-brand-100)' },
          subtle: { value: 'var(--chakra-colors-brand-100)' },
          emphasized: { value: 'var(--chakra-colors-brand-600)' },
          focusRing: { value: 'var(--chakra-colors-brand-400)' },
          contrast: { value: '#ffffff' },
          fg: { value: 'var(--chakra-colors-brand-500)' },
        },
        secondary: {
          50:       { value: '#F8FAFC' },
          100:      { value: '#F1F5F9' },
          500:      { value: '#64748B' },
          solid:    { value: '#F1F5F9' },
          muted:    { value: '#F1F5F9' },
          subtle:   { value: '#F1F5F9' },
          contrast: { value: '#64748B' },
          fg:       { value: '#64748B' },
        },
      }
    }
  }
})

export const system = createSystem(defaultConfig, config)
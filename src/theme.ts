import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  globalCss: {
    html: {
      fontFamily: "'Inter', sans-serif",
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: "'Inter', sans-serif" },
        body: { value: "'Inter', sans-serif" },
      },
      colors: {
        brand: {
          100: { value: "#E7F5FF" },
          200: { value: "#bfd9f5" },
          300: { value: "#8fb8ee" },
          400: { value: "#6a96f0" },
          500: { value: "#4C6EF5" },
          600: { value: "#3a55c4" },
          700: { value: "#2a3e93" },
          800: { value: "#1c2962" },
          900: { value: "#0e1531" },
        },
        secondary: {
          50: { value: "#F8FAFC" },
          100: { value: "#F1F5F9" },
          200: { value: "#E2E8F0" },
          300: { value: "#CBD5E1" },
          400: { value: "#94A3B8" },
          500: { value: "#64748B" },
          600: { value: "#475569" },
          700: { value: "#334155" },
          800: { value: "#1E293B" },
          900: { value: "#0F172A" },
        }
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: "{colors.brand.500}" },
          muted: { value: "{colors.brand.100}" },
          subtle: { value: "{colors.brand.100}" },
          emphasized: { value: "{colors.brand.600}" },
          focusRing: { value: "{colors.brand.400}" },
          contrast: { value: "#ffffff" },
          fg: { value: "{colors.brand.500}" },
        },
        secondary: {
          solid: { value: "{colors.secondary.100}" },
          muted: { value: "{colors.secondary.100}" },
          subtle: { value: "{colors.secondary.100}" },
          contrast: { value: "{colors.secondary.500}" },
          fg: { value: "{colors.secondary.500}" },
        },
        success: {
          solid: { value: "{colors.green.600}" },
          muted: { value: "{colors.green.100}" },
          subtle: { value: "{colors.green.100}" },
          emphasized: { value: "{colors.green.700}" },
          contrast: { value: "#ffffff" },
          fg: { value: "{colors.green.600}" },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
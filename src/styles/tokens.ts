/** Largura máxima da área de conteúdo principal por breakpoint */
export const contentMaxW = {
  base: "sm",
  md: "2xl",
  lg: "3xl",
  xl: "4xl",
} as const

/** Padding horizontal (gutter) dos containers */
export const containerPx = {
  base: 4,
  md: 6,
  lg: 8,
} as const

/**
 * Padding inferior dos containers.
 * Mobile reserva espaço para a barra de navegação inferior.
 */
export const containerPb = {
  base: "80px",
  md: "10",
  lg: "8",
} as const

/** Gap vertical entre seções de uma página */
export const sectionGap = {
  base: 4,
  md: 5,
  lg: 6,
} as const

/** Padding interno padrão de cards de informação (InfoCard) */
export const cardPadding = { base: 4, md: 5 } as const

/**
 * Largura máxima de formulários e inputs.
 * Evita campos excessivamente largos em desktop — prejudica legibilidade.
 */
export const formMaxW = { base: "full", md: "lg", lg: "xl" } as const

export const sidebar = {
  width: "240px",
  /** A sidebar só aparece a partir de lg (1024px). */
  ml: { base: "0", lg: "240px" },
} as const

export const header = {
  height: { base: "64px", lg: "72px" },
  px: { base: 2, md: 4, lg: 6 },
} as const

/**
 * Alturas para o componente FadeScroll.
 *
 * "full"      → listas que ocupam o restante da tela (Dashboard, HabitsManager)
 * "selection" → listas de seleção dentro de uma seção (Onboarding)
 */
export const scrollHeight = {
  full: {
    base: "calc(100dvh - 230px)",
    md: "calc(100dvh - 260px)",
    lg: "calc(100dvh - 240px)",
  },
  selection: {
    base: "45vh",
    md: "50vh",
    lg: "55vh",
  },
} as const

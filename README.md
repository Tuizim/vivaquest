# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

```
vivaquest
├─ .npmrc
├─ README.md
├─ components.json
├─ components.json.bak
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ favicon.svg
├─ src
│  ├─ App.css
│  ├─ App.tsx
│  ├─ assets
│  ├─ components
│  │  ├─ button
│  │  │  └─ Checkbutton.tsx
│  │  ├─ dashboard
│  │  │  ├─ DashboardHabits.tsx
│  │  │  ├─ DashboardHeader.tsx
│  │  │  ├─ DashboardStatistics.tsx
│  │  │  └─ StatisticData.tsx
│  │  ├─ habits
│  │  │  ├─ ConcludeHabit.tsx
│  │  │  └─ SelectHabit.tsx
│  │  └─ onboarding
│  │     ├─ OnboardingHeader.tsx
│  │     ├─ StepHabit.tsx
│  │     └─ StepName.tsx
│  ├─ data
│  │  └─ habits.ts
│  ├─ domain
│  │  ├─ gamification
│  │  │  └─ level.ts
│  │  └─ habits
│  │     └─ habits.ts
│  ├─ hooks
│  │  └─ useOnboardingHook.ts
│  ├─ index.css
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ Dashboard.tsx
│  │  └─ Onboarding.tsx
│  ├─ security
│  │  └─ ProtectedRoute.tsx
│  ├─ storage
│  ├─ store
│  │  └─ useAppStore.ts
│  ├─ styles
│  ├─ theme.ts
│  └─ types
│     ├─ appActions.ts
│     ├─ appState.ts
│     ├─ gamefication.ts
│     ├─ habit.ts
│     ├─ history.ts
│     ├─ index.ts
│     └─ profile.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```
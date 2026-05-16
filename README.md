# Vivaquest

## Deploy

O projeto possui CI/CD automatizado via GitHub Actions. A cada push na branch `main`, o workflow executa lint, build e aciona o redeploy no Easypanel via webhook.

### Fluxo

```
git push origin main
  → GitHub Actions: lint → build → webhook
    → Easypanel: redeploy automático
```

### Secrets necessários no GitHub

| Secret | Descrição |
|---|---|
| `EASYPANEL_WEBHOOK_URL` | URL do webhook gerado pelo Easypanel |

### Como configurar

**1. Pegar a Webhook URL no Easypanel**

No painel do Easypanel, acesse:
`Settings → <nome-do-app> → Deployments → Webhook URL`

Copie a URL gerada (formato `https://<host>/api/webhooks/...`).

**2. Cadastrar o secret no GitHub**

No repositório, acesse:
`Settings → Secrets and variables → Actions → New repository secret`

- Name: `EASYPANEL_WEBHOOK_URL`
- Value: a URL copiada no passo anterior

**3. Fazer push**

A partir do próximo push na `main`, o pipeline roda automaticamente. O status de cada etapa aparece na aba **Actions** do repositório.

---

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
│  │  │  └─ gameficationService.ts
│  │  └─ habits
│  │     └─ habitsService.ts
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
│  │  └─ persistConfig.ts
│  ├─ store
│  │  └─ useAppStore.ts
│  ├─ styles
│  ├─ theme.ts
│  ├─ types
│  │  ├─ appActions.ts
│  │  ├─ appState.ts
│  │  ├─ appStore.ts
│  │  ├─ gamefication.ts
│  │  ├─ habit.ts
│  │  ├─ history.ts
│  │  ├─ index.ts
│  │  └─ profile.ts
│  └─ utils
│     ├─ habitUtilss.ts
│     └─ levelUtils.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```
# Ghid pentru Claude Code - DESIGN-SYSTEM-ASTRO

## Ce este acest proiect?

**Pilot project pentru Design System SitePlus** - bazat pe AGENTIE_IMOBILIARE, upgradat la Tailwind CSS 4.0.

Scopul: testare Design System inainte de propagare in toate 7 template-uri.

---

## Tailwind CSS 4.0 - Configuratie

### Fisier Principal: `src/assets/styles/app.css`

Toate configurarile sunt in CSS, nu in `tailwind.config.js`:

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";

@theme {
  --color-primary: rgb(243 85 37);
  --color-secondary: rgb(0 113 248);
  /* ... toate variabilele ... */
}
```

### Structura Design Tokens

| Token | Locatie | Exemplu |
|-------|---------|---------|
| Colors | `@theme { --color-* }` | `--color-primary`, `--color-secondary` |
| Fonts | `@theme { --font-* }` | `--font-sans`, `--font-heading` |
| Shadows | `@theme { --shadow-* }` | `--shadow-primary`, `--shadow-lg` |
| Transitions | `@theme { --transition-* }` | `--transition-fast`, `--transition-normal` |
| Gradients | `@theme { --gradient-* }` | `--gradient-primary`, `--gradient-hero` |

### Utilitati Custom (TW4)

```css
@utility bg-page {
  background-color: var(--color-bg-page);
}

@utility text-muted {
  color: var(--color-text-muted);
}
```

### IMPORTANT: @apply in TW4

**NU** poti folosi `@apply` cu clase custom definite in acelasi fisier.

```css
/* GRESIT - va da eroare in TW4 */
.btn-primary {
  @apply btn text-white;  /* btn e custom, nu TW utility */
}

/* CORECT - foloseste CSS pur */
.btn-primary {
  display: inline-flex;
  align-items: center;
  /* ... CSS complet ... */
}
```

Pentru componente Astro cu `<style>`:
```astro
<style>
  /* TW4: doar utilitati Tailwind native in @apply */
  .my-class {
    @apply flex items-center gap-2;
  }
</style>
```

---

## Reguli de Comportament

### Inainte sa scriu cod:

1. **Clarific goal-ul** daca e ambiguu
2. **Propun plan** pentru task-uri non-triviale
3. **FOLOSESC** Astro MCP (`mcp__astro-docs__search_astro_docs`) pentru verificare docs
4. **CAUT INTAI** in `src/utils/` daca exista deja solutie

### Cand scriu cod:

1. **Simplu > Complicat** - cea mai simpla solutie
2. **NU hardcode** culori, texte, URL-uri
3. **Folosesc** variabilele din `@theme` pentru culori
4. **Mobile-first** - prefixe `md:`, `lg:`

### Dupa ce termin:

1. **Rulez build** - `npm run build`
2. **Rulez check** - `npm run check`

---

## Comenzi Frecvente

```bash
# Development
npm run dev                   # Start dev server

# Build & Preview
npm run build                 # Build static
npm run preview               # Preview build

# Check
npm run check                 # TypeScript + ESLint + Prettier

# Deploy (Git Worktree - NOU!)
./deploy.sh "mesaj"           # Din template (wrapper)
# SAU din siteplus/ root:
# ./deploy-all.sh --template DESIGN-SYSTEM "mesaj"
# ./deploy-all.sh "mesaj"     # Toate 8 template-uri
```

---

## Fisiere Cheie

| Fisier | Scop |
|--------|------|
| `src/assets/styles/app.css` | **Design System** - toate culorile, fonturile, componentele |
| `src/components/CustomStyles.astro` | Font imports (Montserrat, Inter) |
| `src/layouts/Layout.astro` | Import `app.css` |
| `astro.config.ts` | `@tailwindcss/vite` plugin |

---

## Stack Tehnic

- **Astro 5.16+** cu Content Collections
- **Tailwind CSS 4.1** (CSS-first config)
- **@tailwindcss/vite** (nu @astrojs/tailwind!)
- **@tailwindcss/typography** pentru prose

---

## Culori Design System

| Element | Valoare | CSS Variable |
|---------|---------|--------------|
| Primary (Orange) | #F35525 | `--color-primary` |
| Secondary (Blue) | #0071F8 | `--color-secondary` |
| Accent (Red) | #EE626B | `--color-accent` |
| Success | #22C55E | `--color-success` |
| Warning | #EAB308 | `--color-warning` |

---

## Deploy Workflow (Git Worktree)

```
DESIGN-SYSTEM-ASTRO/    (main branch - sursa)
DESIGN-SYSTEM-DIST/     (dist branch - worktree)

Ambele coexista simultan - ZERO branch switching!
```

---

_Document creat: 2025-12-28_
_Actualizat: 2025-12-29 (Git Worktree Workflow)_
_Proiect: DESIGN-SYSTEM-ASTRO (Pilot pentru SitePlus Design System)_
_Bazat pe: AGENTIE_IMOBILIARE + Tailwind CSS 4.0_

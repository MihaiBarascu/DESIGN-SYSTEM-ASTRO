# DECIZII ARHITECTURALE (ADR)

> **REGULA:** O decizie tehnica se ia O SINGURA DATA si se documenteaza AICI.
> **Consulta acest fisier INAINTE de a lua decizii tehnice noi!**

**Ultima actualizare:** 2025-12-22

---

## Format ADR

```
### [ADR-XXX] Titlu

**Status:** DECIDED | PROPOSED | DEPRECATED
**Data:** YYYY-MM-DD
**Context:** De ce a aparut intrebarea?
**Decizie:** Ce am decis?
**Consecinte:** Ce implica?
**Supersedes:** ADR-YYY (daca inlocuieste alta decizie)
```

---

## DECIZII ACTIVE

### [ADR-001] Framework: Astro 5.0 + AstroWind

**Status:** DECIDED
**Data:** 2025-12-22
**Context:** Clientul are cPanel shared hosting. Next.js + Payload CMS nu merge pe cPanel (necesita Node.js server + MongoDB).

**Decizie:** Folosim Astro 5.0 cu template AstroWind pentru output 100% static.

**Consecinte:**

- Output HTML/CSS/JS static - merge pe orice hosting
- Zero dependenta de server Node.js
- Zero dependenta de database
- Performance excelent (static files)
- AstroWind ofera componente production-ready

**Alternative considerate:**

- Next.js + Payload (respins - necesita server)
- WordPress + Bricks (respins - alt stack, alt workflow)
- Hugo/Eleventy (respins - AstroWind are componente mai bune)

---

### [ADR-002] CMS: Pages CMS (Git-based, 100% Open Source)

**Status:** DECIDED
**Data:** 2025-12-22
**Context:** Clientul trebuie sa poata edita continut. Vrem 100% open source, fara vendor lock-in.

**Decizie:** Folosim Pages CMS - git-based CMS care editeaza Markdown direct in GitHub.

**Consecinte:**

- Content stocat ca Markdown in repo GitHub (nu in database externa)
- Zero vendor lock-in - datele sunt in Git-ul nostru
- Client editeaza prin interfata web (app.pagescms.org)
- Commit automat in GitHub la fiecare save
- 100% gratuit, 100% open source (MIT license)
- Configurare prin `.pages.yml` in root

**Alternative considerate:**

- TinaCMS (respins - probleme cu Astro Content Collections)
- Sanity (respins - storage in cloud-ul lor, nu 100% open source)
- Storyblok (respins - vendor lock-in)
- Keystatic (considerat - Pages CMS e mai simplu)
- Sveltia CMS (considerat - inca in beta)

**Documentatie:** [CSS-Tricks Guide](https://css-tricks.com/using-pages-cms-for-static-site-content-management/)

---

### [ADR-003] Content Storage: Astro Content Collections

**Status:** DECIDED
**Data:** 2025-12-22
**Context:** Unde stocam terapiile, testimonialele, cursurile?

**Decizie:** Folosim Astro Content Collections cu fisiere Markdown.

**Consecinte:**

- Content in `src/content/` organizat pe colectii
- Schema validata cu Zod
- Type-safe in TypeScript
- Compatibil cu Pages CMS
- Versionat in Git

**Structura:**

```
src/content/
├── config.ts           # Schema definitions
├── terapii/
│   ├── bowen.md
│   ├── reiki.md
│   └── access-bars.md
├── testimoniale/
│   ├── client1.md
│   └── client2.md
├── cursuri/
│   └── access-bars-curs.md
└── blog/
    └── articol1.md
```

**Schema exemplu:**

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const terapii = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number().optional(),
    duration: z.number().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { terapii };
```

---

### [ADR-004] Hosting: cPanel cu Static Files

**Status:** DECIDED
**Data:** 2025-12-22
**Context:** Clientul are deja cPanel hosting platit si vrea sa-l foloseasca.

**Decizie:** Deploy static files in cPanel `public_html`.

**Consecinte:**

- `npm run build` genereaza folder `dist/`
- Upload `dist/*` in `public_html` pe cPanel
- Zero configurare server
- Poate fi automatizat cu GitHub Actions + FTP

**Workflow deploy:**

```bash
# Local
npm run build

# Upload manual
# 1. Arhiveaza dist/
# 2. Upload in cPanel File Manager
# 3. Extrage in public_html

# SAU automatizat (GitHub Actions)
# Vezi docs/active/guides/deployment.md
```

---

### [ADR-005] Design Theme: Gold + Dark Charcoal

**Status:** DECIDED
**Data:** 2025-12-23 (actualizat)
**Context:** Branding pentru terapii energetice.

**Decizie:** Paleta Gold (#D4AF37) + Dark Charcoal (#272630) + Warm Cream backgrounds.

**Consecinte:**

- CSS variables definite in `CustomStyles.astro`
- Folosim clase Tailwind, nu culori hardcodate
- NEVER hardcode culori in componente

**Culori:**

| Element         | Valoare | CSS Variable                 |
| --------------- | ------- | ---------------------------- |
| Primary (Gold)  | #D4AF37 | `--aw-color-primary`         |
| Primary Light   | #E8C962 | `--aw-color-primary-light`   |
| Primary Dark    | #B8962F | `--aw-color-primary-dark`    |
| Secondary       | #272630 | `--aw-color-secondary`       |
| Secondary Light | #3a3948 | `--aw-color-secondary-light` |
| Secondary Dark  | #1a191f | `--aw-color-secondary-dark`  |
| Accent          | #B8952F | `--aw-color-accent`          |
| Background      | #FFFDF8 | `--aw-color-bg-page`         |

**Supersedes:** Versiunea anterioara cu Navy (#1a365d)

---

### [ADR-006] Documentatie: Structura Organizata (din Template-5)

**Status:** DECIDED
**Data:** 2025-12-22
**Context:** Avem nevoie de documentatie clara, inspirata din Template-5.

**Decizie:** Structura ierarhica cu `_INDEX.md` ca Single Source of Truth.

**Consecinte:**

- `docs/_INDEX.md` - index principal, citeste INTAI
- `docs/_ARCHITECTURE.md` - decizii tehnice (acest fisier)
- `docs/active/` - documente valide acum
- `docs/reference/` - info statica
- `docs/lessons/` - lessons learned
- `docs/archive/` - documente inlocuite
- `.claude/CLAUDE.md` - instructiuni pentru Claude Code

---

### [ADR-007] Protectie IP: Cod pentru client, Template pentru noi

**Status:** DECIDED
**Data:** 2025-12-22
**Context:** Cum protejam codul sursa?

**Decizie:**

- Clientul primeste site-ul SPECIFIC (nu template configurabil)
- Template-ul AstroWind ramane pentru proiecte viitoare
- Clientul nu poate face alte site-uri din codul primit

**Consecinte:**

- Clientul are site functional
- NU are acces la seeders, design variants, etc.
- Fiecare client = fork separat
- Licenta clara in LICENSE.md

---

### [ADR-008] Imagini: Astro Image Optimization

**Status:** DECIDED
**Data:** 2025-12-22
**Context:** Cum optimizam imaginile?

**Decizie:** Folosim Astro Image component pentru optimizare automata.

**Consecinte:**

- `import { Image } from 'astro:assets'`
- Imagini in `src/assets/images/`
- Optimizare automata la build
- WebP conversion
- Lazy loading

---

### [ADR-009] CSS Organization: Astro Best Practices

**Status:** DECIDED
**Data:** 2025-12-23
**Context:** Cum organizam CSS-ul pentru maintainability si performance?

**Decizie:** Urmam recomandarile oficiale Astro pentru styling:

1. **CSS Variables Global** - in `CustomStyles.astro` cu `<style is:inline>`
2. **Scoped Styles** - in fiecare componenta cu `<style>` (automat scoped)
3. **Tailwind Utilities** - pentru clase utilitare si componente (buttons)

**Structura fisiere:**

```
src/
├── components/
│   ├── CustomStyles.astro     # CSS Variables ONLY (:root, .dark)
│   ├── ui/
│   │   └── Form.astro         # <style> scoped pentru form focus
│   └── widgets/
│       └── Testimonials.astro # <style> scoped pentru quote mark
└── assets/styles/
    └── tailwind.css           # @layer components pentru buttons
```

**Reguli CSS:**

| Tip Stil           | Unde                     | Exemplu                                  |
| ------------------ | ------------------------ | ---------------------------------------- |
| CSS Variables      | `CustomStyles.astro`     | `--aw-color-primary`, `--aw-shadow-gold` |
| Component-specific | `<style>` in componenta  | `.testimonial-card::before`              |
| Button classes     | `tailwind.css` @layer    | `.btn`, `.btn-primary`                   |
| Utilities          | Tailwind classes in HTML | `text-primary`, `bg-secondary`           |

**Rationale (din Astro docs):**

> "Scoped styles should be used as often as possible. Global styles should be used only as-needed."

- **Scoped styles** - automat izolate, nu afecteaza alte componente
- **Tree-shaking** - CSS nefolosit nu se incarca
- **Maintainability** - usor de gasit ce stil afecteaza ce

**Ce NU facem:**

- ❌ NU cream fisiere CSS globale mari (gen plasturi-design.css cu 1100 linii)
- ❌ NU hardcodam culori in componente
- ❌ NU folosim `<style is:global>` pentru component styles

**Prefix convention (AstroWind):**

- `--aw-color-*` - culori
- `--aw-shadow-*` - shadows
- `--aw-transition-*` - transitions
- `--aw-spacing-*` - spacing

---

### [ADR-010] Homepage Pattern: JSON + Content Collections

**Status:** DECIDED
**Data:** 2025-12-26
**Context:** Cum integram content pe homepage pentru a fi 100% editabil din CMS?

**Decizie:** Abordare hibrida:

1. **Texte statice** (hero, about, CTA) → `homepage.json` (editabil via Pages CMS)
2. **Grid-uri dinamice** (terapii, cursuri) → Content Collections cu `featured: true`

**Pattern Corect:**

```typescript
// 1. Import JSON pentru texte
import homepageData from '~/data/pages/homepage.json';

// 2. Import Collections pentru grid-uri
import { getCollection } from 'astro:content';

const featuredTerapii = await getCollection('terapii', ({ data }) =>
  data.published !== false && data.featured === true
);

// 3. Map la AstroWind widgets
<Features2
  title={homepageData.terapiiSection.title}
  items={featuredTerapii.map((t) => ({
    title: t.data.title,
    description: t.data.excerpt,
    icon: t.data.icon,
  }))}
/>
```

**Consecinte:**

- 100% editabil din Pages CMS
- Type-safe cu Zod validation
- Scalabil - adaugi terapii din CMS, apar automat
- Consistent cu pattern-ul AstroWind

**NU facem:**

- ❌ Hardcodam texte in componente Astro
- ❌ Duplicam content (JSON si in template)
- ❌ Ignoram Content Collections pentru liste

**Referinte:**

- Astro Collections: https://docs.astro.build/en/guides/content-collections/
- AstroWind: https://github.com/onwidget/astrowind
- Pages CMS: https://pagescms.org/docs/

---

## DECIZII PROPOSED (in discutie)

### [ADR-P01] Automatizare Deploy cu GitHub Actions

**Status:** PROPOSED
**Data:** 2025-12-22
**Context:** Acum deploy-ul e manual. Putem automatiza?

**Propunere:** GitHub Actions care face build + FTP upload la push pe main.

**De discutat:**

- Credentiale FTP in GitHub Secrets
- Workflow trigger (push pe main sau manual)

---

## DECIZII DEPRECATED

(Nicio decizie deprecated inca)

---

_Document creat: 2025-12-22_
_Proiect: Terapii Energetice Astro_

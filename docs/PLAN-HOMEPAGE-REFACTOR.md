# Plan: Refactorizare Homepage - 100% CMS Editabil

**Data:** 2025-12-26
**Obiectiv:** Homepage identic vizual cu originalul, dar 100% editabil din Pages CMS

---

## Analiza Actuala

### Ce avem deja (NU trebuie creat):

| Sursa               | Ce contine                                                                      | Status                      |
| ------------------- | ------------------------------------------------------------------------------- | --------------------------- |
| `homepage.json`     | hero, aboutSection, terapiiSection, steps, benefits, cursuriSection, ctaSection | **Exista, NU e folosit**    |
| `.pages.yml`        | Configuratie CMS pentru toate sectiunile                                        | **Exista, NU e folosit**    |
| Content Collections | terapii, cursuri cu `featured`, `published`, `image`                            | **Exista, partial folosit** |

### Problema:

`index.astro` a fost refactorizat cu **content hardcodat** in loc sa foloseasca:

1. `homepage.json` (pentru texte)
2. `getCollection('terapii')` (pentru grid)
3. `getCollection('cursuri')` (pentru grid)

---

## Modul de Lucru CORECT (Best Practices)

### 1. Astro Content Collections (docs.astro.build)

```typescript
// CORECT - Astro 5.x Pattern
import { getCollection } from 'astro:content';

// Filtru publicat + featured
const terapii = await getCollection('terapii', ({ data }) => data.published !== false && data.featured === true);
```

**Sursa:** https://docs.astro.build/en/guides/content-collections/

### 2. AstroWind Widget Pattern (terapii/index.astro)

```astro
// Map collection la props widget
<Features2
  title={jsonData.title}
  items={terapii.map((t) => ({
    title: t.data.title,
    description: t.data.excerpt || t.data.description,
    icon: t.data.icon,
    callToAction: { href: `/terapii/${t.data.slug}` }
  }))}
/>
```

### 3. Pages CMS (pagescms.org)

- Texte editabile: `homepage.json`
- Content structured: Markdown in `src/data/terapii/`, `src/data/cursuri/`
- Config: `.pages.yml`

---

## Plan de Implementare

### Faza 1: Restaurare Imports

```typescript
// Adaugam inapoi in index.astro:
import { getCollection } from 'astro:content';
import Features2 from '~/components/widgets/Features2.astro';
import Content from '~/components/widgets/Content.astro';
import CallToAction from '~/components/widgets/CallToAction.astro';
```

### Faza 2: Folosim homepage.json (DEJA EXISTA!)

```typescript
// homepage.json DEJA contine toate textele!
const data = homepageData;

// Hero - deja functional
const hero = data.hero;

// About section - trebuie folosit
const aboutSection = data.aboutSection;

// Steps - trebuie folosit
const steps = data.steps;

// Benefits - trebuie folosit
const benefits = data.benefits;

// Cursuri section - trebuie folosit
const cursuriSection = data.cursuriSection;

// CTA - trebuie folosit
const ctaSection = data.ctaSection;
```

### Faza 3: Content Collections pentru Grid-uri

```typescript
// Terapii grid - cele cu featured: true
const featuredTerapii = await getCollection(
  'terapii',
  ({ data }) => data.published !== false && data.featured === true
);

// Cursuri grid - cele cu featured: true
const featuredCursuri = await getCollection(
  'cursuri',
  ({ data }) => data.published !== false && data.featured === true
);
```

### Faza 4: Mapare la AstroWind Widgets

```astro
<!-- Terapii Grid -->
<Features2
  title={homepageData.terapiiSection?.title || 'Terapii Energetice'}
  items={featuredTerapii.map((t) => ({
    title: t.data.title,
    description: t.data.excerpt || t.data.description.substring(0, 150) + '...',
    icon: t.data.icon || 'tabler:sparkles',
    callToAction: {
      text: 'Detalii',
      href: `/terapii/${t.data.slug}`,
    },
  }))}
/>
```

---

## Fisiere de Modificat

| Fisier                  | Actiune                                          |
| ----------------------- | ------------------------------------------------ |
| `src/pages/index.astro` | Refactorizare pentru a folosi JSON + Collections |
| `src/data/terapii/*.md` | Adaugam `featured: true` la cele 3 pentru grid   |
| `src/data/cursuri/*.md` | Verificam `featured: true`                       |

---

## Ce NU modificam

- `.pages.yml` - deja configurat corect
- `homepage.json` - deja are toate datele
- `src/content/config.ts` - schema corecta
- Componentele AstroWind - le folosim as-is

---

## Verificare Finala

| Check | Criteriu                                               |
| ----- | ------------------------------------------------------ |
| [x]   | Build trece fara erori (38 pagini)                     |
| [x]   | Toate textele vin din homepage.json                    |
| [x]   | Terapii grid vine din Content Collections (3 featured) |
| [x]   | Cursuri grid vine din Content Collections (2 featured) |
| [x]   | Editare din Pages CMS functioneaza                     |
| [x]   | Vizual identic cu originalul                           |

---

## Referinte Oficiale

- **Astro Content Collections:** https://docs.astro.build/en/guides/content-collections/
- **AstroWind GitHub:** https://github.com/onwidget/astrowind
- **Pages CMS Docs:** https://pagescms.org/docs/
- **Pages CMS + Astro Guide:** https://css-tricks.com/using-pages-cms-for-static-site-content-management/

---

**Status:** ✅ IMPLEMENTAT (2025-12-26)

## Ce s-a facut:

1. Refactorizat `index.astro` sa foloseasca `homepage.json` pentru texte
2. Adaugat `getCollection('terapii')` cu filtru `featured: true` pentru grid
3. Adaugat `getCollection('cursuri')` cu filtru `featured: true` pentru grid
4. Setat `featured: true` pe: terapia-bowen, corectie-bioenergetica, eliberare-tensiuni
5. Build verificat - 38 pagini generate fara erori

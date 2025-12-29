# LESSONS LEARNED - Index

> **Quick Reference:** Lectii invatate pe parcursul proiectului.
> Adauga aici orice problema rezolvata pentru a nu o repeta.

**Ultima actualizare:** 2025-12-23

---

## Format Lectie

```
### [L-XXX] Titlu scurt

**Problema:** Ce s-a intamplat?
**Cauza:** De ce s-a intamplat?
**Solutie:** Cum s-a rezolvat?
**Prevenire:** Cum evitam pe viitor?
```

---

## LECTII ASTRO

### [L-001] Content Collections necesita schema

**Problema:** Eroare la build - content collection not found
**Cauza:** Nu exista `src/content/config.ts` sau schema nu e definita
**Solutie:** Creaza `config.ts` cu schema Zod pentru fiecare colectie
**Prevenire:** Intotdeauna defineste schema inainte de a adauga content

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const terapii = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { terapii };
```

---

### [L-002] Imagini in src/assets, nu public/

**Problema:** Imaginile nu sunt optimizate
**Cauza:** Imagini puse in `public/` nu trec prin Astro Image optimization
**Solutie:** Muta imaginile in `src/assets/images/` si importa-le
**Prevenire:** Foloseste `src/assets/` pentru imagini care trebuie optimizate

```astro
---
import { Image } from 'astro:assets';
import myImage from '../assets/images/hero.jpg';
---

<Image src={myImage} alt="Hero" />
```

---

## LECTII PAGES CMS

> **Documentatie oficiala:** https://pagescms.org/docs/configuration

### [L-003] Media path pentru Astro

**Problema:** Imaginile uploadate nu se gasesc
**Cauza:** Pages CMS foloseste path gresit pentru Astro
**Solutie:** Seteaza `output` corect in `.pages.yml`
**Prevenire:** Verifica paths in config

```yaml
# .pages.yml
media:
  input: src/assets/images
  output: ~/assets/images # Pentru Astro
```

---

### [L-004] Rich-text field pentru body

**Problema:** Continutul Markdown nu se salveaza corect
**Cauza:** Folosit `text` in loc de `rich-text` pentru body
**Solutie:** Foloseste `type: rich-text` pentru continut Markdown
**Prevenire:** Body/content = rich-text, descrieri scurte = text

---

### [L-008] Filename pattern trebuie sa se potriveasca cu fisierele existente

**Problema:** Collections apar goale ("No entries") desi fisierele exista in director
**Cauza:** Pattern-ul `filename` din config nu se potriveste cu numele fisierelor existente

Exemplu gresit:

```yaml
filename: '{primary}' # Cauta "Access Bars" (din title)
# Dar fisierul se numeste: access-bars.md (dupa slug)
```

**Solutie:** Foloseste `{fields.fieldname}` pentru a referi campuri din frontmatter

```yaml
# CORECT - pentru fisiere numite dupa slug (access-bars.md)
filename: '{fields.slug}.md'

# CORECT - pentru fisiere cu data (2024-12-22-maria-p.md)
filename: '{fields.publishDate}-{fields.slug}.md'
```

**Prevenire:**

1. Verifica intai cum sunt numite fisierele existente
2. Foloseste `{fields.X}` NU `{primary}` pentru matching precis
3. Include extensia `.md` in pattern
4. Daca fisierele nu au pattern consistent, sterge `filename` pentru auto-detect

**Documentatie:** https://pagescms.org/docs/configuration#filename

---

### [L-009] Tokens disponibile in filename pattern

**Problema:** Nu stii ce tokens poti folosi in `filename`
**Cauza:** Documentatia nu e clara

**Solutie:** Tokens disponibile in Pages CMS:

| Token        | Descriere                                     | Exemplu    |
| ------------ | --------------------------------------------- | ---------- |
| `{year}`     | An curent                                     | 2024       |
| `{month}`    | Luna (2 cifre)                                | 12         |
| `{day}`      | Zi (2 cifre)                                  | 22         |
| `{hour}`     | Ora                                           | 14         |
| `{minute}`   | Minut                                         | 30         |
| `{second}`   | Secunda                                       | 45         |
| `{primary}`  | Valoarea campului marcat ca `primary` in view | depinde    |
| `{fields.X}` | Valoarea campului X din frontmatter           | orice camp |

**Prevenire:** Foloseste `{fields.slug}` pentru control precis, nu `{primary}`

---

### [L-010] Collection fara filename pattern

**Problema:** Fisierele nu au naming consistent (unele cu data, altele fara)
**Cauza:** Fisiere create manual vs fisiere din template

**Solutie:** Sterge proprietatea `filename` - Pages CMS va citi TOATE fisierele din director:

```yaml
# Fara filename - citeste toate .md/.mdx din path
- name: blog
  label: Blog
  type: collection
  path: src/data/post
  format: yaml-frontmatter
  # NU specifica filename - auto-detect
```

**Prevenire:** Daca continutul existent nu e consistent, lasa Pages CMS sa detecteze automat

---

### [L-011] Slug field pentru matching robust

**Problema:** Filename se bazeaza pe `title` care poate contine spatii/diacritice
**Cauza:** `{primary}` -> title = "Access Bars" dar fisierul e `access-bars.md`

**Solutie:** Adauga mereu un camp `slug` in frontmatter:

```yaml
# In fisierul .md
---
title: 'Access Bars'
slug: 'access-bars' # <- SE POTRIVESTE cu numele fisierului
---
```

```yaml
# In .pages.yml
filename: '{fields.slug}.md'

fields:
  - name: slug
    label: Slug (URL)
    type: string
    description: 'Identificator unic pentru fisier'
```

**Prevenire:** Orice collection cu `filename` pattern trebuie sa aiba camp `slug`

---

## LECTII TAILWIND / CSS

### [L-005] Nu hardcoda culori

**Problema:** Culorile nu se schimba cand modifici tema
**Cauza:** Culori hardcodate in clase (`text-[#D4AF37]`)
**Solutie:** Foloseste clase din theme (`text-primary`) sau CSS variables
**Prevenire:** Culorile se definesc DOAR in `CustomStyles.astro`

```css
/* src/components/CustomStyles.astro */
:root {
  --aw-color-primary: rgb(212 175 55); /* Gold #D4AF37 */
  --aw-color-secondary: rgb(39 38 48); /* Charcoal #272630 */
}
```

```html
<!-- CORECT -->
<h1 class="text-primary">Titlu</h1>

<!-- GRESIT -->
<h1 class="text-[#D4AF37]">Titlu</h1>
```

---

### [L-015] CSS Organization - Astro Best Practices

**Problema:** Fisier CSS global mare (~1100 linii) cu 99% nefolosit
**Cauza:** Toate stilurile puse intr-un singur fisier global
**Solutie:** Reorganizare urmand recomandarile Astro:

1. **CSS Variables** → `CustomStyles.astro` cu `<style is:inline>`
2. **Component styles** → `<style>` scoped in fiecare componenta
3. **Button classes** → `tailwind.css` cu `@layer components`

**Structura corecta:**

```
CustomStyles.astro     → :root { --aw-color-primary: ... }
Testimonials.astro     → <style> .testimonial-card::before {...} </style>
Form.astro             → <style> .form-container input:focus {...} </style>
tailwind.css           → @layer components { .btn {...} }
```

**Rationale (Astro docs):**

> "Scoped styles should be used as often as possible. Global styles should be used only as-needed."

**Prevenire:**

- NEVER crea fisiere CSS globale mari
- Component styles → in componenta
- Design tokens → CSS variables in CustomStyles.astro

---

### [L-016] Tailwind focus:ring cu CSS Variable

**Problema:** `focus:ring-primary/50` nu functioneaza (clasa nu exista)
**Cauza:** Tailwind nu poate aplica opacity modifier pe CSS variable custom

**Solutie:** Seteaza `--tw-ring-color` direct:

```css
/* GRESIT - clasa nu exista */
.btn {
  @apply focus:ring-primary/50;
}

/* CORECT - seteaza variabila direct */
.btn {
  @apply focus:ring-2 focus:ring-offset-2;
  --tw-ring-color: rgba(212, 175, 55, 0.5);
}
```

**Prevenire:** Pentru culori custom cu opacity, foloseste rgba() direct in loc de modifiers

---

## LECTII DEPLOY

### [L-006] Build inainte de deploy

**Problema:** Site-ul nu functioneaza pe cPanel
**Cauza:** Uploadat fisiere sursa in loc de build
**Solutie:** Ruleaza `npm run build` si uploadeaza `dist/`
**Prevenire:** Checklist deploy: build → dist/ → upload

---

### [L-012] GitHub Actions - permissions pentru push

**Problema:** GitHub Actions workflow esueaza cu `remote: Write access to repository not granted`
**Cauza:** Workflow-ul nu are permisiuni de scriere pe repository

**Solutie:** Adauga `permissions: contents: write` in workflow:

```yaml
# .github/workflows/deploy.yml
name: Build and Deploy

on:
  push:
    branches: [main]

permissions:
  contents: write # <- NECESAR pentru push la dist branch

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      # ...
```

**Prevenire:** Orice workflow care face push/commit necesita `permissions: contents: write`

---

### [L-013] Deploy pe dist branch pentru static hosting

**Problema:** Netlify/Cloudflare nu pot rula npm build direct
**Cauza:** Vrei hosting static simplu fara build server

**Solutie:** GitHub Actions face build si push pe branch `dist`:

```yaml
- name: Deploy to dist branch
  uses: peaceiris/actions-gh-pages@v4
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./dist
    publish_branch: dist
```

Apoi configureaza Netlify sa serveasca branch-ul `dist` fara build command.

**Prevenire:** Foloseste aceasta abordare pentru orice static host

---

### [L-014] Netlify vs Cloudflare Pages vs GitHub Pages

**Problema:** Confuzie despre ce platform sa folosesti

**Solutie - Comparatie:**

| Platform             | Build                         | Custom Domain   | Pret                   |
| -------------------- | ----------------------------- | --------------- | ---------------------- |
| **Netlify**          | Optional (poate servi branch) | Gratuit         | Free tier generos      |
| **Cloudflare Pages** | Obligatoriu sau branch        | Gratuit         | Free tier              |
| **GitHub Pages**     | Nu (doar static)              | Limitat la free | Gratuit dar restrictii |

**Recomandare:** Netlify cu branch `dist` pre-built - cel mai simplu setup.

**Prevenire:** Alege platforma inainte de setup, nu incerca toate

---

## LECTII GIT

### [L-007] Commit dupa fiecare feature

**Problema:** Greu de facut rollback
**Cauza:** Commit-uri prea mari cu multiple features
**Solutie:** Un commit per feature/fix
**Prevenire:** Commit frecvent cu mesaje descriptive

---

### [L-017] Imagini dinamice din Content Collections - foloseste findImage()

**Problema:** Erori 404 pentru imagini sau eroare `i is not defined` la build

**Cauza:**
1. Path-urile `~/assets/images/...` din frontmatter NU functioneaza direct cu `<img src=...>`
2. `import.meta.glob` scris direct in componenta poate genera bug-uri in Astro 5.16+

**Ce NU functioneaza:**
```astro
---
// GRESIT - 404 errors
const items = await getCollection('terapii');
---
{items.map(item => (
  <img src={item.data.image.replace('~/', '/')} /> {/* 404! */}
))}
```

```astro
---
// GRESIT - poate genera "i is not defined" in Astro 5.16
const images = import.meta.glob('/src/assets/**/*.{png,jpg}', { eager: true });
function getImage(path) { ... }
---
```

**Solutie:** Foloseste `findImage()` din AstroWind utils:

```astro
---
import { Image } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import { findImage } from '~/utils/images';
import { getCollection } from 'astro:content';

const items = await getCollection('terapii', ({ data }) => data.featured);

// Pregateste imaginile INAINTE de render
const itemsWithImages = await Promise.all(
  items.map(async (item) => ({
    ...item,
    resolvedImage: await findImage(item.data.image) as ImageMetadata | null,
  }))
);
---

{itemsWithImages.map(item => (
  item.resolvedImage && typeof item.resolvedImage !== 'string' ? (
    <Image
      src={item.resolvedImage}
      alt={item.data.title}
      widths={[400, 600]}
    />
  ) : (
    <div>No image</div>
  )
))}
```

**De ce functioneaza `findImage()`:**
- `import.meta.glob` e apelat intr-o functie separata `load()` (lazy)
- Evita bug-ul de compilare din Astro 5.16
- Returneaza `ImageMetadata` care functioneaza cu `<Image />`
- Optimizare automata (WebP, resize)

**Prevenire:**
1. NEVER foloseste `import.meta.glob` direct in componente page
2. ALWAYS foloseste `findImage()` pentru imagini din Content Collections
3. Pregateste imaginile cu `Promise.all()` in frontmatter
4. Verifica tipul: `typeof resolvedImage !== 'string'`

**Surse oficiale:**
- AstroWind: https://github.com/onwidget/astrowind/discussions/528
- Astro Docs: https://docs.astro.build/en/recipes/dynamically-importing-images/

---

### [L-018] INTAI cauta in utilitarele existente AstroWind

**Problema:** Am scris cod custom pentru o problema care era deja rezolvata
**Cauza:** Nu am verificat `src/utils/` inainte sa incep sa scriu cod

**Exemplu gresit:**
```astro
---
// Am scris import.meta.glob manual pentru imagini dinamice
const images = import.meta.glob('/src/assets/**/*.{png,jpg}', { eager: true });
function getImage(path) { ... } // reinventam roata
---
```

**Solutie:** Verifica INTAI ce utilitare exista in AstroWind:

| Utilitar | Scop | Locatie |
|----------|------|---------|
| `findImage()` | Rezolva imagini din path `~/assets/...` | `~/utils/images` |
| `getPermalink()` | Construieste URL-uri corecte | `~/utils/permalinks` |
| `fetchPosts()` | Obtine posts din collection | `~/utils/blog` |
| `getFormattedDate()` | Formateaza date | `~/utils/utils` |
| `adaptOpenGraphImages()` | Pregateste imagini OG | `~/utils/images` |

**Prevenire:**
1. INAINTE sa scrii cod, ruleaza: `ls src/utils/` si citeste fisierele
2. Cauta in GitHub AstroWind discussions pentru problema ta
3. Daca gasesti utilitar existent, FOLOSESTE-L in loc sa scrii cod nou
4. Daca nu exista, INTREABA daca ar trebui sa existe

**Surse:**
- AstroWind utils: https://github.com/onwidget/astrowind/tree/main/src/utils
- AstroWind discussions: https://github.com/onwidget/astrowind/discussions

---

## LECTII CONTENT & SEO

### [L-019] CRITICAL: Audit conținut vs sursă originală - NU INVENTA!

**Problema:** Site-ul conținea informații inventate care nu existau pe site-ul original al clientului
**Cauza:** La crearea conținutului s-au adăugat date "de exemplu" sau "plauzibile" care nu erau reale

**Exemple de conținut INVENTAT găsit:**

| Ce am găsit | Realitate |
|-------------|-----------|
| "15+ ani experiență" | NU există pe original |
| "500+ cursanți" | NU există pe original |
| "Plata: Cash sau Card" | NU specificat pe original |
| "Program: Luni-Vineri 10-19" | NU specificat pe original |
| "Pachete de ședințe" | NU există pe original |

**Soluție:** Audit complet comparând FIECARE afirmație cu sursa originală:

```bash
# Caută toate afirmațiile specifice (numere, prețuri, ore, metode plată)
grep -r "ani\|experiență\|clienți\|cursanți\|plata\|cash\|card\|transfer" src/data/
```

**Prevenire - CHECKLIST înainte de livrare:**

1. [ ] Verifică TOATE numerele (ani, clienți, prețuri) pe site-ul original
2. [ ] Verifică programul de lucru - dacă nu e specificat, pune "Cu programare"
3. [ ] Verifică metodele de plată - dacă nu sunt specificate, NU le menționa
4. [ ] Verifică testimonialele - sunt reale sau generate?
5. [ ] Verifică prețurile - corespund exact cu originalul?

**Regula de aur:** Dacă informația NU apare explicit pe site-ul original, NU o adăuga în site-ul nou.

---

### [L-020] CRITICAL: AstroWind default noindex: true BLOCHEAZĂ Google!

**Problema:** Site-ul nu apărea în Google deloc
**Cauza:** În `src/components/common/Metadata.astro`, default-ul era `noindex: true`

**Cod problematic:**
```typescript
// Metadata.astro - DEFAULT GRESIT
const seoProps: AstroSeoProps = merge(
  {
    noindex: true,  // BLOCHEAZA INDEXAREA!
    nofollow: true, // BLOCHEAZA LINK-URILE!
    // ...
  }
);
```

**Soluție:**
```typescript
// Metadata.astro - CORECT
const seoProps: AstroSeoProps = merge(
  {
    noindex: false,  // PERMITE INDEXAREA
    nofollow: false, // PERMITE LINK-URILE
    // ...
  }
);
```

**Prevenire:**
1. După setup AstroWind, PRIMUL lucru: verifică `Metadata.astro` pentru noindex
2. Rulează: `grep -r "noindex" src/` pentru a găsi toate setările
3. În producție, DOAR paginile admin/test ar trebui să aibă noindex

**Testare:** Verifică cu View Source că `<meta name="robots">` conține `index, follow`

---

### [L-021] Hardcoded contact info - folosește siteSettings

**Problema:** Când clientul schimbă telefonul, trebuie modificat în 10 locuri diferite
**Cauza:** Telefon/email/social hardcodate direct în componente

**Exemplu GREȘIT:**
```typescript
// navigation.ts - GRESIT
{ text: 'Telefon: 0774512905', href: 'tel:0774512905' },
{ text: 'Email: office@terapiienergetice.ro', href: 'mailto:...' },
```

```astro
<!-- index.astro - GRESIT -->
<a href="tel:0774512905">Sună acum</a>
```

**Soluție:** Centralizează în `src/data/settings/site.json` și importă:

```json
// src/data/settings/site.json
{
  "contact": {
    "phone": "0774512905",
    "email": "office@terapiienergetice.ro",
    "whatsapp": "+40774512905"
  },
  "socialMedia": {
    "facebook": "https://www.facebook.com/...",
    "instagram": "https://www.instagram.com/..."
  }
}
```

```typescript
// navigation.ts - CORECT
import siteSettings from './data/settings/site.json';

{ text: `Telefon: ${siteSettings.contact.phone}`, href: `tel:${siteSettings.contact.phone}` },
```

**Prevenire:**
1. GREP pentru hardcoded: `grep -rn "0774\|office@\|facebook.com" src/`
2. Orice contact info trebuie să vină din siteSettings
3. Adaugă în checklist deploy: verifică siteSettings

---

### [L-022] File permissions pentru Pages CMS editing

**Problema:** Pages CMS nu poate salva modificările - eroare la push
**Cauza:** Fișierele JSON/MD au permisiuni restrictive (600 sau 640)

**Soluție:**
```bash
# Verifică permisiunile
ls -la src/data/pages/

# Setează permisiuni corecte pentru editare
chmod 644 src/data/pages/*.json
chmod 644 src/data/settings/*.json
chmod 644 src/content/**/*.md
```

**Prevenire:**
1. După orice modificare de fișiere, verifică permisiunile
2. Adaugă în `.gitattributes`:
```
*.json text eol=lf
*.md text eol=lf
```
3. În CI/CD, rulează chmod dacă e necesar

---

### [L-023] Metadata SEO hardcoded în pagini

**Problema:** Metadata de contact avea program hardcoded care nu exista pe original
**Cauza:** String-uri concatenate cu valori inventate

**Exemplu GREȘIT:**
```typescript
// contact.astro - GRESIT
const metadata = {
  description: contactInfo.address + '. Program: Luni-Vineri 10-19, Sâmbătă 10-14.',
  //                                   ^^^ INVENTAT!
};
```

**Soluție:**
```typescript
// contact.astro - CORECT
const metadata = {
  description: contactInfo.address + '. Programări telefonice sau prin email.',
  //                                   ^^^ Vag dar corect
};
```

**Prevenire:**
1. Caută în toate paginile: `grep -rn "metadata" src/pages/`
2. Verifică fiecare `description` să nu conțină date inventate
3. Pentru program: dacă nu e specificat, folosește "Cu programare" sau similar

---

## LECTII DE ADAUGAT

(Adauga aici lectii noi pe masura ce le inveti)

---

_Document creat: 2025-12-22_
_Ultima actualizare: 2025-12-26_
_Proiect: Terapii Energetice Astro_

# Design System - SitePlus v1.0

## Prezentare Generala

Design System-ul SitePlus este construit pe **Tailwind CSS 4.0** cu configuratie CSS-first.
Toate token-urile sunt definite in `src/assets/styles/app.css` folosind directiva `@theme`.

---

## 1. Culori

### Brand Colors

| Token | Valoare | Utilizare |
|-------|---------|-----------|
| `--color-primary` | `rgb(243 85 37)` | CTA, butoane principale, accent |
| `--color-primary-light` | `rgb(255 120 75)` | Hover states |
| `--color-primary-dark` | `rgb(210 65 25)` | Active states |
| `--color-secondary` | `rgb(0 113 248)` | Link-uri, informatii |
| `--color-secondary-light` | `rgb(51 143 255)` | Hover states |
| `--color-secondary-dark` | `rgb(0 85 200)` | Active states |
| `--color-accent` | `rgb(238 98 107)` | Highlights, badges |

### Semantic Colors

| Token | Valoare | Utilizare |
|-------|---------|-----------|
| `--color-success` | `rgb(34 197 94)` | Succes, disponibil |
| `--color-warning` | `rgb(234 179 8)` | Atentionari, pending |
| `--color-error` | `rgb(239 68 68)` | Erori, indisponibil |
| `--color-info` | `rgb(59 130 246)` | Informatii |
| `--color-neutral` | `rgb(107 114 128)` | Neutru |

### Text Colors

| Token | Valoare | Utilizare |
|-------|---------|-----------|
| `--color-text-heading` | `rgb(17 24 39)` | Titluri |
| `--color-text-default` | `rgb(31 41 55)` | Text principal |
| `--color-text-muted` | `rgb(107 114 128)` | Text secundar |
| `--color-text-light` | `rgb(243 244 246)` | Text pe fundal inchis |
| `--color-text-inverse` | `rgb(255 255 255)` | Text alb |

### Background Colors

| Token | Valoare | Utilizare |
|-------|---------|-----------|
| `--color-bg-page` | `rgb(255 255 255)` | Fundal pagina |
| `--color-bg-page-dark` | `rgb(17 24 39)` | Fundal dark mode |
| `--color-bg-subtle` | `rgb(249 250 251)` | Fundal subtil |
| `--color-bg-muted` | `rgb(243 244 246)` | Fundal muted |

### Utilizare in CSS

```css
/* Variabile CSS */
color: var(--color-primary);
background: var(--gradient-primary);

/* Tailwind classes (daca sunt definite) */
.text-primary { color: var(--color-primary); }
.bg-primary { background-color: var(--color-primary); }
```

---

## 2. Tipografie

### Fonturi

| Token | Valoare | Utilizare |
|-------|---------|-----------|
| `--font-sans` | Inter Variable | Text principal |
| `--font-serif` | Montserrat Variable | Fallback serif |
| `--font-heading` | Montserrat Variable | Titluri |

### Marimi Font

Foloseste clasele Tailwind standard:

| Clasa | Marime | Utilizare |
|-------|--------|-----------|
| `text-xs` | 0.75rem | Labels, captions |
| `text-sm` | 0.875rem | Text mic |
| `text-base` | 1rem | Text principal |
| `text-lg` | 1.125rem | Text mare |
| `text-xl` | 1.25rem | Subtitluri |
| `text-2xl` | 1.5rem | H4 |
| `text-3xl` | 1.875rem | H3 |
| `text-4xl` | 2.25rem | H2 |
| `text-5xl` | 3rem | H1 |

### Font Weights

| Clasa | Greutate | Utilizare |
|-------|----------|-----------|
| `font-normal` | 400 | Text body |
| `font-medium` | 500 | Subtitluri |
| `font-semibold` | 600 | Butoane |
| `font-bold` | 700 | Titluri |

---

## 3. Spatiere

### Section Spacing

| Token | Valoare | Utilizare |
|-------|---------|-----------|
| `--spacing-section-sm` | 3rem | Sectiuni mici |
| `--spacing-section` | 5rem | Sectiuni standard |
| `--spacing-section-lg` | 6rem | Sectiuni mari |
| `--spacing-section-xl` | 8rem | Hero, CTA |

### Container Padding

| Token | Valoare | Utilizare |
|-------|---------|-----------|
| `--spacing-container` | 1rem | Mobile |
| `--spacing-container-md` | 1.5rem | Tablet |
| `--spacing-container-lg` | 2rem | Desktop |

### Regula Mobile-First

```html
<!-- CORECT -->
<div class="p-4 md:p-6 lg:p-8">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

<!-- GRESIT -->
<div class="p-8">  <!-- fara responsive -->
<div class="grid-cols-3">  <!-- fara mobile-first -->
```

---

## 4. Border Radius

| Token | Valoare | Utilizare |
|-------|---------|-----------|
| `--radius-sm` | 0.25rem | Inputs mici |
| `--radius-md` | 0.375rem | Butoane |
| `--radius-lg` | 0.5rem | Cards |
| `--radius-xl` | 0.75rem | Cards mari |
| `--radius-2xl` | 1rem | Modals |
| `--radius-3xl` | 1.5rem | Hero sections |
| `--radius-full` | 9999px | Avatars, pills |

---

## 5. Shadows

| Token | Utilizare |
|-------|-----------|
| `--shadow-sm` | Inputs, elemente subtile |
| `--shadow-md` | Cards, dropdowns |
| `--shadow-lg` | Modals, popups |
| `--shadow-xl` | Floating elements |
| `--shadow-2xl` | Hero overlays |
| `--shadow-primary` | CTA buttons (orange glow) |
| `--shadow-secondary` | Info buttons (blue glow) |

---

## 6. Transitions

| Token | Durata | Utilizare |
|-------|--------|-----------|
| `--transition-fast` | 150ms | Hover effects |
| `--transition-normal` | 300ms | Standard |
| `--transition-slow` | 500ms | Page transitions |

### Easing Curves

| Token | Utilizare |
|-------|-----------|
| `--ease-smooth` | Standard |
| `--ease-bounce` | Animations |
| `--ease-spring` | Micro-interactions |

---

## 7. Z-Index Scale

| Token | Valoare | Utilizare |
|-------|---------|-----------|
| `--z-dropdown` | 50 | Dropdowns, menus |
| `--z-sticky` | 100 | Sticky headers |
| `--z-fixed` | 200 | Fixed elements |
| `--z-modal-backdrop` | 300 | Modal backdrop |
| `--z-modal` | 400 | Modal content |
| `--z-tooltip` | 500 | Tooltips |

---

## 8. Gradients

| Token | Utilizare |
|-------|-----------|
| `--gradient-primary` | CTA buttons, highlights |
| `--gradient-secondary` | Info sections |
| `--gradient-hero` | Hero overlays |
| `--gradient-card-hover` | Card hover effects |
| `--gradient-subtle` | Section backgrounds |

---

## 9. Header Variants

Header-ul AstroWind suporta 5 variante de stil, configurabile prin prop-ul `variant`:

### Variante Disponibile

| Variant | Descriere | Recomandat pentru |
|---------|-----------|-------------------|
| `solid` | Fundal alb solid cu shadow (default) | Business profesional, servicii |
| `transparent` | Transparent pe hero, solid la scroll | Landing pages, evenimente |
| `glass` | Semi-transparent cu blur effect | Tech, modern |
| `floating` | Rounded cu margini, efect floating | Agentii digitale, creative |
| `transparent-floating` | Transparent → floating la scroll | Premium, luxury |

### Utilizare

```astro
---
import Header from '~/components/widgets/Header.astro';
import { headerData } from '~/navigation';
---

<!-- Solid (default) -->
<Header {...headerData} />

<!-- Transparent - devine solid la scroll -->
<Header {...headerData} variant="transparent" />

<!-- Glass effect -->
<Header {...headerData} variant="glass" />

<!-- Floating cu rounded corners -->
<Header {...headerData} variant="floating" />

<!-- Transparent care devine floating la scroll -->
<Header {...headerData} variant="transparent-floating" />
```

### Recomandari per Tip Business

| Template | Stil Recomandat | Motivatie |
|----------|----------------|-----------|
| Instalator/Servicii | `solid` | Profesional, de incredere |
| Evenimente | `transparent` | Elegant pe hero images |
| Finante/Business | `solid` | Serios, corporate |
| Agentie SEO/Digital | `floating` sau `glass` | Modern, tech-savvy |
| Cursuri/Educatie | `solid` | Curat, accesibil |
| Auto Rental | `transparent` | Dinamic, atragator |
| Imobiliare | `solid` sau `glass` | Profesional |

---

## 10. Componente

### Butoane

```html
<!-- Primary -->
<button class="btn-primary">Click me</button>

<!-- Secondary (outline) -->
<button class="btn-secondary">Learn more</button>

<!-- Tertiary (ghost) -->
<button class="btn-tertiary">Cancel</button>
```

### Cards

```html
<div class="property-card bg-white rounded-xl shadow-md p-6">
  <!-- Content -->
</div>
```

### Status Badges

```html
<span class="status-available">Disponibil</span>
<span class="status-pending">Rezervat</span>
<span class="status-sold">Vandut</span>
```

---

## 11. Validare

Ruleaza scriptul de validare pentru a verifica design system-ul:

```bash
npm run check:design
```

Verifica pentru:
- Culori hardcodate (hex, rgb)
- Layout-uri fara prefixe responsive
- Font sizes hardcodate
- Inline styles cu culori

---

## 12. Reguli OBLIGATORII

### DO (Corect)

```css
/* Foloseste variabile CSS */
color: var(--color-primary);
background: var(--gradient-primary);
border-radius: var(--radius-lg);
box-shadow: var(--shadow-md);

/* Foloseste clase Tailwind */
class="text-primary bg-secondary"
class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
class="p-4 md:p-6 lg:p-8"
```

### DON'T (Gresit)

```css
/* NU hardcoda valori */
color: #F35525;
color: rgb(243, 85, 37);
class="text-[#F35525]"
class="bg-[rgb(0,113,248)]"

/* NU uita prefixe responsive */
class="grid-cols-3"  /* Lipseste grid-cols-1 md: */

/* NU folosi inline styles pentru culori */
style="color: red; background: blue;"
```

---

_Versiune: 1.1_
_Ultima actualizare: 2025-12-28_
_Tailwind CSS: 4.1_
_Header Variants: solid, transparent, glass, floating, transparent-floating_

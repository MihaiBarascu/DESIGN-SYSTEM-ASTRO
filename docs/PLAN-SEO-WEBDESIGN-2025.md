# Plan Îmbunătățiri SEO & Web Design 2025

**Data:** 2025-12-26
**Bazat pe:** Cercetare comunități Astro.js, AstroWind, SEO, Web Design

---

## STATUS ACTUAL - Ce avem deja ✅

| Feature | Status | Note |
|---------|--------|------|
| Sitemap (@astrojs/sitemap) | ✅ | Generat automat |
| robots.txt | ⚠️ MINIMAL | Lipsește sitemap reference |
| Structured Data (JSON-LD) | ✅ | LocalBusiness, Service, Course |
| Meta tags / OpenGraph | ✅ | Via Metadata.astro |
| ClientRouter (View Transitions) | ✅ | Astro 5 pattern |
| SVG Optimization (experimental) | ✅ | Enabled în astro.config.ts |
| Compression (HTML/CSS/JS) | ✅ | Via astro-compress |
| Accessibility (ARIA) | ⚠️ BASIC | 20 attrs în 13 fișiere |
| Image alt text | ⚠️ PARTIAL | 15 ocurențe |

---

## ÎMBUNĂTĂȚIRI PRIORITARE

### 🔴 PRIORITATE 1: robots.txt complet

**Problemă:** robots.txt actual nu are sitemap reference
**Impact SEO:** Crawlerii pot rata sitemap-ul

**Soluție:**
```txt
User-agent: *
Disallow:

Sitemap: https://terapiienergetice.ro/sitemap-index.xml
```

**Surse:**
- [astro-robots-txt npm](https://www.npmjs.com/package/astro-robots-txt)
- [How to get Astro indexed](https://indexplease.com/blog/how-to-index-astro-site/)

---

### 🔴 PRIORITATE 2: Site URL în producție

**Problemă:** `site` comentat în astro.config.ts
**Impact:** Sitemap, canonical URLs, OG images nu funcționează corect

**Soluție:**
```typescript
export default defineConfig({
  site: 'https://terapiienergetice.ro',
  // ...
});
```

---

### 🟡 PRIORITATE 3: AI Crawlers Block (opțional)

**Problemă:** AI bots (GPTBot, CCBot, etc.) pot scrapa conținutul
**Impact:** Protecție conținut original

**Soluție:** Adaugă în robots.txt:
```txt
# Block AI crawlers
User-agent: GPTBot
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /
```

**Sursă:** [astro-ai-robots-txt](https://delucis.github.io/astro-ai-robots-txt/)

---

### 🟡 PRIORITATE 4: Canonical URLs

**Problemă:** Posibile duplicate content issues
**Soluție:** Verifică că Metadata.astro setează canonical corect

```astro
<link rel="canonical" href={Astro.url.href} />
```

---

### 🟡 PRIORITATE 5: Breadcrumbs Schema

**Problemă:** Lipsește BreadcrumbList schema pentru navigare
**Impact:** Rich snippets în Google

**Soluție nouă în StructuredData.astro:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [...]
}
```

**Sursă:** [Astro structured data](https://stephen-lunt.dev/blog/astro-structured-data/)

---

## ÎMBUNĂTĂȚIRI ACCESSIBILITY (WCAG 2.2)

### 🟡 Target Size Minimum (24x24 CSS pixels)

**Standard:** WCAG 2.2 Level AA
**Verificare:** Toate butoanele/linkurile touch-friendly

```css
.btn, button, a {
  min-height: 44px;
  min-width: 44px;
}
```

**Sursă:** [Web Accessibility 2025](https://www.broworks.net/blog/web-accessibility-best-practices-2025-guide)

---

### 🟡 Focus Indicators

**Standard:** WCAG 2.2 Focus Appearance
**Verificare:** Focus vizibil pe toate elementele interactive

```css
:focus-visible {
  outline: 2px solid var(--aw-color-primary);
  outline-offset: 2px;
}
```

---

### 🟡 Skip to Content Link

**Problemă:** Utilizatorii keyboard trebuie să navigheze prin tot header-ul
**Soluție:**

```astro
<a href="#main-content" class="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

---

### 🟡 Color Contrast Audit

**Standard:** WCAG 2.1 - 4.5:1 pentru text normal
**Tool:** [Lighthouse](https://developers.google.com/web/tools/lighthouse) accessibility audit

---

## ÎMBUNĂTĂȚIRI PERFORMANCE (Core Web Vitals)

### 🟢 LCP (Largest Contentful Paint)

**Status:** Probabil OK - Astro SSG + lazy images
**Verificare:** Lighthouse audit

**Optimizări suplimentare:**
- `fetchpriority="high"` pe hero image
- Preload fonturi critice

---

### 🟢 CLS (Cumulative Layout Shift)

**Verificare:** Imagini au width/height explicit
**Optimizare:** `aspect-ratio` pe containere

---

### 🟢 FID/INP (Interaction)

**Status:** Probabil OK - minimal JavaScript
**Verificare:** Lighthouse audit

---

## ÎMBUNĂTĂȚIRI WEB DESIGN

### 🟡 E-A-T SEO (Expertise, Authority, Trust)

**Recomandare AstroWind:**
> "Make EAT-seo a bigger part of the blog posts, so the author is mentioned at the top, but also adding an about the author block in the bottom of the blog posts"

**Soluții:**
1. Author box la sfârșitul articolelor
2. Pagină dedicată "Despre Terapeut"
3. Testimoniale cu nume real + foto
4. Certificări vizibile

**Sursă:** [AstroWind Discussion #392](https://github.com/arthelokyo/astrowind/discussions/392)

---

### 🟢 Mobile-First Design

**Status:** ✅ OK - Tailwind responsive classes
**Verificare:** Test pe device-uri reale

---

### 🟡 Dynamic OG Images

**Feature avansat:** Generare automată OG images pentru fiecare pagină
**Tool:** Satori + Sharp

**Sursă:** [Astro SEO tips](https://dev.to/cookieduster_n/seo-for-astro-how-to-make-the-fastest-framework-also-the-smartest-501o)

---

## ACȚIUNI IMEDIATE (Quick Wins)

| # | Acțiune | Timp | Impact |
|---|---------|------|--------|
| 1 | Decomentează `site` în astro.config.ts | 1 min | HIGH |
| 2 | Actualizează robots.txt cu sitemap | 2 min | HIGH |
| 3 | Verifică Lighthouse score | 10 min | Audit |
| 4 | Adaugă skip-to-content link | 15 min | MEDIUM |
| 5 | Audit color contrast | 30 min | MEDIUM |

---

## ACȚIUNI PE TERMEN MEDIU

| # | Acțiune | Timp | Impact |
|---|---------|------|--------|
| 1 | Adaugă Breadcrumbs schema | 1-2h | MEDIUM |
| 2 | Author box pentru blog | 2h | E-A-T |
| 3 | Dynamic OG images | 4h | LOW |
| 4 | Block AI crawlers | 5 min | LOW |

---

## VALIDARE & MONITORIZARE

### Tools recomandate:

1. **Google Search Console** - Indexare, erori
2. **Google PageSpeed Insights** - Core Web Vitals
3. **Schema Validator** - [schema.org/validator](https://validator.schema.org/)
4. **Rich Results Test** - [Google Rich Results](https://search.google.com/test/rich-results)
5. **WAVE** - Accessibility audit
6. **Lighthouse** - Performance, SEO, Accessibility

---

## SURSE CERCETARE

### SEO Astro.js:
- [Optimizing Astro for SEO - Medium](https://medium.com/@aisyndromeart/optimizing-astro-js-websites-for-seo-a-guide-for-developers-25fcd20c8e30)
- [SEO for Astro - DEV Community](https://dev.to/cookieduster_n/seo-for-astro-how-to-make-the-fastest-framework-also-the-smartest-501o)
- [Technical SEO with Astro](https://astrojs.dev/articles/astro-seo-structure/)
- [Astro SEO Plugins](https://saidalachgar.dev/blog/optimizing-astro-websites-for-seo-plugins-performance-and-best-practices/)

### Structured Data:
- [JSON-LD in Astro](https://johndalesandro.com/blog/astro-add-json-ld-structured-data-to-your-website-for-rich-search-results/)
- [astro-seo-schema npm](https://www.npmjs.com/package/astro-seo-schema)
- [Stephen Lunt - Astro Structured Data](https://stephen-lunt.dev/blog/astro-structured-data/)

### Accessibility:
- [Web Accessibility 2025 Guide](https://www.broworks.net/blog/web-accessibility-best-practices-2025-guide)
- [WCAG 2.2 Guidelines](https://www.w3.org/TR/WCAG21/)
- [Web Design Best Practices 2025](https://onenine.com/best-practices-for-web-design/)

### AstroWind:
- [AstroWind GitHub Discussions](https://github.com/arthelokyo/astrowind/discussions/392)
- [AstroWind Template](https://astrowind.vercel.app)

---

*Plan generat: 2025-12-26*
*Următoarea verificare recomandată: După deploy producție*

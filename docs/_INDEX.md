# INDEX DOCUMENTATIE - Terapii Energetice Astro

> **CLAUDE CODE: CITESTE ACEST FISIER INTAI!**
> Acest index este SINGURA SURSA DE ADEVAR pentru documentatia proiectului.

**Ultima actualizare:** 2025-12-23
**Stack:** Astro 5.0 + AstroWind + Pages CMS + Tailwind CSS
**Status Proiect:** ✅ GATA DE PRODUCȚIE

> **NOU:** Vezi `PROJECT-COMPLETE.md` pentru documentația completă!

---

## DESPRE PROIECT

Website static pentru Terapii Energetice (terapiienergetice.ro) construit cu:

- **Astro 5.0** - Framework static-first
- **AstroWind** - Template production-ready
- **Pages CMS** - Git-based CMS (100% open source)
- **Tailwind CSS** - Styling
- **GitHub** - Storage continut (Markdown)
- **cPanel** - Hosting (static files)

### Filosofie

- 100% Open Source
- Zero vendor lock-in
- Static output pentru cPanel
- Git-based content management
- Client poate edita fara cunostinte tehnice

---

## DOCUMENTE ESENTIALE

| Document                 | Scop                                     | Link                              |
| ------------------------ | ---------------------------------------- | --------------------------------- |
| **\_INDEX.md**           | Entry point (acest fisier)               | -                                 |
| **\_ARCHITECTURE.md**    | Decizii tehnice (ADR-uri)                | [link](_ARCHITECTURE.md)          |
| **RESPONSIVE-SYSTEM.md** | **OBLIGATORIU** - Pattern-uri responsive | [link](RESPONSIVE-SYSTEM.md)      |
| **PAGES-CMS.md**         | Documentatie completa Pages CMS          | [link](PAGES-CMS.md)              |
| **CLAUDE.md**            | Instructiuni Claude Code                 | [link](../.claude/CLAUDE.md)      |
| **LESSONS-INDEX.md**     | Index lectii invatate                    | [link](lessons/_LESSONS-INDEX.md) |

---

## STACK TEHNIC

| Componenta | Tehnologie                           | Documentatie                                                                                              |
| ---------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| Framework  | Astro 5.0                            | [docs.astro.build](https://docs.astro.build)                                                              |
| Template   | AstroWind                            | [github.com/onwidget/astrowind](https://github.com/onwidget/astrowind)                                    |
| CMS        | Pages CMS                            | [pagescms.org/docs](https://pagescms.org/docs)                                                            |
| Styling    | Tailwind CSS                         | [tailwindcss.com](https://tailwindcss.com)                                                                |
| Content    | Markdown + Astro Content Collections | [docs.astro.build/en/guides/content-collections](https://docs.astro.build/en/guides/content-collections/) |

---

## STRUCTURA PROIECT

```
TERAPII-ENERGETICE-ASTRO/
├── docs/                    # Documentatie
│   ├── _INDEX.md           # Entry point (acest fisier)
│   ├── _ARCHITECTURE.md    # Decizii tehnice
│   ├── active/             # Documente active
│   │   ├── plans/          # Planuri implementare
│   │   ├── practices/      # Best practices
│   │   └── guides/         # Ghiduri
│   ├── reference/          # Referinta statica
│   ├── lessons/            # Lessons learned
│   └── archive/            # Documente vechi
├── .claude/
│   └── CLAUDE.md           # Instructiuni Claude Code
├── src/
│   ├── data/               # Content editabil via Pages CMS
│   │   ├── pages/          # JSON-uri pentru pagini
│   │   │   ├── homepage.json
│   │   │   ├── despre.json
│   │   │   ├── cursuri.json
│   │   │   └── contact.json
│   │   ├── terapii/        # Terapiile oferite (Markdown)
│   │   ├── testimoniale/   # Testimoniale clienti (Markdown)
│   │   └── settings/       # Setări globale site
│   ├── pages/              # Pagini Astro
│   ├── components/         # Componente reutilizabile
│   ├── layouts/            # Layout-uri
│   └── assets/             # Imagini, fonturi
├── public/                 # Fisiere statice
├── .pages.yml              # Configuratie Pages CMS
├── astro.config.mjs        # Configuratie Astro
└── tailwind.config.js      # Configuratie Tailwind
```

---

## CONTENT COLLECTIONS

| Colectie       | Path                      | Scop                                   |
| -------------- | ------------------------- | -------------------------------------- |
| `terapii`      | src/content/terapii/      | Terapiile oferite (Bowen, Reiki, etc.) |
| `testimoniale` | src/content/testimoniale/ | Testimoniale clienti                   |
| `cursuri`      | src/content/cursuri/      | Cursuri Access Bars, Facelift          |
| `blog`         | src/content/blog/         | Articole si noutati                    |

---

## COMENZI RAPIDE

```bash
# Development
npm run dev               # Start dev server

# Build
npm run build             # Build static
npm run preview           # Preview build

# Deploy
# Upload dist/ folder to cPanel public_html
```

---

## WORKFLOW PAGES CMS

```
1. Clientul merge la app.pagescms.org
2. Login cu GitHub
3. Selecteaza repo-ul
4. Editeaza continut (visual)
5. Save → commit automat in GitHub
6. Rebuild → deploy pe cPanel
```

---

## REGULI PENTRU CLAUDE CODE

1. **INTAI** citeste `_INDEX.md` (acest fisier)
2. Verifica `_ARCHITECTURE.md` inainte de decizii tehnice
3. **OBLIGATORIU** citeste `RESPONSIVE-SYSTEM.md` pentru orice layout/component nou
4. Foloseste Astro Content Collections pentru content
5. **NU** hardcoda culori - foloseste Tailwind theme
6. **NU** uita prefixele responsive (`md:`, `lg:`) pentru layout-uri
7. Respecta structura AstroWind
8. Verifica `lessons/` pentru greseli de evitat
9. **NU** citi documente din `archive/` - sunt outdated
10. **NU** folosi `sticky` in sidebar-uri cu multiple elemente

---

## DESIGN THEME

| Element    | Valoare              | CSS Variable           |
| ---------- | -------------------- | ---------------------- |
| Primary    | Gold (#D4AF37)       | `--aw-color-primary`   |
| Secondary  | Charcoal (#272630)   | `--aw-color-secondary` |
| Background | Warm Cream (#FFFDF8) | `--aw-color-bg-page`   |
| Accent     | Gold Dark (#B8952F)  | `--aw-color-accent`    |

---

## CSS ORGANIZATION (Astro Best Practices)

| Tip              | Unde                     | Exemplu                        |
| ---------------- | ------------------------ | ------------------------------ |
| CSS Variables    | `CustomStyles.astro`     | `--aw-color-primary`           |
| Component Styles | `<style>` in componenta  | `.testimonial-card::before`    |
| Button Classes   | `tailwind.css` @layer    | `.btn`, `.btn-primary`         |
| Utilities        | Tailwind classes in HTML | `text-primary`, `bg-secondary` |

**Regula:** Scoped styles by default, global styles doar pentru CSS variables.

Vezi `_ARCHITECTURE.md` → ADR-009 pentru detalii complete.

---

_Document creat: 2025-12-22_
_Actualizat: 2025-12-25_
_Proiect: Terapii Energetice Astro_

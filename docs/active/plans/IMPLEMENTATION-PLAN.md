# PLAN IMPLEMENTARE - Terapii Energetice Astro

**Data:** 2025-12-22
**Status:** 🚧 IN PROGRESS

---

## Obiectiv

Crearea site-ului terapiienergetice.ro folosind:

- Astro 5.0 + AstroWind template
- Pages CMS pentru editare content
- Deploy pe cPanel (static files)

---

## Faze Implementare

### FAZA 1: Setup Proiect (1-2 ore)

- [ ] Clone AstroWind template
- [ ] Configurare proiect (package.json, astro.config)
- [ ] Setup Tailwind cu culorile custom (gold + navy)
- [ ] Testare `npm run dev`
- [ ] Push initial in GitHub

### FAZA 2: Content Collections (2-3 ore)

- [ ] Creare `src/content/config.ts` cu schema
- [ ] Creare structura foldere:
  - [ ] `src/content/terapii/`
  - [ ] `src/content/testimoniale/`
  - [ ] `src/content/cursuri/`
  - [ ] `src/content/blog/`
- [ ] Adaugare content initial (Markdown)
- [ ] Testare content collections

### FAZA 3: Pagini Principale (4-5 ore)

- [ ] Homepage (Hero + Terapii + Testimoniale + CTA)
- [ ] Pagina Despre (Monica + Experienta)
- [ ] Pagina Terapii (lista + individual)
- [ ] Pagina Cursuri
- [ ] Pagina Contact
- [ ] Pagina Blog (optional)

### FAZA 4: Pages CMS Config (1-2 ore)

- [ ] Creare `.pages.yml` in root
- [ ] Configurare colectii (terapii, testimoniale, cursuri)
- [ ] Configurare media paths
- [ ] Testare cu app.pagescms.org
- [ ] Training client (optional)

### FAZA 5: Styling & Polish (2-3 ore)

- [ ] Personalizare culori (gold + navy)
- [ ] Ajustare componente AstroWind
- [ ] Responsive testing
- [ ] Optimizare imagini
- [ ] SEO meta tags

### FAZA 6: Deploy (1-2 ore)

- [ ] Build final (`npm run build`)
- [ ] Upload pe cPanel
- [ ] Testare pe domeniu live
- [ ] Configurare DNS (daca e cazul)
- [ ] SSL certificate

---

## Timeline Estimat

| Faza                | Durata         | Status |
| ------------------- | -------------- | ------ |
| Setup               | 1-2 ore        | ⬜     |
| Content Collections | 2-3 ore        | ⬜     |
| Pagini              | 4-5 ore        | ⬜     |
| Pages CMS           | 1-2 ore        | ⬜     |
| Styling             | 2-3 ore        | ⬜     |
| Deploy              | 1-2 ore        | ⬜     |
| **TOTAL**           | **~12-15 ore** |        |

---

## Content necesar de la client

### Texte

- [ ] Descriere fiecare terapie
- [ ] Biografia Monica
- [ ] Testimoniale clienti
- [ ] Informatii cursuri
- [ ] Date contact (telefon, email, adresa)

### Imagini

- [ ] Logo (daca exista)
- [ ] Foto Monica
- [ ] Imagini terapii
- [ ] Imagini cursuri
- [ ] Foto cabinet/spatiu

---

## Criterii de Succes

1. ✅ Site functioneaza pe cPanel
2. ✅ Client poate edita prin Pages CMS
3. ✅ Toate paginile sunt responsive
4. ✅ Build fara erori
5. ✅ Lighthouse score > 90

---

_Document creat: 2025-12-22_

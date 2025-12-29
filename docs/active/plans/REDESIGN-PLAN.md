# Plan: Refacere Site Terapii Energetice

## Obiectiv

Refacerea site-ului terapiienergetice.ro în Astro cu design similar plasturifototerapeutici.ro, păstrând schema de culori Gold (#D4AF37) + Navy (#1a365d).

## Caracteristici Design Țintă (plasturifototerapeutici.ro)

- Secțiuni full-width cu imagini/videouri mari
- Layout alternant: Image Left / Text Right și invers
- Grid cards pentru features/servicii
- Steps vizuali pentru procese
- Generous spacing între secțiuni
- Headings mari, impactante

---

## Conținut de Migrat

### Informații Centru

- **Nume**: Revital Harmony - Centrul de Terapii Energetice
- **Terapeut**: Monica Batir (Psiholog, Terapeut Holistic, Maestru Reiki)
- **Telefon**: 0774512905
- **Email**: office@terapiienergetice.ro
- **Adresă**: Bulevardul Decebal Nr. 9, Sector 3, București

### 8 Terapii

1. Terapia Bowen
2. Access Bars
3. Facelift Energetic
4. Reiki
5. Corecție Bioenergetică
6. Eliberare Tensiuni Interioare
7. Terapie cu Lumină (Plasturi fototerapeutici)
8. Termo Masaj Ceragem

### 2 Cursuri

1. Curs Access Bars
2. Curs Facelift Energetic

---

## Structura Paginilor

### 1. Homepage (index.astro)

```
┌─────────────────────────────────────────────┐
│ HERO - Full-width cu imagine mare           │
│ "Revitalizează-ți corpul și mintea"         │
│ CTA: Programează o ședință                  │
├─────────────────────────────────────────────┤
│ DESPRE - Image Left / Text Right            │
│ Monica Batir + calificări                   │
├─────────────────────────────────────────────┤
│ TERAPII FEATURED - Grid 3 coloane           │
│ Top 3 terapii cu icon, titlu, descriere     │
├─────────────────────────────────────────────┤
│ CUM FUNCȚIONEAZĂ - 3 Steps                  │
│ 1. Programare → 2. Ședință → 3. Transformare│
├─────────────────────────────────────────────┤
│ TOATE TERAPIILE - Grid cards                │
│ 8 servicii cu imagine, titlu, preț          │
├─────────────────────────────────────────────┤
│ TESTIMONIALE - 3 coloane                    │
│ Recenzii clienți                            │
├─────────────────────────────────────────────┤
│ CURSURI - 2 coloane                         │
│ Access Bars + Facelift                      │
├─────────────────────────────────────────────┤
│ CONTACT CTA - Full-width dark background    │
│ "Începe călătoria spre vindecare"           │
└─────────────────────────────────────────────┘
```

### 2. Pagini Terapii (generate dinamic)

- `/terapii/` - lista toate terapiile
- `/terapii/[slug]` - pagină individuală per terapie

### 3. Pagini Statice

- `/despre` - Despre Monica Batir
- `/cursuri` - Lista cursuri
- `/contact` - Formular contact + hartă
- `/testimoniale` - Toate testimonialele

---

## Fișiere de Modificat/Creat

### Faza 1: Assets și Date

1. **Copiere assets** din terapii-assets/ în src/assets/images/
2. **Actualizare site.json** cu datele reale (contact, adresă, program)
3. **Completare terapii/** cu toate cele 8 terapii
4. **Completare testimoniale/** cu recenzii reale

### Faza 2: Componente Noi (dacă necesare)

1. **src/components/widgets/HeroFullWidth.astro** - Hero cu imagine full-width
2. **src/components/widgets/ServiceCard.astro** - Card terapie cu imagine, preț

### Faza 3: Pagini

1. **src/pages/index.astro** - Homepage complet refăcut
2. **src/pages/terapii/index.astro** - Lista terapii
3. **src/pages/terapii/[...slug].astro** - Pagină dinamică per terapie
4. **src/pages/despre.astro** - Despre Monica Batir
5. **src/pages/cursuri.astro** - Lista cursuri
6. **src/pages/contact.astro** - Contact form
7. **src/pages/testimoniale.astro** - Toate testimonialele

### Faza 4: Navigație și Config

1. **src/navigation.ts** - Actualizare meniu
2. **src/config.yaml** - Metadata site

### Faza 5: Pagini Dinamice (pentru client)

1. **src/pages/[...slug].astro** - Pagini create din Pages CMS
2. **Actualizare .pages.yml** - Adăugare colecție "pages"

---

## Detalii Implementare Homepage

### 1. Hero Section

- Widget: Hero2 (modificat pentru full-width)
- Imagine: hero-1.png sau hero-2.png
- Titlu: "Revitalizează-ți corpul și mintea cu terapiile noastre energetice"
- Subtitlu: "Centrul tău de terapii energetice din București"
- CTA: "Programează o ședință" + "Descoperă terapiile"

### 2. Despre Section

- Widget: Content (image left, text right)
- Imagine: Monica Batir (de adăugat)
- Text: Bio scurt + calificări
- CTA: "Află mai multe despre mine"

### 3. Featured Terapii

- Widget: Features2 (3 coloane)
- Top 3: Bowen, Access Bars, Facelift
- Icon + Titlu + Descriere scurtă
- Link către pagina terapiei

### 4. Cum Funcționează

- Widget: Steps
- 3 pași: Programare → Ședință → Transformare
- Descriere pentru fiecare pas

### 5. Toate Terapiile

- Widget: Custom grid sau Features2
- 8 cards cu imagine, titlu, preț, durată
- Link către pagina individuală

### 6. Testimoniale

- Widget: Testimonials
- 3-4 recenzii de la clienți
- Avatar, nume, terapie, text

### 7. Cursuri

- Widget: Content alternant
- 2 cursuri: Access Bars, Facelift
- Descriere + CTA "Înscrie-te"

### 8. Contact CTA

- Widget: CallToAction
- Background: Navy dark
- Titlu: "Începe călătoria spre vindecare"
- CTA: Contact, Telefon

---

## Ordine Execuție

1. [ ] Copiere assets în proiect
2. [ ] Actualizare src/data/settings/site.json
3. [ ] Creare conținut pentru toate 8 terapiile
4. [ ] Creare testimoniale reale
5. [ ] Refacere completă index.astro
6. [ ] Creare pagină dinamică terapii/[slug].astro
7. [ ] Creare pagină terapii/index.astro
8. [ ] Creare pagină despre.astro
9. [ ] Actualizare contact.astro
10. [ ] Actualizare navigation.ts
11. [ ] Actualizare config.yaml
12. [ ] Testare și ajustări
13. [ ] Commit și push

---

## Note Tehnice

- **Culori**: Păstrez Gold + Navy din CustomStyles.astro
- **Full-width**: Folosesc `containerClass="max-w-full"` în widgets
- **Imagini**: Optimizate prin Astro Image component
- **Responsive**: Mobile-first, toate widgeturile sunt responsive
- **Dark sections**: Folosesc `isDark={true}` pentru contrast

---

## Resurse

- **Site existent**: /home/evr/Desktop/website-templates/www.terapiienergetice.ro/
- **Assets**: /home/evr/Desktop/website-templates/template-5/terapii-assets/
- **Design referință**: https://www.plasturifototerapeutici.ro/

---

_Plan creat: 2024-12-22_

# Documentație Completă - Terapii Energetice Astro

**Ultima actualizare:** 2025-12-22
**Status:** GATA DE PRODUCȚIE

---

## 1. DESPRE PROIECT

Website complet pentru **Revital Harmony - Centrul de Terapii Energetice** din București.

### Caracteristici Principale

- Design profesional inspirat de plasturifototerapeutici.ro
- Header transparent overlay pe video hero
- 100% conținut oficial de pe terapiienergetice.ro
- Toate paginile editabile prin Pages CMS
- Build static pentru hosting pe cPanel

### Stack Tehnic

| Componentă | Tehnologie               |
| ---------- | ------------------------ |
| Framework  | Astro 5.0                |
| Template   | AstroWind                |
| CMS        | Pages CMS (git-based)    |
| Styling    | Tailwind CSS             |
| Hosting    | cPanel (fișiere statice) |

---

## 2. STRUCTURA FIȘIERELOR

```
TERAPII-ENERGETICE-ASTRO/
├── src/
│   ├── pages/                    # Pagini site
│   │   ├── index.astro          # Homepage
│   │   ├── despre.astro         # Despre Monica Batir
│   │   ├── cursuri.astro        # Cursuri certificate
│   │   ├── contact.astro        # Formular contact
│   │   └── terapii/
│   │       ├── index.astro      # Lista terapii
│   │       └── [...slug].astro  # Pagină dinamică terapie
│   │
│   ├── data/                     # Date editabile via Pages CMS
│   │   ├── pages/               # Conținut pagini
│   │   │   ├── homepage.json    # Date homepage
│   │   │   ├── despre.json      # Date pagină despre
│   │   │   ├── cursuri.json     # Date pagină cursuri
│   │   │   └── contact.json     # Date pagină contact
│   │   ├── terapii/             # Terapiile (Markdown)
│   │   ├── testimoniale/        # Testimoniale (Markdown)
│   │   └── settings/
│   │       └── site.json        # Setări globale site
│   │
│   ├── components/widgets/       # Componente vizuale
│   │   ├── HeroVideo.astro      # Hero cu video background
│   │   ├── VideoSection.astro   # Secțiune cu video
│   │   ├── Header.astro         # Header (suportă transparent)
│   │   └── ...                  # Alte componente AstroWind
│   │
│   └── assets/images/           # Imagini optimizate
│       ├── hero/                # Imagini hero
│       ├── cursuri/             # Imagini cursuri
│       └── team/                # Poze echipă
│
├── public/
│   └── videos/                  # Videouri hero
│       ├── hero-terapii.mp4
│       ├── hero-despre.mp4
│       └── hero-home.mp4
│
├── .pages.yml                   # Configurație Pages CMS
├── astro.config.mjs             # Configurație Astro
└── tailwind.config.js           # Configurație Tailwind (culori)
```

---

## 3. PAGES CMS - CUM FUNCȚIONEAZĂ

### Accesare

1. Clientul merge la **https://app.pagescms.org**
2. Login cu contul GitHub
3. Selectează repository-ul **TERAPII-ENERGETICE-ASTRO**
4. Editează conținutul vizual

### Ce Poate Edita Clientul

#### A. Pagini (JSON files)

| Pagină   | Fișier                         | Ce editează                                    |
| -------- | ------------------------------ | ---------------------------------------------- |
| Homepage | `src/data/pages/homepage.json` | Hero, despre, pași, beneficii, statistici, CTA |
| Despre   | `src/data/pages/despre.json`   | Bio Monica, calificări, filozofie              |
| Cursuri  | `src/data/pages/cursuri.json`  | Cursuri, prețuri, date, testimoniale           |
| Contact  | `src/data/pages/contact.json`  | Info contact, formular                         |

#### B. Colecții (Markdown files)

| Colecție     | Path                         | Descriere              |
| ------------ | ---------------------------- | ---------------------- |
| Terapii      | `src/data/terapii/*.md`      | Cele 8 terapii oferite |
| Testimoniale | `src/data/testimoniale/*.md` | Recenzii clienți       |
| Blog         | `src/data/post/*.md`         | Articole (opțional)    |

#### C. Setări Globale

| Fișier                        | Conține                                         |
| ----------------------------- | ----------------------------------------------- |
| `src/data/settings/site.json` | Nume site, telefon, email, adresă, social media |

### Flux Editare

```
1. Client editează în Pages CMS (visual editor)
2. Save → commit automat în GitHub
3. GitHub Action / manual rebuild
4. Upload dist/ pe cPanel
```

---

## 4. COMENZI DEZVOLTARE

```bash
# Instalare dependențe
npm install

# Server dezvoltare (http://localhost:4321)
npm run dev

# Build producție
npm run build

# Preview build local
npm run preview

# Deploy
# Copiază conținutul din dist/ în public_html pe cPanel
```

---

## 5. PAGINI SITE

### Homepage (/)

- Hero video full-screen cu header transparent
- Secțiune "De ce Revital Harmony" cu video
- 3 pași vizuali (Programare → Ședință → Transformare)
- Beneficii terapii
- Grid cu toate cele 8 terapii
- Testimoniale
- Secțiune cursuri
- Statistici (15+ ani, 500+ clienți, etc.)
- Despre Monica Batir
- CTA final

### Cursuri (/cursuri)

- Curs Access Bars (1460 RON / 730 RON reluare)
- Curs Facelift Energetic (1875 RON / 935 RON reluare)
- Date următoarelor cursuri
- Ce primești la curs
- Testimoniale cursanți
- CTA înscriere

### Despre (/despre)

- Bio completă Monica Batir
- Lista calificări
- Filozofie de lucru
- Locație și program
- Google Maps embed

### Terapii (/terapii)

- Grid cu toate terapiile
- Pagini individuale pentru fiecare terapie
- Preț, durată, beneficii

### Contact (/contact)

- Formular contact
- Telefon, email, WhatsApp
- Adresă și hartă
- Program

---

## 6. CULORI ȘI STYLING

### Paletă

| Nume       | Valoare         | Utilizare                            |
| ---------- | --------------- | ------------------------------------ |
| Primary    | Gold (#D4AF37)  | Butoane, accente, text evidențiat    |
| Secondary  | Navy (#1a365d)  | Fundal secțiuni dark, text principal |
| Background | White / Gray-50 | Fundal pagini                        |

### Clase Tailwind Importante

```text
Culori:
  text-primary        → Text gold
  bg-primary          → Background gold
  text-secondary      → Text navy
  bg-secondary        → Background navy

Butoane:
  btn-primary         → Buton gold
  btn-secondary       → Buton outline navy
```

---

## 7. CONȚINUT OFICIAL

### Informații Contact

- **Telefon:** 0774 512 905
- **Email:** office@terapiienergetice.ro
- **Adresă:** Bulevardul Decebal Nr. 9, Sector 3, București
- **Program:** Luni-Vineri 10:00-19:00, Sâmbătă 10:00-14:00

### Cele 8 Terapii

1. Terapia Bowen (200 RON)
2. Access Bars (200 RON)
3. Facelift Energetic (200 RON)
4. Reiki (150 RON)
5. Corecție Bioenergetică (180 RON)
6. Eliberarea Tensiunii Interioare (150 RON)
7. Terapie cu Lumină (180 RON)
8. Termo Masaj Ceragem (80 RON)

### Cele 2 Cursuri

1. Curs Access Bars - 1 zi (1460 RON / 730 RON reluare)
2. Curs Facelift Energetic - 2 zile (1875 RON / 935 RON reluare)

---

## 8. DEZVOLTARE ULTERIOARĂ

### Adăugare Terapie Nouă

1. Creează fișier în `src/data/terapii/nume-terapie.md`
2. Completează frontmatter (title, description, price, duration, etc.)
3. Adaugă conținut Markdown
4. Build și deploy

### Adăugare Testimonial

1. Creează fișier în `src/data/testimoniale/yyyy-mm-dd-nume.md`
2. Completează frontmatter (name, terapie, rating, etc.)
3. Adaugă textul testimonialului

### Modificare Pagină

1. Editează fișierul JSON corespunzător în `src/data/pages/`
2. Sau editează direct prin Pages CMS (app.pagescms.org)

---

## 9. DEPLOY PE CPANEL

### Pași Deploy Manual

```bash
# 1. Build
npm run build

# 2. Arhivează dist/
zip -r dist.zip dist/

# 3. Upload pe cPanel File Manager în public_html

# 4. Extrage și înlocuiește fișierele vechi
```

### Automatizare (GitHub Actions)

Se poate configura GitHub Actions pentru deploy automat la fiecare push.

---

## 10. TROUBLESHOOTING

### Build Eșuează

```bash
# Curăță cache
rm -rf .astro node_modules/.vite

# Reinstalează
npm install

# Build din nou
npm run build
```

### Imagini Lipsă

- Verifică că imaginea există în `src/assets/images/`
- Verifică path-ul în frontmatter (trebuie să înceapă cu `~/assets/images/`)

### Pages CMS Nu Vede Fișierele

- Verifică `.pages.yml` - structura path-urilor
- Refresh în Pages CMS

---

_Document generat: 2025-12-22_
_Proiect: Revital Harmony - Terapii Energetice_

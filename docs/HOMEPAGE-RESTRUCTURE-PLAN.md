# Plan Complet Restructurare Site - Terapii Energetice

**Data:** 2025-12-25
**Obiectiv:** Refacerea ÎNTREGULUI site identic cu originalul terapiienergetice.ro

---

## 1. Inventar Pagini Original vs Curent

### Pagini de Implementat:

| Pagină          | URL Original    | Status Curent | Acțiune           |
| --------------- | --------------- | ------------- | ----------------- |
| Homepage        | `/`             | ⚠️ Diferit    | REFACERE completă |
| Despre Mine     | `/despre-mine`  | ⚠️ Diferit    | REFACERE completă |
| Testimoniale    | `/testimoniale` | ⚠️ Diferit    | REFACERE completă |
| Media           | `/media`        | ✅ Există     | Verificare        |
| Contact         | `/contact`      | ⚠️ Diferit    | REFACERE completă |
| Terapii (listă) | `/terapii`      | ⚠️ Diferit    | REFACERE completă |
| Cursuri (listă) | `/cursuri`      | ⚠️ Diferit    | REFACERE completă |

### Terapii Individuale (8 pagini):

| Terapie                | URL Original                                   | Status   |
| ---------------------- | ---------------------------------------------- | -------- |
| Terapia Bowen          | `/terapia-bowen`                               | REFACERE |
| Corecția Bioenergetică | `/corectia-bioenergetica`                      | REFACERE |
| Eliberare Tensiuni     | `/terapia-de-eliberare-a-tensiunii-interioare` | REFACERE |
| Access Bars            | `/terapia-access-bars`                         | REFACERE |
| Facelift Energetic     | `/terapia-facelift-energetic`                  | REFACERE |
| Reiki                  | `/terapia-reiki`                               | REFACERE |
| Terapia cu Lumină      | `/terapia-cu-lumina`                           | REFACERE |
| Termo Masaj Ceragem    | `/termo-masaj-ceragem`                         | REFACERE |

### Cursuri Individuale (2 pagini):

| Curs                    | URL Original                       | Status   |
| ----------------------- | ---------------------------------- | -------- |
| Curs Access Bars        | `/cursuri/curs-access-bars`        | REFACERE |
| Curs Facelift Energetic | `/cursuri/curs-facelift-energetic` | REFACERE |

---

## 2. Structura Detaliată per Pagină

### 2.1 HOMEPAGE (`/`)

| #   | Secțiune              | Layout     | Descriere                          |
| --- | --------------------- | ---------- | ---------------------------------- |
| 1   | Hero Video            | FULL-WIDTH | Video background + CTA             |
| 2   | Introducere           | CONTAINED  | H1 + HR + H4 + 6 paragrafe terapii |
| 3   | Banner Image          | FULL-WIDTH | Imagine mare                       |
| 4   | De ce + Cum să începi | CONTAINED  | 3 paragrafe + HR                   |
| 5   | Terapii Grid          | CONTAINED  | H3 + intro + 3 carduri             |
| 6   | Cursuri Intro         | CONTAINED  | H3 + HR + paragraf                 |
| 7   | Cursuri Grid          | CONTAINED  | 2 carduri mari                     |
| 8   | Booking + Form        | CONTAINED  | CTA text + formular                |

---

### 2.2 DESPRE MINE (`/despre-mine`)

| #   | Secțiune       | Conținut                              |
| --- | -------------- | ------------------------------------- |
| 1   | Hero           | Titlu pagină                          |
| 2   | Intro          | "Am creat Centrul Revital Harmony..." |
| 3   | Calificări     | Lista cu credentials                  |
| 4   | Imagine        | Foto Monica Batir                     |
| 5   | Filozofie      | "Iubirea este motorul..."             |
| 6   | De ce să alegi | Text explicativ                       |
| 7   | Cum să începi  | Contact CTA                           |

**Calificări Monica Batir:**

- Studii de Psihologie
- Terapeut și trainer holistic
- Master Reiki
- Specialist foto terapie
- Facilitator Access Bars și Facelift Energetic
- Absolventă Academia Access Consciousness
- Nutriționist cu focus Ayurvedic
- Practicant Yoga

---

### 2.3 TESTIMONIALE (`/testimoniale`)

| #   | Secțiune               | Descriere            |
| --- | ---------------------- | -------------------- |
| 1   | Hero                   | Titlu pagină         |
| 2   | Facelift Energetic     | Testimoniale grupate |
| 3   | Reiki                  | Testimoniale grupate |
| 4   | Eliberare Tensiuni     | Testimoniale grupate |
| 5   | Access Bars            | Testimoniale grupate |
| 6   | Corecție Bioenergetică | Testimoniale grupate |
| 7   | Terapia Bowen          | Testimoniale grupate |

**Format testimonial:**

- Nume client
- Profesie
- Locație
- Text testimonial
- Link "Află mai multe"

---

### 2.4 TERAPII LISTĂ (`/terapii`)

| #   | Secțiune       | Descriere                                     |
| --- | -------------- | --------------------------------------------- |
| 1   | Hero           | Titlu + intro                                 |
| 2   | Grid 8 terapii | Carduri cu imagine + titlu + descriere scurtă |

**8 Terapii:**

1. Terapia Bowen
2. Corecția Bioenergetică
3. Eliberare Tensiuni
4. Access Bars
5. Facelift Energetic
6. Reiki
7. Terapia cu Lumină
8. Termo Masaj Ceragem

---

### 2.5 TERAPIE INDIVIDUALĂ (`/terapia-[slug]`)

| #   | Secțiune         | Descriere                     |
| --- | ---------------- | ----------------------------- |
| 1   | Hero             | Titlu terapie                 |
| 2   | Introducere      | Ce este terapia               |
| 3   | Cum funcționează | Mecanisme (7 puncte pt Bowen) |
| 4   | Metode aplicare  | Durată, procedură             |
| 5   | Beneficii        | Listă beneficii               |
| 6   | Pentru cine      | Public țintă                  |
| 7   | Formular booking | Contact + form                |

---

### 2.6 CURSURI LISTĂ (`/cursuri`)

| #   | Secțiune       | Descriere                           |
| --- | -------------- | ----------------------------------- |
| 1   | Hero           | Titlu + intro                       |
| 2   | Grid 2 cursuri | Carduri mari cu imagine + descriere |

**2 Cursuri:**

1. Curs Access Bars
2. Curs Facelift Energetic

---

### 2.7 CURS INDIVIDUAL (`/cursuri/[slug]`)

| #   | Secțiune           | Descriere                 |
| --- | ------------------ | ------------------------- |
| 1   | Hero               | Titlu curs                |
| 2   | Descriere          | Ce vei învăța             |
| 3   | Detalii            | Durată, certificare, preț |
| 4   | Date următoare     | Calendar                  |
| 5   | Testimoniale       | De la absolvenți          |
| 6   | Formular înscriere | Contact + form            |

---

### 2.8 CONTACT (`/contact`)

| #   | Secțiune     | Descriere                            |
| --- | ------------ | ------------------------------------ |
| 1   | Hero         | Titlu                                |
| 2   | Info contact | Telefon, email, adresă               |
| 3   | Formular     | Nume, prenume, email, telefon, mesaj |
| 4   | Hartă        | Google Maps embed                    |
| 5   | Program      | Ore lucru                            |

---

## 3. Conținut Exact de Copiat

### Homepage - Introducere:

```
Bine ai venit la Revital Harmony, centrul tău de terapii energetice alternative
din București, dedicat să te ajute să atingi echilibrul perfect între corp,
minte și spirit. Ne mândrim cu o gamă variată de terapii care îți oferă
posibilitatea de a-ți revitaliza viața într-un mod natural și armonios.

Terapiile Noastre:

Terapia Bowen: O metodă de vindecare profundă și relaxantă...
Access Bars: Această terapie energetică constă în activarea a 32 de puncte...
Facelift Energetic: O abordare naturală și non-invazivă...
Reiki: Această terapie japoneză tradițională...
Corecție Bioenergetică: Tehnicile noastre de corecție bioenergetică...
Eliberare Emoțională: Prin metode specializate...
```

### Homepage - De ce să alegi:

```
De ce să Alegi Revital Harmony? La Revital Harmony, ne dedicăm în totalitate
bunăstării tale. Echipa noastră de terapeuți calificați are experiență vastă
în domeniul terapiilor energetice și este pregătită să te sprijine în
călătoria ta către vindecare și echilibru.

Cum să Începi? Pasul tău către o viață mai echilibrată și armonioasă
începe cu un simplu contact.

Te ajutăm cu drag și dedicare!
```

### Despre Mine - Intro:

```
Am creat Centrul Revital Harmony de Terapii Energetice pentru a vă oferi
soluții practice de regăsire a echilibrului interior, atât fizic cât și
mental, emoțional și spiritual, pentru a trăi zi de zi în armonie cu
voi înșivă și cu cei din jur.

Iubirea este motorul tuturor activităților mele.
```

---

## 4. Imagini Necesare

### Existente (verificate):

- ✅ `hero/main-content.png` - Banner homepage
- ✅ `terapii-energetice/terapia-bowen.png`
- ✅ `terapii-energetice/terapia-access-bars.png`
- ✅ `terapii-energetice/terapia-eliberare.png`
- ✅ `terapii-energetice/terapia-facelift.png`
- ✅ `terapii-energetice/terapia-reiki.png`
- ✅ `terapii-energetice/terapia-lumina.png`
- ✅ `terapii-energetice/terapia-ceragem.png`
- ✅ `terapii-energetice/curs-access-bars.png`
- ✅ `terapii-energetice/curs-facelift.png`
- ✅ `terapii-energetice/monica-batir.jpg`

### De adăugat (dacă lipsesc):

- ⬜ Hero slides din original
- ⬜ Imagini testimoniale

---

## 5. Ordine Implementare

### Faza 1: Homepage

1. ⬜ Refacere index.astro cu structura originală

### Faza 2: Pagini Principale

2. ⬜ Despre Mine
3. ⬜ Testimoniale
4. ⬜ Contact

### Faza 3: Terapii

5. ⬜ Terapii listă
6. ⬜ Template terapie individuală
7. ⬜ Verificare conținut 8 terapii

### Faza 4: Cursuri

8. ⬜ Cursuri listă
9. ⬜ Template curs individual
10. ⬜ Verificare conținut 2 cursuri

### Faza 5: Finalizare

11. ⬜ Testare build
12. ⬜ Verificare vizuală toate paginile
13. ⬜ Comparare cu originalul

---

## 6. Componente AstroWind Folosite

| Componentă             | Utilizare          |
| ---------------------- | ------------------ |
| `HeroVideo.astro`      | Hero homepage      |
| `HeroText.astro`       | Hero alte pagini   |
| `WidgetWrapper.astro`  | Container secțiuni |
| `Headline.astro`       | Titluri            |
| `Button.astro`         | CTA                |
| `Form.astro`           | Formulare contact  |
| `Image` (astro:assets) | Imagini optimizate |

### Componente păstrate pentru viitor:

- VideoSection, Features2, Testimonials, FAQs, Stats, Content, Steps, CallToAction

---

## 7. Contact Info (din Original)

- **Telefon:** 0774512905
- **Email:** office@terapiienergetice.ro
- **Adresă:** Bulevardul Decebal Nr. 9, Sector 3, București
- **Social:** Facebook, Instagram, YouTube

---

## 8. Verificare Finală

| Check                               | Status |
| ----------------------------------- | ------ |
| Homepage identic cu original        | ⬜     |
| Despre Mine identic                 | ⬜     |
| Testimoniale organizate pe servicii | ⬜     |
| 8 pagini terapii complete           | ⬜     |
| 2 pagini cursuri complete           | ⬜     |
| Contact cu formular funcțional      | ⬜     |
| Build trece                         | ⬜     |
| Responsive pe mobile                | ⬜     |
| Dark mode funcționează              | ⬜     |

---

**Aprobat de user:** ⬜ În așteptare

**Total pagini de implementat:** 15+ pagini

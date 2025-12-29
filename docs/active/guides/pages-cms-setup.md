# Ghid: Setup Pages CMS cu Astro

**Data:** 2025-12-22
**Referinta:** https://css-tricks.com/using-pages-cms-for-static-site-content-management/

---

## Ce este Pages CMS?

Pages CMS este un CMS git-based care:

- Editeaza fisiere Markdown direct in GitHub
- Nu necesita database
- 100% open source (MIT license)
- Gratuit pentru totdeauna

---

## Pasul 1: Creare `.pages.yml`

In root-ul proiectului, creaza `.pages.yml`:

```yaml
content:
  # TERAPII
  - name: terapii
    label: Terapii
    path: src/content/terapii
    filename: '{fields.title}.md'
    type: collection
    view:
      fields: [image, title]
    fields:
      - name: title
        label: Titlu
        type: string
      - name: description
        label: Descriere scurta
        type: text
      - name: price
        label: Pret (RON)
        type: number
      - name: duration
        label: Durata (minute)
        type: number
      - name: image
        label: Imagine
        type: image
      - name: body
        label: Descriere completa
        type: rich-text

  # TESTIMONIALE
  - name: testimoniale
    label: Testimoniale
    path: src/content/testimoniale
    filename: '{fields.name}.md'
    type: collection
    fields:
      - name: name
        label: Nume client
        type: string
      - name: text
        label: Testimonial
        type: text
      - name: rating
        label: Rating (1-5)
        type: number
      - name: image
        label: Foto (optional)
        type: image

  # CURSURI
  - name: cursuri
    label: Cursuri
    path: src/content/cursuri
    type: collection
    fields:
      - name: title
        label: Titlu curs
        type: string
      - name: date
        label: Data cursului
        type: date
        options:
          format: dd/MM/yyyy
      - name: price
        label: Pret
        type: number
      - name: description
        label: Descriere
        type: text
      - name: body
        label: Detalii
        type: rich-text

  # SETARI SITE (optional)
  - name: settings
    label: Setari Site
    path: src/config/site.json
    type: file
    fields:
      - name: siteName
        label: Nume site
        type: string
      - name: phone
        label: Telefon
        type: string
      - name: email
        label: Email
        type: string
      - name: address
        label: Adresa
        type: text

media:
  input: src/assets/images
  output: ~/assets/images
```

---

## Pasul 2: Astro Content Collections

Creaza `src/content/config.ts`:

```typescript
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

const testimoniale = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    text: z.string(),
    rating: z.number().optional(),
    image: z.string().optional(),
  }),
});

const cursuri = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date().optional(),
    price: z.number().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { terapii, testimoniale, cursuri };
```

---

## Pasul 3: Conectare la Pages CMS

1. Mergi la **app.pagescms.org**
2. Click **Login with GitHub**
3. Autorizeaza accesul
4. Selecteaza repo-ul proiectului
5. Pages CMS citeste automat `.pages.yml`
6. Incepe sa editezi!

---

## Pasul 4: Workflow Editare

### Pentru client:

```
1. Acceseaza app.pagescms.org
2. Login cu GitHub
3. Selecteaza site-ul
4. Click pe colectia dorita (Terapii, Testimoniale, etc.)
5. Editeaza sau adauga continut
6. Click Save
7. Pages CMS face commit automat in GitHub
```

### Pentru rebuild site:

```
1. Pull changes din GitHub
2. npm run build
3. Upload dist/ pe cPanel
```

---

## Tipuri de Fields

| Tip         | Foloseste pentru           |
| ----------- | -------------------------- |
| `string`    | Titluri, nume scurte       |
| `text`      | Descrieri, paragrafe       |
| `rich-text` | Continut Markdown lung     |
| `number`    | Preturi, durate            |
| `date`      | Date (cursuri, evenimente) |
| `image`     | Imagini                    |
| `boolean`   | Da/Nu                      |
| `select`    | Alegere din lista          |

---

## Troubleshooting

### Imaginile nu apar

- Verifica `output` path in media config
- Pentru Astro: `output: ~/assets/images`

### Content nu se salveaza

- Verifica permisiuni repo GitHub
- Pages CMS App trebuie sa aiba write access

### Schema mismatch

- Asigura-te ca fields din `.pages.yml` se potrivesc cu schema din `config.ts`

---

_Document creat: 2025-12-22_

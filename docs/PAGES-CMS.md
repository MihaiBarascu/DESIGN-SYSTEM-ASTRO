# Pages CMS - Documentație Completă

## Ce este Pages CMS?

Pages CMS este un **Content Management System Open Source** pentru GitHub. Permite editarea conținutului website-ului direct prin interfață web, fără a necesita acces direct la repository.

### Caracteristici principale:

- **100% Open Source** (MIT License)
- **Git-based** - conținutul se salvează în GitHub
- **Zero vendor lock-in** - datele tale rămân în repo-ul tău
- **Gratuit** - folosește app.pagescms.org sau self-host

### Stack Tehnic:

- Next.js (React)
- Tailwind CSS
- TipTap (editor rich-text)
- GitHub OAuth pentru autentificare

---

## Cum Funcționează?

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  Client/Editor  │────▶│  Pages CMS      │────▶│  GitHub Repo    │
│  (Browser)      │     │  (app.pages...) │     │  (content)      │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                                        │
                                                        ▼
                                               ┌─────────────────┐
                                               │  Build Process  │
                                               │  (Manual/CI)    │
                                               └─────────────────┘
                                                        │
                                                        ▼
                                               ┌─────────────────┐
                                               │  Static Site    │
                                               │  (cPanel)       │
                                               └─────────────────┘
```

### Workflow:

1. **Client** se loghează pe app.pagescms.org cu GitHub
2. **Editează** conținutul prin interfața vizuală
3. **Pages CMS** face commit automat în GitHub
4. **Tu** faci rebuild și upload pe cPanel (sau automat cu GitHub Actions)

---

## Configurare: .pages.yml

Fișierul `.pages.yml` în root-ul proiectului definește:

- Ce conținut poate fi editat
- Structura câmpurilor
- Unde se salvează media

### Structură de bază:

```yaml
# .pages.yml

# 1. MEDIA - unde se salvează imaginile
media:
  input: src/assets/images # folder în repo
  output: ~/assets/images # path în website

# 2. CONTENT - ce poate fi editat
content:
  - name: terapii
    label: Terapii
    type: collection
    path: src/content/terapii
    fields:
      - name: title
        label: Titlu
        type: string
        required: true

# 3. SETTINGS (opțional)
settings:
  content:
    merge: true
```

---

## Secțiunea MEDIA

### Simplu (un singur folder):

```yaml
media: src/assets/images
```

### Avansat (cu opțiuni):

```yaml
media:
  input: src/assets/images # folder în repo
  output: ~/assets/images # path relativ în website
  path: / # folder default în browser
  extensions: [jpg, png, webp] # extensii permise
  categories: [image] # sau: document, video, audio
```

### Multiple foldere media:

```yaml
media:
  - name: images
    label: Imagini
    input: src/assets/images
    output: ~/assets/images
    categories: [image]

  - name: documents
    label: Documente
    input: public/documents
    output: /documents
    categories: [document]
    extensions: [pdf, doc, docx]
```

---

## Secțiunea CONTENT

### Tipuri de conținut:

| Tip          | Descriere                       | Exemplu             |
| ------------ | ------------------------------- | ------------------- |
| `collection` | Multiple fișiere într-un folder | Blog posts, Terapii |
| `file`       | Un singur fișier                | Settings, Homepage  |

### Collection (multiple entries):

```yaml
content:
  - name: terapii
    label: Terapii Energetice
    type: collection
    path: src/content/terapii
    format: yaml-frontmatter # pentru .md files
    filename: '{primary}' # numele fișierului
    fields:
      - name: title
        type: string
        required: true
      - name: body
        type: rich-text
```

### File (single entry):

```yaml
content:
  - name: settings
    label: Setări Site
    type: file
    path: src/data/settings.json
    format: json
    fields:
      - name: siteName
        type: string
      - name: contactEmail
        type: string
```

### Opțiuni Content:

| Opțiune      | Tip     | Descriere                           |
| ------------ | ------- | ----------------------------------- |
| `name`       | string  | Identificator unic (obligatoriu)    |
| `label`      | string  | Numele afișat în UI                 |
| `type`       | string  | `collection` sau `file`             |
| `path`       | string  | Calea către folder/fișier           |
| `format`     | string  | Format fișier (vezi mai jos)        |
| `filename`   | string  | Pattern pentru numele fișierului    |
| `fields`     | array   | Definițiile câmpurilor              |
| `exclude`    | array   | Fișiere de ignorat                  |
| `subfolders` | boolean | Afișează subfoldere (default: true) |

### Formate suportate:

| Format             | Extensie   | Descriere                        |
| ------------------ | ---------- | -------------------------------- |
| `yaml-frontmatter` | .md        | YAML frontmatter + Markdown body |
| `json-frontmatter` | .md        | JSON frontmatter + Markdown body |
| `toml-frontmatter` | .md        | TOML frontmatter + Markdown body |
| `yaml`             | .yml/.yaml | Pure YAML                        |
| `json`             | .json      | Pure JSON                        |
| `toml`             | .toml      | Pure TOML                        |

### Filename patterns:

- `{primary}` - câmpul principal (title)
- `{year}`, `{month}`, `{day}` - data curentă
- `{field_name}` - valoarea unui câmp

Exemplu: `"{year}-{month}-{day}-{title}"` → `2024-01-15-reiki-terapie.md`

---

## FIELD TYPES - Tipuri de Câmpuri

### String

Text pe o singură linie.

```yaml
- name: title
  label: Titlu
  type: string
  required: true
  default: 'Titlu nou'
  pattern:
    regex: '^[A-Z]'
    message: 'Trebuie să înceapă cu majusculă'
```

### Text

Text pe multiple linii (textarea).

```yaml
- name: description
  label: Descriere scurtă
  type: text
```

### Rich-text

Editor WYSIWYG (TipTap/ProseMirror).

```yaml
- name: body
  label: Conținut
  type: rich-text
  options:
    media: images # config media pentru imagini
    path: /terapii # folder default pentru imagini
    extensions: [jpg, png] # extensii permise
```

**Features rich-text:**

- Bold, italic, underline, strikethrough
- Headings (H1-H3), paragraphs
- Liste (bullet, numbered)
- Blockquotes, code blocks
- Tabele cu gestionare rânduri/coloane
- Linkuri
- Imagini cu alt text
- Slash commands (`/` pentru inserare rapidă)

### Number

Valori numerice.

```yaml
- name: price
  label: Preț (RON)
  type: number
  options:
    min: 0
    max: 10000
    step: 10
```

### Boolean

Checkbox (true/false).

```yaml
- name: published
  label: Publicat
  type: boolean
  default: false
```

### Date

Selector de dată/datetime.

```yaml
- name: date
  label: Data publicării
  type: date
  options:
    format: dd-MM-yyyy # format date-fns
    time: false # true pentru datetime
    min: '2024-01-01'
    max: '2025-12-31'
```

### Image

Selector de imagine din media.

```yaml
- name: image
  label: Imagine principală
  type: image
  options:
    media: images # config media
    path: /terapii # folder default
    extensions: [jpg, png, webp]

# Pentru galerie (multiple imagini):
- name: gallery
  label: Galerie
  type: image
  options:
    multiple: true # sau {min: 1, max: 5}
```

### File

Selector de fișier (non-imagine).

```yaml
- name: document
  label: Document PDF
  type: file
  options:
    media: documents
    extensions: [pdf]
```

### Select

Dropdown cu opțiuni predefinite.

```yaml
- name: category
  label: Categorie
  type: select
  options:
    values:
      - value: reiki
        label: Reiki
      - value: access-bars
        label: Access Bars
      - value: theta
        label: Theta Healing
    placeholder: 'Selectează categoria'
    multiple: false # true pentru multi-select
    creatable: false # true permite adăugare opțiuni noi
```

### Object

Grup de câmpuri nested.

```yaml
- name: seo
  label: SEO
  type: object
  fields:
    - name: metaTitle
      type: string
    - name: metaDescription
      type: text
```

### Reference

Referință la altă colecție.

```yaml
- name: author
  label: Autor
  type: reference
  options:
    collection: authors # numele colecției
```

### UUID

Generează ID unic automat.

```yaml
- name: id
  type: uuid
  hidden: true
```

---

## Opțiuni Comune pentru Câmpuri

| Opțiune       | Tip            | Descriere                        |
| ------------- | -------------- | -------------------------------- |
| `name`        | string         | Identificator unic (obligatoriu) |
| `label`       | string         | Eticheta afișată                 |
| `type`        | string         | Tipul câmpului                   |
| `description` | string         | Text ajutător sub câmp           |
| `default`     | any            | Valoare implicită                |
| `required`    | boolean        | Câmp obligatoriu                 |
| `hidden`      | boolean        | Ascunde din formular             |
| `pattern`     | object         | Validare regex                   |
| `list`        | boolean/object | Transformă în array              |

### List (array de valori):

```yaml
- name: tags
  label: Tag-uri
  type: string
  list:
    min: 1
    max: 5
    collapsible: true
```

---

## COMPONENTS - Câmpuri Reutilizabile

Definește câmpuri template pentru reutilizare:

```yaml
components:
  seo:
    label: SEO Settings
    type: object
    fields:
      - name: title
        type: string
        description: 'Max 60 caractere'
      - name: description
        type: text
        description: 'Max 160 caractere'
      - name: image
        type: image

  contactInfo:
    label: Contact
    type: object
    fields:
      - name: phone
        type: string
      - name: email
        type: string
        pattern:
          regex: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
          message: 'Email invalid'

content:
  - name: pages
    type: collection
    path: src/content/pages
    fields:
      - name: title
        type: string
      - name: seo
        component: seo # folosește componenta
      - name: contact
        component: contactInfo
```

---

## VIEW - Configurare Afișare Colecție

```yaml
content:
  - name: terapii
    type: collection
    path: src/content/terapii
    view:
      fields: [title, price, published] # coloane afișate
      primary: title # câmp principal
      sort: [date, title] # câmpuri sortabile
      search: [title, description] # câmpuri căutabile
      default:
        sort: date
        order: desc
      layout: list # sau 'tree'
    fields:
      # ...
```

---

## Exemplu Complet pentru Terapii Energetice

```yaml
# .pages.yml

media:
  - name: images
    label: Imagini
    input: src/assets/images
    output: ~/assets/images
    categories: [image]
    extensions: [jpg, jpeg, png, webp, avif]

components:
  seo:
    label: SEO
    type: object
    fields:
      - name: metaTitle
        label: Meta Title
        type: string
        description: 'Titlu pentru motoarele de căutare (max 60 caractere)'
      - name: metaDescription
        label: Meta Description
        type: text
        description: 'Descriere pentru motoarele de căutare (max 160 caractere)'

content:
  # TERAPII
  - name: terapii
    label: Terapii
    type: collection
    path: src/content/terapii
    format: yaml-frontmatter
    filename: '{primary}'
    view:
      fields: [title, price, duration, published]
      primary: title
      sort: [title, price]
      default:
        sort: title
        order: asc
    fields:
      - name: title
        label: Nume Terapie
        type: string
        required: true

      - name: description
        label: Descriere scurtă
        type: text
        required: true
        description: 'Apare în lista de terapii'

      - name: price
        label: Preț (RON)
        type: number
        options:
          min: 0
          step: 10

      - name: duration
        label: Durată (minute)
        type: number
        options:
          min: 15
          step: 15

      - name: image
        label: Imagine
        type: image

      - name: benefits
        label: Beneficii
        type: string
        list:
          min: 1
          max: 10

      - name: published
        label: Publicat
        type: boolean
        default: true

      - name: seo
        component: seo

      - name: body
        label: Conținut detaliat
        type: rich-text

  # TESTIMONIALE
  - name: testimoniale
    label: Testimoniale
    type: collection
    path: src/content/testimoniale
    format: yaml-frontmatter
    view:
      fields: [name, rating, date]
      primary: name
    fields:
      - name: name
        label: Nume Client
        type: string
        required: true

      - name: rating
        label: Rating (1-5)
        type: number
        options:
          min: 1
          max: 5
          step: 1
        default: 5

      - name: image
        label: Foto Client
        type: image

      - name: terapie
        label: Terapie
        type: select
        options:
          values:
            - Reiki
            - Access Bars
            - Theta Healing
            - Vindecare Spirituală

      - name: date
        label: Data
        type: date
        default: 'now'

      - name: published
        label: Publicat
        type: boolean
        default: true

      - name: body
        label: Testimonial
        type: rich-text
        required: true

  # SETĂRI SITE
  - name: settings
    label: Setări Site
    type: file
    path: src/data/settings.json
    format: json
    fields:
      - name: siteName
        label: Nume Site
        type: string
        default: 'Terapii Energetice'

      - name: tagline
        label: Slogan
        type: string

      - name: phone
        label: Telefon
        type: string

      - name: email
        label: Email
        type: string

      - name: address
        label: Adresă
        type: text

      - name: socialMedia
        label: Social Media
        type: object
        fields:
          - name: facebook
            type: string
          - name: instagram
            type: string
          - name: whatsapp
            type: string

settings:
  content:
    merge: true
```

---

## Setup Pas cu Pas

### 1. Creează repository GitHub

```bash
cd TERAPII-ENERGETICE-ASTRO
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/terapii-energetice.git
git push -u origin main
```

### 2. Adaugă .pages.yml în root

### 3. Conectează la Pages CMS

1. Mergi la https://app.pagescms.org
2. Login cu GitHub
3. Selectează repository-ul
4. Pages CMS citește automat .pages.yml

### 4. Invită clientul

- Clientul creează cont GitHub (gratuit)
- Tu îl adaugi ca collaborator pe repo
- El se loghează pe app.pagescms.org

---

## Troubleshooting

### Eroare: "No configuration found"

- Verifică că `.pages.yml` e în root
- Verifică sintaxa YAML (indentare!)

### Imaginile nu se salvează

- Verifică că folderul `media.input` există
- Verifică permisiunile pe repo

### Câmpurile nu apar

- Verifică `name` unic pentru fiecare câmp
- Verifică tipul (`type`) e valid

### Modificările nu apar pe site

- Pages CMS face doar commit în GitHub
- Trebuie rebuild manual sau cu GitHub Actions

---

## Resurse

- **Documentație oficială**: https://pagescms.org/docs
- **GitHub**: https://github.com/pages-cms/pages-cms
- **App**: https://app.pagescms.org
- **Discord**: Link în GitHub

---

_Document creat: 2024-12-22_
_Pentru proiect: Terapii Energetice Astro_

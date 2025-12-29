# Sistem Responsive - Ghid Obligatoriu

**IMPORTANT**: Acest document trebuie consultat la ORICE implementare nouă pentru a menține consistența responsive pe toate device-urile.

---

## 1. Breakpoints Tailwind (AstroWind)

| Prefix | Min-width | Device         | Utilizare                        |
| ------ | --------- | -------------- | -------------------------------- |
| (none) | 0px       | Mobil          | DEFAULT - totul pornește de aici |
| `sm:`  | 640px     | Telefoane mari | Rar folosit                      |
| `md:`  | 768px     | Tablete        | **PRINCIPAL** - schimbări majore |
| `lg:`  | 1024px    | Desktop        | Ajustări fine                    |
| `xl:`  | 1280px    | Desktop mare   | Opțional                         |
| `2xl:` | 1536px    | Monitoare mari | Opțional                         |

**REGULA DE AUR**: Mobile-first! Scrie stilul pentru mobil, apoi adaugă prefixe pentru desktop.

---

## 2. Pattern-uri Obligatorii

### 2.1 Layout Grid cu Sidebar

```html
<!-- CORECT - Pagini cu sidebar (cursuri, terapii) -->
<div class="grid md:grid-cols-3 gap-12">
  <div class="md:col-span-2">
    <!-- Conținut principal - 2/3 pe desktop -->
  </div>
  <div class="md:col-span-1">
    <!-- Sidebar - 1/3 pe desktop -->
  </div>
</div>
```

**Pe mobil**: O singură coloană, sidebar-ul apare SUB conținut
**Pe desktop (md:)**: 3 coloane, conținut ocupă 2, sidebar ocupă 1

### 2.2 Layout Flex pentru Hero

```html
<!-- CORECT - Hero sections -->
<div class="md:flex gap-12 items-center">
  <div class="md:w-1/2 mb-8 md:mb-0">
    <!-- Text content -->
  </div>
  <div class="md:w-1/2">
    <!-- Imagine -->
  </div>
</div>
```

**Pe mobil**: Stack vertical, imagine sub text
**Pe desktop (md:)**: Side by side, 50%-50%

### 2.3 Grid pentru Carduri

```html
<!-- CORECT - Grid de carduri (terapii, testimoniale) -->
<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Carduri -->
</div>
```

**Pe mobil**: 1 coloană
**Pe telefoane mari (sm:)**: 2 coloane
**Pe desktop (lg:)**: 3 coloane

### 2.4 Grid pentru Liste de Beneficii

```html
<!-- CORECT - Liste în 2 coloane -->
<div class="grid sm:grid-cols-2 gap-3">
  <div class="flex items-center gap-2 p-3">
    <!-- Item -->
  </div>
</div>
```

---

## 3. Spacing Responsive

### 3.1 Padding Secțiuni

```html
<!-- CORECT -->
<section class="py-16 md:py-24"></section>
```

| Mobil        | Desktop      |
| ------------ | ------------ |
| py-16 (64px) | py-24 (96px) |

### 3.2 Margin Bottom

```html
<!-- CORECT - Margin între elemente -->
<div class="mb-8 md:mb-0">
  <!-- Dispare pe desktop când e flex -->
  <h1 class="mb-4"><!-- Constant pe toate device-urile --></h1>
</div>
```

---

## 4. Typography Responsive

### 4.1 Titluri

```html
<!-- CORECT -->
<h1 class="text-4xl md:text-5xl font-bold">
  <h2 class="text-2xl md:text-3xl font-bold">
    <h3 class="text-xl font-bold"></h3>
  </h2>
</h1>
```

### 4.2 Text

```html
<!-- CORECT -->
<p class="text-lg md:text-xl"><!-- Text mare --></p>
<p class="text-base">
  <!-- Text normal -->
  <span class="text-sm"> <!-- Text mic --></span>
</p>
```

---

## 5. Navigare Header

AstroWind gestionează automat:

- **Mobil**: Hamburger menu (Toggle Menu button)
- **Desktop**: Navigare completă în header

**NU modifica** structura header-ului fără să verifici pe ambele device-uri!

---

## 6. Componente Specifice Proiect

### 6.1 Sidebar Cursuri/Terapii (FĂRĂ STICKY)

```html
<!-- CORECT - Sidebar cu două boxuri -->
<div class="md:col-span-1">
  <!-- Price Box -->
  <div class="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 mb-6">
    <!-- Conținut prețuri -->
  </div>

  <!-- Features Box -->
  <div class="bg-gray-50 dark:bg-slate-800 rounded-2xl p-6">
    <!-- Conținut features -->
  </div>
</div>
```

**ATENȚIE**: NU folosim `sticky` pe sidebar! Cauzează overlap pe scroll.

### 6.2 Quick Info Badges

```html
<!-- CORECT -->
<div class="flex flex-wrap gap-4 mb-8">
  <div class="bg-white/10 rounded-lg px-4 py-2">
    <!-- Badge -->
  </div>
</div>
```

---

## 7. Reguli de Verificare

### Checklist înainte de commit:

- [ ] Testat pe mobil (320px - 767px)
- [ ] Testat pe tabletă (768px - 1023px)
- [ ] Testat pe desktop (1024px+)
- [ ] Header-ul funcționează pe toate device-urile
- [ ] Grid-urile se transformă corect
- [ ] Textul e lizibil pe toate dimensiunile
- [ ] Imaginile nu overflow pe mobil

### Cum testezi rapid:

```bash
# În browser DevTools:
# - iPhone SE: 375px
# - iPad: 768px
# - Desktop: 1280px

# Sau cu Playwright:
mcp__playwright__browser_resize width=375 height=667   # Mobil
mcp__playwright__browser_resize width=768 height=1024  # Tabletă
mcp__playwright__browser_resize width=1400 height=900  # Desktop
```

---

## 8. Anti-Pattern-uri (CE SĂ NU FACI)

### 8.1 NU hardcoda width-uri fixe

```html
<!-- GREȘIT -->
<div style="width: 400px">
  <!-- CORECT -->
  <div class="w-full md:w-1/2"></div>
</div>
```

### 8.2 NU uita prefixul md: pentru layout changes

```html
<!-- GREȘIT - Grid-ul va fi mereu 3 coloane, chiar și pe mobil -->
<div class="grid grid-cols-3">
  <!-- CORECT -->
  <div class="grid md:grid-cols-3"></div>
</div>
```

### 8.3 NU folosi sticky în sidebar-uri cu multiple elemente

```html
<!-- GREȘIT - Cauzează overlap -->
<div class="md:col-span-1 self-start">
  <div class="sticky top-24">Box 1</div>
  <div>Box 2</div>
  <!-- Va fi ascuns sau va overlap -->
</div>

<!-- CORECT -->
<div class="md:col-span-1">
  <div class="mb-6">Box 1</div>
  <div>Box 2</div>
</div>
```

### 8.4 NU uita dark mode

```html
<!-- CORECT - Include întotdeauna dark variant -->
<div class="bg-gray-50 dark:bg-slate-800">
  <span class="text-gray-600 dark:text-gray-300"></span>
</div>
```

---

## 9. Referințe

- [Tailwind Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [AstroWind Template](https://github.com/onwidget/astrowind)
- [Tailwind Breakpoints](https://tailwindcss.com/docs/screens)

---

**Document creat**: 2025-12-25
**Ultima actualizare**: 2025-12-25
**Proiect**: Terapii Energetice Astro

# VanLife Rentals — Frontend

Landing pública de lloguer de furgonetes camper. Projecte de Sprint 1 (MVP visual + base de dades).

Construït amb **Next.js 16** (App Router) + **React 19** + **Tailwind CSS 4**.

## Stack

- **Next.js 16** amb React Compiler activat
- **React 19**
- **Tailwind CSS 4** (config inline a `globals.css`, sense `tailwind.config.js`)
- **Google Fonts** via `next/font`: Inter (UI) + Fraunces (display)
- **next/image** amb Unsplash com a host remot

## Estructura del projecte

Arquitectura **MVC** clarament separada:

```
src/
├── app/                      # App Router (rutes)
│   ├── layout.js             # Layout arrel + fonts
│   ├── page.js               # Home (landing)
│   ├── loading.js            # Estat de càrrega global
│   ├── error.js              # Boundary d'errors
│   ├── not-found.js          # 404
│   ├── globals.css           # Variables CSS + tema
│   └── models/[slug]/page.js # Detall d'un model (SSG)
├── components/
│   ├── sections/             # Seccions de la landing
│   │   ├── Hero.js
│   │   ├── Models.js
│   │   ├── Reviews.js
│   │   └── ContactForm.js
│   └── ui/                   # Components reutilitzables
│       ├── Navbar.js
│       ├── Footer.js
│       └── ModelCard.js
├── controllers/              # Lògica i normalització de respostes
│   └── modelsController.js
├── services/                 # Accés a dades (API o mock)
│   └── modelsService.js
└── data/                     # Mock temporal mentre no hi ha BD
    └── models.js
```

### Flux de dades

```
data/models.js  →  services/modelsService.js  →  controllers/modelsController.js  →  components/sections/Models.js
   (mock)            (canvia fetch ↔ mock         (try/catch + format            (vista pura)
                      segons env var)              { ok, data, error })
```

Aquesta separació permet substituir el mock per una API real **sense tocar les vistes**, només canviant `modelsService.js`.

## Configuració

### Variables d'entorn

Crea un fitxer `.env.local` a l'arrel del projecte:

```bash
# Si està definida, l'aplicació farà fetch a l'API real.
# Si no, usarà les dades mock de src/data/models.js
NEXT_PUBLIC_API_URL=http://localhost:3001
```

Sense aquesta variable, el frontend funciona en mode standalone amb dades simulades.

## Posada en marxa

```bash
# Instal·lar dependències
npm install

# Servidor de desenvolupament (localhost:3000)
npm run dev

# Build de producció
npm run build

# Servir build de producció
npm start

# Linter
npm run lint
```

## Característiques implementades

- ✅ Mode clar / mode fosc amb toggle persistent (localStorage + `prefers-color-scheme`)
- ✅ Landing amb Hero, catàleg de models, ressenyes i formulari de contacte
- ✅ Disseny responsiu amb menú hamburguesa a mòbil
- ✅ Navbar sticky amb fons translúcid al fer scroll
- ✅ Pàgina de detall del model amb generació estàtica (`generateStaticParams`)
- ✅ Optimització d'imatges amb `next/image`
- ✅ Validació del formulari (camps obligatoris, dates coherents, format email)
- ✅ Accessibilitat: labels, `aria-live`, `aria-hidden` als SVG decoratius
- ✅ Estats `loading.js`, `error.js` i `not-found.js`
- ✅ SEO amb metadata dinàmica per ruta

## Disseny

Paleta càlida (crema, terracota, olivo) amb tipografia serif display (Fraunces) per a títols i sans-serif (Inter) per al cos. Decoracions sutils amb blobs difuminats i textura granulada.

Totes les variables de color estan a `src/app/globals.css` sota `:root`.

## Següents passos (Sprint 2)

- [ ] Connectar `modelsService` al backend real
- [ ] Implementar enviament del formulari contra `POST /api/contact-requests`
- [ ] Mostrar més de 4 models a la pàgina `/models` completa
- [ ] Filtres per tipus/preu al catàleg

## Llicència

Projecte acadèmic — DAW 2.

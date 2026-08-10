# schiroky.com – Astro Neon Redesign

Moderner statischer Neuaufbau der privaten Homepage mit Astro.

## Start

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

Die fertigen statischen Dateien liegen anschließend in `dist/` und können z. B. bei IONOS, Netlify, Cloudflare Pages oder GitHub Pages bereitgestellt werden.

## Enthalten

- Homepage
- Über mich
- Hobbies
- Software
- Freunde von Hilat Al Bir
- WordBrief 365
- Wing Chun
- Datenschutz
- Impressum
- Legacy-Weiterleitungen für die bisherigen `.htm`-URLs
- Responsive Navigation, SEO-Metadaten, Sitemap, Neon-Design

## Hinweis

Das bestehende Wappen wird aktuell direkt von `https://schiroky.com/images/claus_wappen_wordbrief.jpg` geladen. Für einen komplett unabhängigen Build sollte die Datei später nach `public/images/` kopiert und der Pfad in `src/pages/index.astro` angepasst werden.

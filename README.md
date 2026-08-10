# schiroky-web

Meine privaten Homepage **schiroky.com** erstellt via **Astro.**

## Tech-Stack

- Astro (statische Seite)
- TypeScript (strict)
- Custom CSS
- Node.js LTS 24 und npm

## Schnellstart

```bash
npm install
npm run dev
```
Dev-Server: `http://localhost:4321`

## Wichtige Befehle

| Befehl                 | Zweck                           |
| :--------------------- | :------------------------------ |
| `npm run dev`          | Lokale Entwicklung mit Astro    |
| `npm run build`        | Produktionsbuild nach `dist/`   |
| `npm run start`        | Lokale Vorschau des Builds      |
| `npm run lint`         | ESLint                          |
| `npm run lint:fix`     | ESLint mit automatischen Fixes  |
| `npm run format`       | Prettier formatiert das Projekt |
| `npm run format:check` | Prettier-Check für CI           |
| `npm run typecheck`    | Astro Type-/Template-Check      |
| `npm run check`        | Format- und Lint-Check          |

## Wann `dev` und wann `start`?

- `npm run dev` für die tägliche Entwicklung mit schnellem Feedback.
- `npm run build` und danach `npm run start` für eine produktionsnahe lokale Vorschau.

## Inhalte Pflegen

- Seiten: `src/pages/`
- Seiten-Komponenten: `src/components/`
- Wiederverwendbare UI-Komponenten: `src/components/`
- Statische Assets: `public/`
- Build-Assets: `src/assets/`

## Projektbereiche

- `src/pages/` für Astro-Routen
- `src/layouts/` für Layouts
- `src/components/` für UI-Komponenten
- `src/styles/` für globale Styles und Fonts
- `src/assets/` für importierte Bilder und Grafiken
- `public/` für statische Dateien, die unverändert ausgeliefert werden

## Qualität

Empfohlener lokaler Gate-Run:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run build
```

## Deployment

Die Website wird als statische Astro-Seite ausgeliefert.

- `npm run build` erzeugt die statische Ausgabe in `dist/`.
- Inhalte aus `public/` werden 1:1 nach `dist/` kopiert.

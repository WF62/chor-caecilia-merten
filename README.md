# Chor Cäcilia Merten — Website

Website des Chores Cäcilia Merten. React 18 + Vite + React Router, kein CSS-Framework.

## Start

```bash
npm install
npm run dev      # Port 5173
```

## Build

```bash
npm run build
```

## Seiten (`src/pages/`)

| Route | Datei | Inhalt |
|---|---|---|
| `/` | Home.jsx | Startseite: Hero, Stimmen, nächste Termine |
| `/ueber-uns` | UeberUns.jsx | Geschichte, Vorstand & Chorleitung, Repertoire |
| `/termine` | Termine.jsx | Alle Termine (Platzhalterdaten in `src/data/termine.js`) |
| `/galerie` | Galerie.jsx | Foto-Galerie (aktuell Platzhalter-Kacheln) |
| `/mitglied-werden` | MitgliedWerden.jsx | Ablauf des Einstiegs + Kontaktformular |
| `/kontakt` | Kontakt.jsx | Adresse, Erreichbarkeit, Kontaktformular |
| `/impressum` | Impressum.jsx | Impressum (Platzhaltertext, muss ausgefüllt werden) |
| `/datenschutz` | Datenschutz.jsx | Datenschutzerklärung (Platzhaltertext, muss ausgefüllt werden) |

## Hinweise

- Alle Inhalte (Adresse, Termine, Ansprechpartner, Impressum/Datenschutz-Texte) sind
  **Platzhalter** und müssen vor Veröffentlichung durch echte Angaben des Chors ersetzt werden.
- Das Kontaktformular (`src/components/ContactForm.jsx`) nutzt einen reinen `mailto:`-Link,
  es gibt kein Backend. Fotos für die Galerie liegen noch nicht vor (`src/pages/Galerie.jsx`).
- Dark/Light Mode per Klasse `dark` auf `<html>`, Umschalter in `Header.jsx`, Persistenz über
  `localStorage` (`cm_theme`).
- `useSEO(title, description)` (`src/hooks/useSEO.js`) setzt `<title>` und Meta-Description je Seite.
